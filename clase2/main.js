class Usuario{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros= [];
        this.mascotas=[]
    }
   getFullName = function(){
    return (`${this.nombre} ${this.apellido}`)
   }

   addBook = function(titulo, autor){
    this.libros.push({titulo: titulo, autor: autor})
   }

   addPet = function(mascota){
    this.mascotas.push(mascota)
   }

   getBooks = function(){
    this.libros.map((libro)=>{
        return console.log(`${libro.titulo}, ${libro.autor}`)
    })
   }

   countsMascotas = function(){
    return this.mascotas.length
   }
}

let usuario1 = new Usuario("enzo","vazquez");

console.log(usuario1.getFullName());

usuario1.addPet("loro")
usuario1.addPet("Puffle")

usuario1.addBook("Rebelion en la granja", "George Orwell");
usuario1.addBook("Frankenstein", "Mary shelley");
usuario1.addBook("Rayuela", "Julio Cortázar");

console.log(usuario1.getBooks())
console.log(usuario1.countsMascotas())