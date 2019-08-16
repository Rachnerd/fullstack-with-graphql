package nl.openvalue.dtos;

import lombok.Data;
import lombok.NonNull;
import nl.openvalue.entities.User;

@Data
public class UserAdminDto {
    public static UserAdminDto transform(User user) {
        return new UserAdminDto(user.getName(), user.getEmail());
    }

    @NonNull
    private String name;

    @NonNull
    private String email;
}
