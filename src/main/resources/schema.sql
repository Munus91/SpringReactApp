DROP TABLE IF EXISTS credit_cards;


CREATE TABLE credit_cards (id INT AUTO_INCREMENT PRIMARY KEY,
card_num VARCHAR(20),pin_code VARCHAR(20),balance INT);