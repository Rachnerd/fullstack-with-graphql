package nl.openvalue.controllers;

import nl.openvalue.entities.Item;
import nl.openvalue.entities.ItemDto;
import nl.openvalue.services.ItemService;
import nl.openvalue.utils.PagedData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/items")
public class ItemController {

    private ItemService itemService;

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
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
}
