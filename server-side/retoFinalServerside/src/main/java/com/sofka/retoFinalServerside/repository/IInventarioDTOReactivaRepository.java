package com.sofka.retoFinalServerside.repository;

import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

public interface IInventarioDTOReactivaRepository extends ReactiveMongoRepository<InventarioDTOReactiva, String> {
    Mono<InventarioDTOReactiva> findByNombreProducto(String nombreProducto);
}
