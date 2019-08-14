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

    private String image;

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

    String getImage() {
        return image;
    }

    public List<Review> getReviews() {
        return reviews;
    }
}
