const jokesArray = [["Where do you find a cow with no legs?", "Right where you left it."], ["How does a squid go into battle?", "Well-armed"], ["What's the best thing about Switzerland?", "I don't know, but their flag is a huge plus"], ["Why aren't koalas actual bears?", "They don't meet the koalafications"]];
let num = Math.floor(Math.random() * jokesArray.length)

function chooseJoke() {
    let joke = jokesArray[num][0]
    return joke
}

console.log(chooseJoke())

let guess = prompt(chooseJoke())

console.log(`Your guess is: ${guess}`)
console.log(`The answer is: ${jokesArray[num][1]}`)

