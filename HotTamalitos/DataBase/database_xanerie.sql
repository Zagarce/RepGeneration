-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema xianerie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema xianerie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `xianerie` DEFAULT CHARACTER SET utf8 ;
USE `xianerie` ;

-- -----------------------------------------------------
-- Table `xianerie`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`usuarios` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido_pa` VARCHAR(45) NOT NULL,
  `apellido_ma` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(15) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(255) NULL,
  `url_perfil_imegen` VARCHAR(255) NULL,
  PRIMARY KEY (`id_usuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `xianerie`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `imagen_producto` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` MEDIUMTEXT NOT NULL,
  `ingredientes` MEDIUMTEXT NOT NULL,
  `contenido` VARCHAR(10) NOT NULL,
  `precio` DECIMAL(5,2) NOT NULL,
  `tipo` VARCHAR(100) NOT NULL,
  `stock` INT NOT NULL,
  PRIMARY KEY (`id_productos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `xianerie`.`catalogo_estados_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`catalogo_estados_pago` (
  `id_catalogo_estados_pago` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_catalogo_estados_pago`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `xianerie`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`carrito` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT,
  `usuarios_id_usuarios` INT NOT NULL,
  PRIMARY KEY (`id_carrito`, `usuarios_id_usuarios`),
  INDEX `fk_carrito_usuarios1_idx` (`usuarios_id_usuarios` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_usuarios1`
    FOREIGN KEY (`usuarios_id_usuarios`)
    REFERENCES `xianerie`.`usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `xianerie`.`detalle_carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`detalle_carrito` (
  `id_detalle_carrito` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `carrito_id_carrito` INT NOT NULL,
  `productos_id_productos` INT NOT NULL,
  PRIMARY KEY (`id_detalle_carrito`, `carrito_id_carrito`, `productos_id_productos`),
  INDEX `fk_detalle_carrito_carrito1_idx` (`carrito_id_carrito` ASC) VISIBLE,
  INDEX `fk_detalle_carrito_productos1_idx` (`productos_id_productos` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_carrito_carrito1`
    FOREIGN KEY (`carrito_id_carrito`)
    REFERENCES `xianerie`.`carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_carrito_productos1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `xianerie`.`productos` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `xianerie`.`pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`pagos` (
  `id_pagos` INT NOT NULL,
  `imagen _pago` VARCHAR(45) NOT NULL,
  `catalogo_estados_pago_id_catalogo_estados_pago` INT NOT NULL,
  PRIMARY KEY (`id_pagos`, `catalogo_estados_pago_id_catalogo_estados_pago`),
  INDEX `fk_pagos_catalogo_estados_pago1_idx` (`catalogo_estados_pago_id_catalogo_estados_pago` ASC) VISIBLE,
  CONSTRAINT `fk_pagos_catalogo_estados_pago1`
    FOREIGN KEY (`catalogo_estados_pago_id_catalogo_estados_pago`)
    REFERENCES `xianerie`.`catalogo_estados_pago` (`id_catalogo_estados_pago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `xianerie`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`pedido` (
  `idpedido` INT NOT NULL,
  `total` DECIMAL(6,2) NOT NULL,
  `cantidad` INT NOT NULL,
  `usuarios_id_usuarios` INT NOT NULL,
  `pagos_id_pagos` INT NOT NULL,
  PRIMARY KEY (`idpedido`, `usuarios_id_usuarios`, `pagos_id_pagos`),
  INDEX `fk_pedido_usuarios_idx` (`usuarios_id_usuarios` ASC) VISIBLE,
  INDEX `fk_pedido_pagos1_idx` (`pagos_id_pagos` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuarios`
    FOREIGN KEY (`usuarios_id_usuarios`)
    REFERENCES `xianerie`.`usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_pagos1`
    FOREIGN KEY (`pagos_id_pagos`)
    REFERENCES `xianerie`.`pagos` (`id_pagos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `xianerie`.`pedido_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xianerie`.`pedido_productos` (
  `pedido_idpedido` INT NOT NULL,
  `pedido_usuarios_id_usuarios` INT NOT NULL,
  `productos_id_productos` INT NOT NULL,
  PRIMARY KEY (`pedido_idpedido`, `pedido_usuarios_id_usuarios`, `productos_id_productos`),
  INDEX `fk_pedido_has_productos_productos1_idx` (`productos_id_productos` ASC) VISIBLE,
  INDEX `fk_pedido_has_productos_pedido1_idx` (`pedido_idpedido` ASC, `pedido_usuarios_id_usuarios` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_has_productos_pedido1`
    FOREIGN KEY (`pedido_idpedido` , `pedido_usuarios_id_usuarios`)
    REFERENCES `xianerie`.`pedido` (`idpedido` , `usuarios_id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_has_productos_productos1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `xianerie`.`productos` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
