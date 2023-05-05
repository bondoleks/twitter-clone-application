package demo.project.twitter.model;

import lombok.Data;

import javax.persistence.*;

@MappedSuperclass
@Data
public class BaseEntity extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Version
    private Long version;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;
}
