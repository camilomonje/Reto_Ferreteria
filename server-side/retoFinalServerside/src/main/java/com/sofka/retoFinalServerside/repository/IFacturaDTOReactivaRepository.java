package com.sofka.retoFinalServerside.repository;

import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

public interface IFacturaDTOReactivaRepository extends ReactiveMongoRepository<FacturaDTOReactiva, String> {

}
