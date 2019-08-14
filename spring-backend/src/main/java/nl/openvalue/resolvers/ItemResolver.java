package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLResolver;
import nl.openvalue.entities.Item;
import nl.openvalue.entities.Review;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ItemResolver implements GraphQLResolver<Item> {
    public List<Review> reviews(Item item) {
        return item.getReviews();
    }
}