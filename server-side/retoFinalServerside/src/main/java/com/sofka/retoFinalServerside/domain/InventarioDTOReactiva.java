package com.sofka.retoFinalServerside.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "inventario")
public class InventarioDTOReactiva {

    @Id
    private String id;

    private Producto producto;

    private int minimaCantidad;

    private int maximaCantidad;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public int getMinimaCantidad() {
        return minimaCantidad;
    }

    public void setMinimaCantidad(int minimaCantidad) {
        this.minimaCantidad = minimaCantidad;
    }

    public int getMaximaCantidad() {
        return maximaCantidad;
    }

    public void setMaximaCantidad(int maximaCantidad) {
        this.maximaCantidad = maximaCantidad;
    }
}
