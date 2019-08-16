package nl.openvalue.controllers;

import nl.openvalue.dtos.UserAdminDto;
import nl.openvalue.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin/users")
public class AdminUserController {
    private UserService userService;

    public AdminUserController(@Autowired final UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<UserAdminDto> getUsers() {
        return userService.getUsers()
                .stream()
                .map(UserAdminDto::transform)
                .collect(Collectors.toList());
    }
}
