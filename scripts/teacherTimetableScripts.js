function fill_timetable_with_elements(){
    const TOTAL_ELEMENTS_IN_TIMETABLE = 50;
    for (let element_index = 0; element_index < TOTAL_ELEMENTS_IN_TIMETABLE; element_index += 1){
        document.getElementById("timetable").insertAdjacentHTML("beforeend", get_single_raw_timetable_element(element_index));
    }
}

function add_all_timetables_tag_to_timetables_pane(response) {
    Array.from(response).forEach(timetable_id => {
        document.getElementById("timetables_panel").insertAdjacentHTML("beforeend", get_timetable_tag(timetable_id));
    });
}

function get_all_timetables(){
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherTimetablesActions/getAllTimetables.php",
        dataType: "json",
        success: function (response){
            add_all_timetables_tag_to_timetables_pane(response);

        },
        error: function (response){

        }
    });
}

