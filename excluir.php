<?php 
header('Content-Type: text/html; charset=utf-8');
include 'Conexao.php';

$id=$_POST['id'];

$sql="Delete from tarefa where id_tarefa=".$id;


if($resultado=$conn->query($sql)===TRUE){
    echo "Tarefa excluida com sucesso!";
}

?>