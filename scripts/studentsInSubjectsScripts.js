
function get_and_draw_students_grades(subject_name, student_grade_buttons) {
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherGradesActions/getStudentsGrades.php",
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
        url: "../serverActions/teacherSubjectsActions/studentsAndSubjects.php",
        data: {subject_name: button_text},
        success: function (response) {
            document.getElementById("header_text").innerHTML = button_text;
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_students_list_div(response));

            set_rows_height_by_number_of_students();
            get_and_draw_students_grades(button_text ,student_grade_buttons);

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
            const button_grade = document.getElementById(button_grade_id);
            if (button_grade !== null){
                button_grade.insertAdjacentHTML("beforeend", grade);
            }

        });
    }
    $.ajax({
       type: "GET",
       url:"./serverActions/teacherSubjectsActions/getAllStudentsMailInSubject.php",
        data: {subject_name: get_current_subject_name()},
        dataType: "json",
        success: function (response){
           let button_grade_id;
           Array.from(response).forEach(student => {
               button_grade_id = student + "_grade_div";
               document.getElementById(button_grade_id).insertAdjacentHTML("beforeend", get_new_grade_button());
           })
            create_add_new_grade_button_onclick_action();
            set_button_grade_color_by_grade_value("grade_part", "grade_button");

        },
        error: function (response){
            console.log(response);
        }
    });



}


const SUBJECT_ID_INDEX = 0;
const USER_ID_INDEX = 1;

function add_grade_to_database(grade, description, date, response) {
    $.ajax({
        type: "POST",
        url: "./serverActions/teacherGradesActions/addNewGrade.php",
        data: {
            grade: grade,
            description: description,
            date: date,
            subjectId: response[SUBJECT_ID_INDEX],
            userId: response[USER_ID_INDEX]
        },
        success: function (response) {
            console.log(response)
        },
        error: function (response) {
            console.log(response)
        }
    });
}


const NAME_INDEX = 2;

const SURNAME_INDEX = 3;

function serve_add_grade_action(student_email, subject_name) {
    $.ajax({
        type: "GET",
        url: "./serverActions/teacherSubjectsActions/getSubjectAndUserIds.php",
        data: {
            email: student_email,
            subject_name: subject_name
        },
        dataType: "json",
        success: function (response) {
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_add_grade_pane(response[NAME_INDEX], response[SURNAME_INDEX]));
            console.log(response);
            set_button_grade_color_by_grade_value("possible_grades", "available_grade_button");
            appearing_pane_close_button_onclick("grade_add_close_button", "add_grade_pane");
            available_grade_button_onclick_action();
            create_save_grade_button_onclick_action(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function get_current_subject_name() {
    return document.getElementsByTagName("h2")[0].innerHTML;
}

function delete_subject(subject_to_delete_id) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherSubjectsActions/deleteSubject.php",
        data: {subjectId: subject_to_delete_id},
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}


function add_grade_and_attendance_buttons_to_subject_table() {
    document.getElementById("table_container").insertAdjacentHTML("afterbegin", get_subjects_table_grade_and_attendance_buttons());
    create_attendance_onclick_action();
    create_grades_onclick_action();
}


function serve_subject_table_buttons_color_after_click(darken_element, lighten_element) {
    document.getElementById(darken_element).style.backgroundColor = "#383c44";
    document.getElementById(lighten_element).style.backgroundColor = "#666d7c";
}