class Heroi{
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    atacar(){
      let ataque;
      switch(this.tipo){
        case "mago":
          ataque = "magia";
          break
        case "guerreiro":
          ataque = "espada";
          break
        case "monge":
          ataque = "artes marciais";
          break
        case "ninja":
          ataque = "shuriken";
          break
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  const herois = [
    new Heroi("Alex", 200, "mago"),
    new Heroi("Bjorn", 35, "guerreiro"),
    new Heroi("Yonten", 32, "monge"),
    new Heroi("Yasuke", 20, "ninja")
  ]
  
  function exibirAtaqueDoHeroi(heroiIndex, herois){
    if (heroiIndex >= 0 && heroiIndex < herois.length){
      herois[heroiIndex].atacar()
    }else{
      exibirAtaques(herois)
    }
  }
  
  function exibirAtaques(herois) {
    for (let heroi of herois) {
      heroi.atacar();
    }
  }
  
  //escolha um heroi de 0 a 3 para ver o ataque apenas de um deles ou digite 4 para ver o ataque de todos eles
  exibirAtaqueDoHeroi(3, herois)