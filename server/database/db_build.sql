BEGIN;

    DROP TABLE IF EXISTS medicine , pharmacy , pharmacist_login , pharmacy_to_medicine
    CASCADE;


CREATE TABLE medicine
(
    medicineID serial primary key,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(150) NOT NULL,
)


CREATE TABLE pharmacy
(
    pharmacyID serial primary key,
    pharmacyName VARCHAR(100) NOT NULL,
    phone NUMBER NOT NULL,
    location VARCHAR(150) NOT NULL
)



COMMIT;