import React, { useState } from "react"; /*En esta linea se importa el react para que el componente agarre todos los paquetes.
*/

const FormTodo = props => {/*Se crea la constante FormTodo como funcion arrow, ya que así es la forma de crear un componente, el parametro props sirve para traer una clave 
de un objeto, o las propiedades de un componente para que se pueda reutilizar de padre a hijo. */
  const { handleAddItem } = props; //En esta variable es igual al props porque es un valor que se va a retornar.
  const [description, setDescription] = useState(""); /*En esta constante se crean 2 estados, el nombre del estado actual de un evento y el otro es el estado que se va ir
  cambiando que a medida el usuario va a interactuando en ella*/
  const handleSubmit = e => {//Se crea otra funcion que tiene como parametro e de (evento)
    e.preventDefault(); //este metodo evita que la pagina se actualice.
  
    handleAddItem({/*Entonces acá es donde se trae esa variable para que sea un objeto, tiene como clave el valor de falso porque aun no hay un dato escrito, un id donde
    pasa la fecha y la descripcion. */
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription(""); //Es por eso que mientras que se escriba algo, el estado actual seria este.
  };
  return (
    <form onSubmit={handleSubmit}>{/*En este form se llama la propiedad onSubmit para que cuando se de click o de un enter se llame a la funcion*/}

      <div className="todo-list">
        <div className="file-input">
          {/*En este input el valor trae el la descripcion del id, en el atributo onChange, es una funcion donde el estado actual se muestre lo que escribe la persona*/}
          <input
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {/*En el boton si la descripcion del input está vacio entonces que se desabilite*/}
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;