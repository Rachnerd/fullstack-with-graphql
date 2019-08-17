package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLResolver;
import nl.openvalue.dtos.ItemGqlDto;
import nl.openvalue.entities.Review;
import nl.openvalue.entities.User;
import nl.openvalue.services.ReviewService;
import nl.openvalue.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
public class ItemResolver implements GraphQLResolver<ItemGqlDto> {
    private ReviewService reviewService;
    private UserService userService;

    public ItemResolver(@Autowired ReviewService reviewService, @Autowired UserService userService) {
        this.reviewService = reviewService;
        this.userService = userService;
    }

    public Page<Review> reviews(ItemGqlDto item, int page, int size) {
        int pageSize = size == 0 ? Integer.MAX_VALUE : size;
        return reviewService.findByItemId(item.getId(), page, pageSize);
    }

    public Double averageRating(ItemGqlDto item) {
        return reviewService.calculateAverageRating(item.getId());
    }

    public User seller(ItemGqlDto item) {
        return userService.getUser(item.getUserId());
    }
}