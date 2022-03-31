package com.sofka.retoFinalServerside.repository;

import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface IFacturaDTOReactivaRepository extends ReactiveMongoRepository<FacturaDTOReactiva, String> {

}
