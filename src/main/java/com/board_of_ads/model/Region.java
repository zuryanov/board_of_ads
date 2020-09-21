package com.board_of_ads.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter

@Entity
@Table(name = "region")
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @Column(name = "name")
    String name;

    @Column(name = "region_number")
    String regionNumber;

    @Column(name = "form_subject")
    String formSubject;

    @OneToMany(mappedBy = "region", cascade = CascadeType.ALL, orphanRemoval = true)
    Set<City> cityOfRegion;

    public Region() {
    }

    public Region(String name, String regionNumber, String formSubject) {
        this.name = name;
        this.regionNumber = regionNumber;
        this.formSubject = formSubject;
    }
}
