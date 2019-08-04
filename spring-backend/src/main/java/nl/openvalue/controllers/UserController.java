package nl.openvalue.controllers;

import nl.openvalue.entities.User;
import nl.openvalue.entities.UserDto;
import nl.openvalue.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    public UserController(@Autowired final UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<UserDto> getUsers() {
        return userService.getUsers()
                .stream()
                .map(UserDto::transform)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUser(@PathVariable String id) {
        Optional<User> optionalUser = userService.getUser(Long.parseLong(id));
        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(UserDto.transform(optionalUser.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
