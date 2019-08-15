package nl.openvalue.repositories;

import nl.openvalue.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT R FROM Review R WHERE R.userId=:id")
    public List<Review> findByUserId(Long id);
}
