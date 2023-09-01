function stringMethod() {
  // Length
  let text = "Anudhauthsala";
  let length = text.length;
  console.log(length);

  // slice
  let slice = "car, lorry, bus";
  let part = slice.slice(5, 10);
  console.log(part);

  // substring
  let str = "Red, Blue, Cake";
  let substring = str.substring(5, 9);
  console.log(substring);

  // replace
  let replace = "Please visit dubai!";
  let newText = replace.replace("dubai", "Sri Lanka");
  console.log(newText);

  // to uppercase
  let text1 = "Hello World!";
  let text2 = text1.toUpperCase();
  console.log(text2);
}

function numberMethod() {
  function adding() {
    let x = 30;
    let y = 20;
    let z = x + y;

    console.log(z);
  }

  adding();

  function numberSecond() {
    // Exponential

    let x = 8.256;
    x.toExponential(3);
    x.toExponential(4);
    x.toExponential(5);
    console.log(x);

    // fixed
    let y = 8.256;
    y.toFixed(1);
    y.toFixed(3);
    y.toFixed(4);
    y.toFixed(5);
    console.log(y);

    // preecision
    let z = 8.256;
    z.toPrecision();
    z.toPrecision(3);
    z.toPrecision(4);
    z.toPrecision(5);
    console.log(z);

    // value of
    let t = 165;
    t.valueOf();
    (165).valueOf();
    (100 + 65).valueOf();
    console.log(t);

    // Number
    Number(true);
    Number(false);
    Number("50");
    Number("  50");
    Number("50  ");
    Number(" 50  ");
    Number("50.33");
    Number("50,33");
    Number("50 33");
    Number("Alex");
  }

  numberSecond();
}

function arrMethod() {
  const foods = ["Rice", "Cake", "Rolls", "Noodles"];
  let size = foods.length;
  console.log(size);

  function pop() {
    const foods = ["Rice", "Cake", "Rolls", "Noodles"];
    foods.pop();

    console.log(foods);
  }

  function push() {
    const foods = ["Rice", "Cake", "Rolls", "Noodles"];
    foods.push("Bread");
    console.log(foods);
  }

  function shift() {
    const foods = ["Rice", "Cake", "Rolls", "Noodles"];
    foods.shift();
    console.log(foods);
  }

  function unshift() {
    const foods = ["Rice", "Cake", "Rolls", "Noodles"];
    foods.unshift("cake");
    console.log(foods);
  }

  unshift();
  shift();
  push();
  pop();
}

function DateAndTime() {
  // Create a new Date object
  const currentDate = new Date();

  // Get the current date and time components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Create a formatted string for the current date and time
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log(formattedDateTime);
}

arrMethod();
numberMethod();
stringMethod();
DateAndTime();
