package com.sofka.retoFinalServerside.service;

import com.sofka.retoFinalServerside.domain.VolanteDTOReactivo;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IVolanteDTOReactivaService {

    Mono<VolanteDTOReactivo> save(VolanteDTOReactivo volanteDTOReactivo);
    Mono<VolanteDTOReactivo> delete(String id);
    Mono<VolanteDTOReactivo> findById(String id);
    Flux<VolanteDTOReactivo> findAll();
}
