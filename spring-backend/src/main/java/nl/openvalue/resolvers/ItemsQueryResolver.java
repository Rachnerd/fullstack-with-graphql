package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import nl.openvalue.dtos.ItemGqlDto;
import nl.openvalue.dtos.PageRequestDto;
import nl.openvalue.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

@Component
public class ItemsQueryResolver implements GraphQLQueryResolver {
    private ItemService itemService;

    public ItemsQueryResolver(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    public Page<ItemGqlDto> items(int page, int size) {
        return itemService.getItems(PageRequest.of(page, size)).map(ItemGqlDto::transform);
    }
}