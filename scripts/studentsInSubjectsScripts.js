
function get_and_draw_students_grades(subject_name, student_grade_buttons) {
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherGradesActions/getStudentsGrades.php",
        data: {subject_name: subject_name},
        dataType: "json",
        success: function (response) {
            add_students_button(response, "grade");
            student_grade_buttons = init_student_grade_on_click_action("grade_button");
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function get_and_draw_students_attendances(subject_name, student_attendance_buttons) {
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherGradesActions/getStudentsAttendances.php",
        data: {subject_name: subject_name},
        dataType: "json",
        success: function (response) {
            add_students_button(response, "attendance");
            student_attendance_buttons = init_student_attendance_on_click_action(student_attendance_buttons);
        },
        error: function (response) {
            console.log(response);
        }
    });
}


function draw_students_labels_in_subject(button_text, student_grade_buttons, checking_student_data) {
    console.log(button_text)
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherSubjectsActions/studentsAndSubjects.php",
        data: {subject_name: button_text},
        success: function (response) {
            document.getElementById("header_text").innerHTML = button_text;
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_students_list_div(response));

            set_rows_height_by_number_of_students();
            checking_student_data(button_text, student_grade_buttons);

        },
        error: function (response) {
            console.log(response);
        }
    });
}


function add_students_button(response, type_of_value) {
    for (let student in response) {
        let button_id;
        response[student].forEach(value => {
            button_id = student + "_grade_div";
            const button = document.getElementById(button_id);
            if (button !== null){
                if (type_of_value === "attendance"){
                    parse_and_add_attendance_button_to_table(value, button);
                } else if (type_of_value === "grade"){
                    button.insertAdjacentHTML("beforeend", value);
                }

            }

        });
    }
    $.ajax({
       type: "GET",
       url:"./serverActions/teacherSubjectsActions/getAllStudentsMailInSubject.php",
        data: {subject_name: get_current_subject_name()},
        dataType: "json",
        success: function (response){
           let button_id;
           Array.from(response).forEach(student => {
               button_id = student + "_grade_div";
               if (type_of_value === "grade"){
                   document.getElementById(button_id).insertAdjacentHTML("beforeend", get_new_grade_button());
               } else if (type_of_value === "attendance"){
                   document.getElementById(button_id).insertAdjacentHTML("beforeend", get_new_attendance_button());
               }

           })
            let value_button;
            if (type_of_value === "grade"){
                create_add_new_grade_button_onclick_action();
                value_button = "grade_button";
            } else if (type_of_value === "attendance"){
                create_add_new_attendance_button_onclick_action();
                value_button = "attendance_button";
            }
            set_button_grade_color_by_grade_value("grade_part", value_button);

        },
        error: function (response){
            console.log(response);
        }
    });
}


function parse_button_attendance_string_to_html(attendance) {
    let html_button_attendance = document.createElement("div");
    html_button_attendance.innerHTML += attendance
    return html_button_attendance.querySelector(".attendance_button");
}

function parse_and_add_attendance_button_to_table(attendance, button_attendance) {
    let html_button_attendance = parse_button_attendance_string_to_html(attendance);
    const html_button_attendance_attendance_value = html_button_attendance.querySelector(".attendance_label");
    if (html_button_attendance_attendance_value.innerHTML === "0") {
        html_button_attendance_attendance_value.innerHTML = "Nieobecny";
    } else {
        html_button_attendance_attendance_value.innerHTML = "Obecny";
    }
    button_attendance.insertAdjacentHTML("beforeend", html_button_attendance.outerHTML);
}


const SUBJECT_ID_INDEX = 0;
const USER_ID_INDEX = 1;

function add_grade_to_database(grade, description, date, response) {
    const user_id = response[USER_ID_INDEX];
    const subject_id = response[SUBJECT_ID_INDEX];
    $.ajax({
        type: "POST",
        url: "./serverActions/teacherGradesActions/addNewGrade.php",
        data: {
            grade: grade,
            description: description,
            date: date,
            subjectId: subject_id,
            userId: user_id
        },
        success: function (response) {
            get_student_name_surname_email_by_id(user_id, subject_id, grade);
            console.log(response)
        },
        error: function (response) {
            console.log(response)
        }
    });
}

