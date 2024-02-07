package ejercicio3;

class MangosNaranjas {
    private int mangos;
    private int naranjas;

    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;
        this.naranjas = naranjas;
    }

    public void imprimir() {
        int maxCajas = calcularMCD(mangos, naranjas);
        int mangosCaja = mangos / maxCajas;
        int naranjasCaja = naranjas / maxCajas;

        System.out.println("El número de cajas es: " + maxCajas);
        System.out.println("El número de mangos en una caja es: " + mangosCaja);
        System.out.println("El número de naranjas en una caja es: " + naranjasCaja);
    }
    
    public static int calcularMCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }
}