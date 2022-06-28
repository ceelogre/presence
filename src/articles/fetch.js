Apparently, this code wouldn't work as expected.
fetch('https://api.com')
.then(response => console.log(response))
When you run this in a browser,response is a pending promise. This is because it is still waiting for the body to load. To get the data out, you'll need to chain another promise
fetch('https://api.com')
.then(response => response.json())
.then(data => console.log(data))
Short or long story: https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
