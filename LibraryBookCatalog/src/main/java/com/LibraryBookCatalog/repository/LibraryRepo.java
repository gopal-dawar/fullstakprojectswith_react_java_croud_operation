package com.LibraryBookCatalog.repository;

import com.LibraryBookCatalog.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LibraryRepo extends JpaRepository<Library, Integer> {

    @Query(value = "Select * from library where author like %:author%", nativeQuery = true)
    public List<Library> searchByAuthor(@Param("author") String author);


    @Query(value = "Select * from library where isbn = :isbn", nativeQuery = true)
    public void deleteByIsBn(@Param("isbn") String isbn);

}
