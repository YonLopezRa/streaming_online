package com.streaming.operation;

import org.springframework.web.bind.annotation.*;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/rentals")
@CrossOrigin(origins = "*")
public class RentalController {
    
    private final EntityManager entityManager;
    
    public RentalController(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
    
    @PostMapping
    @Transactional
    public Rental createRental(@RequestBody RentalRequest request) {
        Rental rental = new Rental();
        rental.setMovieId(request.getMovieId());
        rental.setTitle(request.getTitle());
        rental.setEmail(request.getEmail());
        rental.setPrice(request.getPrice());
        rental.setRentalDate(LocalDateTime.now());
        rental.setExpirationDate(LocalDateTime.now().plusDays(request.getDays()));
        rental.setImageUrl(request.getImageUrl());
        
        entityManager.persist(rental);
        return rental;
    }
    
    @GetMapping
    public List<Rental> getRentals(@RequestParam String email) {
        return entityManager.createQuery(
            "SELECT r FROM Rental r WHERE r.email = :email", Rental.class)
            .setParameter("email", email)
            .getResultList();
    }
    
    public static class RentalRequest {
        private String movieId;
        private String title;
        private String email;
        private Integer days;
        private Double price;
        private String imageUrl;
        
        // Getters y Setters
        public String getMovieId() { return movieId; }
        public void setMovieId(String movieId) { this.movieId = movieId; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public Integer getDays() { return days; }
        public void setDays(Integer days) { this.days = days; }
        public Double getPrice() { return price; }
        public void setPrice(Double price) { this.price = price; }
        public String getImageUrl() { return imageUrl; }
        public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    }
}