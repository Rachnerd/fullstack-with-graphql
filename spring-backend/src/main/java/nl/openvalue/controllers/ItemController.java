package nl.openvalue.controllers;

import nl.openvalue.dtos.ItemDto;
import nl.openvalue.dtos.ReviewDto;
import nl.openvalue.services.ItemService;
import nl.openvalue.services.ReviewService;
import nl.openvalue.utils.PagedData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/items")
public class ItemController {

    private ItemService itemService;
    private ReviewService reviewService;

    public ItemController(@Autowired ItemService itemService, @Autowired ReviewService reviewService) {
        this.itemService = itemService;
        this.reviewService = reviewService;
    }

    @GetMapping()
    public ResponseEntity<PagedData<ItemDto>> getPagedItems(Pageable pageable) {
        return ResponseEntity.ok(new PagedData<>(
                        itemService.getItems(pageable)
                                .map(ItemDto::transform)
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDto> getItem(@PathVariable String id) {
        return ResponseEntity
                .ok(ItemDto.transform(
                        itemService.getItem(Long.parseLong(id))));
    }

    @GetMapping("/{id}/reviews")
    public ResponseEntity<Page<ReviewDto>> getItemReviews(@PathVariable Long id, Pageable pageable) {
        return ResponseEntity
                .ok(itemService.getItemReviews(id, pageable)
                        .map(ReviewDto::transform)
                );
    }

    @GetMapping("/{id}/reviews/averageRating")
    public ResponseEntity<Double> getItemReviewAverage(@PathVariable Long id) {
        return ResponseEntity
                .ok(reviewService.calculateAverageRating(id));
    }
}
