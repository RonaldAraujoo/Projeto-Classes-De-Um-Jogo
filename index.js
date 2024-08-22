class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia'
                break
            case 'guerreiro':
                ataque = 'espada'
                break
            case 'monge':
                ataque = 'artes marciais'
                break;
            case 'ninja':
                ataque = 'shuriken'
                break
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}


const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
heroi1.atacar()

const heroi2 = new Heroi('Dumbo', 25, 'mago')
heroi2.atacar()

const heroi3 = new Heroi('Manuel', 40, 'monge')
heroi3.atacar()

const heroi4 = new Heroi('Rio', 28, 'ninja')
heroi4.atacar() 
