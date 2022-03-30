package com.sofka.retoFinalServerside.domain;

public class Persona {

    private String nombre;

    private int celular;

    private Long idCliente;

    public Persona(Long idCliente, String nombre, int celular) {
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

    public int getCelular() {
        return celular;
    }

    public void setCelular(int celular) {
        this.celular = celular;
    }

    public Long getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Long idCliente) {
        this.idCliente = idCliente;
    }
}
