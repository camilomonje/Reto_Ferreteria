package com.sofka.retoFinalServerside.service;

import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IFacturaDTOReactivaService {

    Mono<FacturaDTOReactiva> save(FacturaDTOReactiva facturaDTOReactiva);
    Mono<FacturaDTOReactiva> delete(String idFactura);
    Mono<FacturaDTOReactiva> findByIdFactura(String idFactura);
    Flux<FacturaDTOReactiva> findAll();
}
