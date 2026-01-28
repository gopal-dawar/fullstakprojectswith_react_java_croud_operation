package com.LibraryBookCatalog.serviceImpl;

import com.LibraryBookCatalog.entity.Library;
import com.LibraryBookCatalog.exception.BookNotFoundException;
import com.LibraryBookCatalog.repository.LibraryRepo;
import com.LibraryBookCatalog.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibraryServiceImpl implements LibraryService {

    @Autowired
    LibraryRepo libraryRepo;

    @Override
    public Library addBooks(Library library) {
        return libraryRepo.save(library);
    }

    @Override
    public List<Library> searchByAuthor(String author) {
        return libraryRepo.searchByAuthor(author);
    }

    @Override
    public Library updateAvailableCopiesById(int id, Library library) {
        Library l = libraryRepo.findById(id).orElseThrow(() -> new BookNotFoundException("Book Not Found at : " + id));
        l.setTitle(library.getTitle());
        l.setAuthor(library.getAuthor());
        l.setIsbn(library.getIsbn());
        l.setAvailableCopies(library.getAvailableCopies());
        return libraryRepo.save(l);
    }

    @Override
    public String deleteById(String isbn) {
        libraryRepo.deleteByIsBn(isbn);
        return "Successfully Deleted Book!";
    }

    @Override
    public Library findBookById(int id) {
        return libraryRepo.findById(id).orElseThrow(() -> new BookNotFoundException("Book not found at : " + id));
    }
}
