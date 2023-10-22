$(document).ready(function (){
$("#register_form").on('submit', function (e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "./serverActions/registerActions.php",
        data: $(this).serialize(),
        success:function (response) {


        },
        error: function (response){
            $("#incorrect_teacher_password").text("Niepoprawne hasło nauczyciela").css("color", "red");

        }
    })
})
});
