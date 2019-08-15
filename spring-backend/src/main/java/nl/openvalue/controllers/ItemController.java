package nl.openvalue.controllers;

import nl.openvalue.entities.Item;
import nl.openvalue.entities.ItemDto;
import nl.openvalue.services.ItemService;
import nl.openvalue.services.ReviewService;
import nl.openvalue.utils.PagedData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Optional;

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
    public ResponseEntity<PagedData<ItemDto>> getPagedItems(@RequestParam Integer page, @RequestParam Integer size) {
        return ResponseEntity.ok(new PagedData<>(
                        itemService.getItems(page, size)
                                .map(ItemDto::transform)
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDto> getItem(@PathVariable String id) {
        Optional<Item> optionalItem = itemService.getItem(Long.parseLong(id));
        if (optionalItem.isPresent()) {
            return ResponseEntity.ok(ItemDto.transform(optionalItem.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/reviews")
    public ResponseEntity<String> getItemReviews(@PathVariable String id) {
        Optional<Item> optionalItem = itemService.getItem(Long.parseLong(id));
        if (optionalItem.isPresent()) {
            return ResponseEntity.ok("");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/reviews/average")
    public ResponseEntity<String> getItemReviewAverage(@PathVariable String id) {
//        double averageRating;
//
//        if (amountOfRatings == 0) {
//            averageRating = -1;
//        } else {
//            averageRating = BigDecimal.valueOf(totalRating).divide(BigDecimal.valueOf(amountOfRatings), RoundingMode.HALF_EVEN).doubleValue();
//        }
        return ResponseEntity.ok("");
    }
}
