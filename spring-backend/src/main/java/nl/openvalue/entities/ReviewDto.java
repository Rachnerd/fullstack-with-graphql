package nl.openvalue.entities;

import lombok.Data;
import lombok.NonNull;

@Data
public class ReviewDto {
    public static ReviewDto transform(Review review) {
        return new ReviewDto(review.getId(), review.getDescription(), review.getRating(), review.getUser().getId(), review.getItemId());
    }

    @NonNull
    private Long id;

    @NonNull
    private String description;


    @NonNull
    private Double rating;

    @NonNull
    private Long userId;

    @NonNull
    private Long itemId;
}
