const subjects_buttons = document.getElementsByClassName("subject_button");
const not_teaching_subjects_buttons = document.getElementsByClassName("not_teaching_subject_button");
const not_teaching_subjects_labels = document.getElementsByClassName("not_teaching_subject_label");
const add_subject_button = document.getElementById("new_subject_button");
const login_button = document.getElementById("login_button_nav");
const registration_button = document.getElementById("registration_button_nav");
const home_page_button = document.getElementById("logo_button");
const logout_button = document.getElementById("logout_button");
const subjects_button = document.getElementById("subjects_button");
const lesson_plans_button = document.getElementById("lesson_plans_button");
const subjects_table = document.getElementById("subjects_table");
const delete_subject_button = document.getElementsByClassName("delete_button");
let student_grade_buttons;
const ADD_SUBJECT_BUTTON = 1;


function assign_not_teaching_buttons_action() {
    for (let button_index = 0; button_index < not_teaching_subjects_buttons.length; button_index += 1) {
        if (not_teaching_subjects_buttons[button_index] != null){
            not_teaching_subjects_buttons[button_index].onclick = function () {
                const subject_name = not_teaching_subjects_labels[button_index].innerHTML;
                send_add_subject_to_teacher_request(subject_name);
            }
        }

    }
}

function add_header_to_grades_table() {
    subjects_table.insertAdjacentHTML("beforeend", get_students_in_subject_header());
}




for (let button_index = 0; button_index < subjects_buttons.length - ADD_SUBJECT_BUTTON; button_index+=1){
    if (subjects_buttons[button_index] != null){
        subjects_buttons[button_index].onclick = function () {
            const button_text = subjects_buttons[button_index].innerHTML;
            subjects_table.innerHTML = '';
            subjects_table.style.display = "table";
            add_grade_and_attendance_buttons_to_subject_table();
            add_header_to_grades_table();

            create_grades_onclick_action();
            draw_students_labels_in_subject(button_text, student_grade_buttons, get_and_draw_students_grades);
        }
    }

}


if (add_subject_button != null){
    add_subject_button.onclick = function (){
        get_not_teaching_subjects_pane();
    }
}

if (login_button != null){
    login_button.onclick = function (){
        window.location.href = './loginPage.php';
    }
}

if (registration_button != null){
    registration_button.onclick = function (){
        window.location.href = './registrationPage.php';
    }
}

if (home_page_button != null){
    home_page_button.onclick = function (){
        window.location.href = './startPage.php'
    }
}

if (logout_button != null){
    logout_button.onclick = function (){
        logout();
    }
}

if (subjects_button != null){
    subjects_button.onclick = function (){
        window.location.href = "./teacherSubjectsPage.php"
    }
}

if (lesson_plans_button != null){
    lesson_plans_button.onclick = function (){
        window.location.href = "./teacherLessonPlansPage.php"
    }
}


function get_subject_to_delete_id(delete_button_index) {
    return delete_subject_button[delete_button_index].closest("div").getElementsByClassName("subject_button")[0].id;
}


for (let delete_button_index = 0; delete_button_index < delete_subject_button.length; delete_button_index += 1){
    if (delete_subject_button[delete_button_index] != null){
        delete_subject_button[delete_button_index].onclick = function (){
            const subject_to_delete_id = get_subject_to_delete_id(delete_button_index);
            delete_subject(subject_to_delete_id);
            location.reload();
        }
    }
}

function appearing_pane_close_button_onclick(button_id, element_to_remove_id) {
    document.getElementById(button_id).onclick = function () {
        document.getElementById(element_to_remove_id).remove();
    }
}

function create_attendance_onclick_action() {
    document.getElementById("attendances_section").onclick = function () {
        serve_subject_table_buttons_color_after_click("grades_section", "attendances_section");
        clear_whole_students_table();
        //todo dodać wyświetlanie ocen z bazy
        const subject_name = document.getElementById("header_text").innerHTML;
        draw_students_labels_in_subject(subject_name, student_grade_buttons, get_and_draw_students_attendances);
        change_grades_header("Obecności:");
    }
}




function create_grades_onclick_action() {
    document.getElementById("grades_section").onclick = function () {
        serve_subject_table_buttons_color_after_click("attendances_section", "grades_section");
        document.getElementById("subjects_table").innerHTML = "";
        add_header_to_grades_table();
        draw_students_labels_in_subject(get_subject_name(), student_grade_buttons, get_and_draw_students_grades);
    }
}
