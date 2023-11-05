function add_grade_edit_pane_to_subjects_table(name, surname, grade, description, date) {
    document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_grade_edit_pane(name, surname, grade, description, date));
    grade_edit_close_button_onclick();
}

function get_grade_value_of_pressed_button(button) {
    return button.getElementsByTagName("label")[0].innerHTML;
}


function create_grade_edit_pane(grade_id){
    $.ajax({
        type: "GET",
        url: "../serverActions/getGradeData.php",
        data: {grade_id: grade_id},
        dataType: "json",
        success: function (response){
            const name = response[0];
            const surname = response[1];
            let grade = response[2];
            let description = response[3];
            let date = response[4];

            add_grade_edit_pane_to_subjects_table(name, surname, grade, description, date);
            let available_grades_buttons = Array.from(document.getElementsByClassName("available_grade_button"));
            const new_grade_data_package = create_change_grade_button_onclick_action(available_grades_buttons, grade, name, surname, description, date);

            available_grades_buttons = new_grade_data_package.available_grades_buttons;
            grade = new_grade_data_package.grade;
            available_grades_buttons.forEach(available_grade_button => {set_specific_grade_button_color(available_grade_button)});

        },
        error: function (response){
            console.log(response);
        }
    });
}

function find_rest_of_grades(grade){
    let available_grades = [2, 3, 4, 5]
    return available_grades.filter(current_grade => current_grade !== parseInt(grade));
}