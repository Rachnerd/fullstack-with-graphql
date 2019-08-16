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

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public List<Review> getReviews() {
        return reviews;
    }
}
