package com.sofka.retoFinalServerside.service.implement;

import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import com.sofka.retoFinalServerside.repository.IFacturaDTOReactivaRepository;
import com.sofka.retoFinalServerside.service.IFacturaDTOReactivaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class FacturaDTOReactivaService implements IFacturaDTOReactivaService {

    private static final Logger log = LoggerFactory.getLogger(FacturaDTOReactiva.class);
    @Autowired
    private IFacturaDTOReactivaRepository repository;

    @Override
    public Mono<FacturaDTOReactiva> save(FacturaDTOReactiva facturaDTOReactiva) {
        return repository.save(facturaDTOReactiva);
    }

    @Override
    public Mono<FacturaDTOReactiva> delete(String idFactura) {
        return repository.findByIdFactura(idFactura)
                .flatMap(factura -> repository
                        .deleteById(factura.getId()).thenReturn(factura));
    }

    @Override
    public Mono<FacturaDTOReactiva> findByIdFactura(String idFactura) {
        return repository.findByIdFactura(idFactura);
    }

    @Override
    public Flux<FacturaDTOReactiva> findAll() {
        return repository.findAll();
    }
}
