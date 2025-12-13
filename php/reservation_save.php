<?php

include 'db.php';

$name     = $_POST['costumername'];
$phone    = $_POST['phonenumber'];
$persons  = $_POST['persons'];
$datetime = $_POST['datetime'];
$message  = $_POST['message'];

$query = "INSERT INTO reservations 
          (customer_name, phone, persons, reservation_datetime, message)
          VALUES ('$name', '$phone', '$persons', '$datetime', '$message')";

if (mysqli_query($conn, $query)) {
    header("Location: ../pages/reservation.html?success=1");
    exit;
} else {
    echo "Error: Resevation Canceled";
}
?>
