package com.sofka.retoFinalServerside.repository;

import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface IInventarioDTOReactivaRepository extends ReactiveMongoRepository<InventarioDTOReactiva, String> {

}
