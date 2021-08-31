package com.springbootdev.domain.entity;

import javax.persistence.*;

@Entity
@Table(name = "credit_cards")
public class CreditCard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    //   @Column(name = "card_num")
    private String cardNum;

    // @Column(name = "pin_code")
    private String pinCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardNum() {
        return cardNum;
    }

    public void setCardNum(String cardNum) {
        this.cardNum = cardNum;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    // @Column(name = "balance")
    private int balance;

    @Override
    public String toString() {
        return "CreditCard{" +
                "cardNum='" + cardNum + '\'' +
                '}';
    }
}
