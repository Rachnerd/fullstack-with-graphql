package nl.openvalue.entities;

import lombok.Data;
import lombok.NonNull;

@Data
public class ReviewDto {
    public static ReviewDto transform(Review review) {
        return new ReviewDto(review.getDescription(), review.getUser().getId(), review.getItemId());
    }

    @NonNull
    private String description;

    @NonNull
    private Long userId;

    @NonNull
    private Long itemId;
}
