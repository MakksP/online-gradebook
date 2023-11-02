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

function draw_students_labels_in_subject(button_text) {
    $.ajax({
        type: "GET",
        url: "../serverActions/studentsAndSubjects.php",
        data: {subject_name: button_text},
        success: function (response) {
            document.getElementById("header_text").innerHTML = button_text;
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_students_list_div(response));

            get_and_draw_students_grades(button_text);

        },
        error: function (response) {
            console.log(response);
        }
    });
}

function add_students_grades(response) {
    for (let student in response) {
        console.log(response[student])
        document.getElementById(student + "_grade_div").insertAdjacentHTML("beforeend", response[student]);
    }
}