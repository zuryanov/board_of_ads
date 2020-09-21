package com.board_of_ads.service;

import com.board_of_ads.model.City;
import com.board_of_ads.model.Region;

import java.util.Set;

public interface KLADRService {

    Region getRegionByRegionNumber(String regionNumber);

    void saveRegion(Region region);

    void saveCity(City city);

    Set<City> getAllCityOfRegion(Region region);

    boolean existsCityByCityNameAndRegion(String cityName, Region region);

    boolean existsRegionByName(String regionName);

}

