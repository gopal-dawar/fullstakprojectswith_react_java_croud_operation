package com.LibraryBookCatalog.service;

import com.LibraryBookCatalog.entity.Library;

import java.util.List;

public interface LibraryService {

    Library addBooks(Library library);

    List<Library> searchByAuthor(String author);

    Library updateAvailableCopiesById(int id, Library library);

    String deleteByIsbn(String isbn);

    Library findBookById(int id);

    List<Library> viewAllBooks();


}

