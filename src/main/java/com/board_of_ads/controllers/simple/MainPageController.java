package com.board_of_ads.controllers.simple;

import com.board_of_ads.service.interfaces.AuthService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@AllArgsConstructor
public class MainPageController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final AuthService authService;

    @GetMapping("/")
    public String getMainPage() {
        return "main-page";
    }

    @GetMapping("/vk_auth")
    public String vkAuth(@RequestParam(value = "code") String code, Model model) {
        return authService.vkAuth(code);
    }

    @GetMapping("/yandex_auth")
    public String yandexAuth(@RequestParam(value = "code") String code, Model model) {
        return authService.yandexAuth(code);
    }

    /** todo delete
     * Тестовый контроллер для проверки авторизации.
     * Если при переходе на /test вас перенаправило на главную страницу ВК, то вы авторизованы
     */
    @GetMapping("/test")
    public String aa() {
        return "redirect:http://vk.com";
    }
}
