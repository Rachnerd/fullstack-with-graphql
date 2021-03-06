package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLResolver;
import nl.openvalue.entities.Review;
import nl.openvalue.entities.User;
import nl.openvalue.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReviewResolver implements GraphQLResolver<Review> {

    private UserService userService;

    public ReviewResolver(@Autowired UserService userService) {
        this.userService = userService;
    }

    public User author(Review review) {
        return userService.getUser(review.getUserId());
    }
}
