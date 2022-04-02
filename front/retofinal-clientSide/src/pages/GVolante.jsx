import React, { useState } from 'react';
import uuid from 'react-uuid';

import '../assets/styles/containers/gvolante.scss'

const GVolante = () => {

    const [productos, setProductos] = useState([]);
    const [volante, setVolante] = useState({});
    const [datosDisabled, setDatosDisabled] = useState(false)

    // const guardarProductos = (nombreProducto, cantidad, precio) => {
        
    //     setProductos([...productos, {nombreProducto,cantidad, precio}])
    // }

    const guardarVolante =() => {
        
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const nombre = e.target.elements.nombre.value;
        const celular = e.target.elements.celular.value;
        const idProveedor = e.target.elements.idProveedor.value;
       // console.log(nombre)  
        setVolante({nombre,celular,idProveedor}) 
        setDatosDisabled(!datosDisabled)
        console.log(volante)     
        
    }

    const submitHandlerProductos = (e) => {
        e.preventDefault();

        const nombreProducto = e.target.elements.nombreProducto.value;
        const cantidad = e.target.elements.cantidad.value;
        const precio = e.target.elements.precio.value;

        //guardarProductos(nombreProducto,cantidad, precio)
        setProductos([...productos, {nombreProducto,cantidad, precio}])
    }


    return (
        <div>
            <h1>Generar Volante</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Nombre:
                    <input type="text" id='nombre' disabled={datosDisabled}/>
                </label>
                <label>
                    Identificación:
                    <input type="text" id='idProveedor' disabled={datosDisabled}/>
                </label>
                <label>
                    Celular:
                    <input type="number" id='celular' disabled={datosDisabled}/>
                </label>
                <label>
                    <input type="submit" value="Agregar Productos" disabled={datosDisabled}/>
                    <input type="submit" value="Editar Datos" disabled={!datosDisabled}/>
                </label>
               
                
            </form>
            <div hidden={!datosDisabled}>
            <form onSubmit={submitHandlerProductos}>
            <h2>Productos:</h2>
            <label className='label-productos'>                    
                    <input type="text" id='nombreProducto' placeholder='Nombre' className='input-nombre'/>
                    <input type="number" id='cantidad' placeholder='Cantidad' className='input-cantidad'/>
                    <input type="number" id='precio' placeholder='Precio unitario' className='input-precio'/>
                    <input type="submit" value="Agregar" className='input-submit'/>
                </label> 
                <label>
                    <h2>Productos Seleccionados</h2>
                    {productos.map(p => {
                        return <ul>
                            <li><h3 key={uuid()}>{p.nombreProducto}{"-----------"}{p.cantidad}{"---------"}{p.precio}</h3></li>
                        </ul> 
                    })}
                </label>
            </form>
            </div>
            { <button onClick={()=>guardarVolante()}>Guardar Volante</button> }
        </div>
    );
};

export default GVolante;