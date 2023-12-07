-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 04-12-2023 a las 02:40:32
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plantas_grupo12`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planta`
--

CREATE TABLE `planta` (
  `id` int(11) NOT NULL,
  `nombre_comun` varchar(45) NOT NULL,
  `nombre_cientifico` varchar(45) NOT NULL,
  `foto` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `planta`
--

INSERT INTO `planta` (`id`, `nombre_comun`, `nombre_cientifico`, `foto`) VALUES
(1, 'musgo común', 'Bryum', NULL),
(2, 'Helecho', 'Filicopsida', NULL),
(3, 'pino', 'pinus', NULL),
(4, 'Ginkgo', 'Ginkgo Biloba', NULL),
(5, 'Abeto', 'Abies', NULL),
(6, 'Cipres', 'Cupressus', NULL),
(7, 'Secuoya', 'Sequoioideae', NULL),
(8, 'Trigo', 'Triticum', NULL),
(9, 'Orquídea', 'Orchidaceae', NULL),
(10, 'Arroz', 'Oryza Sativa', NULL),
(11, 'Lirio', 'Lilium', NULL),
(12, 'Suculenta', 'Echeveria', NULL),
(13, 'Rosa', 'Roseae', NULL),
(14, 'Roble', 'Quercus', NULL),
(15, 'Manzano', 'Malus', NULL),
(16, 'Potus', 'Epipremnun aureum', NULL),
(17, 'Gomero', 'Ficus elástica', NULL),
(18, 'Tradescantia', 'Tradescantia', NULL),
(19, 'Lavanda', 'Lavandula', NULL),
(20, 'Geranio', 'Geranium', NULL),
(21, 'Ciruelo', 'Prunnus domestica', NULL),
(22, 'Alocasia', 'Alocasia G. Don', NULL),
(23, 'Crisantemo', 'Chrysanthemum', NULL),
(24, 'Fitonia', 'Fittonia', NULL),
(25, 'Jazmin', 'Jazminum', NULL),
(26, 'Calathea', 'Calathea', NULL),
(27, 'Rubra', 'Cordyline rubra', NULL),
(28, 'Cóleos', 'Solenostemon', NULL),
(29, 'Tomate', 'Solanum lycopersicum', NULL),
(30, 'Palo de agua', 'Dracaena fragrans', NULL),
(31, 'Violeta de los Alpes', 'Ciclamen', NULL),
(32, 'Begonia', 'Begonia', NULL),
(33, 'Limonero', 'Citrus limón', NULL),
(34, 'Olivo', 'Olea europaea', NULL),
(35, 'Romero', 'Salvia rosmarinus', NULL),
(36, 'Menta', 'Mentha', NULL),
(37, 'Clivia', 'Clivia', NULL),
(38, 'Gazania', 'Gazania', NULL),
(39, 'Santa Rita', 'Boungainvillea', NULL),
(40, 'Punta de flecha', 'Singonio', NULL),
(41, 'Monstera', 'Monstera', NULL),
(42, 'musgo común', 'Bryum', 'NULL'),
(43, 'Helecho', 'Filicopsida', 'NULL'),
(44, 'Pino', 'Pinius', 'NULL'),
(45, 'Ginkgo', 'Ginko Biloba', 'NULL'),
(46, 'Pino', 'Pinius', 'NULL'),
(47, 'Ginkgo', 'Ginko Biloba', 'NULL');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `planta`
--
ALTER TABLE `planta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `planta`
--
ALTER TABLE `planta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
