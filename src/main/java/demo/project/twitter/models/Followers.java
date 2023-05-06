package demo.project.twitter.models;

import demo.project.twitter.model.BaseEntity;
import demo.project.twitter.model.User;
import lombok.*;

import javax.persistence.*;
import java.util.List;


@EqualsAndHashCode(callSuper = true)
    @Entity
    @Table(name = "followers")
    @Builder
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
public class Followers extends BaseEntity {

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "follower_id", referencedColumnName = "id")
    private List<User> followers;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "followed_id", referencedColumnName = "id")
    private List<User> followed;

    }
