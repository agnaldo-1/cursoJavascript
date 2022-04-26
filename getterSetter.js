//Symbol() é um dado primitivo
//
const _velocidade = Symbol('velocidade');//atributo privado, ninguem pode acessar, ninguem pode alteral
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    set velocidade(valor){
       if(typeof valor !== 'number') return;
       if(valor >= 100 || valor <= 0) return; 
       this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 100) return;
        this[_velocidade]++;
    }
}
const c1 = new Carro('Fusca');
//c1.acelerar();
c1.velocidade = 99;
console.log(c1.velocidade);

/*class Pessoa{

    constructor(nome, sobrenome){

        this.nome = nome;
        this.sobrenome = sobrenome;
    }
     
   get nomeCompleto(){
       return `${this.nome} ${this.sobrenome}`;
   }
   set nomeCompleto(valor){
         valor = valor.split(' ');
         this.nome = valor.shift();
         this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa();
p1.nomeCompleto = 'Agnaldo da Silva Julio';
console.log(p1.nomeCompleto);
*/