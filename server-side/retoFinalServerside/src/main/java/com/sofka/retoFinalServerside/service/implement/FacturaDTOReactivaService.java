package com.sofka.retoFinalServerside.service.implement;

import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import com.sofka.retoFinalServerside.repository.IFacturaDTOReactivaRepository;
import com.sofka.retoFinalServerside.service.IFacturaDTOReactivaService;
import com.sofka.retoFinalServerside.service.IInventarioDTOReactivaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Service
public class FacturaDTOReactivaService implements IFacturaDTOReactivaService {

    private static final Logger log = LoggerFactory.getLogger(FacturaDTOReactiva.class);
    @Autowired
    private IFacturaDTOReactivaRepository repository;

    @Override
    public Mono<FacturaDTOReactiva> save(FacturaDTOReactiva facturaDTOReactiva) {
        facturaDTOReactiva.setFecha(LocalDate.now());
        facturaDTOReactiva.setHora(LocalTime.parse((LocalTime.now()).format(DateTimeFormatter.ofPattern("HH:mm:ss"))));
        return repository.save(facturaDTOReactiva);
    }

    @Override
    public Mono<FacturaDTOReactiva> delete(String id) {
        return repository.findById(id)
                .flatMap(factura -> repository
                        .deleteById(factura.getId()).thenReturn(factura));
    }

    @Override
    public Mono<FacturaDTOReactiva> findById(String id) {
        return null;
    }

    @Override
    public Flux<FacturaDTOReactiva> findAll() {
        return repository.findAll();
    }
}
