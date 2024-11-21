console.log('Welcome to the Random Message Generator!!!');

//Arrays of phrases
const messagePartOne = [
    "Rise with the sun",
    "Start your day with purpose.",
    "Early birds catch success.",
    "Every sunrise is a chance.",
    "Dawn is your time to shine.",
    "The world awakens with you.",
    "Morning rituals breed success.",
    "Embrace the tranquility of dawn.",
    "Seize the stillness of early hours.",
    "The early riser conquers doubt."
];
const messagePartTwo = [
    "Seize the day's opportunities.",
    "Unlock your potential.",
    "Make your dreams a reality.",
    "Ignite your passion.",
    "Set the tone for greatness.",
    "Be the inspiration you seek.",
    "Craft your destiny before others wake.",
    "Fuel your ambition with each sunrise.",
    "Forge ahead while others slumber.",
    "Be the architect of your destiny."
];
const messagePartThree = [
    "Embrace the dawn of a new beginning.",
    "Embrace the power of early mornings.",
    "Transform your mornings into triumphs.",
    "Harness the energy of the morning.",
    "Conquer the morning, conquer the day.",
    "Create your own sunrise.",
    "Elevate your life, starting now.",
    "Begin your journey towards greatness.",
    "Harness the silent power of mornings.",
    "Let each morning be your masterpiece."
];

//Random selector
let randomSelector = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

//Combine random selections into output
let messageCenter = () => {
    let arr = [];
    let i = randomSelector(messagePartOne);
    let j = randomSelector(messagePartTwo);
    let k = randomSelector(messagePartThree);
    arr = [i, j, k];
    return arr.join(" ");
}
//Output
console.log(messageCenter());
console.log('Have a wonderful day!')
