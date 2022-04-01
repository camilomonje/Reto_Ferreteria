package com.sofka.retoFinalServerside.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Document(collection = "factura")
public class FacturaDTOReactiva {

    @Id
    private String id = UUID.randomUUID().toString().substring(0,10);

    private LocalDate fecha;

    private LocalTime hora;

    private Persona cliente;

    private String nombreVendedor;

    private List<Producto> listaProductos;

    private double totalPrecio;

    public FacturaDTOReactiva() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public Persona getCliente() {
        return cliente;
    }

    public void setCliente(Persona cliente) {
        this.cliente = cliente;
    }

    public String getNombreVendedor() {
        return nombreVendedor;
    }

    public void setNombreVendedor(String nombreVendedor) {
        this.nombreVendedor = nombreVendedor;
    }

    public List<Producto> getListaProductos() {
        return listaProductos;
    }

    public void setListaProductos(List<Producto> listaProductos) {
        this.listaProductos = listaProductos;
    }

    public double getTotalPrecio() {
        return totalPrecio;
    }

    public void setTotalPrecio(double totalPrecio) {
        this.totalPrecio = totalPrecio;
    }

    @Override
    public String toString() {
        return "FacturaDTOReactiva{" +
                "id='" + id + '\'' +
                ", fecha=" + fecha +
                ", cliente=" + cliente +
                ", nombreVendedor='" + nombreVendedor + '\'' +
                ", listaProductos=" + listaProductos +
                ", totalPrecio=" + totalPrecio +
                '}';
    }
}
