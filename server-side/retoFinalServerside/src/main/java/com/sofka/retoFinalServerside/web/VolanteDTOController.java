package com.sofka.retoFinalServerside.web;

import com.sofka.retoFinalServerside.domain.VolanteDTOReactivo;
import com.sofka.retoFinalServerside.service.implement.VolanteDTOReactivaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/volante")
public class VolanteDTOController {

    @Autowired
    private VolanteDTOReactivaService service;

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<VolanteDTOReactivo> save(@RequestBody VolanteDTOReactivo volante){
        return service.save(volante);
    }

    @GetMapping("")
    private Flux<VolanteDTOReactivo> findAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    private Mono<VolanteDTOReactivo> findById(@PathVariable("id") String id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    private Mono<ResponseEntity<VolanteDTOReactivo>> delete(@PathVariable("id") String id) {
        return this.service.delete(id)
                .flatMap(volante -> Mono.just(ResponseEntity.ok(volante)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }



}
