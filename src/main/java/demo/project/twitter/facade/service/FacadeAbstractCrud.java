package demo.project.twitter.facade.service;

import jakarta.persistence.MappedSuperclass;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.stream.Collectors;

@MappedSuperclass
@RequiredArgsConstructor
@Service
@Log4j2
public abstract class FacadeAbstractCrud<E> {
    private final Mapper mm;
    private final ServiceAbstractCrud<E> service;
    private Object getClazz(String s) {
        try {
            Object model = Class.forName(s).getConstructor().newInstance();
            return model;
        } catch (ClassNotFoundException | NoSuchMethodException | InvocationTargetException | InstantiationException |
                 IllegalAccessException ex) {
            return null;
        }
    }
    public ResponseEntity<?> getEntity(Integer id, String dtoName) {
        if (service.existsById(id)) {
            Object dtoModel = getClazz(dtoName);
            mm.mapper().map(service.getById(id).get(), dtoModel);
            return ResponseEntity.accepted().body(dtoModel);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with cod " + id + " not found");
        }
    }
    public List<?> getEntityAll(String dtoName) {
        Object dtoModel = getClazz(dtoName);
        return service.getAll().
                stream().
                map(x -> mm.mapper().map(x, dtoModel.getClass())).collect(Collectors.toList());
    }
    public Object saveEntity(Object requestBody, String entityName, String dtoName) {
        Object entityModel = getClazz(entityName);
        Object dtoModel = getClazz(dtoName);
        mm.mapper().map(requestBody, entityModel);
        Object entityModelNew = service.saveOne((E) entityModel);
        mm.mapper().map(entityModelNew, dtoModel);
        return dtoModel;
    }
    public void delAllEntity() {
        service.delAll();
    }
    public ResponseEntity<?> delEntityById(Integer id) {
        if (service.existsById(id)) {
            service.delById(id);
            return ResponseEntity.accepted().body("Object with cod " + id + " removed");
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body("Object with cod " + id + " not found");
        }
    }
}






