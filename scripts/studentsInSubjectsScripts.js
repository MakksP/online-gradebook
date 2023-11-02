function get_and_draw_students_grades(subject_name) {
    $.ajax({
        type: "GET",
        url: "../serverActions/getStudentsGrades.php",
        data: {subject_name: subject_name},
        dataType: "json",
        success: function (response) {
            add_students_grades(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function get_number_of_students_in_grid() {
    return Array.from(document.getElementById("subjects_table").getElementsByClassName("student_label_div")).length;
}

function set_rows_height_by_number_of_students() {
    let grid_templates_row_style = "";
    for (let student_index = 0; student_index < get_number_of_students_in_grid(); student_index++) {
        grid_templates_row_style += "2rem "
    }
    document.getElementById("student_names").style.gridTemplateRows = grid_templates_row_style;
}

function draw_students_labels_in_subject(button_text) {
    $.ajax({
        type: "GET",
        url: "../serverActions/studentsAndSubjects.php",
        data: {subject_name: button_text},
        success: function (response) {
            document.getElementById("header_text").innerHTML = button_text;
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_students_list_div(response));
            set_rows_height_by_number_of_students();
            get_and_draw_students_grades(button_text);

        },
        error: function (response) {
            console.log(response);
        }
    });
}

function add_students_grades(response) {
    for (let student in response) {
        response[student].forEach(grade => {
            document.getElementById(student + "_grade_div").insertAdjacentHTML("beforeend", grade);
        })
    }
}