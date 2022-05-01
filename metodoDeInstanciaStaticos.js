function teste(){
    //console.log(this);//this = objeto global node
    console.log('Este é meu teste');
}

class ControleRemoto{

    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();//função sendo chamada pelo construtor
       }

       //Metodos de instancia
       aumentarVolume(){
           this.volume += 2;
       }
       //Metodos de instancia
       diminuirVolume(){
           this.volume -= 2;
       }
       //Metodos estatico -> so consigo acessar ele pela classe. ex.: ControleRemoto.trocaPilha()
       static trocaPilha(){
          console.log('Ok, vou trocar');
       }
       //Metodos estaticos n;ao tem acesso aos dados da instancia
       static soma(x, y){
        return x + y;
        //console.log(this);//this = [class ControleRemoto]
     }
}
//instanciando uma classe
const controle1 = new ControleRemoto('LG');
console.log(ControleRemoto.soma(4, 8));
/*controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);
console.log(ControleRemoto.soma(4, 8));
ControleRemoto.trocaPilha();*/