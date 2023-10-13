// Immediatly Invoked Function Expressions
// to avoid unnecessary values from global scope (avoid global scope pollution)
//  to immediately execute

function chai() {
  console.log(`DB connected`);
}
chai();

(function chai() {
  // named IIFE
  console.log(`DB connected`);
})();

// ()()

((name) => {
  //Unnamed IIFe
  console.log(`Db connected ${name}`);
})("kushal");
// semicolon is needed for ending function calls.
