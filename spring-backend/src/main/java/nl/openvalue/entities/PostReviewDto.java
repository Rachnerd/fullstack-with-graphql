package nl.openvalue.entities;

import lombok.Data;
import lombok.NonNull;

@Data
public class PostReviewDto {
    public PostReviewDto() {}

    @NonNull
    private String description;

    @NonNull
    private Double rating;

    @NonNull
    private Long itemId;
}
