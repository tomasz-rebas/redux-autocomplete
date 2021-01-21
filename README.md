# redux-autocomplete
 
Autocomplete dropdown list, implemented from scratch using ReactJS and Redux.

Behaviour details:
- compares user input with the first characters of potential suggestions,
- comparison is case-insensitivie,
- suggestion's characters matched by user input are bold,
- clicking on a suggestion replaces user input with its value and hides the dropdown,
- clicking outside the autocomplete list hides the dropdown.

Suggestion list is fetched from an external API.

Try the feature out on [Netlify](https://dreamy-ride-0d6a7a.netlify.app/).