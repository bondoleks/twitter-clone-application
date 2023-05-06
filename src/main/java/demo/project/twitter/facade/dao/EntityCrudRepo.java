package demo.project.twitter.facade.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;


@NoRepositoryBean
public interface EntityCrudRepo<E> extends CrudRepository<E, Integer> { }
