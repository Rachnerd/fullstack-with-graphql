package nl.openvalue.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import nl.openvalue.dtos.ItemGqlDto;
import nl.openvalue.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ItemQueryResolver implements GraphQLQueryResolver {
    private ItemService itemService;

    public ItemQueryResolver(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    public ItemGqlDto item(Long id) {
        return ItemGqlDto.transform(itemService.getItem(id));
    }
}