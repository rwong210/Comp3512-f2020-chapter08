// convert comma-separated values into an array
const countries = csv.split(',');
console.log(countries);

// convert array into delimited string
let foo = countries.join();
console.log(foo);

// check if these are arrays
console.log(Array.isArray(countries));
console.log(Array.isArray(csv));

//  sort a simple array 
console.log(countries.sort());

// reverse the sort
console.log(countries.reverse());

// remove the first element
console.log(countries.shift());

// remove the last element
console.log(countries.pop());

// add new elements to the front of the array
console.log(countries.unshift("Mexico", "Sweden"));

// search for element
console.log(countries.includes("Germany"));

// search for element index
console.log(countries.indexOf("Germany"));

// make a new array by extracting from another array
const countries2 = countries.splice(0, 3);
console.log(countries2);

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let c of cities) {
   if (c.continent == "NA") {
      console.log(c.city);
   }
}

// use a loop to output gallery names whose country=="USA"
for (let g of galleries) {
   if (g.location.country == "USA") {
      console.log(g.name);
   }
}

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let c of colors){
   if (c.luminance < 75){
      console.log(c.name);
   }
}

// use two nested loops - outer: loop thru colors
for (let c of colors){
   console.log((c.name));
   let x;
   for(i=0; i<c.rgb.length; i++){
      x += (c.rgb[i]);
      console.log(x);
   }
  
      
   }

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */




/* use a loop output using document.write an unordered
   list of color names in the colors array.
   Set the style property of each <li> as follows: 
   1. set the background color to the values in the rgb array using the CSS 
      rgb() function.  This make the background color of the item the same
      as the color name.
   2. Set the text color to white if the luminosity is less than 75. This will 
    make the text color white for the darker colors.  */