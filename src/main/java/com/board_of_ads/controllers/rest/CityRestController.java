package com.board_of_ads.controllers.rest;

import com.board_of_ads.models.dto.CityDto;
import com.board_of_ads.service.interfaces.CityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api/city/**")
@AllArgsConstructor
public class CityRestController {
    private final CityService cityService;

    @GetMapping("/city")
    public List<CityDto> findAll() {
        return cityService.getCitiesList();
    }
}