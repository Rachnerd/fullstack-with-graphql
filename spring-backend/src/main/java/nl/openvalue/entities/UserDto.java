package nl.openvalue.entities;

import lombok.Data;
import lombok.NonNull;

@Data
public class UserDto {
    public static UserDto transform(User user) {
        return new UserDto(user.getName());
    }

    @NonNull
    private String name;
}
