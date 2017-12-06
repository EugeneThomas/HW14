// Excited Cookies: Samantha Ngo and Eugene Thomas
// SoftDev1 pd7
// HW15 -- Sequential Progression
// 2017-12-06

var fibonacci = function(n) {
 if (n == 0) {
   return 0;
 }
 else if (n <= 2){
   return 1;
 }
 else {
   return fibonacci(n - 1) + fibonacci(n - 2);
 }
}

var gcd = function (a,b) {
  var x;
  a = Math.abs(a);
  b = Math.abs(b);
  if (a > b) {x = b;}
  else {x = a;}
  while (x > 0) {
    if (a%x == 0 && b%x == 0) {
      break;
    }
    else {
      x -= 1;
    }
  }
  return x;
}

// Feel free to add more names!!!
var students = ["Samantha", "Eugene", "Yuyang", "Carol"]
var randomStudent = function() {
    var s = Math.random() * (students.length-1);
    s = s.toFixed(0); // Rounds to the nearest integer since JavaScript does not possess an int() method.
    return students[s];
}


console.log(fibonacci(3))
console.log(fibonacci(7))
console.log(fibonacci(14))
console.log(gcd(3, 7))
console.log(gcd(120, 180))
console.log(gcd(36592, 71042))
console.log(randomStudent())
console.log(randomStudent())
console.log(randomStudent())
