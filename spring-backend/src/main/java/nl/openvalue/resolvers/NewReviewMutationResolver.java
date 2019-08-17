package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import nl.openvalue.dtos.PostReviewDto;
import nl.openvalue.dtos.ReviewDto;
import nl.openvalue.entities.Review;
import nl.openvalue.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NewReviewMutationResolver implements GraphQLMutationResolver {
    private ReviewService reviewService;

    public NewReviewMutationResolver(@Autowired ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    public Review postReview(PostReviewDto review) {
        Long newReviewId = reviewService.addReview(review);
        return reviewService.getReview(newReviewId);
    }
}