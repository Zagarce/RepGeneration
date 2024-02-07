package codigo5;

import java.util.Scanner;

public class Codigo5 {
	public static void main(String[] args) {

    Scanner scr = new Scanner(System.in);
    System.out.println("Introduzca un número: ");
    int numero = scr.nextInt();
    int contador = numero;
    
    int afortunado = 0;
    int noafortunado = 0;
    
    while (contador > 0) {
	  int digito = (int)(contador % 10);
	  System.out.println(digito);
      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
		afortunado++;
      } else {
		noafortunado++;
    }
      contador /= 10;
      System.out.println(contador);
    }
    
    if (afortunado > noafortunado) {
      System.out.println("El " + numero + " es un número afortunado.");
    } else {
      System.out.println("El " + numero + " no es un número afortunado.");
    }
   
    scr.close();
}
}