package com.sofka.retoFinalServerside.service.implement;

import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import com.sofka.retoFinalServerside.domain.Producto;
import com.sofka.retoFinalServerside.domain.VolanteDTOReactivo;
import com.sofka.retoFinalServerside.repository.IVolanteDTOReactivaRepository;
import com.sofka.retoFinalServerside.service.IInventarioDTOReactivaService;
import com.sofka.retoFinalServerside.service.IVolanteDTOReactivaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class VolanteDTOReactivaService implements IVolanteDTOReactivaService {

    @Autowired
    private IVolanteDTOReactivaRepository repository;

    @Override
    public Mono<VolanteDTOReactivo> save(VolanteDTOReactivo volanteDTOReactivo) {
        volanteDTOReactivo.setFecha(LocalDate.now());
        volanteDTOReactivo.setHora(LocalTime.parse((LocalTime.now()).format(DateTimeFormatter.ofPattern("HH:mm:ss"))));
        return repository.save(volanteDTOReactivo);
    }

    @Override
    public Mono<VolanteDTOReactivo> delete(String id) {
        return repository.findById(id)
                .flatMap(volante -> repository.deleteById(volante.getId()).thenReturn(volante));
    }

    @Override
    public Mono<VolanteDTOReactivo> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public Flux<VolanteDTOReactivo> findAll() {
        return repository.findAll();
    }
}
