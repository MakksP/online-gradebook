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

function get_timetable_id() {
    let timetable_id = document.getElementById("header_text").innerHTML
    timetable_id = timetable_id.substring(timetable_id.indexOf("("));
    return timetable_id.substring(timetable_id.indexOf(" ") + 2, timetable_id.length - 1);
}

function update_subject_in_database(subject_id, hour, day, timetable_id) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/updateSubjectInTimetable.php",
        data: {
            subject_id: subject_id,
            start_time: hour,
            day_of_week: day,
            lesson_plan_id: timetable_id
        },
        success: function (response) {
            repaint_timetable_and_close_set_subject_pane(timetable_id);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function serve_cell_set_action(subject_name, hour, day, timetable_id, action) {
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherTimetablesActions/getSubjectById.php",
        data: {
            subject_name: subject_name
        },
        dataType: "json",
        success: function (response) {
            const subject_id = response[0]
            action(subject_id, hour, day, timetable_id);
        },
        error: function (response) {
            console.log(response)
        }
    });
}

function repaint_timetable_and_close_set_subject_pane(timetable_id) {
    serve_timetable_data(document.getElementById("timetable_button_" + timetable_id));
    document.getElementById("assign_subject_pane_div").remove();
}

function insert_subject_in_database(subject_id, hour, day, timetable_id) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/addSubjectToTimetable.php",
        data: {
            subject_id: subject_id,
            start_time: hour,
            day_of_week: day,
            lesson_plan_id: timetable_id
        },
        success: function (response) {
            repaint_timetable_and_close_set_subject_pane(timetable_id);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function serve_subject_setting_to_database(subject_name, set_subject_header, hour, day, timetable_id) {
    if (set_subject_header !== "Pusta godzina"){
        serve_cell_set_action(subject_name, hour, day, timetable_id, update_subject_in_database);
    } else {
        serve_cell_set_action(subject_name, hour, day, timetable_id, insert_subject_in_database);
    }
}