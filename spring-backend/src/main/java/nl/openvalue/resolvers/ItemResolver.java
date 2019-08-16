package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLResolver;
import nl.openvalue.dtos.ItemGqlDto;
import nl.openvalue.entities.Review;
import nl.openvalue.entities.User;
import nl.openvalue.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ItemResolver implements GraphQLResolver<ItemGqlDto> {
    private ReviewRepository reviewRepository;

    public ItemResolver(@Autowired ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> reviews(ItemGqlDto item) {
        if (item.getReviews() == null) {
            List<Review> reviews = reviewRepository.findByItemId(item.getId());
            item.setReviews(reviews);
        }

        return item.getReviews();
    }

    public Double averageReviews(ItemGqlDto item) {
        if (item.getReviews() == null) {
            List<Review> reviews = reviewRepository.findByItemId(item.getId());
            item.setReviews(reviews);
        }

        return item.getReviews()
                .stream()
                .mapToDouble(Review::getRating)
                .average()
                .orElse(0.0);
    }

    public User seller(ItemGqlDto item) {
        User user = new User();
        user.setName("TEST");
        return user;
    }
}