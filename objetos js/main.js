//Creamos un Objeto literal 
const natalia ={
    name :"Natalia", 
    age : 20,
    cursosAprobados : ["Curso Definitivo de HTML y CSS", "Curso Practico de HTML y CSS"] ,
    //Crear Metodos
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }

};

//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");

//Cambiar nombre
natalia.name = "Nath";






//Ya que creamos un objeto literal ahora vamos a crear nuestro primer prototipo, para eso debemos crear una funcion.

function student(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //Esta seria una forma de crear metodos dentro de nuestro prototipo student
    /*this.aprobarCurso = function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }*/
}

//Esta seria otra forma de como crear un metodo para nuestro prototipo student desde fuera del objeto.
//Creamos un metodo para nuestro prototipo student por fuera de la funcion
student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

//Ahora Creamos una intancia de este prototipo 

const juanita = new student("Juanita",15,["Curso de Introduccion a los video juegos","Curso de creacion de personaje"]);

juanita.aprobarCurso("Curso basico de java");


//practicando creando objetos

function Casa(pisos,habitaciones,color){
    this.pisos =pisos;
    this.habitaciones = habitaciones;
    this.color = color;

    this.cambiarColor = function(nuevoColor){
        this.color = nuevoColor;
    }
}

/*Ahora vamos a ver como crear objetos con clases en javascript
    Como en cualquier lenguaje de programacion vamos a utilizar la palabra reservada class
    seguido del nombre de la clase por ejemplo class Student{}
    En las clases tenemos un metodo constructor para crear un objeto inicial
*/

class Student2{
    constructor(name,age,cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    //Metodos utilizando clases
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

//Creando nueva instancia de nuestro objeto Student2
const miguelito = new Student2("Miguel",28,["Cursos de negocios","Curso de analisis de negocios para ciencia de datos"])

