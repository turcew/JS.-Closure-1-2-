function createLogger(prefix) {
  const pref = prefix;
  return function (message) {
    console.log(`${pref}: ${message}`);
  };
}

const authLogger = createLogger("AUTH");

const apiLogger = createLogger("API");

authLogger("User logged in");

apiLogger("Request failed");

function createLimiter(limit) {
  let lim = limit;
  let i = 0;

  return function () {
    if (limit < 1 || !Number.isInteger(limit) || limit === NaN) {
      console.log("Невірне число");
    } else {
      if (i < lim) {
        i++;
        return "OK";
      } else {
        return "Error";
      }
    }
  };
}

const limited = createLimiter(2);

console.log(limited());

console.log(limited());

console.log(limited());
