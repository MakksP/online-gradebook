const timetable_tag_buttons = Array.from(document.getElementsByClassName("timetable_tag_button"));
const edit_subjects = document.getElementById("add_subject_button");
const timetable_element_button = document.getElementsByClassName("timetable_element_button");
const add_new_student_button = document.getElementById("add_new_student_button");

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


edit_subjects.onclick = function (){
    repaint_edit_subject_pane();
}

function create_delete_subject_no_onclick_action() {
    document.getElementById("delete_subject_no").onclick = function () {
        repaint_edit_subject_pane();
    }
}

function create_delete_subject_button_onclick_action(){
    Array.from(document.getElementsByClassName("delete_subject_button")).forEach(delete_button => {
        delete_button.onclick = function (){
            const subject_to_delete = get_subject_to_delete_name(delete_button)
            document.getElementById("edit_subject_pane").innerHTML = get_ask_to_remove_subject_div(subject_to_delete)
            create_delete_subject_yes_onclick_action(subject_to_delete);
            create_delete_subject_no_onclick_action();
        }
    });
}


function create_confirm_new_subject_button_onclick_action() {
    document.getElementById("confirm_new_subject_button").onclick = function () {
        const new_subject_name = document.getElementById("new_subject_name_input").value
        const new_subject_ects_points = document.getElementById("new_subject_ects_points_input").value
        const new_subject_semester = document.getElementById("new_subject_name_input").value
        serve_add_subject_action(new_subject_name, new_subject_ects_points, new_subject_semester);
    }
}

function create_delete_subject_yes_onclick_action(subject_to_delete) {
    document.getElementById("delete_subject_yes").onclick = function () {
        delete_subject_from_database_action(subject_to_delete);
        repaint_edit_subject_pane();
    }
}



Array.from(timetable_element_button).forEach(button => {
    button.onclick = function (){
        $.ajax({
            type: "GET",
            url: "../serverActions/teacherTimetablesActions/getAllSubjects.php",
            dataType: "json",
            success: function (response){
                remove_edit_pane("assign_subject_pane_div");
                serve_setting_subject_pane_creating(button, response);
            },
            error: function (response){
                console.log(response);
            }
        });

    }
});


function confirm_setting_new_subject_onclick_action(){
    document.getElementById("confirm_setting_new_subject").onclick = function (){
        let {hour, day, timetable_id} = get_subject_in_timetable_data();
        const subject_name = document.getElementById("select_subject").value;
        serve_subject_setting_to_database(subject_name, document.getElementById("assign_subject_pane_header").innerHTML, hour, day, timetable_id);
    }
}

function add_student_to_timetable_onclick_action() {
    document.getElementById("add_student_to_timetable_button").onclick = function () {

    }
}

function get_current_timetable_id() {
    let timetable_id = document.getElementById("header_text").innerHTML;
    timetable_id = timetable_id.substring(timetable_id.indexOf("  "));
    timetable_id = timetable_id.substring(0, timetable_id.indexOf(")"));
    return timetable_id;
}


add_new_student_button.onclick = function (){
    add_new_appearing_pane_to_main_container(get_add_student_to_timetable_pane, add_student_to_timetable_onclick_action,
        "add_student_to_timetable_pane_close_button", "add_student_to_timetable_pane_div");
    const timetable_id = get_current_timetable_id();

    get_students_in_timetable_from_database(timetable_id);
}