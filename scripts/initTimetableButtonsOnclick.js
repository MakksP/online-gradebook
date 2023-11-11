const timetable_tag_buttons = Array.from(document.getElementsByClassName("timetable_tag_button"));
const add_new_subject = document.getElementById("add_subject_button");

function get_plan_id(button){
    const button_label = button.getElementsByTagName("label")[0].innerHTML;
    return button_label.substring(button_label.indexOf(" "));
}


timetable_tag_buttons.forEach(button => {
    if (button != null){
        button.onclick = function (){
            serve_timetable_data(button);
        }
    }
});


add_new_subject.onclick = function (){
    remove_edit_subject_pane();
    add_edit_subject_pane();
    get_subjects_from_database_and_add_to_pane();
}

function create_confirm_new_subject_button_onclick_action() {
    document.getElementById("confirm_new_subject_button").onclick = function () {
        console.log(document.getElementById("new_subject_input").value)
    }
}
