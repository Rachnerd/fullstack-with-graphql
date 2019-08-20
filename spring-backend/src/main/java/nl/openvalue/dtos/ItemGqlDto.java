package nl.openvalue.dtos;

import lombok.Data;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import nl.openvalue.entities.Item;
import nl.openvalue.entities.Review;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
public class ItemGqlDto {
    public static ItemGqlDto transform(Item item) {
        return new ItemGqlDto(item.getId(), item.getName(), item.getDescription(), item.getImage(), item.getUserId());
    }

    @NonNull
    private Long id;

    @NonNull
    private String name;

    @NonNull
    private String description;

    @NonNull
    private String image;

    @NonNull
    private Long userId;
}
