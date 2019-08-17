package nl.openvalue.repositories;

import nl.openvalue.entities.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT R FROM Review R WHERE R.itemId=:id")
    public Page<Review> findByItemId(Long id, Pageable pageable);

    @Query("SELECT AVG(R.rating) FROM Review R WHERE R.itemId=:id")
    public Optional<Double> calculateAverageRating(Long id);
}
