const timetable_tag_buttons = Array.from(document.getElementsByClassName("timetable_tag_button"));
const edit_subjects = document.getElementById("add_subject_button");
const timetable_element_button = document.getElementsByClassName("timetable_element_button");
const confirm_setting_new_subject = document.getElementById("confirm_setting_new_subject");

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


function confirm_setting_new_subject_onclick_action(){

}

function add_subjects_to_list(response) {
    Array.from(response).forEach(subject_tag => {
        let new_option = document.createElement("option");
        new_option.value = subject_tag;
        new_option.text = subject_tag;
        document.getElementById("select_subject").add(new_option);
    });
}

function get_day_of_week_of_selected_subject(button_id) {
    const day_of_week_indexes = {0: "poniedziałek", 1: "wtorek", 2: "środa", 3: "czwartek", 4: "piątek"};
    const hours_per_day = 10;
    return day_of_week_indexes[parseInt(button_id / hours_per_day)]
}

function serve_setting_subject_pane_creating(button, response) {
    const subject_name = button.querySelector(".timetable_element_label").innerHTML;
    add_new_appearing_pane_to_main_container(get_assign_subject_to_timetable_pane, confirm_setting_new_subject_onclick_action,
        "assign_subject_pane_close_button", "assign_subject_pane_div");
    const hours_per_day = 10;
    const header = document.getElementById("assign_subject_pane_header");
    const set_subject_label = document.getElementById("set_subject_label")
    const button_id = button.id.substring(button.id.indexOf("_") + 1);
    const day_of_week = get_day_of_week_of_selected_subject(button_id);
    const hour = find_hour_by_index(get_hour_indexes(), button_id % hours_per_day);

    add_subjects_to_list(response);
    document.getElementById("day_label").innerHTML = "Dzień: " + day_of_week;
    document.getElementById("hour_label").innerHTML = "Godzina: " + hour;

    if (subject_is_assigned_to_cell(subject_name)) {
        header.innerHTML = subject_name;
        set_subject_label.insertAdjacentHTML("afterbegin", "Zamień na:")
    } else {
        header.innerHTML = "Pusta godzina";
        set_subject_label.insertAdjacentHTML("afterbegin", "Dodaj przedmiot:")
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

