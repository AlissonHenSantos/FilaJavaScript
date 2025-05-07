class Atendimento{
    #nome
    #cpf
    #data
    #hora
    constructor(){

    }

    getNome(){
        return this.#nome
    }
    setNome(nome){
        this.#nome = nome
    }
    getCpf(){
        return this.#cpf
    }
    setCpf(cpf){
        this.#cpf = cpf
    }
    getData(){
        return this.#data
    }
    setData(data){
        this.#data = data
    }
    getHora(){
        return this.#hora
    }
    setHora(hora){
        this.#hora = hora
    }
    
    toString(){
        return `nome: ${this.getNome()} cpf: ${this.getCpf()} data: ${this.getData()} - Hora: ${this.getHora()}`
    }
}