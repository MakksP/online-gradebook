const subjects_buttons = document.getElementsByClassName("subject_button");
const not_teaching_subjects_buttons = document.getElementsByClassName("not_teaching_subject_button");
const not_teaching_subjects_labels = document.getElementsByClassName("not_teaching_subject_label");
const add_subject_button = document.getElementById("new_subject_button");
const register_card = document.getElementById("register_card");
const login_card = document.getElementById("login_card");
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

for (let button_index = 0; button_index < subjects_buttons.length - ADD_SUBJECT_BUTTON; button_index+=1){
    if (subjects_buttons[button_index] != null){
        subjects_buttons[button_index].onclick = function () {
            clear_subjects_to_add_pane();
            const button_text = subjects_buttons[button_index].innerHTML;
            draw_students_labels_in_subject(button_text, button_index);
        }
    }

}

if (login_card != null){
    login_card.onclick = function (){
        changeCardsColor("login_card", "register_card");
        document.getElementById("login_field").style.height = "40%";
        document.getElementById("register_form").innerHTML = ""
        fill_login_form();
    }
}


if (register_card != null){
    register_card.onclick = function (){
        changeCardsColor("register_card", "login_card")
        document.getElementById("login_field").style.height = "80%";
        document.getElementById("login_form").innerHTML = ""
        fill_register_form();
    }
}

if (add_subject_button != null){
    add_subject_button.onclick = function (){
        get_not_teaching_subjects_pane();
    }
}


