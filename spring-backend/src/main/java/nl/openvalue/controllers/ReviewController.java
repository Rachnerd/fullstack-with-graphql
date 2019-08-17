package nl.openvalue.controllers;

import nl.openvalue.dtos.PostReviewDto;
import nl.openvalue.dtos.ReviewDto;
import nl.openvalue.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(@Autowired final ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping()
    public ResponseEntity<List<ReviewDto>> getReviews(Pageable pageable) {
        return ResponseEntity.ok(
                reviewService.getReviews(pageable)
                        .stream()
                        .map(ReviewDto::transform)
                        .collect(Collectors.toList())
        );
    }

    @PostMapping()
    public ResponseEntity postReviews(@RequestBody PostReviewDto newReview) {
        Long newReviewId = reviewService.addReview(newReview);
        return ResponseEntity
                .noContent()
                .header("Location", newReviewId.toString())
                .build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewDto> getReview(@PathVariable String id) {
        return ResponseEntity
                .ok(ReviewDto.transform(reviewService.getReview(Long.parseLong(id))));
    }
}
