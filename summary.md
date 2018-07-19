# paradigma pemograman
	* oop
    * prosedural
    * declaratif -> contoh my sql (insert into, selct), imperatif(case apa , bagaimana, lalu dll), stack 

### aliran/algoritma
masalah -> output -> proses -> input = IPO -> menggunakan flowchart & psudeocode

-functional pemograman-
 1. memastikan jika suatu agrumen diberikan sampai kapan pun akan tetap menghasilkan itu.
	pure = selalu mereturn value/hasil yang diberikan di parameter.
	contoh :
	jika coba memberikan value ke function multiple(a,b) hasil yang kaan dihasilkan tidak akan berubah, sebagai contoh kita berikan nilai di 	 function 5,2 "function multiple(5,2)" hasil yang kan dihasilkan adalah return a+b / 5+2 = 7 .

	   function multiple(a,b) {
	    return a + b;
	   }

   	console.log(multiple(5,2)); // 7

	impure = melakukan return/hasil yang bisa berubah jika memberikan send value di dalam scope.
	contoh : 
	var values = { a: 1 };

	function impureFunction ( items ) {
	  var b = 1;

	  items.a = items.a * b + 2;

	  return items.a;
	}

	var c = impureFunction( values );
	// Now `values.a` is 3, the impure function modifies it.
	
 2. no side effect -> i/o proses
	sebagai contoh dari side effect adalah ketika melakukan console.log(), karena console.lo tidak melakukan return apa2. 
	var a = 7;
   	console.log(a); // 7

 3. higher order function:
	Higher order function adalah fungsi yang menggunakan fungsi lain sebagai parameter atau sebagai hasil return.
	contohnya pada array .map()
	
	const names = ['Budi', 'Dewi', 'Santoso'];
	const greetNames = names.map( function (name) {
	  return 'Hai ' + name;
	});
	console.log(greetNames);
	// ['Hai Budi', 'Hai Dewi', 'Hai Santoso']
	 
syarat: imutebility tidak bisa diganti/berpindah/didefinisikan ulang.