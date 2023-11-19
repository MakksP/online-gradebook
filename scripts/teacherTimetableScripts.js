function fill_timetable_with_elements(){
    const TOTAL_ELEMENTS_IN_TIMETABLE = 50;
    for (let element_index = 0; element_index < TOTAL_ELEMENTS_IN_TIMETABLE; element_index += 1){
        document.getElementById("timetable").insertAdjacentHTML("beforeend", get_single_raw_timetable_element(element_index));
    }
}


function get_hour_text_representation(hour_counter, minutes) {
    if (minutes < 10){
        minutes = "0" + minutes.toString();
    }
    if (hour_counter < 10) {
        return "0" + hour_counter.toString() + ":" + minutes.toString() + ":00";
    } else {
        return hour_counter.toString() + ":" + minutes.toString() + ":00";
    }
}

function find_hour_by_index(hours, hour_index) {
    const position_without_seconds = 5;
    for (let [key, value] of hours.entries()) {
        if (value === hour_index) {
            return key.substring(0, position_without_seconds);
        }
    }
    return null;
}

function get_hour_indexes() {
    const total_hours = 20;

    const hour_indexes = new Map();
    let hour_counter = 8;
    for (let hour_index = 0; hour_index < total_hours; hour_index += 1) {
        hour_indexes.set(get_hour_text_representation(hour_counter, 15), hour_index);
        hour_counter += 1;

    }
    return hour_indexes;
}

function get_indexes_of_timetable_elements(response, day_of_week_indexes, available_hours_in_one_day, hour_indexes) {
    const indexes = [];
    const first_index_of_day_from_response = 0;
    const next_index_of_day_from_response = 4;
    for (let time_index = first_index_of_day_from_response; time_index < response.length; time_index += next_index_of_day_from_response) {
        const timetable_element_index = day_of_week_indexes[response[time_index]] * available_hours_in_one_day
            + hour_indexes.get(response[time_index + 1]);
        indexes.push(timetable_element_index);
    }
    return indexes;
}

function get_timetable_element_label(index) {
    return document.getElementById("timetable_" + index).getElementsByClassName("timetable_element_label")[0];
}

function clear_timetable_elements() {
    const total_timetable_elements = 50;
    for (let timetable_element_index = 0; timetable_element_index < total_timetable_elements; timetable_element_index += 1) {
        document.getElementById("timetable_" + timetable_element_index)
            .getElementsByClassName("timetable_element_label")[0].innerHTML = "";
    }
}

function set_timetables_header_text_to_default() {
    document.getElementById("header_text").innerHTML = "Plany lekcji";
}

function add_timetable_id_to_timetables_header(button) {
    document.getElementById("header_text").insertAdjacentHTML("beforeend", " (Plan " + get_plan_id(button) + ")");
}

function serve_timetable_data(button) {
    $.ajax({
        type: "GET",
        url: '../serverActions/teacherTimetablesActions/getTimetableDetails.php',
        data: {planId: get_plan_id(button)},
        dataType: "json",
        success: function (response) {
            const first_index_of_subject_from_response = 3;
            const available_hours_in_one_day = 10;
            const day_of_week_indexes = {"poniedziałek": 0, "wtorek": 1, "środa": 2, "czwartek": 3, "piątek": 4};
            set_timetables_header_text_to_default();
            add_timetable_id_to_timetables_header(button);
            clear_timetable_elements();

            const hour_indexes = get_hour_indexes();
            response = Array.from(response);

            const indexes_of_elements_in_timetable
                = get_indexes_of_timetable_elements(response, day_of_week_indexes, available_hours_in_one_day, hour_indexes);


            let subject_index = first_index_of_subject_from_response;
            indexes_of_elements_in_timetable.forEach(index => {
                const next_index_of_day_from_response = 4;
                const element_label = get_timetable_element_label(index);
                element_label.innerHTML = response[subject_index];
                subject_index += next_index_of_day_from_response;
            });

        },
        error: function (response) {
            console.log(response);
        }
    });
}

function remove_edit_pane(pane_id) {
    const pane = document.getElementById(pane_id);
    if (pane !== null){
        pane.remove();
    }
}


function add_new_appearing_pane_to_main_container(pane_content, confirm_button_onclick_action, close_button_id, pane_id){
    document.getElementById("main_container").insertAdjacentHTML("beforeend", pane_content());
    confirm_button_onclick_action();
    appearing_pane_close_button_onclick(close_button_id, pane_id);
}

