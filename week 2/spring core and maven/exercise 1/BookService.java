package com.library.service;

import com.library.repository.BookRepository;
public class BookService {
    public BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository){
        this.bookRepository=bookRepository;
    }
    public void showBook(){
        System.out.println("show book service is working");
        bookRepository.displayBook();
    }
}
