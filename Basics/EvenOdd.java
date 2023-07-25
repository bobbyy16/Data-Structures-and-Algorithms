package Basics;

// problem

// https://www.codingninjas.com/studio/problems/sum-of-even-odd_624650?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

import java.util.*;
public class EvenOdd {
	
	public static void main(String[] args) {
		// Write your code here
		Scanner scan = new Scanner(System.in);
		String a = scan.nextLine();
		int even = 0, odd = 0;
		for(int i=0; i<a.length(); i++){
			int n = a.charAt(i) - '0';
			if(n % 2 == 0) even += n;
			else odd += n;
		}
		System.out.println(even+" "+ odd);

	}
}