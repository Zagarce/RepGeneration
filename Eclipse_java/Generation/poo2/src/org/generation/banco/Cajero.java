package org.generation.banco;
/* 
 * En Cajero se instancia el objeto de CuentaBancaria y se invocan los métodos definidos 
 * Aqui sí se pueden estableer los try-catch de la excepcion que se definió en el método 'retirar'
 * Los resultados se muestran en consola.  
 */
public class Cajero {
	public static void main(String [] args) {
	CuentaBancaria cuentaBancaria = new CuentaBancaria(6989); // Cuenta bancaria con su idCuenta
	
	// simulamos que tenemos un Scanner y el cliente introduce dinero 
	System.out.println("Depositando $500");
	cuentaBancaria.depositar(500);
	
	// Revisar si se actualiza e saldo (debe haber $500)
	System.out.println("El nuevo saldo es de $" + cuentaBancaria.getSaldo());
	
	//Retirando dinero
	try {
		// Simulamos nuevamente el Scanner para retirar
		System.out.println("Retirando $300");
		cuentaBancaria.retirar(300);
		System.out.println("El nuevo saldo es de $" + cuentaBancaria.getSaldo());
		
		System.out.println("Retirando $200");
		cuentaBancaria.retirar(200);
		System.out.println("El nuevo saldo es de $" + cuentaBancaria.getSaldo());
		
		System.out.println("Retirando $300");
		cuentaBancaria.retirar(300);
		System.out.println("El nuevo saldo es de $" + cuentaBancaria.getSaldo());
		
	} catch (FondosInsuficientesException e) {
		System.out.println("\u001b[31mSaldo insuficiente. Faltan: $" + e.getMonto());
		e.printStackTrace(); // Método de excepciones que imprime el seguimiento del flujo de la excepción
		}
	}
	
}
