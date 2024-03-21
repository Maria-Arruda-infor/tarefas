
function buscarTarefa(){
    fetch('consulta_tarefas.php')
    .then(response=>{
        if(!response.ok){
            throw new Error('Erro ao fazer requisição à API.');
        }

        return response.json();
    })
    .then(data=>{
        const tarefas=document.getElementById('tarefas')
        tarefas.innerHTML='';
        data.forEach(tarefa => {
            const card=document.createElement('div');
            card.classList.add('card')
            const titulo=document.createElement('h3');
            titulo.textContent="Nome: "+tarefa.nome;
            const desc=document.createElement('p');
            desc.textContent="Desc: "+tarefa.descricao;
            const priorid=document.createElement('p');
            const id=tarefa.id_tarefa;
            const status=document.createElement('p');
            status.textContent="Status: "+tarefa.status;

            let st=tarefa.status;

            const btn_concluir=document.createElement('button');
            btn_concluir.textContent='Concluir';
            const btn_excluir=document.createElement('button');
            btn_excluir.textContent='Excluir';

            btn_concluir.classList.add('btn','btn-primary','btn-sm','m-2');
            btn_excluir.classList.add('btn','btn-secondary','btn-sm','m-2');
            priorid.textContent=tarefa.prioridade;
            verificaPrioridade(tarefa.prioridade, priorid);
            
            
            card.appendChild(titulo);
            card.appendChild(desc);
            card.appendChild(status);
            card.appendChild(priorid);
            card.appendChild(btn_concluir)
            card.appendChild(btn_excluir)
           tarefas.appendChild(card);


           btn_excluir.addEventListener('click',()=>{

              excluir(id);
              btn_excluir.remove();
              btn_concluir.remove();
              priorid.remove();
              titulo.remove();
              desc.remove();
              status.remove();
              card.remove();
           })

           btn_concluir.addEventListener('click',()=>{
            if(st=="CRIADA"){
                st="CONCLUIDA";
            }
             atualizar(st,id);
             buscarTarefa();
   
        });
    })
})
}

function excluir(id){
 fetch('excluir.php',{
    method:'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:'id='+id
 })
 .then(response=>{
    if(!response.ok){
        throw new Error('Erro ao fazer requisição à API.');
        //window.onload=buscarTarefa;
    }
    return response.text();

 })
 .then(data=>{
       
 })
}

function atualizar(status,id){
    
    fetch('atualizar_status.php',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'status='+status + '&id='+id
    })
    .then(response=>{
        if(!response.ok){
          //window.onload=buscarTarefa;
          throw new Error('Erro ao fazer requisição à API.');
        }
        return response.text();

    })
    .then(data=>{

    })

}

 function verificaPrioridade(prioridade, item){
    if(prioridade=='alta'){
        item.classList.add('badge','bg-danger','m-2');
    }else if(prioridade=='media'){
        item.classList.add('badge','bg-warning','m-2');
     }else if(prioridade=='baixa'){
        item.classList.add('badge','bg-success','m-2');
     }
 }

 
 window.onload=buscarTarefa;