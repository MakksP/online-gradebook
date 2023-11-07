const TOTAL_ELEMENTS_IN_TIMETABLE = 50;

function fill_timetable_with_elements(){
    for (let element_index = 0; element_index < TOTAL_ELEMENTS_IN_TIMETABLE; element_index += 1){
        document.getElementById("timetable").insertAdjacentHTML("beforeend", get_single_raw_timetable_element(element_index));
    }
}