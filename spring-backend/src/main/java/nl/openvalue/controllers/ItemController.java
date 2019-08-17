package nl.openvalue.controllers;

import nl.openvalue.dtos.ItemDto;
import nl.openvalue.dtos.ReviewDto;
import nl.openvalue.entities.Review;
import nl.openvalue.services.ItemService;
import nl.openvalue.utils.PagedData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.OptionalDouble;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/items")
public class ItemController {

    private ItemService itemService;

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
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
    public ResponseEntity<List<ReviewDto>> getItemReviews(@PathVariable Long id) {
        return ResponseEntity
                .ok(itemService.getItemReviews(id)
                        .stream()
                        .map(ReviewDto::transform)
                        .collect(Collectors.toList())
                );
    }

    @GetMapping("/{id}/reviews/average")
    public ResponseEntity<Double> getItemReviewAverage(@PathVariable Long id) {
        OptionalDouble average = itemService.getItemReviews(id)
                .stream()
                .mapToDouble(Review::getRating)
                .average();

        return ResponseEntity
                .ok(average.orElse(0.0));
    }
}
