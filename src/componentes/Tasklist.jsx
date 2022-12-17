import React from "react";
import Checkbox from "./Checkbox";//Traemos el componente

const TaskList = props => {//Creamos el nuevo componente

    const { list, setList } = props;//Pasamos dos variables que se pueden heredar

    const onChangeStatus = e => {
        const { name, checked } = e.target;//En estas variables se mostrará en el target

        /*Variable updateList pasa el recorrido de la lista que tenemos en handleAddItem
        y el item guarda una nueva  lista de objetos que es done, id  entonces si el item
        tiene el mismo id en el name está hecho, si no tambien está echo*/
        const updateList = list.map(item => ({
        ...item,
        done: item.id === name ? checked : item.done
        }));
        setList(updateList);//Y esa funcion va a ser el estado nuevo que va a tener
    };

    //Cuando la lista se filtra y los items no esten echo, ese va a ser su nuevo estado.
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    /*Cuando recorre a lista, el checbox tendra todos los datos y cuando cambien el estado normal
    se mostrará que está echo*/ 
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
        <div className="todo-list">
        {/*Entonces cuando la lista tiene una longitus, se mostrará si no, no mostrará ninguna tarea*/}
        {list.length ? chk : "No tasks"}
        {/*Cuando se de click al boton cambiara al estado de no está echo*/}
        {list.length ? (
        <p>
        <button className="button blue" onClick={onClickRemoveItem}>
        Delete all done
        </button>
        </p>
        ) : null}
        </div>
    );
};

export default TaskList;