package codigo6;

import java.util.ArrayList;
import java.util.Scanner;

public class Codigo6 {
	public static void main(String[] args) {
	Scanner scr = new Scanner(System.in);

	ArrayList<Integer> numeros = new ArrayList<Integer>();
	
    for (int k = 0; k < 20; k++) {
      numeros.add((int)(Math.random() * 381) + 20);
      int elementoNumeros = numeros.get(k);
      System.out.println(elementoNumeros + " ");
    }
    
    System.out.print("\n¿Qué números quiere resaltar? ");
    System.out.print("(1 – los múltiplos de 5; 2 – los múltiplos de 7): ");
    int opcion = scr.nextInt();

    int multiplo = (opcion == 1) ? 5 : 7;

    for (int e : numeros) {
      if (e % multiplo == 0) {
        System.out.print("[" + e + "] ");
      }
       else {
        System.out.print(e + " ");
       }
      }
    scr.close();
}
}