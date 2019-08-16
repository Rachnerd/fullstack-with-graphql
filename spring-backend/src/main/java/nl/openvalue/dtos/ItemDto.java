package nl.openvalue.dtos;

import lombok.Data;
import lombok.NonNull;
import nl.openvalue.entities.Item;

@Data
public class ItemDto {
    public static ItemDto transform(Item item) {
        return new ItemDto(item.getId(), item.getName(), item.getDescription(), item.getImage());
    }

    @NonNull
    private Long id;

    @NonNull
    private String name;

    @NonNull
    private String description;

    @NonNull
    private String image;

}
