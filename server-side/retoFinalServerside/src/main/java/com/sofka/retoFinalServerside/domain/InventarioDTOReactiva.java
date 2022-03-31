package com.sofka.retoFinalServerside.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "inventario")
public class InventarioDTOReactiva {

    @Id
    private String id = UUID.randomUUID().toString().substring(0,10);

    private String nombreProducto;

    private double precioUnitario;

    private int cantidad;

    private int minimaCantidad;

    private int maximaCantidad;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public double getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario(double precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
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
