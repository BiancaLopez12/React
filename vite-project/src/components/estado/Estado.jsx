//Hooks -> useState
import { useEffect, useState } from "react";

//calmecase es la manera de escribir en la cual cada palabra nueva arranca con Mayuscula

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  useEffect(() => {}, []);
  //El useEffect se va a ejecutar la cantidad de veces que las dependencias se actualicen
  //Si no le pasan dependencias se ejecutara solo al principio de la app
  //en el primer render
  //Si no se les pasa el array de dependencias siempre se va a ejecutar
  useEffect(() => {
    console.log("El contador se ha actualizado");
  }, [contador]);

  const arrayPersonaje = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      Image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      Image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div>
        {
          //Cuando despues de la funcion hay parentesis significa que el return
          //return implicito
          arrayPersonaje.map((personaje, index) => (
            <div>
              <h2>
                FullName: {personaje.name}
                {personaje.lastName}
                {""}
              </h2>
              <p>Planet: {personaje.planet}</p>
              <img src={personaje.Image} alt="description" />
            </div>
          ))
        }
      </div>
      <button onClick={handleClick}>Aumentar</button>
      <p>{contador}</p>
    </>
  );
};
