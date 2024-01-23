package ecommerce;
import java.util.Scanner;

public class FuncionDescuento {
	
	
	public static class Calculadoras{

	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese el costo del producto"); // Obtener el precio del producto 
		double precioProducto = scanner.nextDouble();
		
		double porcentajeDescuento = 15;
		double descuento = calcularPorcentaje(precioProducto, porcentajeDescuento);
		
		double porcentajeImpuesto = 3; 
		double impuesto = calcularPorcentaje(precioProducto, porcentajeImpuesto);
		
		double total = calcularTotal(precioProducto, descuento, impuesto);//calcular el total
		
		total = redondear (total, 2);
		
		System.out.println("Precio del producto $" + precioProducto);
		System.out.println("Descuento aplicado al producto $" + descuento); 
		System.out.println("Impuesto aplicado $" + impuesto);
		System.out.println("Total a pagar $" + total);
		
		scanner.close();
		
		
	}
	
	static double calcularPorcentaje (double precio, double porcentaje) {
		return (precio * porcentaje / 100);
	}
	static double calcularTotal (double precioProducto, double descuento, double impuesto) {
		return precioProducto - descuento + impuesto;
	}
	static double redondear (double valor, int decimales) {
		double factor = Math.pow(10,decimales);
		return Math.round(valor * factor) / factor;
	}
	
	
	/*La refactorizacion es reestructurar código que ya existe sin alterar su comportamiento. Tiene como objetivo mejorar la legibilidad, mantenibilidad y optimizacion de nuestro codigo*/
	
}
}