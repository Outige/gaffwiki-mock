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
    SUMMARY VARCHAR(2000) NOT NULL, -- FIXME: START - END (better names - how do we have general purpose review then?) and VERIFIED
    VERIFIED BOOLEAN NOT NULL,
    DATE_CREATED TIMESTAMP NOT NULL,
    DATE_MODIFIED TIMESTAMP,
    CHECK (DATE_MODIFIED >= DATE_CREATED)
);
INSERT INTO WS_REVIEW (PROPERTY_ID, TITLE, SUMMARY, VERIFIED, DATE_CREATED, DATE_MODIFIED) VALUES
    (1, 'A Perfect Home for Families!', 'Spacious and safe neighborhood. Ideal for family living.', TRUE, NOW(), null),
    (2, 'Exceptional Property for Families!', 'Quiet and serene surroundings, perfect for family life.', TRUE, '2023-10-16 14:30:00', NOW()),
    (3, 'A Hidden Gem in the City!', 'Breathtaking views and a safe haven, perfect for families.', TRUE, NOW(), null);


CREATE TABLE WS_REVIEW_TOPIC (
    ID SERIAL PRIMARY KEY,
    REVIEW_ID INTEGER REFERENCES WS_REVIEW(id) NOT NULL,
    REVIEW_TOPIC VARCHAR(200) NOT NULL,
    TOPIC_SCORE FLOAT NOT NULL,
    TOPIC_DESCRIPTION VARCHAR(2000) NOT NULL,
    CONSTRAINT unique_topic_per_review UNIQUE (REVIEW_ID, REVIEW_TOPIC)
);
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (1, 'SAFETY', 4.8, 'One of the safest areas in town. No safety concerns at all.'),
    (1, 'NOISE', 3.9, 'Quiet and peaceful. Minimal noise disturbance.'),
    (1, 'LOCATION', 4.9, 'In the heart of the city. Convenient and picturesque.'),
    (2, 'SAFETY', 4.7, 'Secure and family-friendly environment.'),
    (2, 'NOISE', 4.0, 'Tranquil and noise-free surroundings.'),
    (2, 'LOCATION', 4.8, 'Scenic location with great amenities.'),
    (3, 'SAFETY', 4.2, 'Relatively safe area with minor safety concerns.'),
    (3, 'NOISE', 3.6, 'Moderate noise levels, generally quiet.'),
    (3, 'LOCATION', 4.0, 'Scenic views and good accessibility.');



    -- New WS_REVIEW records
INSERT INTO WS_REVIEW (PROPERTY_ID, TITLE, SUMMARY, VERIFIED, DATE_CREATED, DATE_MODIFIED) VALUES
    (1, 'Family Paradise!', 'Spacious and secure. Perfect for families. Great schools nearby.', TRUE, NOW(), null),
    (2, 'Serenity in Nature', 'Peaceful and tranquil. Ideal for nature lovers seeking a retreat.', TRUE, NOW(), null),
    (3, 'City Buzz', 'Vibrant urban living. Plenty of entertainment options within walking distance.', TRUE, NOW(), null),
    (4, 'Intimate Escape', 'Cozy and quiet. Ideal for a romantic getaway. Privacy ensured.', TRUE, NOW(), null),
    (5, 'Luxury Beyond Words', 'Opulent amenities and stunning views. Live the high-end life!', TRUE, NOW(), null);

-- New WS_REVIEW_TOPIC records
-- Review ID 9 (Property ID 1)
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (4, 'VIEW', 4.7, 'Scenic river views from the balcony. A treat for nature lovers.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (4, 'AMENITIES', 4.5, 'Access to great community amenities, including a pool and gym.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (4, 'PET FRIENDLY', 4.2, 'A pet-friendly community with ample space for furry friends.');

-- Review ID 10 (Property ID 1)
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (5, 'SAFETY', 2.9, 'Safety concerns reported in the neighborhood. Use caution.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (5, 'NOISE', 2.5, 'Noisy surroundings. Not recommended for light sleepers.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (5, 'PARKING', 3.0, 'Limited parking space availability. Plan accordingly.');

-- Review ID 11 (Property ID 2)
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (6, 'VIEW', 4.8, 'Breathtaking nature views from the balcony.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (6, 'NIGHT LIFE', 4.3, 'Proximity to nightlife hotspots. Perfect for night owls.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (6, 'AMENITIES', 4.6, 'Well-equipped gym and recreational areas for fitness enthusiasts.');

-- Review ID 12 (Property ID 2)
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (7, 'SAFETY', 3.5, 'Moderate safety in the area. Use common sense.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (7, 'HEATING', 3.8, 'Effective heating system during cold seasons.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (7, 'PARKING', 3.7, 'Adequate parking spaces available for residents.');

-- Review ID 13 (Property ID 3)
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (8, 'LOCATION', 4.5, 'Prime location with quick access to public transportation.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (8, 'AMENITIES', 4.4, 'Numerous amenities, including a swimming pool and clubhouse.');
INSERT INTO WS_REVIEW_TOPIC (REVIEW_ID, REVIEW_TOPIC, TOPIC_SCORE, TOPIC_DESCRIPTION) VALUES
    (8, 'NIGHT LIFE', 4.1, 'Near trendy nightlife spots. Perfect for social butterflies.');

