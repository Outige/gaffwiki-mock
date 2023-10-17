DROP TABLE IF EXISTS WS_REVIEW_TOPIC CASCADE;
DROP TABLE IF EXISTS WS_REVIEW CASCADE;
DROP TABLE IF EXISTS WS_PROPERTY CASCADE;



CREATE TABLE WS_PROPERTY (
    ID serial PRIMARY KEY,
    EIRCODE VARCHAR(7) UNIQUE NOT NULL,
    ADDRESS VARCHAR(1500) NOT NULL
);
INSERT INTO WS_PROPERTY (EIRCODE, ADDRESS) VALUES
    ('D01N5F3', '3B Parnell Court, 1 Granby Row, Dublin 1'),
    ('D01YH60', '11 Mellor Court, Lower Liffey Street, Dublin 1, County Dublin'),
    ('D02YP80', '54 Hanover Dock, Grand Canal Dk, Dublin 2 '),
    ('D02E427', '4 Grattan Place, Grattan Street, South City Centre, Dublin 2 '),
    ('D02A406', 'Apt. 95, The Firs, Winter Garden, Pearse Street , South City Centre, Dublin 2');




CREATE TABLE WS_REVIEW (
    ID SERIAL PRIMARY KEY,
    PROPERTY_ID INTEGER REFERENCES WS_PROPERTY(ID) NOT NULL,
    TITLE VARCHAR(100) NOT NULL,
    SUMMARY VARCHAR(2000) NOT NULL,
    DATE_CREATED TIMESTAMP NOT NULL,
    DATE_MODIFIED TIMESTAMP
);
INSERT INTO WS_REVIEW (PROPERTY_ID, TITLE, DATE_CREATED, DATE_MODIFIED) VALUES -- FIXME This breaks
    (1, 'Wonderful location for a family!', NOW(), null),
    (1, 'Terrible spot for a family!', '2023-10-16 14:30:00', null),
    (2, 'Very average location for a family!', '2023-10-16 14:30:00', NOW()); -- FIXME: Constraint on updated > created





CREATE TABLE WS_REVIEW_TOPIC (
    ID SERIAL PRIMARY KEY,
    REVIEW_ID INTEGER REFERENCES WS_REVIEW(id) NOT NULL,
    REVIEW_TOPIC VARCHAR(200) NOT NULL,
    TOPIC_SCORE FLOAT NOT NULL,
    TOPIC_DESCRIPTION VARCHAR(2000) NOT NULL
    CONSTRAINT unique_topic_per_review UNIQUE (REVIEW_ID, REVIEW_TOPIC)
);
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION)
    (1, 'SAFETY', 4.5, 'Mostly safe. Some needles here and there.')
    (1, 'NOISE', 2.5, 'Very noisy')
    (1, 'LOCATION', 4.5, 'Very great location')
    (2, 'SAFETY', 4.2, 'Pretty safe.')
    (2, 'NOISE', 4.3, 'Not noisy.')
    (2, 'LOCATION', 4.1, 'Very stunning location.')
    (3, 'SAFETY', 3.2, 'Kinda safe.')
    (3, 'NOISE', 1.4, 'Super noisy.')
    (3, 'LOCATION', 1.2, 'Nice views!');