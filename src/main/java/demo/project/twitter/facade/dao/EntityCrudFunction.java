package demo.project.twitter.facade.dao;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface EntityCrudFunction<E> {
    E saveOne(E e);
    Optional<E> getById(Integer id);
    void delById(Integer id);
    void delAll();
    List<E> getAll();
    boolean existsById(Integer id);
}
