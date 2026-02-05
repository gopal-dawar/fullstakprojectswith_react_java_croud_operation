package com.onlineCourseRegistration.dto;

import java.util.Date;

public class CourseResponseDTO {
    private long id;
    private String studentName;
    private String courseName;
    private Date registrationDate;
    private double feesPaid;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public double getFeesPaid() {
        return feesPaid;
    }

    public void setFeesPaid(double feesPaid) {
        this.feesPaid = feesPaid;
    }
}
