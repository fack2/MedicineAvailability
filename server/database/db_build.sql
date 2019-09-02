BEGIN;

DROP TABLE IF EXISTS medicine , pharmacy , pharmacy_to_medicine
CASCADE;


CREATE TABLE medicine
(
    medicineID serial primary key,
    name VARCHAR(100) NOT NULL,
    img TEXT NOT NULL,
    description VARCHAR NOT NULL,
    prescription boolean NOT NULL
);



INSERT INTO medicine(name, img, description, prescription) VALUES
('Yasmin' ,'https://www.doctorfox.co.uk/imgs-products/zoom/yasmin-contraceptive-pill.jpg', 'Drospirenone, sold under the brand names Yasmin and Angeliq among others, is a progestin medication which is used in birth control pills to prevent pregnancy and in menopausal hormone therapy, among other uses. It is available only in combination with an estrogen and is not available alone.', true),
('Concor', 'https://khalidpharmacy.com/wp-content/uploads/2018/02/1_1520742162.jpg','Concor 5 MG Tablet is an antihypertensive which is used alone or in combination with other agents to lower the elevated blood pressure. It is administered with caution in the patients with lung diseases.', true);



CREATE TABLE pharmacy
(
    pharmacyID serial primary key,
    pharmacyName VARCHAR(100) NOT NULL,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(50) NOT NULL,
    phone INTEGER NOT NULL,
    location VARCHAR(150) NOT NULL
);

INSERT INTO pharmacy (pharmacyName, email, password, phone, location) VALUES ('Al-Eman Pharmacy', 'aleman@gmail.com', '123', '0598403872', 'Ras El-Jora'),
('Al-Jazera', 'aljazera@gmail.com', '1234', '0594327865', 'Al-Manara square');

CREATE TABLE pharmacy_to_medicine
(
    medicineID INTEGER,
    FOREIGN KEY (medicineID) REFERENCES medicine (medicineID),
    pharmacyID INTEGER,
    FOREIGN KEY (pharmacyID) REFERENCES pharmacy (pharmacyID),
    soldOut boolean NOT NULL,
    price VARCHAR NOT NULL

);

INSERT INTO pharmacy_to_medicine(medicineID, pharmacyID, soldOut, price) VALUES (1, 1, false, '25 ILS'), (2, 2, true, '19 ILS');



COMMIT;