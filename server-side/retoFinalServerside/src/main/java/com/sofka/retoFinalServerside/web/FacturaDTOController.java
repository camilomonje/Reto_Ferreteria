package com.sofka.retoFinalServerside.web;

import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import com.sofka.retoFinalServerside.domain.InventarioDTOReactiva;
import com.sofka.retoFinalServerside.service.implement.FacturaDTOReactivaService;
import com.sofka.retoFinalServerside.service.implement.InventarioDTOReactivaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/factura")
public class FacturaDTOController {

    @Autowired
    FacturaDTOReactivaService service;

    @GetMapping("")
    private Flux<FacturaDTOReactiva> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    private Mono<FacturaDTOReactiva> findById(@PathVariable("id") String id) {
        return service.findById(id);
    }

    @PostMapping("")
    private Mono<FacturaDTOReactiva> save(@RequestBody FacturaDTOReactiva factura){
        return service.save(factura);
    }


    @DeleteMapping("/{id}")
    private Mono<ResponseEntity<FacturaDTOReactiva>> delete(@PathVariable("id") String id) {
        return this.service.delete(id)
                .flatMap(factura -> Mono.just(ResponseEntity.ok(factura)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }
}
