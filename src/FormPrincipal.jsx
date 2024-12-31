
import { useEffect, useState } from 'react'
import { AddName } from './AddName'
import { AddAge } from './AddAge'



export const FormPrincipal = () => {

   const [name, setName] = useState("HolaInicio");
   const [age, setAge] = useState(0);
   const [updated, setUpdated] = useState(false);  

  useEffect(() => {
    // useEffect ejecutará el 1º componente (getGifs) cuando cambien las dependencias indicadas (2º componente). Si es vacío, solo se ejecutará la 1º vez.
    onAddName;
  }, []);

  const actualiza = () => {    
    setUpdated(true);
    console.log("actualiza: ", name)    
    console.log("actualiza: ", age)    
  }

  const onAddName = (valor) => {
    setName(valor);
    console.log("log: ",valor);
    console.log("updated: ", updated);
    setUpdated(false);
  }

  const onAddAge = (valor) => {
    setAge(valor);
    console.log("log: ",valor);
    console.log("updated: ", updated);
    setUpdated(false);
  }


  return (
    <>
      <h1>Introduce tus datos</h1>

      <AddName onNewName={(value) => onAddName(value)} />
      <br></br>
      <AddAge onNewAge={(value) => onAddAge(value)} />
      <br></br>
      <button onClick={ actualiza }> Actualiza </button>

      {
        updated && <h2>Hola {name}, tienes {age} años</h2>
      }
           

    </>
  );
};
