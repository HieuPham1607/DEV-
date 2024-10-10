//Toán tử, toán hạn, biểu thức, câu lệnh, khối lệnh
//1. Số học: *, /, +, -, %,
num1 = 12;
num2 = 25;

// thực hiện các phép toán số học

res = num1 * num2;
console.log(num1, "*", num2, "=", res);
res = num1 / num2;
console.log(num1, "/", num2, "=", res);
res = num1 + num2;
console.log(num1, "+", num2, "=", res);
res = num1 - num2;
console.log(num1, "-", num2, "=", res);
res = num2 % num1;
console.log(num1, "%", num2, "=", res);

//2. Phép toán so sánh => trả về giá trị boolear (true/false)
//>; >=; <; <=; ==; ===; !=; !==
res = num1 > num2;
console.log(num1, ">", num2, "=> , res");

//3. Toán tử logic - thập phân (and &&; or ||; not !)

num1 = 12;
num2 = 15;

res = (num1 > 10) && (num2 < 10);
console.log("(num1>10) && (num2<10)=>", res);
res = (num1 > 10) || (num2 < 10);
console.log("(num1>10) ||(num2<10)=>", res);

res = !(num1 > 10) || (num2 < 10);
console.log("(num1>10) ||(num2<10)=>", res);

res = !(num1 > 10) || (num2 < 10);
console.log("(num1>10) ||(num2<10)=>", res);

res = !(num1 > 10) || (num2 < 10);
console.log("!(num1>10) ||(num2<10)=>", res);

res = (num1 > 10) || !(num2 < 10);
console.log("(num1>10) ||!(num2<10)=>", res);

//4. Toán tử đặc biệt

num1 = 12;
num2 = 15;
res = (num1 > 10) ? "Giá trị lớn hơn" : "Nhỏ hơn";
console.log(res);
res = (num2 % 2 == 0) ? "Số chẵn" : "Số lẻ";
console.log("typeof(num1):", res);
//typeof

res = typeof (num1); // number
console.log("typeof(num1):", res);

num1 = "12345";
res = typeof (num1); //string
console.log("typeof(num1):", res);