import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;



public class Result {

    /*
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<Integer> arr) {
    // Write your code here
    	// 
    	int arraySize = arr.size();
    	int positivos = 0;  
    	int negativos = 0;
    	int cero = 0;
    	
    	for(Integer numero : arr) {
    		if(numero > 0) {
    			positivos++;
    		} else if(numero <0) {
    			negativos++;
    		} else{
    			cero ++;
    		}
    	}
    	double ratio1 = ratio(positivos, arraySize); 
    	double ratio2 = ratio(negativos, arraySize); 
    	double ratio3 = ratio(cero, arraySize); 
    	
    	System.out.println(ratio1);
    	System.out.println(ratio2);
    	System.out.println(ratio3);
    }

    public static double ratio(int num1, int num2) {
    	return ((double)num1/num2*Math.pow(10, 6))/Math.pow(10, 6);
    }

}
