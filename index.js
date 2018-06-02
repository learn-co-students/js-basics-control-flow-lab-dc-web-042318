// Write your code in this file!
function scuberGreetingForFeet (someValue) {
  if (someValue <= 199) {
    return 'This one is on me!'
  } else if ((someValue > 2000) && (someValue <= 2500)) {
    return 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500) {
    return 'No can do.'
  } else {

  }
}
function ternaryCheckCity (city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  let response;
    switch (tip) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
      break;
  }
  return response
}
