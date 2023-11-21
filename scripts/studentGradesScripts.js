function serve_getting_your_grades_from_database(button_text) {
     $.ajax({
         type: "GET",
         url: "../serverActions/studentGradesActions/getAllYourGrades.php",
         data: {
             subjectName: button_text,
         },
         dataType: "json",
         success: function (result) {
             for (let grade_index = 2; grade_index < result.length; grade_index += 4) {
                 document.getElementById("subjects_table").insertAdjacentHTML("beforeend",
                     `<button class='your_grade_button' id="${result[grade_index + 1]}">
                                     <label class="your_grade_value">${result[grade_index]}</label>
                                 </button>`)
             }
             Array.from(document.getElementsByClassName("your_grade_button")).forEach(button => {
                 set_specific_grade_button_color(button);
             });
             init_student_grade_on_click_action("your_grade_button");

         },
         error: function (result) {
             console.log(result);
         }
     });
 }