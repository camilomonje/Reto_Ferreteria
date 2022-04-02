package com.sofka.retoFinalServerside.service;

import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IInventarioDTOReactivaService {

    Mono<InventarioDTOReactiva> save(InventarioDTOReactiva inventarioDTOReactiva);
    Mono<InventarioDTOReactiva> delete(String id);
    Mono<InventarioDTOReactiva> findById(String id);
    Flux<InventarioDTOReactiva> findAll();
    Mono<InventarioDTOReactiva> update(String id, InventarioDTOReactiva inventarioDTOReactiva);
    Mono<InventarioDTOReactiva> findByNombreProducto(String nombreProducto);
}
