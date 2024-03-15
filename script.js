document.write("<h2>Task 1</h2>");

var a = 10;

document.write("Result:<br/>The value of a is: " + a);

document.write("------------------------------<br/>");

document.write("<br/>The value of ++a is: " + ++a);
document.write("<br/>Now the value of a: " + a);

document.write("<br/>The value of a++ is: " + a++);
document.write("<br/>Now the value of a: " + a);

document.write("<br/>The value of --a is: " + --a);
document.write("<br/>Now the value of a: " + a);

document.write("<br/>The value of a-- is: " + a--);
document.write("<br/>Now the value of a: " + a);



document.write("<h2>Task 2</h2>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("value of a is: " + a);
document.write("value of b is: " + b);
document.write("Result is: " + result);



document.write("<h2>Task 3</h2>");
var userName = prompt("Enter your Name: ");
document.write("hello, " + userName);


document.write("<h2>Task 4 & 5</h2>");
var numb = +prompt("Enter a Number: ");

if (numb !== 5) {
    for (let i = 1; i <= 10; i++) {
        document.write(`${numb} * ${i} = ${numb * i}<br />`)
    }
}
else {
    document.write("Number is not eligible");
}



document.write("<h2>Task 4</h2>");
var maths = +prompt("Enter a Maths Number 100 outof : ");
var english = +prompt("Enter a English Number 100 outof : ");
var urdu = +prompt("Enter a Urdu Number 100 outof : ");

var obtained = maths + english + urdu;

var percentage = (obtained / 300) * 100;

document.write(`
        <table> 
            <tr> 
                <th>Subject</th> 
                <th>Total Marks</th> 
                <th>Obtained Marks</th> 
                <th>Percentage</th> 
            </tr> 

            <tr>
                <td>English</td>
                <td>100</td>
                <td>${english}</td>
                <td>${(english / 100).toFixed(2) * 100}%</td>
            </tr>

            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>${maths}</td>
                <td>${(maths / 100).toFixed(2) * 100}%</td>
            </tr>

            <tr>
                <td>Urdu</td>
                <td>100</td>
                <td>${urdu}</td>
                <td>${((urdu / 100) * 100).toFixed(2)}%</td>
            </tr>

            <tr> 
                <th></th> 
                <th>300</th> 
                <th>${obtained}</th> 
                <th>${percentage.toFixed(2)}%</th> 
            </tr>
        </table>`);