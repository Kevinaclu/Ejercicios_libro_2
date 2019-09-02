// Booleanos
let isDone: boolean = false;
// Numericos
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue"; //
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`
var lyrics = 'Never gonna give you up'; // entre comillas simples
var html = `<div>${lyrics}</div>`; // entre tilde inversa


let literalString = 'Hello';
literalString = 'Bye'; // Error: "Bye" is not assignable to type "Hello"

// Arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

// Declaración de tuplas
let x: [string, number];
// Inicialización correcta
x = ["hello", 10]; // OK
// Inicialización incorrecta
x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, Un tipo 'number' no tiene la función 'substr'


x[3] = "world"; // OK, Un tipo 'string' puede ser asignado a una tupla que contenga 'string | number'
console.log(x[5].toString()); // OK, Un tipo 'string' y un tipo 'number' tienen la función 'toString'
x[6] = true; // Error,El tipo 'boolean' no es 'string | number'

// Enums

enum Direction {
    Up = 1, // Si se le asigna un valor numerico primero, los siguientes valores empiezan desde el número especificado
    Down = NaN, // Si le ponemos un NaN despúes de haber inicializado un valor nos obliga a inicializar el siguiente desués de este, esto no solo pasa con Nan, pasa con String.length, etc.
    Left = "asdasd".length,
    Right = 1 << 1 // También admiten operadores binarios
}
var a = Direction.Up;
console.log(Direction.Down);

enum Color { Red, Green, Blue };
let c: Color = Color.Green; // 1

enum Color2 { Red = 1, Green = 2, Blue = 4 };
let c2: Color2 = Color2.Green; // 2

enum Color3 { Red = 1, Green, Blue };
let colorName: string = Color3[2];
alert(colorName); // Green

// FOO
enum FooIdBrand { }
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand { }
type BarId = BarIdBrand & string;
/**
* Demo
*/
var fooId: FooId;
var barId: BarId;
// Por seguridad
fooId = barId; // error
barId = fooId; // error
// Newing up
fooId = 'foo' as FooId;
barId = 'bar' as BarId;
// Los dos tipos son compatibles con la base
// que en este caso es string
var str: string;
str = fooId;
str = barId;

// Any
let notSure: any = 4;
notSure = "maybe a string instead"; // typeof = string
notSure = false;; // typeof = boolean

notSure.ifItExists(); // OK, ifItExists puede existir
notSure.toFixed(); // OK, toFixed existe, pero no es comprobado por el compilador
let prettySure: Object = 4;
prettySure.toFixed(); // Error: La propiedad 'toFixed' no existe en un 'Object'.

let list: any[] = [1, true, "free"];
list[1] = 100;

// Void
function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;

// Let 
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); // 456

let foo0 = 123;
if (true) {
    let foo0 = 456;
}
console.log(foo0); // 123

// Const
const foo2 = 123;
foo2 = 456; // NO permitido

const foo3 = { bar: 123 };
foo3 = { bar: 456 }; // ERROR no se permite la modificación de objeto

const foo4 = { bar: 123 };
foo4.bar = 456; // Permitido
console.log(foo4); // { bar: 456 }

// For in
let list3 = { a: 1, b: 2, c: 3 };
for (let i in list3) {
    console.log(list3[i]); // 1, 2, 3
}

let list4 = { a: 1, b: 2, c: 3 };
for (let i in list4) {
    console.log(i); // a, b, c
}

// For of
let list5 = ["a", "b", "c"];
for (let b of list5) {
    console.log(b); // a, b, c
}

let obj = { a: 1, b: 2, c: 3 };
for (let i of obj) {
    console.log(i); // Error
}