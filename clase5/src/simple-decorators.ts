function SetAge(age: number){
  return function<T extends {new(...args: any[]):{}}>(constructor: T){
    return class extends constructor{
      age!: number;
      constructor(...args: any[]){
        super();
        this.age = age
      }
    }
  }
}
@SetAge(28)
class Person {
  age!: number;
}
const getUser = new Person();
console.log(getUser.age)

function ValidateAge(age:number){
  return function(target: any, propName: string){
    let assignedAge = target[propName];
    Object.defineProperty(target, propName, {
      set: (newAge: number)=>{
        if (newAge < age) {
          throw new Error('Debe ser mayor o igual a 18')
        }
        assignedAge = newAge;
      },
      get: ()=> assignedAge,
    })
  }
}

class Person2 {
  @ValidateAge(18)
  age!: number;
}

const newPerson2 = new Person2()
// newPerson2.age = 15;
newPerson2.age = 31;
console.log(newPerson2.age)