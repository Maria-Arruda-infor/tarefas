<?php
include 'Conexao.php';

$sql="Select * from tarefa";

$resultado=$conn->query($sql);

if($resultado->num_rows>0){
    $lista_tarefas=array();
    while($row=$resultado->fetch_assoc()){
          $lista_tarefas[]=$row;
    }
    //retorna os dados em JSON
    echo JSON_encode($lista_tarefas);
}

?>