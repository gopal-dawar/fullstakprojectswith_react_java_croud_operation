package com.onlineCourseRegistration.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CourseNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleCourseNotFoundException(CourseNotFoundException ex) {
        ErrorResponse er = new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(er, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handlGenericException(Exception ex) {
        ErrorResponse er = new ErrorResponse("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR.value());
        return new ResponseEntity<>(er, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}