function add_attendance_to_database(grade, date, response) {
    $.ajax({
        type: "POST",
        url: "./serverActions/teacherGradesActions/addNewAttendance.php",
        data: {
            wasPresent: grade,
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

function serve_add_grade_attendance_action(student_email, subject_name, type_of_value) {
    $.ajax({
        type: "GET",
        url: "./serverActions/teacherSubjectsActions/getSubjectAndUserIds.php",
        data: {
            email: student_email,
            subject_name: subject_name
        },
        dataType: "json",
        success: function (response) {
            let using_student_value;
            if (type_of_value === "grade"){
                using_student_value = get_add_grade_pane;
            } else if (type_of_value === "attendance"){
                using_student_value = get_add_attendance_pane;
            }
            document.getElementById("main_container").insertAdjacentHTML("beforeend", using_student_value(response[NAME_INDEX], response[SURNAME_INDEX]));
            let button_type;
            if (type_of_value === "grade"){
                button_type = "available_grade_button"
                set_button_grade_color_by_grade_value("possible_grades", button_type);
                appearing_pane_close_button_onclick("grade_add_close_button", "add_grade_pane");
                available_grade_button_onclick_action("available_grade_button");
                create_save_grade_attendance_button_onclick_action(response, "save_grade_button");
            } else if (type_of_value === "attendance"){
                button_type = "available_attendance_button";
                set_button_grade_color_by_grade_value("possible_attendances", button_type);
                appearing_pane_close_button_onclick("attendance_add_close_button", "add_attendance_pane");
                available_grade_button_onclick_action("available_attendance_button");
                create_save_grade_attendance_button_onclick_action(response, "save_attendance_button");
            }

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

function favourite_element_action(subject_name, action_file) {
    $.ajax({
        type: "POST",
        url: "./serverActions/favouriteActions/" + action_file,
        data: {
            elementName: subject_name
        },
        success: function (response) {
            location.reload();
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}


function add_grade_and_attendance_buttons_to_subject_table() {
    document.getElementById("table_container").insertAdjacentHTML("afterbegin", get_subjects_table_grade_and_attendance_buttons());
    let user_data = document.getElementById("user_data").innerText
    user_data = user_data.substring(user_data.indexOf("(") + 1, user_data.indexOf(")"))
    if (user_data === "teacher"){
        create_attendance_onclick_action();
    } else {
        create_your_attendance_onclick_action();
    }

    create_grades_onclick_action();
}


function serve_subject_table_buttons_color_after_click(darken_element, lighten_element) {
    document.getElementById(darken_element).style.backgroundColor = "#383c44";
    document.getElementById(lighten_element).style.backgroundColor = "#666d7c";
}

function change_grades_header(header) {
    document.getElementById("gradebook_grid_grades_header").innerHTML = header;
}

function clear_whole_students_table() {
    const pane_children = Array.from(document.getElementById("subjects_table").children);
    pane_children.shift();
    pane_children.forEach(element => {
        element.remove();
    })
}


function get_subject_name() {
    return document.getElementById("header_text").innerHTML;
}

function parse_attendance_from_text_to_value(grade) {
    if (grade === "Nieobecny") {
        return 0;
    } else {
        return 1
    }
}

function repaint_attendance_part() {
    serve_subject_table_buttons_color_after_click("grades_section", "attendances_section");
    clear_whole_students_table();
    const subject_name = document.getElementById("header_text").innerHTML;
    draw_students_labels_in_subject(subject_name, student_grade_buttons, get_and_draw_students_attendances);
    change_grades_header("Obecności:");
}

function repaint_your_attendance_part() {
    serve_subject_table_buttons_color_after_click("grades_section", "attendances_section");
    clear_whole_students_table();
    const subject_name = document.getElementById("header_text").innerHTML;
    $.ajax({
        type: "GET",
        url: "../serverActions/studentGradesActions/getAllYourAttendances.php",
        data: {
            subjectName: subject_name
        },
        dataType: "json",
        success: function (response){
            for (let attendance_index = 0; attendance_index < response.length; attendance_index += 2){
                let attendance_value = response[attendance_index] === 1 ? "Obecny" : "Nieobecny";
                const attendance_color = attendance_value === "Obecny" ? "#257324" : "#FE0000"
                document.getElementById("subjects_table").insertAdjacentHTML("beforeend",`
                <button class="your_attendance_button" id="${response[attendance_index + 1]}" style="background-color: ${attendance_color}">
                    <label class="grade_label">${attendance_value}</label>    
                </button>`);
            }
            init_yours_attendance_on_click_action();
        },
        error: function (response){
            console.log(response);
        }
    });

    change_grades_header("Obecności:");
}

function create_swap_attendance_onclick_action(current_attendance_button) {
    current_attendance_button.onclick = function () {
        if (current_attendance_button.querySelector(".grade_label").innerHTML === "Nieobecny"){
            document.getElementById("chosen_attendance_label").innerHTML = "Nieobecny";
            current_attendance_button.querySelector(".grade_label").innerHTML = "Obecny";
            current_attendance_button.style.backgroundColor = "#258518";
        } else {
            document.getElementById("chosen_attendance_label").innerHTML = "Obecny";
            current_attendance_button.querySelector(".grade_label").innerHTML = "Nieobecny";
            current_attendance_button.style.backgroundColor = "#f83c54";
        }
    }
}

function choose_color_for_available_attendance_in_edit_pane(current_attendance_button) {
    if (current_attendance_button.querySelector(".grade_label").innerHTML === "Obecny") {
        current_attendance_button.style.backgroundColor = "#258518";
    } else {
        current_attendance_button.style.backgroundColor = "#f83c54";
    }
}