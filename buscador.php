<?php
include __DIR__ . '/sagas.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['insert'])) {
    $nombre = mysqli_real_escape_string($conexion, $_POST['Nombre']);
    $valoracion = mysqli_real_escape_string($conexion, $_POST['Valoración']);
    $genero = mysqli_real_escape_string($conexion, $_POST['Género']);
    $anio = mysqli_real_escape_string($conexion, $_POST['Año']);
    $director = mysqli_real_escape_string($conexion, $_POST['Director']);
    $comentario = mysqli_real_escape_string($conexion, $_POST['Comentario']); // Nuevo campo para el comentario

    $query = "INSERT INTO peliculas (nombre, valoracion, genero, anio, director, comentario) VALUES ('$nombre', '$valoracion', '$genero', '$anio', '$director', '$comentario')";

    if (mysqli_query($conexion, $query)) {
        $mensaje = "LA PELÍCULA O SERIE SE HA INSERTADO DE FROMA CORRECTA.";
    } else {
        $mensaje = "Error al insertar la película: " . mysqli_error($conexion);
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Resultado de la Inserción</title>
    <meta charset="utf-8">
    <style>
        body {
            background-image: url(imagenes/estrella2.png);
            background-repeat: no-repeat;
            background-size: cover; 
            background-attachment: fixed; /* Modificación aquí */
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .mensaje {
            background-image: url(imagenes/prueba.png);
            background-repeat: no-repeat;
            background-size: cover;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 20px;
            margin: 20px auto;
            max-width: 600px;
            text-align: center;
        }

        .mensaje h2 {
            color: #000080;
        }

        .volver {
            display: inline-block;
            padding: 10px 20px;
            background-color: #32b9d7;
            color: #fff;
            text-decoration: none;
            border: 1px solid #258eb9;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .volver:hover {
            background-color: #258eb9;
        }

        .volver:active {
            background-color: #206d87;
        }
    </style>
</head>
<body>
    <div class="mensaje">
        <h2><?php echo $mensaje; ?></h2>
    </div>
    <a class="volver" href="index.html">Volver</a>
</body>
</html>


