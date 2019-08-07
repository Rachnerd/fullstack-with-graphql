INSERT INTO `items` (name, description, id, price)
VALUES ('Item 1', 'Description', '1', '12.50'),
       ('Item 2', 'Description', '2', '12.50'),
       ('Item 3', 'Description', '3', '12.50'),
       ('Item 4', 'Description', '4', '12.50');

INSERT INTO `users` (id, name, email)
VALUES ('1', 'John Doe', 'johnny_69@gmail.com'),
       ('2', 'User 2', 'user2@gmail.com'),
       ('3', 'User 3', 'user3@gmail.com');

INSERT INTO `reviews` (description, item_id, user_id, rating)
VALUES ('Description 1', '1', '1', '4'),
       ('Description 2', '2', '2', '4'),
       ('Description 3', '2', '3', '1'),
       ('Description 4', '4', '3', '3'),
       ('Description 5', '1', '1', '1');