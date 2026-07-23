package com.cognizant.loan.model;

public class Loan {

    private int loanNumber;
    private String loanType;
    private double amount;
    private int tenure;

    public Loan() {
    }

    public Loan(int loanNumber, String loanType,
                double amount, int tenure) {
        this.loanNumber = loanNumber;
        this.loanType = loanType;
        this.amount = amount;
        this.tenure = tenure;
    }

    public int getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(int loanNumber) {
        this.loanNumber = loanNumber;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public int getTenure() {
        return tenure;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }
}
