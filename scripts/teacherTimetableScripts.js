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
    for (let hour_index = 1; hour_index < total_hours; hour_index += 1) {
        hour_indexes.set(get_hour_text_representation(hour_counter, 15), hour_index);
        hour_indexes.set(get_hour_text_representation(hour_counter + 1, 0), hour_index + 1);
        hour_index += 1
        hour_counter += 1;

    }
    return hour_indexes;
}

function serve_timetable_data(button) {
    $.ajax({
        type: "GET",
        url: '../serverActions/teacherTimetablesActions/getTimetableDetails.php',
        data: {planId: get_plan_id(button)},
        dataType: "json",
        success: function (response) {
            const day_of_week_indexes = {"poniedziałek": 1, "wtorek": 2, "środa": 3, "czwartek": 4, "piątek": 5};
            const hour_indexes = get_hour_indexes();
            console.log(hour_indexes);
        },
        error: function (response) {
            console.log(response);
        }
    });
}
