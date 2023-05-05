package demo.project.twitter.models.chat;

import demo.project.twitter.model.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@javax.persistence.Entity
@javax.persistence.Table(name = "chats")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
    public class Chat extends BaseEntity {


    }
