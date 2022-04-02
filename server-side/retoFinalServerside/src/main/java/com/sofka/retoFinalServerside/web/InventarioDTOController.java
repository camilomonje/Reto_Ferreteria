package com.sofka.retoFinalServerside.web;

import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import com.sofka.retoFinalServerside.domain.VolanteDTOReactivo;
import com.sofka.retoFinalServerside.service.implement.InventarioDTOReactivaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/inventario")
public class InventarioDTOController {

    @Autowired
    InventarioDTOReactivaService service;

    @GetMapping("")
    private Flux<InventarioDTOReactiva> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    private Mono<InventarioDTOReactiva> findById(@PathVariable("id") String id) {
        return service.findById(id);
    }

    @GetMapping("/{nombreProducto}/findByName")
    private Mono<InventarioDTOReactiva> findByNombreProducto(@PathVariable("nombreProducto") String nombreProducto) {
        return service.findByNombreProducto(nombreProducto);
    }


    @PostMapping("")
    private Mono<InventarioDTOReactiva> save(@RequestBody InventarioDTOReactiva inventario){
        return service.save(inventario);
    }

    @PutMapping("/{id}")
    private Mono<InventarioDTOReactiva> update(
            @PathVariable("id") String id,
            @RequestBody InventarioDTOReactiva inventario){
        return service.update(id, inventario);
    }

    @DeleteMapping("/{id}")
    private Mono<ResponseEntity<InventarioDTOReactiva>> delete(@PathVariable("id") String id) {
        return this.service.delete(id)
                .flatMap(inventario -> Mono.just(ResponseEntity.ok(inventario)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }



}
