<?php
session_start();
require './getAndDrawSubjects.php';

if ($_SERVER["REQUEST_METHOD"] == "GET"){
   get_and_draw_subjects();
}
