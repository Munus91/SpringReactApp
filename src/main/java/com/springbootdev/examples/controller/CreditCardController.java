package com.springbootdev.examples.controller;

import com.springbootdev.domain.entity.CreditCard;
import com.springbootdev.domain.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Iterator;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class CreditCardController {

    @Autowired
    private CreditCardRepository CreditCardRepository;
    public String result_of_check="Undefined Card";


    @GetMapping("credit_cards")
    @ResponseBody
    public List<CreditCard> findAll()
    {
        List<CreditCard>  CreditCardsList = CreditCardRepository.findAll();

        return CreditCardsList;

    }

    @PostMapping("credit_cards")
    @ResponseBody
    public List<CreditCard> findAlll()
    {
        List<CreditCard>  CreditCardsList = CreditCardRepository.findAll();
        return CreditCardsList;

    }

    //получение и проверка номера карты
    @GetMapping("credit_cards/validatecard")
    @ResponseBody
    public String validate_card(@RequestParam(value = "card_number") String card_number)
    {

         String number = card_number;

        Iterator <CreditCard> itr = findAll().iterator();
        //проверка по номеру карты в репозитории

        while(itr.hasNext()) {

            CreditCard temp = itr.next();

            if (number.equals( temp.getCardNum())) {
                result_of_check="CARD DETECTED";
                break;

            }
            else{
                result_of_check="CARD NOT FOUND";
            }

        }

       return result_of_check;
    }

}
