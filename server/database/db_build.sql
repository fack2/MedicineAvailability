BEGIN;

    DROP TABLE IF EXISTS medicine , pharmacy , pharmacy_to_medicine
    CASCADE;


CREATE TABLE medicine
(
    medicineID serial primary key,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(150) NOT NULL,
    prescription boolean NOT NULL
);


CREATE TABLE pharmacy
(
    pharmacyID serial primary key,
    pharmacyName VARCHAR(100) NOT NULL,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(50) NOT NULL,
    phone INTEGER NOT NULL,
    location VARCHAR(150) NOT NULL
);

CREATE TABLE pharmacy_to_medicine
(
    medicineID INTEGER,
    FOREIGN KEY (medicineID) REFERENCES medicine (medicineID),
    pharmacyID INTEGER,
    FOREIGN KEY (pharmacyID) REFERENCES pharmacy (pharmacyID),
    soldOut boolean NOT NULL,
    price INTEGER NOT NULL

);



COMMIT;