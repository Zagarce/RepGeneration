package ejercicio3;

import java.util.Scanner;

public class MangosNaranjasMain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Número de mangos: ");
        int mangos = scanner.nextInt();

        System.out.print("Número de naranjas: ");
        int naranjas = scanner.nextInt();

        MangosNaranjas cajas = new MangosNaranjas(mangos, naranjas);
        cajas.imprimir();

        scanner.close();
    }
}