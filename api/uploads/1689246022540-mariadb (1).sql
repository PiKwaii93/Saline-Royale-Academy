-- Adminer 4.8.1 MySQL 11.0.2-MariaDB-1:11.0.2+maria~ubu2204 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` char(255) NOT NULL,
  `password` char(255) NOT NULL,
  `firstname` char(255) NOT NULL,
  `lastname` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users` (`id`, `email`, `password`, `firstname`, `lastname`) VALUES
(46,	'email',	'$2a$10$71uTguSCG7Kc8o0KVOktFe3w4OHwdAZXs.J1pcTWC2MOg/RFTuZva',	'firstname',	'lastname'),
(50,	'email2',	'$2a$10$WWBRwjR/xu.SEh9nJ.05deYg07u7otMlDjl30rLPggZzEUpNIAa/q',	'firstname2',	'lastname2'),
(51,	'email3',	'$2a$10$Dwf2daNPEvVmkhbPszT3CucZgJ5Nmrshn3P5lyFOta9waEiZPY8b.',	'firstname',	'lastname');

-- 2023-07-12 09:05:42
