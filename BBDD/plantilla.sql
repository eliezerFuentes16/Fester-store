-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-10-2021 a las 04:53:41
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plantilla`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL,
  `USUARIO` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `CONTRASEÑA` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id`, `USUARIO`, `CONTRASEÑA`) VALUES
(1, 'EliezerFuentes', 'sha256$wMKVA2cQ7dr2ELzF$5250d97597a5a939995f603112763ceec39959c34de8f4114ad3c138a9b2dc96');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `NOMBRE` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `FECHA` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `USUARIO` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `EMAIL` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `CONTRASEÑA` text COLLATE utf8_spanish_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `NOMBRE`, `FECHA`, `USUARIO`, `EMAIL`, `CONTRASEÑA`) VALUES
(17, 'Eliezer Fuentes', '2021-09-26 16:00:44', 'EliezerFuentes', 'eliezer@gmail.com', 'sha256$AHGS04mDpJyhcLa43LVlE80BMwt1Td$7552e851949faa82ee50a948396abc240bb3af3571f51faea812461e3ab63593');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `idPedido` int(11) DEFAULT NULL,
  `NOMBRE` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `TELEFONO` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `DIRECCION` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `EMAIL` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `FECHAHORA` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `OBSERVACIONES` text COLLATE utf8_spanish_ci,
  `FORMAPAGO` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `CAMBIO` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `COLONIA` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `SUCURSAL` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `STATUS` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `PRODUCTOS` text COLLATE utf8_spanish_ci,
  `TOTAL` float DEFAULT NULL,
  `ENTREGADO` tinyint(1) DEFAULT NULL,
  `idCliente` int(11) DEFAULT NULL,
  `Factura` tinyint(4) DEFAULT NULL,
  `NombreRazonSocial` text COLLATE utf8_spanish_ci,
  `rfc` text COLLATE utf8_spanish_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `idPedido`, `NOMBRE`, `TELEFONO`, `DIRECCION`, `EMAIL`, `FECHAHORA`, `OBSERVACIONES`, `FORMAPAGO`, `CAMBIO`, `COLONIA`, `SUCURSAL`, `STATUS`, `PRODUCTOS`, `TOTAL`, `ENTREGADO`, `idCliente`, `Factura`, `NombreRazonSocial`, `rfc`, `created_at`, `updated_at`) VALUES
