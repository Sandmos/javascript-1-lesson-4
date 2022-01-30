const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        // age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class
const container = document.querySelector(".pet-container");
// Create a html variable to hold our htm in it when we use the loop
let html = "";

// Loop over the array
for(let i = 0; i < pets.length; i++) {
console.log(pets[i]);
let theType = "";

if (pets[i].type) { // If i have it then assign it to my varibale theType
    theType = pets[i].type;
} else {
    theType = "Unknown Type"
}

let theAge = "";

if (pets[i].age) {
    theAge = pets[i].age;
} else {
    theAge = "the pet has no age"
}

html = html + `

<div>
    <h4>the Type: ${theType}</h4>
    <p>the Age: ${theAge}</p>
    <p>Is this pet friendly: ${pets[i].friendly ? "yes" : "no"}</p>
</div>
`;
console.log(html)
}

container.innerHTML = html;


// change the innerHTML