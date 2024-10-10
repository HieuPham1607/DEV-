// cấu trúc điều khiển IF
// dạng 1 : if đơn
/*
cú pháp
if(condition-expression){
block statement;
}
*/
// ví dụ: cho số num; kiểm tra số num có là số dương?
num = 10;
if (num > 0) {
    console.log(num, "là số dương");
}
//Nếu num >0 thì gán lại giá trị num = -100;
if (num > 0) {
    num = -100
    console.log(num);
}

// Dạng 2 : if ... else
num = 14
//Kiểm tra xem số num là số chẵn hay số lẻ
if (num % 2 == 0) {
    console.log(num, "là số chẵn");

} else {
    console.log(num, "là Số lẻ");
}

//Dạng 3 : if bậc thang; if ... else if ...

//Kiểm tra số num là số dương,âm hay 0
num = -11
if (num > 0) {
    console.log(num, "là số dương");
} else if (num < 0) {
    console.log(num, "Là số âm");
} else {
    console.log(num, "Là số không");
}
//dạng 4 : nested if
num1 = 12;
num2 = 15;
//Nếu num1 là số chẵn; kiểm tra nếu num2 là số lẻ
//Thì tính:res = num1 + num2
//..
if (num1 % 2 == 0) {
    if (num2 % 2 == 1) {
        res = num1 + num2;
        console.log(res);
    }
} else {
    if (num2 % 2 == 1) {
        res = num1 - num2;
        console.log(res);
    }
}

//Luyện tập 1: Giải phương trình bậc 1: ax+b=0
numa = 2;
numb = -4;
if (numa == 0 && numb == 0) {
    console.log("Phương trình vô nghiệm");
} else if (numa !== 0 && numb === 0) {
    console.log("Phương trình vô nghiệm");
} else {
    console.log("phương trình có nghiệm x =", numb / numa);
}
// luyên tập 2: Giải phương trình bậc 2: ax^2+bx+c=0