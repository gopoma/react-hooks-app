import React from "react";

const Small = React.memo(({value}) => {
    // ¿Qué sucedería que en vez de un console.log tuvieramos una tarea pesada?
    // Si el Componente fuese simple, es más rápido no utilizar el React.memo
    console.log("Me volvi a renderizar :c");

    return (
        <small>{value}</small>
    );
});

export default Small;