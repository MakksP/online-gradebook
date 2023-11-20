<?php
require __DIR__ . '/../../dbConnection/databaseConnect.php';
require __DIR__ . '/../../dbConnection/databaseQueries.php';
require __DIR__ . '/../../serverActions/dbSchematicFunctions.php';

function get_and_draw_student_data(){
    $db_connection = connect_to_database();
    $sql_query = get_archive_student_data();

    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_GET["student_email"]);
        $tmp_subject_name = "";
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($subjectName, $grade);;
            declare_variables();
            while ($prepared_sql_query->fetch()){
                $main_div_name = $subjectName . "_subject_div";
                $subject_name_div = $subjectName . "_subject_name_div";
                $grades_name_div = $subjectName . "_grades_name_div";
                $average_name_div = $subjectName . "_average_name_div";

                if ($tmp_subject_name != $subjectName){
                    if ($tmp_subject_name != ""){
                        $tmp_average_name_div = $tmp_subject_name . "_average_name_div";
                        $tmp_grades_name_div = $tmp_subject_name . "_grades_name_div";
                        calculate_student_average_from_subject($tmp_grades_name_div, $tmp_average_name_div);
                    }
                    create_new_container_for_subject($main_div_name, $subject_name_div,
                        $subjectName, $grades_name_div, $grade, $average_name_div);
                    $tmp_subject_name = $subjectName;
                } else{
                    add_next_grade_to_table($grades_name_div, $grade);
                }

            }
            $tmp_average_name_div = $tmp_subject_name . "_average_name_div";
            $tmp_grades_name_div = $tmp_subject_name . "_grades_name_div";
            calculate_student_average_from_subject($tmp_grades_name_div, $tmp_average_name_div);
            calculate_average_for_all_subjects();

        } else{
            $prepared_sql_query->close();
            $db_connection->close();
            echo "Nie udało się wykonać zapytania";
            http_response_code(400);
        }

    } else {
        $db_connection->close();
        echo "Nie udało się przygotować zapytania";
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connection->close();
}

/**
 * @return void
 */
function calculate_average_for_all_subjects(): void
{
    echo " <script>
                            Array.from(document.getElementsByClassName('archive_element_average')).forEach(div => {
                                averages.push(div.innerText.substring(div.innerText.indexOf(' ') + 1));
                            });
                            averages = averages.map(average =>{
                                return parseFloat(average);
                            });
                            total_average = averages.reduce((sum, next_average) => {
                                return sum + next_average;
                            });
                            
                            total_average = (total_average / averages.length).toFixed(2);
                            document.getElementById('total_student_average')
                            .insertAdjacentHTML('beforeend', total_average); </script>";
}

/**
 * @return void
 */
function declare_variables(): void
{
    echo "<script>
            let averages = [];
            let total_average;
            let grades;</script>";
}

/**
 * @param string $tmp_grades_name_div
 * @param string $tmp_average_name_div
 * @return void
 */
function calculate_student_average_from_subject(string $tmp_grades_name_div, string $tmp_average_name_div): void
{
    echo "<script>
                                if (document.getElementById('$tmp_grades_name_div') !== null){
                                    grades = document.getElementById('$tmp_grades_name_div').innerHTML;
                                    grades = grades.match(/\d+/g)
                                    grades = grades.map(grade => {
                                        return parseInt(grade, 10);
                                    });
                                    
                                    avg = grades.reduce((sum, next_grade) => sum + next_grade);
                                    avg = avg / grades.length;
                                    document.getElementById('$tmp_average_name_div')
                                  .insertAdjacentHTML('beforeend', avg.toFixed(2))
                                }
                                 </script>";
}

/**
 * @param string $grades_name_div
 * @param $grade
 * @return void
 */
function add_next_grade_to_table(string $grades_name_div, $grade): void
{
    echo "<script> 
                            document.getElementById('$grades_name_div').insertAdjacentHTML('beforeend', ', $grade');
                        </script>";
}


/**
 * @param string $main_div_name
 * @param string $subject_name_div
 * @param $subjectName
 * @param string $grades_name_div
 * @param $grade
 * @param string $average_name_div
 * @return void
 */
function create_new_container_for_subject(string $main_div_name, string $subject_name_div, $subjectName, string $grades_name_div, $grade, string $average_name_div): void
{
    echo "<div id='$main_div_name' class='student_data_element'>
                                <div id='$subject_name_div' class='archive_element_subjects'>
                                    $subjectName
                                </div>
                                <div id='$grades_name_div' class='archive_element_grades'>
                                    Oceny cząstkowe: $grade
                                </div>
                                <div id='$average_name_div' class='archive_element_average'>
                                    Średnia: 
                                </div>
                            </div>";
}

