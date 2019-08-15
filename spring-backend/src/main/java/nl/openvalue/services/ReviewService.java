package nl.openvalue.services;

import nl.openvalue.entities.PostReviewDto;
import nl.openvalue.entities.Review;
import nl.openvalue.exceptions.NotFoundException;
import nl.openvalue.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private ReviewRepository reviewRepository;

    public ReviewService(@Autowired final ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getReviews() {
        return reviewRepository.findAll();
    }

    public Review getReview(Long id) {
        return reviewRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public Long postReview(PostReviewDto postReviewDto) {
        Review review = new Review();
        review.setDescription(postReviewDto.getDescription());
        review.setRating(postReviewDto.getRating());
        review.setUserId(1L);
        review.setItemId(postReviewDto.getItemId());
        Review newReview = reviewRepository.save(review);
        return newReview.getId();
    }
}
