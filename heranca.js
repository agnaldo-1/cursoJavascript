class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;

    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome + 'já ligado');
            return;
        }
        this.ligado = true; 
    }
    desligado(){
        if(!this.ligado) {
            console.log(this.nome + 'já desligado');
            return;
        }
        this.ligado = false; 
    }
}

class Smartphone extends DispositivoEletronico{

    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}


class Tablet extends DispositivoEletronico{

    constructor(nome, temWifi){
       
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){ //sobrescrever metodos
        console.log('olha vc alterou o método ligar');
    }
    falaOi(){
        console.log('oi');
    }
}

    const t1 = new Tablet('Sansung', true);
    t1.falaOi();
    console.log(t1);


