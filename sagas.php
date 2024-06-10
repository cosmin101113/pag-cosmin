<?php
$conexion = mysqli_connect("localhost", "root", "", "proyecto") or die("Problemas con la conexión");

if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>
