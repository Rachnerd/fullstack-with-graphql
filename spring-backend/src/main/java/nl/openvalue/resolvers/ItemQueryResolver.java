package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import nl.openvalue.entities.Item;
import nl.openvalue.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ItemQueryResolver implements GraphQLQueryResolver {
    private ItemService itemService;

    public ItemQueryResolver(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    public Item item(Long id) {
        return itemService.getItem(id).orElseThrow(() -> new CustomException(404, "Not found"));
    }
}