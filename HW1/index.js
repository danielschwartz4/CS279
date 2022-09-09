const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//models
const TodoTask = require("./models/TodoTask");

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

//connection to db
const db = mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
  }
);

app.set("view engine", "ejs");

// GET METHOD
app.get("/", (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
  });
});

// POST METHOD
app.post("/", async (req, res) => {
  console.log("BEFORE");
  console.log(req.body.content);
  const todoTask = new TodoTask({
    content: req.body.content,
  });
  try {
    await todoTask.save();
    console.log("success");
    res.redirect("/");
  } catch (err) {
    console.log("err", err);
    res.redirect("/");
  }
});

// UPDATE METHOD
app
  .route("/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
      res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
    });
  })
  .post((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  });

// DELETE METHOD
app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});
