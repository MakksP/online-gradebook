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
const delete_subject_button = document.getElementsByClassName("delete_button");
const add_new_grade_buttons = document.getElementsByClassName("new_grade_button");
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

function grade_edit_close_button_onclick() {
    document.getElementById("grade_edit_close_button").onclick = function () {
        document.getElementById("grade_edit_pane").remove();
    }
}


function create_change_grade_button_onclick_action(available_grades_buttons, grade, name, surname, grade_id) {
    available_grades_buttons.forEach(button => button.onclick = function () {
        const description_and_date = get_current_grade_description_and_date();
        document.getElementById("grade_edit_pane").remove();
        grade = get_grade_value_of_pressed_button(button);
        repaint_grade_edit_pane(name, surname, grade, description_and_date.description, description_and_date.date, grade_id);
    });
    return {available_grades_buttons, grade};
}


function create_save_button_onclick_action(grade, grade_id) {
    document.getElementById("save_changes_button").onclick = function () {
        const description_and_date = get_current_grade_description_and_date();
        update_grade(grade_id, grade, description_and_date);
        repaint_subject_table_dynamic_content();
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


function create_add_new_grade_button_onclick_action(){
    Array.from(add_new_grade_buttons).forEach(button => button.onclick = function (){
        const student_email = get_student_email_from_student_label_div(button);
        const subject_name = document.getElementsByTagName("h2")[0].innerHTML
        serve_add_grade_action(student_email, subject_name);
    });
}

