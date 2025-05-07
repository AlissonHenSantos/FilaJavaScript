const fila = new FilaCircular(5)

function addElemento(){
    const nome = document.getElementById('txtnovoNome').value
    const cpf = document.getElementById('txtnovoCpf').value
    const data = obterDataAtual()

    if(!nome, !cpf) return alert("Digite os campos")
    
  if(!fila.isFull()){
    const atendimento = new Atendimento()
    atendimento.setNome(nome)
    atendimento.setCpf(cpf)
    atendimento.setData(obterDataAtual())
    atendimento.setHora(obterHoraAtual())
        fila.enqueue(atendimento)

        mostrarFila()
        document.getElementById("txtnovoNome").focus()
    } else{
      alert('fila cheia')
    }
}

function buscar(){
   const cpf =  document.getElementById('txtnovoCpf').value
   const elemento = document.getElementById('mensagem-remocao')

   let localNaFila = 0
   for(let item of fila){
      localNaFila++
      if(item.getCpf() === cpf) return elemento.innerHTML = `${item} posição: ${localNaFila}`
   }
   alert("Cpf não encontrado")

}

function mostrarFila(){
    const listaFila = document.getElementById("listFila");
    listaFila.innerHTML = "";
    for(let item of fila){
       const listaElemento = document.createElement("li");
       listaElemento.textContent = item;
       listaFila.appendChild(listaElemento);
    }
    
 }

 function atenderFila(){
   const elemento = document.getElementById('mensagem-remocao')
    if(!fila.isEmpty()){
       const atendido = fila.dequeue();
       alert("Pessoa atendida:"+atendido);
       mostrarFila();
       localStorage.setItem('ultimoAtendido', atendido.getNome())
       elemento.innerHTML =  `Próximo a ser atendido ${atendido.getNome()} chegou as ${atendido.getHora()} está sendo atendido(a) às ${obterHoraAtual()}. Tempo de espera ${calcularDiferencaHoras(atendido.getHora(), obterHoraAtual())}`
    }
    else
       alert("Fila vazia!");
 }

