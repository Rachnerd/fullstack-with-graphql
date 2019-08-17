package nl.openvalue.services;

import nl.openvalue.dtos.PostReviewDto;
import nl.openvalue.entities.Review;
import nl.openvalue.exceptions.NotFoundException;
import nl.openvalue.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    private ReviewRepository reviewRepository;

    public ReviewService(@Autowired final ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Page<Review> getReviews(Pageable pageable) {
        return reviewRepository.findAll(pageable);
    }

    public Review getReview(Long id) {
        return reviewRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public Long addReview(PostReviewDto postReviewDto) {
        Review review = new Review();
        review.setDescription(postReviewDto.getDescription());
        review.setRating(postReviewDto.getRating());
        review.setUserId(1L);
        review.setItemId(postReviewDto.getItemId());
        Review newReview = reviewRepository.save(review);
        return newReview.getId();
    }

    public Page<Review> findByItemId(long itemId, int page, int size) {
        return reviewRepository.findByItemId(itemId, PageRequest.of(page, size));
    }


    public Double calculateAverageRating(long itemId) {
        return reviewRepository.calculateAverageRating(itemId).orElse(0.0);
    }
}
