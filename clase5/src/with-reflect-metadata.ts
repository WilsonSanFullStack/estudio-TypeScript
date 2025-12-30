import "reflect-metadata";

const titleCaseRX = /^\s*([A-Z]\w*\s*)*$/;

function Validate() {
  return function (
    this: unknown,
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    let originalValue = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const index: any = Reflect.getMetadata("validate:name", target, key);
      const value: string = args[index];
      if (!titleCaseRX.test(value)) {
        throw new Error("El nombre debe llevar la mayuscula inicial");
      } else {
        originalValue.apply(this, args);
      }
    };
  };
}

function TitleCase() {
  return function (target: Object, key: string, index: number) {
    Reflect.defineMetadata("validate:name", index, target, key);
  };
}
class User {
  @Validate()
  public myInfo(@TitleCase() name: string, age: number) {
    console.log({
      name,
      age,
    });
  }
}

new User().myInfo("WIlson", 31);
