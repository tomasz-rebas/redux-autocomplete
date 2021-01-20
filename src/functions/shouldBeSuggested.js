export default function shouldBeSuggested(username, userInput) {

    const name = username.toLowerCase();
    const input = userInput.toLowerCase();

    let willBeSuggested = true;

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== name[i]) {
            willBeSuggested = false;
            break;
        }
    }

    return willBeSuggested;
}