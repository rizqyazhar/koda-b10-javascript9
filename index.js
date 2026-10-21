const URL = "https://jsonplaceholder.typicode.com/users";

const alphabet = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};

async function getDataAsyncAwait(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error.message);
  }
}

// WITH BUILT-IN
function toLowerCaseWithBuiltin(data) {
  return data.toLowerCase();
}

// WITHOUT BUILT-IN METHOD
function toLowerCaseWithoutBuiltin(data) {
  let hasil = "";
  for (let i = 0; i < data.length; i++) {
    if (alphabet[data[i]]) {
      hasil += alphabet[data[i]];
    } else {
      hasil += data[i];
    }
  }
  return hasil;
}

async function getEmail() {
  const data = await getDataAsyncAwait(URL);

  const emailToLowerCaseWithBuiltin = data.map((list) =>
    toLowerCaseWithBuiltin(list.email),
  );
  const emailToLowerCaseWithoutBuiltin = data.map((list) =>
    toLowerCaseWithoutBuiltin(list.email),
  );

  console.log("ToLowerCase With Builtin Method:");
  console.log(emailToLowerCaseWithBuiltin);
  console.log("ToLowerCase Without Builtin Method:");
  console.log(emailToLowerCaseWithoutBuiltin);
}

getEmail();
