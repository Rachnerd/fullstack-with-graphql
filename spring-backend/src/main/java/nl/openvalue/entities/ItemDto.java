package nl.openvalue.entities;

import lombok.Data;
import lombok.NonNull;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ItemDto {
    public static ItemDto transform(Item item) {
        List<Long> reviewIds = item.getReviews().stream().map(Review::getId).collect(Collectors.toList());
        ItemDto itemDto = new ItemDto(item.getId(), item.getName(), item.getDescription(), item.getImage(), reviewIds);

        double totalRating = item.getReviews().stream().map(Review::getRating).reduce(Double::sum).orElse(-1.0);
        int amountOfRatings = item.getReviews().size();
        double averageRating;

        if (amountOfRatings == 0) {
            averageRating = -1;
        } else {
            averageRating = BigDecimal.valueOf(totalRating).divide(BigDecimal.valueOf(amountOfRatings), RoundingMode.HALF_EVEN).doubleValue();
        }

        itemDto.setAverageRating(averageRating);
        return itemDto;
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
    private List<Long> reviewIds;

    @Setter
    private double averageRating;
}
