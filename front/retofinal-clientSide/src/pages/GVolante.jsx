import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import api from '../redux/api/api'

import '../assets/styles/containers/gvolante.scss'

const GVolante = () => {

    const [productos, setProductos] = useState([]);
    const [volante, setVolante] = useState({proveedor: {}, productoList: []});
    const [datosDisabled, setDatosDisabled] = useState(false)

    const dispatch = useDispatch();

    const guardarVolante =() => {
        dispatch(api.saveVolantes(volante))
        console.log(volante)
        
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const nombre = e.target.elements.nombre.value;
        const celular = e.target.elements.celular.value;
        const id = e.target.elements.idProveedor.value;
        setVolante({...volante, proveedor: {nombre,celular,id}}) 
        setDatosDisabled(!datosDisabled)
        
    }

    const submitHandlerProductos = (e) => {
        e.preventDefault();

        const nombreProducto = e.target.elements.nombreProducto.value;
        const cantidad = e.target.elements.cantidad.value;
        const precio = e.target.elements.precio.value;

        setProductos([...productos, {nombreProducto,cantidad, precio}])
        console.log(volante.productoList)
        setVolante({...volante, productoList: [...volante.productoList,{nombreProducto,cantidad, precio} ]})
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
                    <ul>
                    {productos.map(p => {
                        return (
                        <li key={uuid()}><h3>{p.nombreProducto}{"-----------"}{p.cantidad}{"---------"}{p.precio}</h3></li>
                        )
                    })}
                     </ul> 
                </label>
            </form>
            </div>
            { <button onClick={()=>guardarVolante()}>Guardar Volante</button> }
        </div>
    );
};

export default GVolante;