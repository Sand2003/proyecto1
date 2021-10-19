-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2021 a las 15:27:25
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taller de node.js`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `user_id` int(255) NOT NULL,
  `user_password` varchar(500) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_lastname` varchar(20) NOT NULL,
  `user_number` int(200) NOT NULL,
  `user_mail` varchar(20) NOT NULL,
  `user_address` varchar(600) NOT NULL,
  `user_rol` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`user_id`, `user_password`, `user_name`, `user_lastname`, `user_number`, `user_mail`, `user_address`, `user_rol`) VALUES
(1, '123', 'Sandra', 'Fermín', 25545541, 'sfermin@gmail.com', 'liyfuy', 1),
(2, '789', 'Paola', 'Martínez', 2147483647, 'pmartinez@gmail.com', 'jdhdnd', 0),
(4, '133', 'Diego', 'Reyes', 2147483642, 'dreyes@gmail.com', 'jdhdndfeve3r', 1),
(12, '147', 'Valeria', 'Celaya', 2147483641, 'vcelaya@gmail.com', 'dfrbvr', 0),
(13, '159', 'Jacobo', 'Duran', 2147483630, 'jduran@gmail.com', 'ervgwtb', 0),
(14, '456', 'Monica', 'Rosas', 1147483647, 'mrosas@gmail.com', 'jgcut', 0),
(15, '852', 'Myriam', 'Licea', 2147483620, 'mlicea@gmail.com', 'wqfeqw', 0),
(16, '12547', 'Yunuen', 'Fermín', 2147483400, 'yfermin@gmail.com', 'eargver', 0),
(19, '62555', 'Cristian', 'Hernández', 2147483647, 'cherandez@gmail.com', 'wrybenrtyjn', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
