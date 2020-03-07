const array = [];
for (i = 0; i < 100; i++) {
  array[i] = Math.floor(Math.random() * 1000);
}

let sum = 0;
array.forEach(element => (sum += element));
console.log(sum);

let min = Infinity;
array.forEach(element => {
  if (element < min) min = element;
});
console.log(min);

let max = -Infinity;
array.forEach(element => {
  if (element > max) max = element;
});
console.log(max);

let artadryal = 1;
array.forEach(element => {
  if (element !== 0) artadryal *= element;
});
console.log(artadryal);

//  tver@  andam  andam

let g = 0;
let y=0;
let mnacord;
array.forEach(element => {
  if (element !== 0) {
    while (element > 0.9 || element < -0.9) {
      mnacord = element % 10;
      g += mnacord;
      element -= mnacord;
      element /= 10;
    }
    y += g;
    mnacord = 0;
    g = 0;
  }
});
console.log(y);
