<?php 
include 'Conexao.php';
$status=$_POST['status'];
$id=$_POST['id'];

$sql="update tarefa set status='$status' where id_tarefa='$id'";

if($resultado=$conn->query($sql)===TRUE){
    echo 'Dados atualizados com sucesso!';
}
?>