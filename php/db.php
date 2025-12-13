<?php
$conn = new mysqli('localhost','root','','restaurant_db');

if($conn->connect_error){
    die("Database Connection Failed");
}
?>