function add_new_appearing_with_parameters_pane_to_main_container(pane_content, confirm_button_onclick_action,
                                                                  close_button_id, pane_id, name, surname, was_present, date, attendance_id){
    document.getElementById("main_container").insertAdjacentHTML("beforeend", pane_content(name, surname, was_present, date));
    confirm_button_onclick_action(attendance_id);
    appearing_pane_close_button_onclick(close_button_id, pane_id);
}


function repaint_edit_subject_pane() {
    remove_edit_pane("edit_subject_pane");
    add_new_appearing_pane_to_main_container(get_edit_subject_pane, create_confirm_new_subject_button_onclick_action, "add_new_subject_close_button", "edit_subject_pane");
    get_subjects_from_database_and_add_to_pane();
}


function add_existing_student_in_timetable_to_pane(response) {
    for (let students_data_index = 0; students_data_index < response.length; students_data_index += 3) {
        document.getElementById("existing_students_in_timetable").insertAdjacentHTML("beforeend",
            get_student_in_timetable_div(response, students_data_index))
        create_student_data_onclick_action();
    }
}

function get_student_data_connected_with_delete_button(button) {
    return button.closest("div").querySelector(".student_data").innerHTML;
}


function get_students_in_timetable_from_database(timetable_id) {
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherTimetablesActions/getStudentsInTimetable.php",
        data: {
            timetable_id: timetable_id
        },
        dataType: "json",
        success: function (response) {
            add_existing_student_in_timetable_to_pane(response);
            const delete_student_from_timetable_buttons = document.getElementsByClassName("delete_student_from_timetable_button");
            create_delete_student_from_timetable_onclick_action(delete_student_from_timetable_buttons);
        },
        error: function (response) {
            console.log(response)
        }
    });
}

function get_student_email(button) {
    const student = get_student_data_connected_with_delete_button(button);
    return  student.substring(student.lastIndexOf(" ") + 1)
}

function delete_student_from_timetable(email) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/deleteStudentFromTimetable.php",
        data: {
            student_email: email
        },
        success: function (response) {
            document.getElementById("add_student_to_timetable_pane_div").remove();
            paint_add_student_to_timetable_pane();
        },
        error: function (response) {
            console.log(response);
        }
    });
}


function fill_student_select_with_options(response) {
    for (let student_data_index = 0; student_data_index < response.length; student_data_index += 3) {
        let new_option = document.createElement("option");
        new_option.value = response[student_data_index] + " " + response[student_data_index + 1] + " " + response[student_data_index + 2];
        new_option.text = response[student_data_index] + " " + response[student_data_index + 1] + " " + response[student_data_index + 2];
        document.getElementById("choose_student").add(new_option);
    }
}

function paint_add_student_to_timetable_pane() {
    add_new_appearing_pane_to_main_container(get_add_student_to_timetable_pane, add_student_to_timetable_onclick_action,
        "add_student_to_timetable_pane_close_button", "add_student_to_timetable_pane_div");
    const timetable_id = get_current_timetable_id();
    get_students_in_timetable_from_database(timetable_id);
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherTimetablesActions/getNotAssignedToTimetableStudents.php",
        dataType: "json",
        success: function (response){
            fill_student_select_with_options(response);
        },
        error: function (response){
            console.log(response);
        }
    });
}

function get_student_email_from_select() {
    const student = document.getElementById("choose_student").value;
    return student.substring(student.lastIndexOf(" ") + 1)
}


function delete_timetable_from_database(timetable_id) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/deleteTimetableFromDatabase.php",
        data: {
            timetable_id: timetable_id
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


function add_ask_to_delete_timetable_pane(wanted_to_delete_timetable) {
    document.getElementById("main_container").insertAdjacentHTML("beforeend",
        get_ask_to_remove_subject_div(wanted_to_delete_timetable, "Czy na pewno chcesz plan zajęć?",
            "delete_timetable_decision", "delete_timetable_yes", "delete_timetable_no", "delete_timetable_pane"));

        create_close_ask_to_delete_timetable_onclick_action();
        const timetable_id = wanted_to_delete_timetable.substring(wanted_to_delete_timetable.indexOf(" ") + 1)
        create_delete_timetable_onclick_action(timetable_id);
}

function add_timetable_to_database() {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/addNewTimetable.php",
        success: function (response) {
            location.reload();
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        },
    });
}
