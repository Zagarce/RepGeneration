package hilos;

public class Prueba2 implements Runnable {
	
	private String numeroPedido;
	
	public Prueba2(String numeroPedido) {
		this.numeroPedido = numeroPedido;
	}
	
	public void run() {
		System.out.println("pedido procesado " + numeroPedido);
	}
}
