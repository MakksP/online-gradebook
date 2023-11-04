const subjects_buttons = document.getElementsByClassName("subject_button");
const not_teaching_subjects_buttons = document.getElementsByClassName("not_teaching_subject_button");
const not_teaching_subjects_labels = document.getElementsByClassName("not_teaching_subject_label");
const add_subject_button = document.getElementById("new_subject_button");
const login_button = document.getElementById("login_button_nav");
const registration_button = document.getElementById("registration_button_nav");
const home_page_button = document.getElementById("logo_button");
const logout_button = document.getElementById("logout_button");
const subjects_button = document.getElementById("subjects_button");
const subjects_table = document.getElementById("subjects_table");
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
            add_header_to_grades_table();
            draw_students_labels_in_subject(button_text, student_grade_buttons);
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

function init_student_grade_on_click_action(student_grade_buttons) {
    student_grade_buttons = document.getElementsByClassName("grade_button");
    for (let student_grade_button_index = 0; student_grade_button_index < student_grade_buttons.length; student_grade_button_index += 1) {
        if (student_grade_buttons[student_grade_button_index] != null) {
            student_grade_buttons[student_grade_button_index].onclick = function () {
                create_grade_edit_pane(student_grade_buttons[student_grade_button_index].id)
            }
        }
    }
    return student_grade_buttons;
}






