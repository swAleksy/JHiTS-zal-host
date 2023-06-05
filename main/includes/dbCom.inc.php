<?php

$conn = mysqli_connect('localhost','root','root','commentssection');

if (!$conn){
    die("ERR: ".mysqli_connect_error());
}