// Write your code in this file!

function scuberGreetingForFeet(num) {
    let result
    if (num <= 400) {
        result = "This one is on me!"
    } else if (num > 2500) {
        result = "No can do."
    } else if (num > 2000) {
        result = "I will gladly take your thirty bucks."
    }
    return result
}

function ternaryCheckCity(city) {
    result = city === "NYC" ? "Ok, sounds good." : "No go."
    return result
}

function switchOnCharmFromTip (tip) {
    let result
    switch (tip) {
        case "generous":
            result = "Thank you so much."
            break;
        case "not as generous":
            result = "Thank you."
            break;
        default:
            result = "Bye."
            break;
    }
    return result
}