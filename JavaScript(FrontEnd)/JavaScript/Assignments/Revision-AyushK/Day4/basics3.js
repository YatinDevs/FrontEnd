function search() {
  console.log("No Debounced Search Called!");
}

/*

f
fl
flo
flow
flowe
flower

flower

*/

/*

Time - 500ms

f
fl
flo

*/

// Key Press = Key Down + Key Up

// Debouncing

const search2 = debounce(() => debouncedSearch());

function debouncedSearch() {
  console.log("Debounced Search Called!");
}

function debounce(func, duration = 500) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, duration);
  };
}

// Throttling
