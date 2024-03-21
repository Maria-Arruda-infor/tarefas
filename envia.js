//mensagem
const alerta = document.getElementById('liveAlertPlaceholder')
const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alerta.append(wrapper)
    }

document.getElementById('meuForm').addEventListener('submit',function(event){
    event.preventDefault();
    let formData=new FormData(this);
    //let nome=formData.get('nome')

    fetch('inserir.php' ,{
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao fazer requisição à API.');
        }
        return response.text(); // Converte a resposta para texto
    })
    .then(data => {
        const container = document.getElementById('mensagem'); // Elemento onde a mensagem será mostrada
        container.textContent = ''; // Limpa a mensagem anterior, se houver

        // Verifica se há dados na resposta
        if (data.length > 0) {
            //testando o alerta
            alert('Dados salvos com sucesso!', 'success')
            //final 

            setTimeout(()=>{
                document.getElementById('meuForm').reset()
                while (alerta.firstChild) {
                    alerta.removeChild(alerta.firstChild);
                }
            }, 3000)
            
            // Aqui você pode manipular os dados e fazer o que precisar com eles
        } else {
            throw new Error('Nenhum dado encontrado.');
        }
    })
    .catch(error => {
        const container = document.getElementById('mensagem');
        container.textContent = ''; // Limpa a mensagem anterior, se houver

        const erro = document.createElement('p');
        erro.textContent = 'Erro: ' + error.message;
        container.appendChild(erro);
    })

});

