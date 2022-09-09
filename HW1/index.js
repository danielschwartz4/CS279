const express = require("express");
// Express allows quick and easy development
const app = express();
// Mongoose creates connection between Node.js and MongoDB
const mongoose = require("mongoose");
// Imports our .env file
const dotenv = require("dotenv");
dotenv.config();

//models (mongodb collection schemas)
const TodoTask = require("./models/TodoTask");

// Middleware for serving static files (our css file)
app.use("/static", express.static("public"));

// Middleware to parse URL
app.use(express.urlencoded({ extended: true }));

// connection to db via our db env variable and listens on port 3000, hence localhost:3000
const db = mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
  }
);

// Allows us to render with our embedded js file
app.set("view engine", "ejs");

// GET METHOD
app.get("/", (req, res) => {
  // Finds all task collections (no where clause), and then renders our todo file
  TodoTask.find({}, (err, tasks) => {
    // Passes in todoTasks prop
    res.render("todo.ejs", { todoTasks: tasks });
  });
});

// POST METHOD
app.post("/", async (req, res) => {
  // Creates TodoTask with request content
  const todoTask = new TodoTask({
    content: req.body.content,
  });
  // If successfully created, it saves the document
  try {
    await todoTask.save();
    console.log("success");
    res.redirect("/");
  } catch (err) {
    // Otherwise return error
    console.log("err", err);
    res.redirect("/");
  }
});

// UPDATE METHOD
app
  // Creates new route on edit with request id
  .route("/edit/:id")
  // Fetches task by id that was clicked
  .get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
      res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
    });
  })
  // Updates the document by the same id
  .post((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
      if (err) return res.send(500, err);
      // Goes back to home url
      res.redirect("/");
    });
  });

// DELETE METHOD
app.route("/remove/:id").get((req, res) => {
  // gets id (as usual)
  const id = req.params.id;
  // Deletes by id
  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});
