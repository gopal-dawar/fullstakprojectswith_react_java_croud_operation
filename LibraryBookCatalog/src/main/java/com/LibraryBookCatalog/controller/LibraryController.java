package com.LibraryBookCatalog.controller;

import com.LibraryBookCatalog.entity.Library;
import com.LibraryBookCatalog.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/books")
public class LibraryController {

    @Autowired
    LibraryService libraryService;


    @PostMapping("/save")
    public ResponseEntity<Library> addBooks(@RequestBody Library library) {
        return new ResponseEntity<>(libraryService.addBooks(library), HttpStatus.OK);
    }

    @GetMapping("/search/{author}")
    public ResponseEntity<List<Library>> searchByAuthor(@PathVariable String author) {
        return new ResponseEntity<>(libraryService.searchByAuthor(author), HttpStatus.OK);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Library> updateAvialableCopies(@PathVariable int id, @RequestBody Library library) {
        return new ResponseEntity<>(libraryService.updateAvailableCopiesById(id, library), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{isbn}")
    public ResponseEntity<String> deleteByIsbn(@PathVariable String isbn) {
        return ResponseEntity.ok(libraryService.deleteByIsbn(isbn));
    }



    @GetMapping("/findbyid")
    public ResponseEntity<Library> findBookById(@PathVariable int id) {
        return new ResponseEntity<>(libraryService.findBookById(id), HttpStatus.OK);
    }

    @GetMapping("/viewAll")
    public ResponseEntity<List<Library>> viewAllBooks() {
        return new ResponseEntity<>(libraryService.viewAllBooks(), HttpStatus.OK);
    }

}
