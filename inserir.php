<?php
header('Content-Type: text/html; charset=utf-8');
include 'Conexao.php';

$nome=$_POST['nome'];
$descricao=$_POST['descricao'];
$prioridade=$_POST['prioridade'];

$status='CRIADA';
$str="insert into tarefa(nome, descricao, prioridade, status) values('$nome','$descricao','$prioridade','$status')"; 
if($conn->query($str)){
    echo "Tarefa cadastrada com sucesso!";
}else{
    echo "Erro ao cadastrar a tarefa:".$conn->error;
}

?>