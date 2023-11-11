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


function get_subjects_from_database_and_add_to_pane() {
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherTimetablesActions/getAllSubjects.php",
        dataType: "json",
        success: function (response) {
            add_existing_subjects_to_pane(response);
            create_delete_subject_button_onclick_action();
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function serve_add_subject_action(new_subject_name, new_subject_ects_points, new_subject_semester) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/addNewSubject.php",
        data: {
            subject_name: new_subject_name,
            ects_points: new_subject_ects_points,
            semester: new_subject_semester
        },
        success: function (response) {
            document.getElementById("edit_subject_pane").remove();
            add_new_appearing_pane_to_main_container(get_edit_subject_pane, create_confirm_new_subject_button_onclick_action,
                "add_new_subject_close_button", "edit_subject_pane");
            get_subjects_from_database_and_add_to_pane();

        },
        error: function (response) {
            console.log(response);
        }
    });
}


function get_subject_to_delete_name(delete_button) {
    return delete_button.closest("div").querySelector(".existing_subject_label #subject_name_span").innerHTML;
}

function delete_subject_from_database_action(subject_to_delete) {
    console.log(subject_to_delete)
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/deleteSubject.php",
        data: {
            subject_name: subject_to_delete,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function repaint_edit_subject_pane() {
    remove_edit_pane("edit_subject_pane");
    add_new_appearing_pane_to_main_container(get_edit_subject_pane, create_confirm_new_subject_button_onclick_action, "add_new_subject_close_button", "edit_subject_pane");
    get_subjects_from_database_and_add_to_pane();
}

function subject_is_assigned_to_cell(subject_name) {
    return subject_name.length > 0;
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