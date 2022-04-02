import React from 'react';

import '../assets/styles/containers/gvolante.scss'

const GVolante = () => {
    return (
        <div>
            <h1>Generar Volante</h1>
            <form>
                <label>
                    Nombre:
                    <input type="text" id='nombre'/>
                </label>
                <label>
                    Identificación:
                    <input type="text" id='celular'/>
                </label>
                <label>
                    Celular:
                    <input type="number" id='idProveedor'/>
                </label>
                <h2>Productos:</h2>
                <label className='label-productos'>                    
                    <input type="text" id='nombreProducto' placeholder='Nombre' className='input-nombre'/>
                    <input type="number" id='cantidad' placeholder='Cantidad' className='input-cantidad'/>
                    <input type="number" id='precio' placeholder='Precio unitario' className='input-precio'/>
                    <input type="submit" value="Agregar" className='input-submit'/>
                </label>
            </form>
        </div>
    );
};

export default GVolante;