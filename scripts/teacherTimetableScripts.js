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
