const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Lee");
sayHello("Manbearpig");
sayHello("Alpacaman");

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');