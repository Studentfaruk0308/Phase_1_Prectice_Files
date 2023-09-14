const myVar = 'Foo';

function first () {
  console.log('Inside first()');

  console.log('myVar is currently equal to:', myVar);
}

function second () {
  const myVar = 'Bar';

  first();
}

console.log(second());







  

