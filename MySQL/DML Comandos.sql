-- Sentencias/querys/comandos basicos de SQL

-- Mostrar las bases de datos almacenadas

SHOW DATABASES;

-- Para usar una base de datos en específico es
USE ch35;

-- Mostrar las tablas
SHOW TABLES; 

/* 
DML COMANDOS
SELECT : Nos va a mostrar la informacion que solicitemos
SELECT : nos permite recuperar datos de una base de datos. Es una de las operaciones mas comunes
SELECT + datsABuscar + From dondeVoyABuscar + condicion o filtro especial

-- Consulta de toda la informacion de una tabla (usando el asterisco)
*/

SELECT nombre FROM productos;

-- Consultar multiples datos de una tabla
SELECT nombre, descripcion, stock FROM productos;
 
-- Filtrar informacion usando SELECT mas la clausula WHERE
SELECT * FROM productos 
WHERE nombre = 'Taza de Café Expreso' AND stock < 150; 

-- Funcion min para calcular el minimo de una columna
SELECT MIN(stock) AS Stock_minimo FROM productos; 

-- Funcion max para calcular el minimo de una columna
SELECT MAX(stock) AS Stock_maximo FROM productos; 

-- Funcion COUNT para calcular el total de productos
SELECT count(nombre) AS Total_de_productos FROM productos;

-- Funcion para calcular el proemdio del precio de los productos
SELECT AVG(precio) AS Precio_promedio FROM productos; 

-- Funciion para sumar el total de precios
SELECT sum(precio) AS Ingresos_totales from productos;

-- Consulta del precio de un producto
SELECT nombre, descripcion, stock, precio FROM productos
WHERE precio < 50;

SELECT nombre, descripcion, stock, precio FROM productos
WHERE stock <= 100 AND precio > 11 ;

select distinct * from productos;


-- JOINS : clausulas que se utlizan para combinar dos o mas tablas en una columna relacionada

-- Inner Join : toma dos tablas y hace una o trabaja a partir de su correlacion

SELECT cliente.nombre, cliente.apellido, pedidos.estado_pedido
FROM cliente
INNER JOIN pedidos on cliente.id_cliente = pedidos.cliente_id_cliente;

SELECT pedidos.id_pedidos, cliente.nombre, pedidos.fecha, pedidos.estado_pedido
FROM pedidos
INNER JOIN cliente ON pedidos.cliente_id_cliente = cliente.id_cliente
WHERE pedidos.fecha = '2023-12-01';

-- Consulta para clientes y pedidos
-- (LEFT JOIN)
SELECT cliente.nombre, pedidos.id_pedidos
from cliente
left join pedidos on cliente.id_cliente = pedidos.cliente_id_cliente;

-- Consulta para productos y pedidos 
-- (Right join)
SELECT Productos.Nombre, DetallesPedido.Cantidad, DetallesPedido.PrecioUnitario
FROM DetallesPedido
RIGHT JOIN Productos ON DetallesPedido.ID_Producto = Productos.ID_Producto;

-- WHERE (IN, BETWEEN, LIKE)

SELECT * FROM pedidos
where id_cliente in (2,1,4);