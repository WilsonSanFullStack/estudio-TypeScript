//! Que es un generico
//Podemos entender los genericos como una especie de "plantilla" de codigo, mediante la cual podemos aplicar un tipo de dato determinado a varios puntos de nuestro codigo.

//<T>
interface MyGenericInterface<T, U> {
  myGenericType: T | U;
}
const example: MyGenericInterface<string, number | boolean> = {
  myGenericType: true || 'hola' || 123,
}

function getValue<T>(value: T) {
  console.log(value)
}

getValue<number>(28);

const getValue2= <T> (value: T) => {
  console.log(value)
}

type MyGenericType<T, U> = {
  myGenericType: T | U;
}

class GenericClass<T> {
  protected value!:T
constructor(value: {new () : T}){
  this.value =new  value();
}
}

class Rodri {
  public name: string = 'Rodri';
  public age: number = 28;
}

class Maria {
  public nameMaria: string = 'Maria';
  public ageMaria: number = 28;
}

class Greet extends GenericClass<Rodri> {
  constructor(){
    super(Rodri)
  }
  public greet():void{
    console.log(`Hello, ${this.value.name}`);
  }
} 

new Greet().greet();