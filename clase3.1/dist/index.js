import { v4 as uuid } from 'uuid';
class User {
    id = uuid();
    name;
    role;
}
class Teacher extends User {
    course;
    constructor(name, course) {
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
    isDirector = true;
    getDataUser() {
        console.log({ ...this });
    }
}
class Student extends User {
    constructor(name) {
        super();
        this.role = 'student';
        this.name = name;
    }
    couses = [];
    addCourse(course) {
        this.couses.push(course);
    }
    getDataUser() {
        console.log({ ...this, });
    }
}
const newTeacher = new Teacher('wilson', ' Typescript');
newTeacher.getDataUser();
const newStudent = new Student("Harvey");
newStudent.getDataUser();
newStudent.addCourse('Javascript Avanzado');
newStudent.getDataUser();
newStudent.addCourse('Typescript Avanzado');
newStudent.getDataUser();
//# sourceMappingURL=index.js.map