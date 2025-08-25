package com.streaming.search;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.*;

@Document(indexName = "movies")
public class MovieDocument {
    
    @Id
    private String id;
    
    @MultiField(
        mainField = @Field(type = FieldType.Text, analyzer = "standard"),
        otherFields = {
            @InnerField(suffix = "keyword", type = FieldType.Keyword),
            @InnerField(suffix = "suggest", type = FieldType.Search_As_You_Type)
        }
    )
    private String title;
    
    @Field(type = FieldType.Text, analyzer = "standard")
    private String director;
    
    @Field(type = FieldType.Text, analyzer = "standard")
    private String synopsis;
    
    @Field(type = FieldType.Keyword)
    private String[] actors;
    
    @Field(type = FieldType.Integer)
    private Integer year;
    
    @Field(type = FieldType.Keyword)
    private String[] genres;
    
    @Field(type = FieldType.Double)
    private Double price;
    
    @Field(type = FieldType.Double)
    private Double rentalPrice;
    
    @Field(type = FieldType.Keyword)
    private String imageUrl;
    
    @Field(type = FieldType.Keyword)
    private String trailerId;
    
    // Getters y Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDirector() { return director; }
    public void setDirector(String director) { this.director = director; }
    public String getSynopsis() { return synopsis; }
    public void setSynopsis(String synopsis) { this.synopsis = synopsis; }
    public String[] getActors() { return actors; }
    public void setActors(String[] actors) { this.actors = actors; }
    public Integer getYear() { return year; }
    public void setYear(Integer year) { this.year = year; }
    public String[] getGenres() { return genres; }
    public void setGenres(String[] genres) { this.genres = genres; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public Double getRentalPrice() { return rentalPrice; }
    public void setRentalPrice(Double rentalPrice) { this.rentalPrice = rentalPrice; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public String getTrailerId() { return trailerId; }
    public void setTrailerId(String trailerId) { this.trailerId = trailerId; }
}