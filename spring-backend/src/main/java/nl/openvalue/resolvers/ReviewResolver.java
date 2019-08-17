package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLResolver;
import nl.openvalue.entities.Review;
import nl.openvalue.entities.User;
import nl.openvalue.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class ReviewResolver implements GraphQLResolver<Review> {

    private UserService userService;

    public ReviewResolver(@Autowired UserService userService) {
        this.userService = userService;
    }

    public User author(Review review) {
        Collection<SimpleGrantedAuthority> authorities = (Collection<SimpleGrantedAuthority>) SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        return userService.getUser(review.getUserId());
    }
}
