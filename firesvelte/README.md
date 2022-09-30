In this todo app, we use javascript, Svelte, and Firebase as a database

How to use:

1. Clone github repo
2. run "npm i" to install the node_modules
3. Copy your config variables into firebaseConfig.js (or use mine)
4. run "npm run dev" as defined in package.json
5. Add, delete, check off todos
6. As you check off todos, the progress bar will grow and shrink. The color of the bar will also begin to blend in with the background until you check off all tasks and it disappears!

What are the significant software concepts that this combination of technologies has that each previous set of technologies did not? Or that they handle significantly differently?

One interesting software concept for Svelte is that lots of the javascript logic (loops etc.) can be written in the HTML (e.g. {#each todos as item}). For Firebase, the most unique thing is the intuitive interface for adding collections and documents withing those collections. The API is also very simple for fetching, writing, and updating data, Firebase allows for strong data analytics for the user's data.

Source: code adapted from the tutorial at https://www.youtube.com/watch?v=yLwwJtCFDNo&list=PLm_Qt4aKpfKiGbdjaHdOpry6Neza0etxZ&index=1&ab_channel=WebJeda
