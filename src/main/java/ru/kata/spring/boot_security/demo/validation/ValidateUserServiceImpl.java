package ru.kata.spring.boot_security.demo.validation;

import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@Service
public class ValidateUserServiceImpl implements ValidateUserService {

    private final UserService userService;
    private final RoleService roleService;

    public ValidateUserServiceImpl(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @Override
    public Boolean validateByUsername(User user, Model model) {
        if (userService.existsByUsername(user.getUsername())) {
            model.addAttribute("errorMessage",
                    "Пользователь с таким именем уже существует.");
            model.addAttribute("activeTab", "newUser");
            List<User> users = userService.getAll();
            for (User userAfterError : users) {
                userAfterError.setRoles(roleService.findRolesByUserId(userAfterError.getId()));
            }
            List<Role> roles = roleService.getAll();
            model.addAttribute("allRoles", roles);
            model.addAttribute("users", users);
            return true;
        }
        return false;
    }

    @Override
    public Boolean validateByEmail(User user, Model model) {
        if (userService.existsByEmail(user.getEmail())) {
            model.addAttribute("errorMessage",
                    "Пользователь с таким адресом электронной почты уже существует.");
            model.addAttribute("activeTab", "newUser ");
            List<User> users = userService.getAll();
            for (User userAfterError : users) {
                userAfterError.setRoles(roleService.findRolesByUserId(userAfterError.getId()));
            }
            List<Role> roles = roleService.getAll();
            model.addAttribute("allRoles", roles);
            model.addAttribute("users", users);
            return true;
        }
        return false;
    }

}





