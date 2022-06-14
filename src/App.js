function App() {
const persona = {

  nombre: "Jose Andres",
  apellidoPaterno: "Lopez",
  apellidoMaterno: "Delgado",
  edad: 23,
  
};


const { nombre, apellidoPaterno, apellidoMaterno, edad} = persona;

const contactoPersona = {
  telefono: "551 700 9899",
  email: "andreslopez@gmail.com",
  empresa: "IMSS",
}
const nuevoTelefono = "555 522 7877";
const infoPersona = {
  ...persona, 
  ...contactoPersona, 
  puesto: "Trabajador",
telefono: nuevoTelefono,
 };

//console.log(persona);
//console.log(contactoPersona);
//console.log(infoPersona); 


const frutas = ["manzana", "naranja", "fresa", "pera"];
const vegetales = ["ierva mora", "zanahoria", "espinaca"];
const carnes = ["res", "cerdo", "pollo", "pescado"];

const alimentos = [
  ...frutas, 
  ...vegetales, 
  ...carnes,
"otro alimento",
 ];
 
 console.table(frutas);
 console.table(vegetales);
 console.table(carnes);
 console.table(alimentos);
 

   return (
  <div className="App">
    <h3>
  {`Soy ${nombre} ${apellidoPaterno} ${apellidoMaterno} y tengo ${edad} años.`}
  </h3>
 
  
  
  </div>
  );
}

export default App;

