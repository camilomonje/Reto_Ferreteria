package com.sofka.retoFinalServerside.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Document(collection = "factura")
public class FacturaDTOReactiva {

    @Id
    private String id;

    private String consecutivo;

    private LocalDate fecha;

    private Persona cliente;

    private String nombreVendedor;

    private List<Producto> listaProductos;

    private double totalPrecio;


}
