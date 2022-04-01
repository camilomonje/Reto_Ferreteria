package com.sofka.retoFinalServerside.service.implement;

import com.sofka.retoFinalServerside.RetoFinalServersideApplication;
import com.sofka.retoFinalServerside.domain.FacturaDTOReactiva;
import com.sofka.retoFinalServerside.domain.Persona;
import com.sofka.retoFinalServerside.domain.Producto;
import com.sofka.retoFinalServerside.service.IFacturaDTOReactivaService;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.logging.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.logging.Logger;

@SpringBootTest
class FacturaDTOReactivaServiceTest {

    @Autowired
    FacturaDTOReactivaService service;
    //private static final Logger log = (Logger) LoggerFactory.getLogger(RetoFinalServersideApplication.class);

    @Test
    void save() {
//        FacturaDTOReactiva factura = new FacturaDTOReactiva();
//      //  factura.setId("1");
//       // factura.setIdFactura(1);
//        factura.setFecha(LocalDateTime.now());
//        factura.setCliente(new Persona("C1","Camilo",3124433610L));
//        factura.setNombreVendedor("Dayana");
//        //factura.setListaProductos(List.of(new Producto("P1", "Alicate", 2, 2000)));
//        factura.setTotalPrecio(10000);
//        Mono<FacturaDTOReactiva> factura2 = service.save(factura);
//
//        StepVerifier.create(factura2).expectNext(factura).verifyComplete();
    }

    @Test
    void delete() {
    }

    @Test
    void findByIdFactura() {
    }

    @Test
    void findAll() {
    }
}