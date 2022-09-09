How to use:

1. Clone github repo
2. Add mongodb url to a .env file
3. Source the .env file
4. run "npm start"
5. open localhost:3000

Reflection: What are the significant software concepts that this combination of technologies has that plain HTML, CSS, and JS does not? Or that they handle significantly differently?

One significant change is that we're now using a web server, node.js, to run our application rather than simply running the HTML file. This is crucial if we would ever want to deploy the website because we can now run the application from an external server. Another significant change is the use of a database rather than local storage. Using a database allows us to access the data from different machines and in some cases in more structured and useable ways. While the combination of both local storage and databases is often helpful, a database is crucial for most applications.

Sources:
• Code comes from: https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-1-c645c7a27583
