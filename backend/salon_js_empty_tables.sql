-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.30-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table salon_js.bookings
CREATE TABLE IF NOT EXISTS `bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `start` time DEFAULT NULL,
  `end` time DEFAULT NULL,
  `accepted` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `price` double DEFAULT '0',
  `feedback` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `timeslot_id` int(11) DEFAULT NULL,
  `salon_id` int(11) DEFAULT NULL,
  `stylist_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `timeslot_id` (`timeslot_id`),
  KEY `salon_id` (`salon_id`),
  KEY `stylist_id` (`stylist_id`),
  CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`timeslot_id`) REFERENCES `timeslots` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `bookings_ibfk_3` FOREIGN KEY (`stylist_id`) REFERENCES `stylists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.bookings: ~0 rows (approximately)
DELETE FROM `bookings`;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;

-- Dumping structure for table salon_js.experiences
CREATE TABLE IF NOT EXISTS `experiences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.experiences: ~10 rows (approximately)
DELETE FROM `experiences`;
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
INSERT INTO `experiences` (`id`, `description`, `created_at`, `updated_at`) VALUES
	(1, 'Less than 6 months', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(2, '6 months', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(3, '1 Year', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(4, '2 Years', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(5, '3 Years', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(6, '4 Years', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(7, '5 Years', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(8, '5-10 Years', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(9, '10-15 Years', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(10, '15 Years+', '2019-01-02 07:06:37', '2019-01-02 07:06:37');
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;

-- Dumping structure for table salon_js.notifications
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `seen` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.notifications: ~0 rows (approximately)
DELETE FROM `notifications`;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;

-- Dumping structure for table salon_js.salons
CREATE TABLE IF NOT EXISTS `salons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` text,
  `promotional_emails` tinyint(1) DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `salons_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.salons: ~0 rows (approximately)
DELETE FROM `salons`;
/*!40000 ALTER TABLE `salons` DISABLE KEYS */;
/*!40000 ALTER TABLE `salons` ENABLE KEYS */;

-- Dumping structure for table salon_js.stylists
CREATE TABLE IF NOT EXISTS `stylists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `bio` text,
  `stylist_price` double DEFAULT '0',
  `educator_price` double DEFAULT '0',
  `promotional_emails` tinyint(1) DEFAULT '0',
  `work_as_stylist` tinyint(1) DEFAULT '1',
  `work_as_educator` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `experience_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `user_id` (`user_id`),
  KEY `experience_id` (`experience_id`),
  CONSTRAINT `stylists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `stylists_ibfk_2` FOREIGN KEY (`experience_id`) REFERENCES `experiences` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.stylists: ~0 rows (approximately)
DELETE FROM `stylists`;
/*!40000 ALTER TABLE `stylists` DISABLE KEYS */;
/*!40000 ALTER TABLE `stylists` ENABLE KEYS */;

-- Dumping structure for table salon_js.timeslots
CREATE TABLE IF NOT EXISTS `timeslots` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `start` time DEFAULT NULL,
  `end` time DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `stylist_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stylist_id` (`stylist_id`),
  CONSTRAINT `timeslots_ibfk_1` FOREIGN KEY (`stylist_id`) REFERENCES `stylists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.timeslots: ~0 rows (approximately)
DELETE FROM `timeslots`;
/*!40000 ALTER TABLE `timeslots` DISABLE KEYS */;
/*!40000 ALTER TABLE `timeslots` ENABLE KEYS */;

-- Dumping structure for table salon_js.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_reset_token` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `user_role_id` (`user_role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.users: ~0 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table salon_js.user_roles
CREATE TABLE IF NOT EXISTS `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table salon_js.user_roles: ~3 rows (approximately)
DELETE FROM `user_roles`;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Admin', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(2, 'Stylist', '2019-01-02 07:06:37', '2019-01-02 07:06:37'),
	(3, 'Salon', '2019-01-02 07:06:37', '2019-01-02 07:06:37');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
