function create_grade_edit_pane(grade_id){
    $.ajax({
        type: "GET",
        url: "../serverActions/getGradeData.php",
        data: {grade_id: grade_id},
        dataType: "json",
        success: function (response){
           document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_grade_edit_pane(response[0], response[1], response[2], response[3], response[4]));
        },
        error: function (response){
            console.log(response);
        }
    });
}

function find_rest_of_grades(grade){
    let available_grades = [2, 3, 4, 5]
    return available_grades.filter(current_grade => current_grade !== grade);
}