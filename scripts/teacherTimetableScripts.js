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

function remove_edit_subject_pane() {
    const edit_subject_pane = document.getElementById("edit_subject_pane");
    if (edit_subject_pane !== null){
        edit_subject_pane.remove();
    }
}


function add_edit_subject_pane() {
    document.getElementById("main_container").insertAdjacentHTML("beforeend", get_edit_subject_pane());
    create_confirm_new_subject_button_onclick_action();
    appearing_pane_close_button_onclick("add_new_subject_close_button", "edit_subject_pane");
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
            add_edit_subject_pane();
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
    remove_edit_subject_pane();
    add_edit_subject_pane();
    get_subjects_from_database_and_add_to_pane();
}