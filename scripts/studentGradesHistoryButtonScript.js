
document.getElementById("your_grades_history_button").onclick = function (){
    $.ajax({
        type: "GET",
        url: "../serverActions/studentDataActions/getStudentDataBySessionId.php",
        dataType: "json",
        success: function (response){
            window.location.href = "./studentDataPage.php?student_name=" + encodeURIComponent(response[0])
                + "&student_surname=" + encodeURIComponent(response[1]) + "&student_email=" + encodeURIComponent(response[2]);
        },
        error: function (response){
            console.log(response);
        }
    });


}