$(document).ready(function (){
    $("#register_form").on('submit', function (e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "./serverActions/registerActions.php",
            data: $(this).serialize(),
            success:function (response) {
                $("#register_form_container").text("Pomyślnie utworzono konto!\nteraz możesz sie zalogować")
                    .css("color", "green").css("font-size", "30px")
                    .css("text-shadow", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000");

            },
            error: function (response){
                $("#incorrect_teacher_password").text("Niepoprawne hasło nauczyciela").css("color", "red")
                    .css("text-shadow", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000");

            }
        })
    })
});