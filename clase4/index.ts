//types condiciones 
type TPerro = {
  nombrePerro: string;
  edad: number;
  ladra: boolean;
}
type TGato = {
  nombreGato: string;
  edad: number;
  trepa: boolean;
}
type TSeleccionAnimal<T extends "perro" | "gato"> = T extends "perro"?TPerro:TGato;

function seleccionAnimal<T extends "perro"| "gato">(animal:TSeleccionAnimal<T>) {
  console.log(animal)
}

seleccionAnimal<"perro">({
edad: 5,
nombrePerro: 'sanson',
ladra: true
})