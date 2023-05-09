package demo.project.twitter.facade.service;

import demo.project.twitter.facade.dao.EntityCrudRepo;
import demo.project.twitter.facade.dao.EntityCrudFunction;
import jakarta.persistence.MappedSuperclass;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@MappedSuperclass
public abstract class ServiceAbstractCrud<E> implements EntityCrudFunction<E> {
    private final EntityCrudRepo<E> repo;
    @Override
    public E saveOne(E e) {
        return repo.save(e);
    }
    @Override
    public Optional<E> getById(Integer id) {
        return repo.findById(id);
    }
    @Override
    public void delById(Integer id) {
        repo.deleteById(id);
    }
    @Override
    public void delAll() {
        repo.deleteAll();
    }
    @Override
    public List<E> getAll() {
        return (List<E>) repo.findAll();
    }
    @Override
    public boolean existsById(Integer id) {
        return repo.existsById(id);
    }
}
