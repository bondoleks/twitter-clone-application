package demo.project.twitter.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.util.Date;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class Auditable<U> {

    @CreatedDate
    @Column(name = "created_at")
    private Date createdDate;

    @CreatedBy
    @Column(name = "created_by")
    private U createdBy;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Date updatedDate;

    @LastModifiedBy
    @Column(name = "updated_by")
    private U updatedBy;


}
