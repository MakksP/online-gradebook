
function get_and_draw_students_grades(subject_name, student_grade_buttons) {
    $.ajax({
        type: "GET",
        url: "../serverActions/getStudentsGrades.php",
        data: {subject_name: subject_name},
        dataType: "json",
        success: function (response) {
            add_students_grades(response);
            student_grade_buttons = init_student_grade_on_click_action(student_grade_buttons);
        },
        error: function (response) {
            console.log(response);
        }
    });
}


function draw_students_labels_in_subject(button_text, student_grade_buttons) {
    $.ajax({
        type: "GET",
        url: "../serverActions/studentsAndSubjects.php",
        data: {subject_name: button_text},
        success: function (response) {
            document.getElementById("header_text").innerHTML = button_text;
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_students_list_div(response));

            set_rows_height_by_number_of_students();
            get_and_draw_students_grades(button_text , student_grade_buttons);

        },
        error: function (response) {
            console.log(response);
        }
    });
}


function add_students_grades(response) {
    for (let student in response) {
        let button_grade_id;
        response[student].forEach(grade => {
            button_grade_id = student + "_grade_div";
            document.getElementById(button_grade_id).insertAdjacentHTML("beforeend", grade);

        });
        document.getElementById(button_grade_id).insertAdjacentHTML("beforeend", get_new_grade_button());
    }
    remove_all_empty_grade_buttons();
    create_add_new_grade_button_onclick_action();
    set_button_grade_color_by_grade_value("grade_part", "grade_button");

}


function serve_add_grade_action(student_email, subject_name) {
    $.ajax({
        type: "GET",
        url: "./serverActions/getSubjectAndUserIds.php",
        data: {
            email: student_email,
            subject_name: subject_name
        },
        dataType: "json",
        success: function (response) {
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_add_grade_pane(response['name'], response['surname']));
            set_button_grade_color_by_grade_value("possible_grades", "available_grade_button");
            create_close_grade_add_pane_onclick_action();
            let grade;
            let description;
            let date;
            available_grade_button_onclick_action(grade);
        },
        error: function (response) {
            console.log(response);
        }
    });
}