package nl.openvalue.dtos;

import lombok.Data;
import lombok.NonNull;
import nl.openvalue.entities.User;

@Data
public class UserDto {
    public static UserDto transform(User user) {
        return new UserDto(user.getId(), user.getName(), user.getImage());
    }

    @NonNull
    private Long id;

    @NonNull
    private String name;

    @NonNull
    private String image;
}
