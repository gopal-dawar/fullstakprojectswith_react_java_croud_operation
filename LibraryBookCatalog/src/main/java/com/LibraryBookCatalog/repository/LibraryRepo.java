package com.LibraryBookCatalog.repository;

import com.LibraryBookCatalog.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LibraryRepo extends JpaRepository<Library, Integer> {

    @Query(value = "select * from library where author = :author", nativeQuery = true)
    List<Library> findByAuthorContaining(@Param("author") String author);

    @Query(value = "select * from library where isbn =:isbn", nativeQuery = true)
    int deleteByIsbn(@Param("isbn") String isbn);
}
