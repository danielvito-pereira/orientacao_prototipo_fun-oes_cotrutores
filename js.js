class Pessoa{
  constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log('Meu nome é ${this.nome}')
  }
}