package nl.openvalue.services;

import nl.openvalue.entities.Item;
import nl.openvalue.entities.Review;
import nl.openvalue.exceptions.NotFoundException;
import nl.openvalue.repositories.ItemRepository;
import nl.openvalue.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    private ItemRepository itemRepository;
    private ReviewRepository reviewRepository;

    public ItemService(@Autowired ItemRepository itemRepository, @Autowired ReviewRepository reviewRepository) {
        this.itemRepository = itemRepository;
        this.reviewRepository = reviewRepository;
    }

    public Page<Item> getItems(Integer page, Integer size) {
        return itemRepository.findAll(PageRequest.of(page, size));
    }

    public Item getItem(Long id) {
        return itemRepository
                .findById(id)
                .orElseThrow(NotFoundException::new);
    }


    public List<Review> getItemReviews(Long id) {
        if (!itemRepository.findById(id).isPresent()) {
            throw new NotFoundException();
        }

        return reviewRepository.findByItemId(id);
    }

}