(1, 1379071, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza', 'eliezermario008@gmail.com', '2021-09-20 14:37:53', 'Tengo Hmabre', 'Pasar a Recoger', '', '', '', 'Cancelado', '[[78,{\"id\":\"2346410\",\"nombre\":\"Festegral 20Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":656.2,\"cantidad\":\"1\",\"total\":656.2,\"sucursal\":\"\"}]]', 656.2, 1, 1, 0, NULL, '', NULL, NULL),
(2, 6854847, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza', 'eliezer@gmail.com', '2021-09-23 14:41:20', 'Tengo Hambre', 'Pasar a Recoger', '', '', '', 'Entregado', '[[79,{\"id\":\"2346410\",\"nombre\":\"Festegral 20Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":656.2,\"cantidad\":\"1\",\"total\":656.2,\"sucursal\":\"\"}]]', 656.2, 1, 1, 0, NULL, '', NULL, NULL),
(3, 2385146, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza', 'eliezer@gmail.com', '2021-09-23 14:45:24', 'Tengo Hambre', 'Pasar a Recoger', '', '', '', 'Entregado', '[[80,{\"id\":\"2346409\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":113.81,\"cantidad\":\"1\",\"total\":113.81,\"sucursal\":\"\"}],[81,{\"id\":\"2346410\",\"nombre\":\"Festegral 20Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":656.2,\"cantidad\":\"1\",\"total\":656.2,\"sucursal\":\"\"}]]', 770.01, 1, 1, 0, NULL, '', NULL, NULL),
(4, 8917601, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza', 'eliezer@gmail.com', '2021-09-26 23:54:10', 'Traigan el pedido Rápido Por favor.', 'Pasar a Recoger', '', '', '', 'Entregado', '[[98,{\"id\":\"271\",\"nombre\":\"Festegral 20Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":656.2,\"cantidad\":\"1\",\"total\":656.2,\"sucursal\":\"\"}]]', 656.2, 1, 1, 0, NULL, '', NULL, NULL),
(5, 5751045, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza calle 4 al final', 'eliezer@gmail.com', '2021-09-27 21:17:19', 'Traigan el pedido rápido', 'Pago en Efectivo', '100', '', '', 'Entregado', '[[99,{\"id\":\"272\",\"nombre\":\"Festegral 5Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":246.02,\"cantidad\":\"1\",\"total\":246.02,\"sucursal\":\"\"}]]', 246.02, 1, 0, 0, NULL, '', NULL, NULL),
(6, 4502487, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza', 'eliezer@gmail.com', '2021-09-27 23:30:02', 'Traiganlo rapido', 'Pasar a Recoger', '', '', '', 'Cancelado', '[[102,{\"id\":\"272\",\"nombre\":\"Festegral 5Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":246.02,\"cantidad\":\"1\",\"total\":246.02,\"sucursal\":\"\"}]]', 246.02, 1, 0, 0, NULL, '', NULL, NULL),
(7, 38719, 'adasd', '0123123', 'aasdasda', 'leiasad@asd.com', '2021-09-27 23:33:20', 'asdasdasd', 'Pasar a Recoger', '', '', '', 'Entregado', '[[103,{\"id\":\"272\",\"nombre\":\"Festegral 5Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":246.02,\"cantidad\":\"1\",\"total\":246.02,\"sucursal\":\"\"}]]', 246.02, 1, 0, 0, NULL, '', NULL, NULL),
(8, 3623944, 'asdasda', 'sdasd', 'sdasdasda', 'asdasdq@asd.com', '2021-09-27 23:34:12', 'asdasdasdasd', 'Pasar a Recoger', '', '', '', 'Entregado', '[[104,{\"id\":\"272\",\"nombre\":\"Festegral 5Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":246.02,\"cantidad\":\"1\",\"total\":246.02,\"sucursal\":\"\"}]]', 246.02, 1, 0, 1, NULL, '', NULL, NULL),
(9, 9405513, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza calle 4', 'eliezer@gmail.com', '2021-09-28 12:08:09', 'Traigan el pedido rapido.', 'Pasar a Recoger', '', '', '', 'Entregado', '[[105,{\"id\":\"352\",\"nombre\":\"Vaportite 550 4L\",\"descripcion\":\"Impermeabilizante asfáltico base solvente de usos múltiples, elaborado con asfaltos refinados, agregados minerales, fibras de refuerzo libres de asbesto y disolventes de rápida evaporación.\\n\",\"precio\":758.54,\"cantidad\":\"1\",\"total\":758.54,\"sucursal\":null}]]', 758.54, 1, 0, 0, NULL, '', NULL, NULL),
(10, 5327637, ' Eliezer Fuentes ', '12312312', 'Delfin Mendoa', 'eliezer@gmail.com', '2021-09-28 13:39:47', 'Tengo Hambre', 'Pasar a Recoger', '', '', '', 'En Bodega', '[[106,{\"id\":\"284\",\"nombre\":\"Fester Acriton PS 4 Años Blanco 19L\",\"descripcion\":\"Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\\n\",\"precio\":2485.71,\"cantidad\":\"1\",\"total\":2485.71,\"sucursal\":null}],[107,{\"id\":\"352\",\"nombre\":\"Vaportite 550 4L\",\"descripcion\":\"Impermeabilizante asfáltico base solvente de usos múltiples, elaborado con asfaltos refinados, agregados minerales, fibras de refuerzo libres de asbesto y disolventes de rápida evaporación.\\n\",\"precio\":758.54,\"cantidad\":\"2\",\"total\":1517.08,\"sucursal\":null}]]', 4002.79, 0, 1, 0, NULL, '', NULL, NULL),
(11, 5022598, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza', 'eliezer@gmail.com', '2021-09-28 23:02:17', 'Traigan el pedido rapido.', 'Pasar a Recoger', '', '', '', 'En Bodega', '[[172,{\"id\":\"272\",\"nombre\":\"Festegral 5Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":246.02,\"cantidad\":\"1\",\"total\":246.02,\"sucursal\":\"\"}]]', 246.02, 0, 0, 1, 'Eliezer Fuentes', '31009986', NULL, NULL),
(12, 4824959, 'asdas', 'sdasdasd', 'dada', 'sdasdqaq@asd.com', '2021-09-28 23:03:08', 'adsasdasdasd', 'Pasar a Recoger', '', '', '', 'Entregado', '[[173,{\"id\":\"270\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":113.81,\"cantidad\":\"1\",\"total\":113.81,\"sucursal\":\"\"}]]', 113.81, 1, 0, 0, '', '', NULL, NULL),
(13, 2200545, 'asdasd', 'asdasdasdasd', 'asdasd', 'asdas@asd.com', '2021-10-08 02:14:30', 'sdasdasd', 'Pasar a Recoger', NULL, '', '', 'Nuevo', '[[36,{\"id\":\"270\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":119.68,\"cantidad\":\"1\",\"total\":119.68,\"sucursal\":null}]]', 119.68, 0, NULL, 0, NULL, NULL, '2021-10-08 06:44:30', '2021-10-08 06:44:30'),
(14, 6123570, 'sdasdas', 'asdasd', 'sdasdas', 'asdasd@sd.com', '2021-10-08 02:18:13', 'asdasdasd', 'Pasar a Recoger', NULL, '', '', 'Nuevo', '[[37,{\"id\":\"270\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":119.68,\"cantidad\":\"1\",\"total\":119.68,\"sucursal\":null}]]', 119.68, 0, NULL, 0, NULL, NULL, '2021-10-08 06:48:13', '2021-10-08 06:48:13'),
(15, 9390767, 'ASD', 'ASDASD', 'ASDASD', 'ASDAS@SD.COM', '2021-10-08 02:20:37', 'ASDASDASD', 'Pasar a Recoger', NULL, '', '', 'Nuevo', '[[38,{\"id\":\"270\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":119.68,\"cantidad\":\"1\",\"total\":119.68,\"sucursal\":null}]]', 119.68, 0, NULL, 0, NULL, NULL, '2021-10-08 06:50:37', '2021-10-08 06:50:37'),
(16, 7279306, 'ASDASASDASD', 'asdasd', 'asdasd', 'asdasqqq@sd.coma', '2021-10-08 02:22:37', 'asdasdasd', 'Pasar a Recoger', NULL, '', '', 'Nuevo', '[[39,{\"id\":\"270\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":119.68,\"cantidad\":\"1\",\"total\":119.68,\"sucursal\":null}]]', 119.68, 0, NULL, 0, NULL, NULL, '2021-10-08 06:52:37', '2021-10-08 06:52:37'),
(17, 2396930, 'asdasd', 'sdasda', 'asdasda', 'sdasqq@asd.com', '2021-10-08 02:23:40', 'asdasdasd', 'Pasar a Recoger', NULL, '', '', 'Nuevo', '[[40,{\"id\":\"270\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":119.68,\"cantidad\":\"1\",\"total\":119.68,\"sucursal\":null}]]', 119.68, 0, NULL, 0, NULL, NULL, '2021-10-08 06:53:40', '2021-10-08 06:53:40'),
(18, 5978736, 'Eliezer Fuentes', '04166876793', 'Delfin Mendoza', 'eliezermario008@gmail.com', '2021-10-08 02:44:59', 'Tengo Hambre', 'Pasar a Recoger', NULL, '', '', 'Nuevo', '[[41,{\"id\":\"270\",\"nombre\":\"Festegral 2Kg\",\"descripcion\":\"Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.\",\"precio\":119.68,\"cantidad\":\"1\",\"total\":119.68,\"sucursal\":null}]]', 119.68, 0, NULL, 0, NULL, NULL, '2021-10-08 07:14:59', '2021-10-08 07:14:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `NOMBRE` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `DESCRIPCION` text COLLATE utf8_spanish_ci,
  `PRECIO` float DEFAULT NULL,
  `FOTO` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `NOMBRE`, `DESCRIPCION`, `PRECIO`, `FOTO`) VALUES
(270, 'Festegral 2Kg', 'Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.', 119.68, '8703-0.png'),
(271, 'Festegral 20Kg', 'Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.', 689.5, '8703-6.png'),
(272, 'Festegral 5Kg', 'Producto en polvo finamente molido, de color gris claro, contiene sales de ácidos grasos que favorecen la reducción de la permeabilidad en concretos y morteros, sin disminuir la resistencia a la compresión.', 256.6, '8703-1.png'),
(273, 'Fester A3 Blanco 19L', 'Acriton 3 años A3 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 1806.01, '1756.png'),
(274, 'Fester A3 Rojo 19L', 'Acriton 3 años A3 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 1806.01, '2092468.png'),
(275, 'Fester A5 Blanco 19L', 'Acriton 5 años A5 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 2078.28, '2092474.png'),
(276, 'Fester A5 Blanco 4L', 'Acriton 5 años A5 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 489.7, '2092473.png'),
(277, 'Fester A5 Rojo 19L', 'Acriton 5 años A5 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 2078.28, '2092470.png'),
(278, 'Fester A5 Rojo 4L', 'Acriton 5 años A5 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 489.7, '2092469.png'),
(279, 'Fester A7 Blanco 19L', 'Acriton 7 años A7 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 2409.32, '2100424.png'),
(280, 'Fester A7 Rojo 19L', 'Acriton 7 años A7 secado rápido es un impermeabilizante elastomérico que debido a su tecnología de rápido secado, permite hacer la impermeabilización completa en un solo día. Es elaborado a base de resinas acrílicas, pigmentos inorgánicos, agregados minerales y aditivos especiales que le proporcionan secado rápido, excelentes características de impermeabilidad, resistencia a rayos UV, adherencia en superficie húmeda.', 2409.32, '2100421.png'),
(281, 'Fester Acriflex 100m', 'Membrana de refuerzo de poliéster tejido para sistemas impermeables.', 4060.59, '1630922.png'),
(282, 'Fester Acriton PS 12 Años Blanco 19L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 3594.39, '2345983.png'),
(283, 'Fester Acriton PS 12 Años Rojo 19L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 3594.39, '2346011.png'),
(284, 'Fester Acriton PS 4 Años Blanco 19L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 2485.71, '2346397.png'),
(285, 'Fester Acriton PS 4 Años Blanco 4L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 711.04, '2346401.png'),
(286, 'Fester Acriton PS 4 Años Rojo 19L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 2485.71, '2346396.png'),
(287, 'Fester Acriton PS 4 Años Rojo 4L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 711.04, '2346400.png'),
(288, 'Fester Acriton PS 6 Años Blanco 19L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 3004.8, '2346395.png'),
(289, 'Fester Acriton PS 6 Años Rojo 19L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 3004.8, '2346393.png'),
(290, 'Fester Acriton PS 8 Años Rojo 19L', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 3480.78, '2346012.png'),
(291, 'Fester Acriton PS 8 Años Blanco 19L ', 'Impermeabilizante acrílico elastomérico base agua de Secado Extra Rápido que revoluciona la tecnología logrando el mejor balance de propiedades mecánicas; además de secado extra rápido* y propiedades de hidro-repelencia y perleo con tecnología Proshield®.\n', 3480.78, '2346392.png'),
(292, 'Fester Acriton Resanador 1L', 'Resanador para fisuras y grietas en sistemas impermeables acrílicos material de consistencia pastosa, formulado a base de resinas acrílicas estirenadas base agua, rellenos minerales y alto contenido de fibras sintéticas, libre de asbesto. Es económico y de fácil aplicación, buena adherencia y durabilidad en el concreto o mortero, y no escurre.', 110.34, '1627633.png'),
(293, 'Fester Acriton Resanador 19L', 'Resanador para fisuras y grietas en sistemas impermeables acrílicos material de consistencia pastosa, formulado a base de resinas acrílicas estirenadas base agua, rellenos minerales y alto contenido de fibras sintéticas, libre de asbesto. Es económico y de fácil aplicación, buena adherencia y durabilidad en el concreto o mortero, y no escurre.', 1502.4, '28382.png'),
(294, 'Fester Acriton Resanador 4L', 'Resanador para fisuras y grietas en sistemas impermeables acrílicos material de consistencia pastosa, formulado a base de resinas acrílicas estirenadas base agua, rellenos minerales y alto contenido de fibras sintéticas, libre de asbesto. Es económico y de fácil aplicación, buena adherencia y durabilidad en el concreto o mortero, y no escurre.', 387.84, '1627599.png'),
(295, 'Fester Acriton Sellador 19L', 'Material líquido de consistencia lechosa base agua elaborado a base de resinas acrílicas y aditivos especiales que le proporcionan características de sellado y adhesividad. Resistente a la alcalinidad del cemento mortero y de la cal. Es fácil de aplicar. Sella la superficie y mejora la adherencia del sistema impermeable.', 1190.95, '1627607.png'),
(296, 'Fester Acriton Sellador 4L', 'Material líquido de consistencia lechosa base agua elaborado a base de resinas acrílicas y aditivos especiales que le proporcionan características de sellado y adhesividad. Resistente a la alcalinidad del cemento mortero y de la cal. Es fácil de aplicar. Sella la superficie y mejora la adherencia del sistema impermeable.', 282.07, '1627608.png'),
(297, 'Fester Blanc 19L', 'Producto formulado a base de resinas 100% acrílicas y pigmentos seleccionados que le proporcionan propiedades de elasticidad, reflectividad, protección y duración.', 4109.56, '8404-5.png'),
(298, 'Fester Bond 1L', 'Compuesto líquido a base de resinas estireno-acrílicas en dispersión, con características de adhesividad, resistencia a la humedad, abrasión e impacto. No se amarilla a la intemperie. Se usa para adherir mortero nuevo a concreto viejo. No lo ataca alcalinidad propia de los los morteros o concretos, como sucede con otras resinas. Como sellador, una vez seco es incoloro con resistencia al agua. Fortificador de: Pinturas de cal, cemento, vinílicas o acrílicas.', 265.75, '8400-3.png'),
(299, 'Fester Bond 19L', 'Compuesto líquido a base de resinas estireno-acrílicas en dispersión, con características de adhesividad, resistencia a la humedad, abrasión e impacto. No se amarilla a la intemperie. Se usa para adherir mortero nuevo a concreto viejo. No lo ataca alcalinidad propia de los los morteros o concretos, como sucede con otras resinas. Como sellador, una vez seco es incoloro con resistencia al agua. Fortificador de: Pinturas de cal, cemento, vinílicas o acrílicas.', 3218.3, '8400-5.png'),
(300, 'Fester Bond 4L', 'Compuesto líquido a base de resinas estireno-acrílicas en dispersión, con características de adhesividad, resistencia a la humedad, abrasión e impacto. No se amarilla a la intemperie. Se usa para adherir mortero nuevo a concreto viejo. No lo ataca alcalinidad propia de los los morteros o concretos, como sucede con otras resinas. Como sellador, una vez seco es incoloro con resistencia al agua. Fortificador de: Pinturas de cal, cemento, vinílicas o acrílicas.', 828.57, '8400-4.png'),
(301, 'Fester Cimbrafest DC-310 19L', 'Emulsión base agua formulada con compuestos parafínicos, que evita la adherencia del concreto o mortero a cimbras de madera, plástico o metal, facilita el desmolde y promueve un buen acabado del concreto o mortero alargando la vida útil de la cimbra.', 1061.67, '1852740.png'),
(302, 'Fester CM-100 10Kg', 'Mortero a base de cemento, resinas en polvo de alta calidad e inhibidores de corrosión para tratamiento del acero de refuerzo utilizado en elementos de concreto.', 532.79, '1948694.png'),
(303, 'Fester CM-200 25Kg', 'Mortero a base de cemento hidráulico aditivos especiales y agregados de granulometría fina, monocomponente, de fácil aplicación, rápido fraguado, impermeable y sin contracción. Resistencia a la compresión de 210 Kg/cm2.', 1012.7, 'FAO0941.png'),
(304, 'Fester CM-201 25Kg', 'Mortero elaborado a base de cemento hidráulico, aditivos especiales y agregados de granulometría fina, de un solo componente, fácil aplicación, rápido fraguado, impermeable y sin contracción. Fester CM - 201, al prepararlo produce una pasta suave de consistencia tixotrópica para evitar escurrimientos al usarlo para reparaciones en elementos de concreto en posición vertical, horizontal o sobre cabeza. Recomendado para la reparación de elementos de concreto estructural y no estructural.', 1257.55, '1848427.png'),
(305, 'Fester CM-202 25kg', 'Mortero fluido y autocompactable a base de cemento hidráulico aditivos especiales y agregados de granulometría fina, monocomponente, de fácil aplicación, rápido fraguado, impermeable y sin contracción. Resistencia a la compresión de 460 Kg/cm2', 1257.55, '1848426.png'),
(306, 'Fester CR-65 25Kg', 'Impermeabilizante cementoso: Compuesto base cemento, en polvo, de color gris que una vez mezclado toma una consistencia cremosa, suave y fácil de aplicar. Ya seco forma una capa impermeable. Solamente necesita agua para su preparación.', 1012.7, '1630119.png'),
(307, 'Fester CR-66 35Kg', 'Impermeabilizante cementoso súper elástico, de dos componentes que al ser mezclados toman una consistencia cremosa, suave y fácil de aplicar. Ya seco Fester® CR-66 forma una capa impermeable y elástica que puede soportar movimiento de la superficie y proporciona excelente resistencia al puenteo de grietas.', 2709.02, '1630118.png'),
(308, 'Fester Curafest MC-320 19L', 'Membrana acrílica esperable para curado de concretos y morteros impermeabilizante para curado líquido blanco, base agua, formulado a base de resinas acrílicas. Cura en elementos de concreto cualquier posición. Contribuye para lograr la resistencia del diseño en los elementos de concreto o mortero, su color blanco mientras se aplica, permite identificar las áreas en donde se va colocando y al secar da lugar a una apariencia transparente y satinada.', 1206.62, '1852738.png'),
(309, 'Fester Curafest MC-330 19L', 'Líquido viscoso color blanco formulado con resinas acrílicas, diseñado para curar concretos o morteros al retirar la cimbra, habiendo transcurrido entre 16 y 24 horas, formando una película que tarda la evaporación del agua remanente.', 869.71, '1852736.png'),
(310, 'Fester Cx-01 25Kg', 'Compuesto en polvo base cemento, agregados minerales de granulometría controlada y aditivos activos.', 3459.24, '2140807.png'),
(311, 'Fester Cx-01 5Kg', 'Compuesto en polvo base cemento, agregados minerales de granulometría controlada y aditivos activos.', 969.6, '2140806.png'),
(312, 'Fester Epoxine 200 1L', 'Adhesivo epóxico para uniones estructurales. Al ser aplicado en la superficie de concreto existente (viejo) forma una capa que provee adhesividad, dando continuidad estructural.', 1294.77, '1632131.png'),
(313, 'Fester Expansiva 750ml', 'Espuma de poliuretano sella , pega , rellena y aísla oquedades y juntas constructivas. Tiene una expansión rápida,segura, efectiva y ligera, aísla humedad,temperatura,ruido, roedores e insectos amortigua vibraciones.', 197.84, '1949381.png'),
(314, 'Fester Fachadas Liso Blanco 19L', 'Es un impermeabiliznte acrilico base agua, elaborado con resinas acrilicas, pigmentos inorgánicos, agregados minerales y aditivos de primera calidad. Diseñado con la viscosidad ideal para aplicarse sobre muros y fachada. No escurre, repelente al polvo, no forma barrera de vapor, cubre fisuras de hasta .5mm, resistencia a los rayos ultravioleta, ambientes salinos y húmedos, formación de hongos. Libre de solventes y no contamina.', 2969.54, '1627631.png'),
(315, 'Fester Fibrafest 100g', 'Fibra de polipropileno 100% virgen en forma de filamentos y tratada con dispersantes. Funciona como refuerzo secundario en concretos y morteros.', 24.23, '1643247.png'),
(316, 'Fester Fibrafest 600g', 'Fibra de polipropileno 100% virgen en forma de filamentos y tratada con dispersantes. Funciona como refuerzo secundario en concretos y morteros.', 123.31, '1643220.png'),
(317, 'Fester Ft 101 Blanco 280ml', 'Sellador elástico y adhesivo de un componente para juntas de movimiento moderado, que cura con la humedad del ambiente, para interiores y exteriores, basado en la tecnología Flextec® exclusiva de Henkel.', 245.18, '1894506.png'),
(318, 'Fester Ft 101 Gris 280ml', 'Sellador elástico y adhesivo de un componente para juntas de movimiento moderado, que cura con la humedad del ambiente, para interiores y exteriores, basado en la tecnología Flextec® exclusiva de Henkel.', 245.18, '1894505.png'),
(319, 'Fester Ft 201 Blanco 280ml', 'Sellador elástico y adhesivo de un componente para juntas de movimiento moderado, que cura con la humedad del ambiente, para interiores y exteriores, basado en la tecnología Flextec® exclusiva de Henkel.', 242.73, '1895915.png'),
(320, 'Fester Ft 201 Gris 280ml', 'Sellador elástico y adhesivo de un componente para juntas de movimiento moderado, que cura con la humedad del ambiente, para interiores y exteriores, basado en la tecnología Flextec® exclusiva de Henkel.', 242.73, '1895914.png'),
(321, 'Fester Grout NM 600 10Kg', 'Estabilizador de volumen no metálico, mortero sin contracción. Es un producto químico en polvo, libre de cloruros, a base de cemento Portland, agregados minerales y aditivos, que al mezclarse con agua produce un mortero sin contracciones, de buena resistencia y excelente fluidez que facilita su colocación y acomodo. Alcanza una resistencia a la compresión de 625 kg/cm2 a 28 días.', 352.58, '1593908.png'),
(322, 'Fester Grout NM 600 30Kg', 'Estabilizador de volumen no metálico, mortero sin contracción. Es un producto químico en polvo, libre de cloruros, a base de cemento Portland, agregados minerales y aditivos, que al mezclarse con agua produce un mortero sin contracciones, de buena resistencia y excelente fluidez que facilita su colocación y acomodo. Alcanza una resistencia a la compresión de 625 kg/cm2 a 28 días.', 912.8, 'F-A-1120-8.png'),
(323, 'Fester Grout NM 800 30Kg', 'Producto químico en polvo a base de cemento Pórtland, agregados minerales y aditivos que al mezclarse con agua produce un mortero sin contracciones, de alta resistencia a la compresión (f´c = 580 Kg./cm² a 24 horas, 960 Kg./cm² a 28 días) y buena fluidez.', 1055.79, 'F-A-0083-6.png'),
(324, 'Fester No Más Goteras Cinta', 'Cinta impermeable autoadhesiva que se amolda a todas las formas y pega prácticamente sobre cualquier superficie siempre y cuando esté limpia y seca.\n', 155.39, '3863-0.png'),
(325, 'Fester Imperfácil No Más Goteras Pasta 1L', 'Imperfácil no más goteras pasta color blanco, material de consistencia pastosa formulado a base de asfalto, solventes especiales de rápida evaporación, rellenos materiales, fibras naturales libres de asbestos y aditivos que le le permiten excelentes propiedades de adherencia en superficies húmedas o secas.', 206.01, '1628800.png'),
(326, 'Fester Mix 19L', 'Líquido de color transparente grisáceo, es un compuesto de agentes acelerantes y dispersantes que activan la hidratación del cemento reduce el tiempo de fraguado, aumentando las resistencias a primeras edades. Fragua con bajas temperaturas, permite descimbrar en menos tiempo y brinda un ahorro considerable en cimbra', 814.86, '3875-5.png'),
(327, 'Fester Mix 4L', 'Líquido de color transparente grisáceo, es un compuesto de agentes acelerantes y dispersantes que activan la hidratación del cemento reduce el tiempo de fraguado, aumentando las resistencias a primeras edades. Fragua con bajas temperaturas, permite descimbrar en menos tiempo y brinda un ahorro considerable en cimbra', 240.93, '3875-0.png'),
(328, 'Fester Super Seal P Blanco 300ml', 'Sellador de poliuretano autonivelante, monocomponente de alto desempeño, el cual cura en contacto con la humedad del aire formando un sello de alta adherencia y elasticidad, buena resistencia a contactos incidentales o salpicaduras con hidrocarburos (gasolina, diésel, aceites y grasas). Puede someterse a condiciones de trabajo de -40 a 82°C cuando ha curado, producto recomendado para juntas de hasta 25 mm (1”) de ancho. ', 196.53, '3851-0.png'),
(329, 'Fester Super Seal P Gris 300ml', 'Sellador de poliuretano autonivelante, monocomponente de alto desempeño, el cual cura en contacto con la humedad del aire formando un sello de alta adherencia y elasticidad, buena resistencia a contactos incidentales o salpicaduras con hidrocarburos (gasolina, diésel, aceites y grasas). Puede someterse a condiciones de trabajo de -40 a 82°C cuando ha curado, producto recomendado para juntas de hasta 25 mm (1”) de ancho. ', 196.53, '3850-0.png'),
(330, 'Festerflex 1.10m X 10m', 'Membrana flexible elaborada a base de fibras sintéticas inorgánicas de poliéster con resistencia multidireccional para sistemas impermeables asfálticos; tanto base agua, como base solvente.', 193.92, '3864-0.png'),
(331, 'Festerflex 1.10m X 100m', 'Membrana flexible elaborada a base de fibras sintéticas inorgánicas de poliéster con resistencia multidireccional para sistemas impermeables asfálticos; tanto base agua, como base solvente.', 1200.74, '3864-1.png'),
(332, 'Festex Silicon 4L', 'Solución hidrofugante de rápida aplicación compuesta de resina silicona en solvente volátil de alto poder penetrante. Contiene un poderoso agente impregnante que modifica los poros de la superficie a tratar cubriéndolos con silicón, polímero de alta resistencia.', 747.28, 'FI00979.png'),
(333, 'Festex Silicon 19L', 'Solución hidrofugante de rápida aplicación compuesta de resina silicona en solvente volátil de alto poder penetrante. Contiene un poderoso agente impregnante que modifica los poros de la superficie a tratar cubriéndolos con silicón, polímero de alta resistencia.', 3457.28, '5460.png'),
(334, 'Hidroprimer 19L', 'Imprimador para sistemas impermeables base solvente. Compuesto asfáltico de baja viscosidad, formulado con solventes de rápida evaporación para sellado de superficies previo a la aplicación de sistemas impermeables asfálticos base solvente y membranas prefabricadas.', 2712.93, '8408-5.png'),
(335, 'Hidroprimer 4L', 'Imprimador para sistemas impermeables base solvente. Compuesto asfáltico de baja viscosidad, formulado con solventes de rápida evaporación para sellado de superficies previo a la aplicación de sistemas impermeables asfálticos base solvente y membranas prefabricadas.', 637.1, '8408-4.png'),
(336, 'Imperfest E 19L', 'Impermeabilizante para superficies horizontales. Material Bituminoso con cargas minerales y fibras naturales libre de asbesto. Ideal para aplicar en losas de concreto armado con pendiente propia. Excelente adherencia en superficies secas o húmedas.', 1339.82, '3860-5.png'),
(337, 'Imperfest E 4L', 'Impermeabilizante para superficies horizontales. Material Bituminoso con cargas minerales y fibras naturales libre de asbesto. Ideal para aplicar en losas de concreto armado con pendiente propia. Excelente adherencia en superficies secas o húmedas.', 371.7, '3860-4.png'),
(338, 'Integral A-Z 19L', 'Pasta de color café oscuro, formulada a base de aditivos que aceleran e inducen el fraguado instantáneo en mezclas con concreto. Detiene el flujo de agua en segundos.', 3715.84, '8704-5.png'),
(339, 'Integral A-Z 4L', 'Pasta de color café oscuro, formulada a base de aditivos que aceleran e inducen el fraguado instantáneo en mezclas con concreto. Detiene el flujo de agua en segundos.', 916.23, '8704-4.png'),
(340, 'Microfest 19L', 'Impermeabilizante asfáltico emulsionado (base agua) para usos múltiples. Lo puedes utilizar como impermeabilizante para lozas de concreto armado con pendientes en climas templados y cálidos. Excelente adherencia tanto a superficies secas como húmedas, por lo que puede ser aplicado en cualquier época del año.', 1586.63, '8401-5.png'),
(341, 'Microfest 4L', 'Impermeabilizante asfáltico emulsionado (base agua) para usos múltiples. Lo puedes utilizar como impermeabilizante para lozas de concreto armado con pendientes en climas templados y cálidos. Excelente adherencia tanto a superficies secas como húmedas, por lo que puede ser aplicado en cualquier época del año.', 418.69, '8401-4.png'),
(342, 'Microlastic 19L', 'Compuesto asfáltico base agua, modificado con elastómeros y fibras naturales libres de asbesto que le proporcionan mejor flexibilidad, elasticidad, adherencia y duración.\n', 1941.17, '8406-5.png'),
(343, 'Plastic Cement 1L', 'Sellador y calafateador para fisuras y puntos críticos en sistemas impermeables. Material de consistencia pastosa, formulado a base de asfalto modificado, solventes de rápida evaporación, rellenos minerales y un alto contenido de fibras naturales libres de asbesto y tolueno.', 208.94, '8402-3.png'),
(344, 'Plastic Cement 19L', 'Sellador y calafateador para fisuras y puntos críticos en sistemas impermeables. Material de consistencia pastosa, formulado a base de asfalto modificado, solventes de rápida evaporación, rellenos minerales y un alto contenido de fibras naturales libres de asbesto y tolueno.', 2687.47, '8402-5.png'),
(345, 'Plastic Cement 4L', 'Sellador y calafateador para fisuras y puntos críticos en sistemas impermeables. Material de consistencia pastosa, formulado a base de asfalto modificado, solventes de rápida evaporación, rellenos minerales y un alto contenido de fibras naturales libres de asbesto y tolueno.', 662.56, '8402-4.png'),
(346, 'Fester E-510 Terracota', 'Acabado protector para impermeabilizantes asfálticos, formulado a base de resinas 100% acrílicas y pigmentos seleccio- nados que proporcionan propiedades de elasticidad, reflectividad y duración.', 5599.22, 'E-510.png'),
(347, 'Sista Backer Rod 1/2\" Rollo 381m', 'Sista Backer Rod es una tira cilíndrica de espuma de polietileno impermeable y elástica que se coloca en el interior de juntas de expansión y en grietas como material de respaldo.', 2567, '1394246.png'),
(348, 'Sista Backer Rod 3/8\" Rollo 320m', 'Sista Backer Rod es una tira cilíndrica de espuma de polietileno impermeable y elástica que se coloca en el interior de juntas de expansión y en grietas como material de respaldo.', 2345.66, '1394245.png'),
(349, 'Sista Backer Rod1/4\" Rollo 610m', 'Sista Backer Rod es una tira cilíndrica de espuma de polietileno impermeable y elástica que se coloca en el interior de juntas de expansión y en grietas como material de respaldo.', 1738.43, '1394244.png'),
(350, 'Vaportite 550 1L', 'Impermeabilizante asfáltico base solvente de usos múltiples, elaborado con asfaltos refinados, agregados minerales, fibras de refuerzo libres de asbesto y disolventes de rápida evaporación.\n', 283.71, 'F-11513-9.png'),
(351, 'Vaportite 550 19L', 'Impermeabilizante asfáltico base solvente de usos múltiples, elaborado con asfaltos refinados, agregados minerales, fibras de refuerzo libres de asbesto y disolventes de rápida evaporación.\n', 2936.24, '8405-5.png'),
(352, 'Vaportite 550 4L', 'Impermeabilizante asfáltico base solvente de usos múltiples, elaborado con asfaltos refinados, agregados minerales, fibras de refuerzo libres de asbesto y disolventes de rápida evaporación.\n', 758.54, '8405-4.png'),
(547, 'FESTER A FIBRATADO BLANCO 19 LT', '', 2323.13, '2555161.jpg'),
(548, 'FESTER AD 1 LT', '', 92.89, '2004800.jpg'),
(549, 'FESTER CL-52 19 LT', '', 4536.58, '2622500.jpg'),
(550, 'FESTER CL-52 4 LT', '', 1098.89, '2622499.jpg'),
(551, 'FESTER INTEGRAL A-Z 1 LT', '', 354.23, '1630091.jpg'),
(552, 'FESTER MICROLASTIC 4 LITROS', '', 505.37, '1628814.jpg'),
(553, 'FESTEX SILICON 4L', '', 974.01, '1640178.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `administrador` tinyint(1) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `administrador`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Eliezer Fuentes', 'eliezer@gmail.com', NULL, '$2y$10$.M/z4PI.0YhyI9ny5oEz9.qfdcME0DjwVovV6V0cw1vVV3pFN1qk6', 1, NULL, '2021-10-05 01:34:39', '2021-10-05 01:34:39'),
(2, 'Ammi Fuentes', 'ammi@gmail.com', NULL, '$2y$10$3sUHW0QVZcxE19giTTan.OUJHWrJLPKVSzKfCj6EEXoK8CvRn6cLS', 0, NULL, '2021-10-05 02:30:46', '2021-10-05 02:30:46');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=554;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
