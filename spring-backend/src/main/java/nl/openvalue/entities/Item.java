package nl.openvalue.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ITEMS")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private Float price;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "item")
    private List<Review> reviews;

    Long getId() {
        return id;
    }

    String getName() {
        return name;
    }

    String getDescription() {
        return description;
    }

    Float getPrice() {
        return price;
    }

    List<Review> getReviews() {
        return reviews;
    }
}
