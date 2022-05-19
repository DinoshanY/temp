//Del 1
/*Oppgave 1
Gjøre none noe functjonen blir kalt*/

/*Oppgave 2

a) function x (){
    console.log("Hello, World!")
}

x();

for å lage en function start med function så navne av functionen eksemple x.

i () kan man put in parmaeter som kan være forkjellige verdi man får uten fra functionen.

i {} er code som kommer til å kjøre når funtionen blir kalt

for å kalle på en function skriver man navne til function med parantes og kolone eksemple x();

*/
function hello() {
    console.log("Hello, World!");
}

hello();

//b)
// functonen vill ikke kjøre vid den ikke blir kalt på
//c)
hello();

/*Oppgave 3
Et parmaeter som kan være forkjellige verdi man får uten fra functionen.
*/

//Oppgave 4
function parm(text) {
    console.log(text);
}

parm("Min parameter er");
parm("en gang med et argument du finner på selv.");

//Oppgave 5
function parmigjen(text, text2) {
    console.log(text, text2);
}

parmigjen("Første", "Andre");

/*Oppgave 6
Når return er skrevt i en code stoper den kode fra å forsete vidre til resten av koden

*/

//Oppgave 7
function numberAdd(num1, num2) {
    if (typeof (num1 && num2) == "number") {
        let add = num1 + num2;
        return console.log(add);
    }
    console.log("The skal bli stoppet av return vis parmaenterne er tall");
}

numberAdd(1, 2);
numberAdd("test", "test");

/*Oppgave 8
Bruker to functioner og kaller den enne i den andre i den første fuctionen gjorde jeg at vis man skrive en parma etter 
så blir den pushet til arrayen og så kaller jeg lopper som logger arrayen
*/
function navnPrint(ifText) {
    let names = ["Name1", "Name2", "Name3", "Name4", "Name5"];
    if (typeof ifText != "undefined") {
        names.push(ifText);
        looper(names);
        return;
    }
    looper(names);
}

function looper(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

navnPrint(1);


//Del 2
//Oppgave 1
const hi = "Hello, World";
empty = _ => {console.log(hi)} 
empty();

//Oppgave 2
arrowADD = tall => {console.log(tall + 100)} 
arrowADD(100);

//Oppgave 3
arrowADD = (a,b,c) => {console.log(a,b,c)} 
arrowADD(1,2,3);

//Oppgave 4
let logStuff = (arg1, arg2, ...moreArg) => {

	// Logs arg1
	console.log(arg1);

	// Logs arg2
	console.log(arg2);

	// Logs array
	console.log(moreArg);

};

logStuff('1', '2', '3', '4', '5', '6');

/*Oppgave 5
Begge er difnet som en function på forkjellige måtter

function som function

arrow som x =_=>, x =>, ()=> og x = y =>
*/


