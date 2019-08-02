package nl.openvalue.services;

import nl.openvalue.entities.Item;
import nl.openvalue.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    private ItemRepository itemRepository;

    public ItemService(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Page<Item> getItems(Integer page, Integer size) {
        return itemRepository.findAll(PageRequest.of(page, size));
    }

    public Optional<Item> getItem(Long id) {
        return itemRepository.findById(id);
    }
}
