package nl.openvalue.entities;

import lombok.Data;
import lombok.NonNull;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class ItemDto {
    public static ItemDto transform(Item item) {
        return new ItemDto(item.getName(), item.getDescription(), item.getPrice().toString(),
                item.getReviews().stream().map(Review::getId).collect(Collectors.toList())
        );
    }

    @NonNull
    private String name;

    @NonNull
    private String description;

    @NonNull
    private String price;

    @NonNull
    private List<Long> reviewIds;
}
