package nl.openvalue.dtos;

import lombok.Data;
import lombok.NonNull;
import nl.openvalue.entities.User;

@Data
public class UserDto {
    public static UserDto transform(User user) {
        return new UserDto(user.getName());
    }

    @NonNull
    private String name;
}
