package com.sofka.retoFinalServerside.service.implement;

import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import com.sofka.retoFinalServerside.repository.IInventarioDTOReactivaRepository;
import com.sofka.retoFinalServerside.service.IInventarioDTOReactivaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class InventarioDTOReactivaService implements IInventarioDTOReactivaService {

    @Autowired
    private IInventarioDTOReactivaRepository repository;

    @Override
    public Mono<InventarioDTOReactiva> save(InventarioDTOReactiva inventarioDTOReactiva) {
        return repository.save(inventarioDTOReactiva);
    }

    @Override
    public Mono<InventarioDTOReactiva> delete(String id) {
        return repository.findById(id)
                .flatMap(inventario -> repository.deleteById(inventario.getId()).thenReturn(inventario));
    }

    @Override
    public Mono<InventarioDTOReactiva> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public Flux<InventarioDTOReactiva> findAll() {
        return repository.findAll();
    }

    @Override
    public Mono<InventarioDTOReactiva> update(String id, InventarioDTOReactiva inventarioDTOReactiva) {
        return repository.findById(id)
                .flatMap(inventario -> {
                    inventarioDTOReactiva.setId(id);
                    return save(inventarioDTOReactiva);
                });
    }

    @Override
    public Mono<InventarioDTOReactiva> findByNombreProducto(String nombreProducto) {
        return repository.findByNombreProducto(nombreProducto);
    }

}
