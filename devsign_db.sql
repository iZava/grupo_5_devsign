-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: devsign_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price` bigint NOT NULL,
  `fullPrice` bigint NOT NULL,
  `date` date NOT NULL,
  `discount` bigint NOT NULL,
  `total` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_user_idx` (`user_id`),
  KEY `fx_cart_product_idx` (`product_id`),
  CONSTRAINT `fk_cart_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_cart_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_color` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Blanco'),(2,'Negro'),(3,'Rojo'),(4,'Verde'),(5,'Amarillo'),(6,'Azul'),(7,'Rosado'),(8,'Violeta');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(250) NOT NULL,
  `category_id` int NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` bigint NOT NULL,
  `color_id` int NOT NULL,
  `size_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_color_idx` (`color_id`),
  KEY `fk_product_size_idx` (`size_id`),
  KEY `fk_product_category_idx` (`category_id`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (99,'Camiseta','t-shirt1.jpg',1,'camisetacuelloenV',60000,1,3),(100,'Mug','mug1.jpg',2,'descripción detallada del producto',30000,5,6),(101,'Botella','bottle1.jpg',3,'descripción detallada del producto',35000,8,1),(102,'Hoddie','hoddie.jpg',4,'descripción detallada del producto',40000,5,2),(103,'Sticker','sticker1.jpg',5,'descripción detallada del producto',25000,2,4),(104,'Gorra','hat1.jpg',6,'descripción detallada del producto',30000,7,5),(105,'Cojín','pillow1.jpg',7,'descripción detallada del producto',25000,1,5),(106,'Camiseta','t-shirt2.jpg',1,'descripción detallada del producto',25000,3,2),(107,'Camiseta','t-shirt3.jpg',1,'descripción detallada del producto',30000,1,1),(108,'Camiseta','t-shirt4.jpg',1,'descripción detallada del producto',25000,5,2),(109,'Camiseta','t-shirt5.jpg',1,'descripción detallada del producto',30000,3,5),(110,'Hoddie','hoddie2.jpg',4,'descripción detallada del producto',30000,1,3),(111,'Hoddie','hoddie3.jpg',4,'descripción detallada del producto',25000,5,4),(112,'Hoddie','hoddie4.jpg',4,'descripción detallada del producto',30000,6,5),(113,'Hoddie','hoddie2.jpg',4,'descripción detallada del producto',30000,2,6),(114,'Mug','mug2.jpg',2,'descripción detallada del producto',30000,1,3),(115,'Mug','mug3.jpg',2,'descripción detallada del producto',25000,1,3),(116,'Mug','mug4.jpg',2,'descripción detallada del producto',30000,1,3),(117,'Mug','mug2.jpg',2,'descripción detallada del producto',30000,1,3),(118,'Cojín','pillow2.jpg',7,'descripción detallada del producto',30000,1,3),(119,'Cojín','pillow3.jpg',7,'descripción detallada del producto',25000,6,3),(120,'Cojín','pillow4.jpg',7,'descripción detallada del producto',30000,8,3),(121,'Cojín','pillow1.jpg',7,'descripción detallada del producto',25000,5,3),(122,'Cojín','pillow2.jpg',7,'descripción detallada del producto',30000,3,3),(123,'Sticker','sticker1.jpg',5,'descripción detallada del producto',30000,1,3),(124,'Sticker','sticker2.jpg',5,'descripción detallada del producto',30000,1,3),(125,'Sticker','sticker3.jpg',5,'descripción detallada del producto',30000,1,3),(126,'Sticker','sticker1.jpg',5,'descripción detallada del producto',30000,1,3),(127,'Sticker','sticker2.jpg',5,'descripción detallada del producto',30000,1,3),(128,'Sticker','sticker3.jpg',5,'descripción detallada del producto',30000,1,3),(129,'Gorra','hat2.jpg',6,'descripción detallada del producto',30000,8,2),(130,'Gorra','hat3.jpg',6,'descripción detallada del producto',30000,2,3),(131,'Gorra','hat1.jpg',6,'descripción detallada del producto',30000,7,4),(132,'Gorra','hat2.jpg',6,'descripción detallada del producto',30000,6,5),(133,'Gorra','hat3.jpg',6,'descripción detallada del producto',30000,4,6),(134,'Botella','bottle1.jpg',3,'descripción detallada del producto',30000,1,3),(135,'Botella','bottle2.jpg',3,'descripción detallada del producto',30000,1,3),(136,'Botella','bottle3.jpg',3,'descripción detallada del producto',30000,1,3),(137,'Botella','bottle4.jpg',3,'descripción detallada del producto',30000,1,3),(138,'Botella','bottle5.jpg',3,'descripción detallada del producto',30000,1,3);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_product_category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'Camisetas'),(2,'Mugs'),(3,'Botellas'),(4,'Hoddies'),(5,'Stikers'),(6,'Gorras'),(7,'Cojines');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_size` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L'),(5,'XL'),(6,'XXL');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `logUser` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `repeat_password` varchar(200) NOT NULL,
  `category_id` int NOT NULL,
  `image` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_category_idx` (`category_id`),
  CONSTRAINT `fk_user_category` FOREIGN KEY (`category_id`) REFERENCES `user_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (22,'Ignacio','Zavalla','igzzava','izava@devsign.com','isaBest149','isaBest149',1,'/images/2s/1_01.png'),(23,'Deymer','Espinosa','deyesp','dey_es@devsign.com','isaBest149','isaBest149',1,'/images/2s/1_01.png'),(24,'Juan','Lasota','juanlas','juanfutbol94@devsign.com','isaBest149','isaBest149',1,'/images/2s/1_01.png'),(25,'Isabel','Rojas','isaroj','isarojas@devsign.com','isaBest149','isaBest149',1,'/images/2s/1_01.png'),(26,'Francisco','Casagrande','francvas','francasas@devsign.com','isaBest149','isaBest149',2,'/images/2s/2_01.png'),(27,'Jose','Figueroa','josefig','jose_f@devsign.com','isaBest149','isaBest149',2,'/images/2s/2_01.png'),(28,'mariana','Romero','mariaro','mariromero@devsign.com','isaBest149','isaBest149',2,'/images/2s/2_01.png'),(29,'Celia','Ahumada','ceciahu','celia_03@devsign.com','isaBest149','isaBest149',2,'/images/2s/2_01.png'),(30,'Federico','Delfino','fedelf','fede_delf@devsign.com','isaBest149','isaBest149',2,'/images/2s/2_01.png'),(31,'Lucia','Inostrosa','lucinos','lu_inos@devsign.com','isaBest149','isaBest149',2,'/images/2s/2_01.png'),(32,'Deymer','Espinosa','deymerep','deymerespinosap@gmail.com','$2a$10$K.K/Ly8LGqQd4j0/q5Bf6Oc4Vh1rGo7Aw.kvZenjLwWcUOBty9BBG','$2a$10$U4lz3BsEtNvu1hB6GHbGMu76BmizrUZA96kwDlYY0ZaY82Kwev/Y6',1,'image-1657846366066-741847933.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
INSERT INTO `user_category` VALUES (1,'Admin'),(2,'User');
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-14 20:04:51
