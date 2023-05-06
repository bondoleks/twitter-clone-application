package demo.project.twitter.facade.controller;

import demo.project.twitter.facade.service.FacadeAbstractCrud;
import demo.project.twitter.facade.service.MapperAbstract;
import jakarta.persistence.MappedSuperclass;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;

@MappedSuperclass
@RequiredArgsConstructor
@RestController
@Log4j2
public abstract class ControllerAbstractCrud<E> {
    private final FacadeAbstractCrud<E> serviceFacade;
    private final MapperAbstract mg;


    @GetMapping("read/{id}")
    public ResponseEntity<?> getEntity(@PathVariable("id") Integer id) throws ClassNotFoundException, InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException {
        return serviceFacade.getEntity(id, mg.dto());
    }

    @GetMapping("read/all")
    public Object getEntityAll() {
        return serviceFacade.getEntityAll(mg.dto());
    }

    @PostMapping("save")
    public Object saveEntity(@RequestBody Object dm1) {
        return serviceFacade.saveEntity(dm1, mg.ent(), mg.dto());
    }

    @PutMapping("update")
    public Object updateEntity(@RequestBody Object dm1) {
        return serviceFacade.saveEntity(dm1, mg.ent(), mg.dto());
    }

    @DeleteMapping("remove/all")
    public void delAllEntity() {
        serviceFacade.delAllEntity();
    }

    @DeleteMapping("remove/{id}")
    public ResponseEntity<?> delEntityById(@PathVariable("id") Integer id) {
        return serviceFacade.delEntityById(id);
    }

}
