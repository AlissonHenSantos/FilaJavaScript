function atualizarUltimoAtendimento(){
    const ultimoAtedido  = localStorage.getItem('ultimoAtendido')
    
    const elemento = document.getElementById('atendido')
    console.log(elemento)
}

atualizarUltimoAtendimento()

setInterval(atualizarUltimoAtendimento, 1000)