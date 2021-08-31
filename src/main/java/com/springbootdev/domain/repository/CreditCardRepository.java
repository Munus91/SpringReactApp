package com.springbootdev.domain.repository;

import com.springbootdev.domain.entity.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CreditCardRepository extends JpaRepository<CreditCard, Long>
{
    List<CreditCard> findByCardNum(String number);
}
