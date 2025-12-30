import { v4 as uuid } from 'uuid'

abstract class User {
  private id: string = uuid();
  protected name!: string;
  protected role!: 'teache' | 'student';

  abstract getDataUser(): void
}

class Teacher extends User {
  private course!: string;
  constructor(name: string, course: string){
    super();
    this.role = 'teache';
    this.name = name;
    this.course = course;
  }
  //private no permite instanciar fuera de la clase
  // readonly solo lectura
  // public puede ser accedido desde cualquier parte 
  // protected puede ser accedido desde la clase y clases que hereden de esta
  //abstract obliga a implementar el metodo en las clases hijas
  private readonly isDirector: boolean = true
  public getDataUser(): void {
    console.log({...this})
  }
}
class Student extends User {
  constructor(name: string){
    super();
    this.role = 'student';
    this.name = name;

  }
  private couses: Array<string>=[];
  public addCourse(course: string){
    this.couses.push(course);
  }
  public getDataUser(): void {
    console.log({...this,});
  }
}

const newTeacher = new Teacher ('wilson', ' Typescript');
newTeacher.getDataUser();

const newStudent = new Student ("Harvey");
newStudent.getDataUser();
newStudent.addCourse('Javascript Avanzado');
newStudent.getDataUser();
newStudent.addCourse('Typescript Avanzado');
newStudent.getDataUser();
