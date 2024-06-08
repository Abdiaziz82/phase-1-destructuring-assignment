const farmAnimals = 'cow horse sheep pig chicken';


const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

console.log(moo);   // Outputs: cow
console.log(neigh); // Outputs: horse
console.log(baa);   // Outputs: sheep
console.log(oink);  // Outputs: pig
console.log(cluck); // Outputs: chicken

const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

console.log(bessie); // Outputs: cow
console.log(dolly);  // Outputs: sheep
console.log(babe);   // Outputs: pig
console.log(little); // Outputs: chicken
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

console.log(blackAndWhite); // Outputs: cow
console.log(black);         // Outputs: sheep
console.log(pink);          // Outputs: pig


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red);    // Outputs: red
console.log(orange); // Outputs: orange
console.log(yellow); // Outputs: yellow
console.log(green);  // Outputs: green
console.log(blue);   // Outputs: blue
console.log(indigo); // Outputs: indigo
console.log(violet); // Outputs: violet
const [r, o, y, g, b, , v] = colors;

console.log(r); // Outputs: red
console.log(o); // Outputs: orange
console.log(y); // Outputs: yellow
console.log(g); // Outputs: green
console.log(b); // Outputs: blue
console.log(v); // Outputs: violet

const [, , , , , indg] = colors;

console.log(indg); // Outputs: indigo


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName); // Outputs: Miss Piggy
console.log(color);      // Outputs: pink
console.log(song);       // Outputs: Never Before, Never Again
console.log(job);        // Outputs: Cast member of The Muppet Show
console.log(partner);    // Outputs: Kermit


const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { 
  album: { theMuppetMovie: { song2, song4 } },
  nestedJob,
  nestedPartner
} = nestedMuppet;

console.log(song2);         // Outputs: Moving Right Along
console.log(song4);         // Outputs: I Hope That Something Better Comes Along
console.log(nestedJob);     // Outputs: Host of The Muppet Show
console.log(nestedPartner); // Outputs: Miss Piggy



// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner