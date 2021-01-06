function saludar(nombre:string){
   console.log("nombre:"+nombre);
}

function suma(numero1:number,numero2:number){
   console.log("numero:"+numero1);
}

// funciones con parametro obligatorio
function activar(
                  quien:string,    //requerido
                  momento?:string,  //opcional
                  objeto:string='omarxxx' //dato por defecto
               ){
   momento ? console.log("quien"+quien, "objeto"+objeto, "momento"+momento ): console.log("quien"+quien, "objeto"+objeto)         
   
}

//funciones flecha

let myNames= (a:string) =>{
    console.log(a);
}

//desestruturacion de objetos


const avenger = {
   'nombre':'steve',
   'key':'capitan america',
   'poder':'fuerza'
};

const { nombre,key,poder } = avenger;

console.log(nombre);
console.log(key);
console.log(poder);

const avengers4:string[] = ['thor','ironman','spiderman'];

const [loki, hombre, arana]=avengers4;

console.log(loki);
console.log(hombre);
console.log(arana);

// las promesas nos sirven para ejecutar un codigo sin bloquear el codigo de mi aplicacion

//las interfaces son las reglas que  queremos q cumpla un objeto

//decoradores nos va servir para añadirfuncionalidad a nuestra clase

// const prom = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve('se termino el time');
//    })
// });

// prom.then(response => console.log(response))


// const retirarDinero = (montoRetirar: number) : Promise<number> => {
//    let dineroActual=1000;
//    return new Promise((resolve,reject)=>{
//         if(montoRetirar>dineroActual){
//          reject('no hay montos suficientes');
//         }else{
//            dineroActual-=montoRetirar;
//            resolve(dineroActual);
//         }
//    });
// }

// retirarDinero(500)
// .then(montoActual => console.log(montoActual))
// .catch(error => console.log(error))


interface Xmen {
   nombre:string;
   edad:number;
}

const enviarMision = (xmen:Xmen) =>{
   console.log('enviando a'+ xmen.nombre+'a la mision');
}

const regresarMision = (xmen:Xmen) =>{
   console.log('regresando a'+ xmen.nombre+'a la mision');
}

const wolve:Xmen = {
   nombre:"omar",
   edad:13
};


//CLASEES

class Avenger {


   constructor(
        public  nombre:string,
        public  equipo:string,
        public  nombreReal?:string,
        public  puedePelear:boolean= true,
        public  peleasGanadas:number= 0
   ){}

}

const antman= new Avenger('steve','ironman');



const wolverine={
   nombre:"Logan"
};

saludar('omar');

suma(12,13);

activar('omar','tarde','jaja');