package com.sofka.retoFinalServerside.domain;

public class Persona {

    private String nombre;

    private Long celular;

    private String idCliente;

    public Persona(String idCliente, String nombre, Long celular) {
        this.nombre = nombre;
        this.celular = celular;
        this.idCliente = idCliente;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getCelular() {
        return celular;
    }

    public void setCelular(Long celular) {
        this.celular = celular;
    }

    public String getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(String idCliente) {
        this.idCliente = idCliente;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "nombre='" + nombre + '\'' +
                ", celular=" + celular +
                ", idCliente='" + idCliente + '\'' +
                '}';
    }
}
