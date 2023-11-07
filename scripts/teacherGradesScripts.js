function add_grade_edit_pane_to_subjects_table(name, surname, grade, description, date) {
    document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_grade_edit_pane(name, surname, grade, description, date));
    grade_edit_close_button_onclick();
}

function get_grade_value_of_pressed_button(button) {
    return button.getElementsByTagName("label")[0].innerHTML;
}


function get_current_grade_description_and_date() {
    const description = document.getElementById("edit_grade_pane_description_input").value;
    const date = document.getElementById("edit_grade_pane_date_input").value;
    return {description, date};
}


function repaint_grade_edit_pane(name, surname, grade, description, date, grade_id) {
    add_grade_edit_pane_to_subjects_table(name, surname, grade, description, date);
    let available_grades_buttons = Array.from(document.getElementsByClassName("available_grade_button"));
    const new_grade_data_package = create_change_grade_button_onclick_action(available_grades_buttons, grade, name, surname, grade_id);

    available_grades_buttons = new_grade_data_package.available_grades_buttons;
    grade = new_grade_data_package.grade;
    available_grades_buttons.forEach(available_grade_button => {
        set_specific_grade_button_color(available_grade_button)
    });
    create_save_button_onclick_action(grade, grade_id);
    create_delete_grade_button_onclick_action(grade_id);
}

function create_grade_edit_pane(grade_id){
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherGradesActions/getGradeData.php",
        data: {grade_id: grade_id},
        dataType: "json",
        success: function (response){
            const name = response[0];
            const surname = response[1];
            let grade = response[2];
            let description = response[3];
            let date = response[4];
            repaint_grade_edit_pane(name, surname, grade, description, date, grade_id);

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

function update_grade(grade_id, grade, description_and_date) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherGradesActions/updateGradeData.php",
        data: {
            grade_id: grade_id,
            grade: grade,
            description: description_and_date.description,
            date: description_and_date.date
        },
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function repaint_subject_table_dynamic_content() {
    const current_subject_name = get_current_subject_name();
    document.getElementById("student_names").remove();
    draw_students_labels_in_subject(current_subject_name, student_grade_buttons);
}
