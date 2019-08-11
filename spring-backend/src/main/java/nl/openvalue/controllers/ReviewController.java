package nl.openvalue.controllers;

import nl.openvalue.entities.PostReviewDto;
import nl.openvalue.entities.Review;
import nl.openvalue.entities.ReviewDto;
import nl.openvalue.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(@Autowired final ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping()
    public List<ReviewDto> getReviews() {
        return reviewService.getReviews().stream()
                .map(ReviewDto::transform)
                .collect(Collectors.toList());
    }

    @PostMapping()
    public ResponseEntity postReviews(@RequestBody PostReviewDto newReview) {
        Long newReviewId = reviewService.postReview(newReview);
        return ResponseEntity.noContent().header("Location", newReviewId.toString()).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewDto> getReview(@PathVariable String id) {
        Optional<Review> optionalReview = reviewService.getReview(Long.parseLong(id));
        if (optionalReview.isPresent()) {
            return ResponseEntity.ok(ReviewDto.transform(optionalReview.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
