// clase y herencia ejemplo
class Vehiculo{
    constructor(color, marca, año){
        this.color = color;
        this.marca = marca;
        this.año = año;
    }
    prendeMotor(){
        return `Motor andando en auto marca: ${this.marca}`
    }
}

class Camioneta extends Vehiculo{
    constructor(cabina, color, año){
        super(color, null, año)
        this.cabina = cabina;
    }

    entregarData(){
        return {
            color: this.color,
            cabina: this.cabina,
            año: this.año
        }
    }
}

let V = new Vehiculo('rojo', 'nissan', '2024')

let C = new Camioneta('doble', 'negro', '2022')

console.log(V)
console.log(C.prendeMotor())


// IIFE estructura de ejemplo
let loadVideo = (()=>{
    let loadPrivate = (id, url)=>{
        document.getElementById(id).setAttribute('src',url);
    };
    return {
        showAll: (id, url)=>{
            loadPrivate(id, url);
        }
    }
})();