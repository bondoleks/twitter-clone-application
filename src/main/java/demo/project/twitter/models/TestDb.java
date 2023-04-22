package demo.project.twitter.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "TEST")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestDb {

        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        @Column(name = "id", nullable = false)
        private Long Id;

        @Column(name = "name")
        private String name;

        public TestDb(String name){
                this.name = name;
        }
}
