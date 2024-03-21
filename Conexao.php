<?php
$servername="localhost";
$username="root";
$password="";
$database="tarefas";

try{
    $conn= new mysqli($servername,$username,$password,$database);
}catch(mysqli_sql_exception $e){
    echo $e->getMessage();
}

?>