const not_teaching_subjects_buttons = document.getElementsByClassName("not_teaching_subject_button");
const not_teaching_subjects_labels = document.getElementsByClassName("not_teaching_subject_label");
const delete_subject_button = document.getElementsByClassName("delete_button");
const subjects_buttons = document.getElementsByClassName("subject_button");
const favourite_buttons = document.getElementsByClassName("favourite_button")
const delete_favourite_buttons = document.getElementsByClassName("delete_favourite_button");
const add_subject_button = document.getElementById("new_subject_button");


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

function create_subject_buttons_onclick_action(dont_consider_add_subject_button) {
    for (let button_index = 0; button_index < subjects_buttons.length - dont_consider_add_subject_button; button_index += 1) {
        if (subjects_buttons[button_index] != null) {
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
}

function create_add_favourite_element_onclick_action() {
    Array.from(favourite_buttons).forEach(button => {
        if (button !== null) {
            button.onclick = function () {
                const subject_name = button.closest("div").querySelector(".subject_button").innerHTML;
                favourite_element_action(subject_name, "addNewFavouriteItem.php");
            }
        }
    });
}


function create_delete_favourite_element_onclick_action() {
    Array.from(delete_favourite_buttons).forEach(button => {
        if (button !== null) {
            button.onclick = function () {
                const subject_name = button.closest("div").querySelector(".subject_button").innerHTML;
                favourite_element_action(subject_name, "deleteFavouriteItem.php");
            }
        }
    });
}

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

if (add_subject_button != null){
    add_subject_button.onclick = function (){
        get_not_teaching_subjects_pane();
    }
}


