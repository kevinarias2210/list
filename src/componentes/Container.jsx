import React, { useState } from "react";

/*Acá se importan los dos componentes que se necesitan ver, la lista de tareas y un form que cuando
se llene el form se agregará a la lista de tareas */
import TaskList from "./Tasklist";
import FormTodo from "./FormTodo";

/*Por eso en el container se guarda la lista de los items que se están guardando y en el formTodo
se muestra toda esa lista en si y en el tasklist se mostrará toda la funcionalidad de si se está
agregando una tarea o no*/
const Container = () => {
    const [list, setList] = useState([]); 


    const handleAddItem = addItem => {
        setList([...list, addItem]); 
    };
    return (
        <div>

        <FormTodo handleAddItem={handleAddItem} />

        <TaskList list={list} setList={setList} />
        </div>
    );
};

export default Container;
