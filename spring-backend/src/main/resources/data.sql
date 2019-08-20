INSERT INTO `users` (id, name, email, image)
VALUES ('1', 'Rachnerd', 'rachnerd@hotmail.com',
        'https://s3.amazonaws.com/media-p.slid.es/uploads/305120/images/3895531/DSC_0893_1.1_0.9r.jpg'),
       ('2', 'User 2', 'user2@gmail.com',
        'https://icon-library.net/images/no-profile-picture-icon-female/no-profile-picture-icon-female-0.jpg'),
       ('3', 'User 3', 'user3@gmail.com',
        'https://icon-library.net/images/no-profile-picture-icon-female/no-profile-picture-icon-female-0.jpg');

INSERT INTO `items` (name, description, id, image, user_id)
VALUES ('Item 1', 'Description', '1',
        'https://media.istockphoto.com/photos/broken-claw-hammer-picture-id611296672?k=6&m=611296672&s=612x612&w=0&h=4SgFrxnuU2IVsDTWFmzvxD_cEWaNVCL5sKTdu-edsGI=', '2'),
       ('Item 2', 'Description', '2',
        'https://media.istockphoto.com/photos/broken-claw-hammer-picture-id611296672?k=6&m=611296672&s=612x612&w=0&h=4SgFrxnuU2IVsDTWFmzvxD_cEWaNVCL5sKTdu-edsGI=', '2'),
       ('Item 3', 'Description', '3',
        'https://media.istockphoto.com/photos/broken-claw-hammer-picture-id611296672?k=6&m=611296672&s=612x612&w=0&h=4SgFrxnuU2IVsDTWFmzvxD_cEWaNVCL5sKTdu-edsGI=', '3'),
       ('Item 4', 'Description', '4',
        'https://media.istockphoto.com/photos/broken-claw-hammer-picture-id611296672?k=6&m=611296672&s=612x612&w=0&h=4SgFrxnuU2IVsDTWFmzvxD_cEWaNVCL5sKTdu-edsGI=', '3');


INSERT INTO `reviews` (description, item_id, user_id, rating)
VALUES ('Description 1', '1', '3', '1'),
       ('Description 2', '2', '2', '4'),
       ('Description 3', '2', '3', '1'),
       ('Description 4', '4', '3', '3'),
       ('Description 5', '1', '2', '1');