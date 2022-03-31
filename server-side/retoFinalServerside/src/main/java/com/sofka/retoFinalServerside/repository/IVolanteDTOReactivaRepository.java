package com.sofka.retoFinalServerside.repository;

import com.sofka.retoFinalServerside.domain.VolanteDTOReactivo;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface IVolanteDTOReactivaRepository extends ReactiveMongoRepository<VolanteDTOReactivo, String> {

}
