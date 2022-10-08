import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

# create DB variable
PROJECT_ROOT = os.path.dirname(os.path.realpath(__file__))
DATABASE = os.path.join(PROJECT_ROOT, 'todo.db')

# Initialize flask app
app = Flask(__name__)
# configure DB to use our project database
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////" + DATABASE
# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Create Todo DB Schema with an id, title, priority, and complete
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    priority = db.Column(db.Integer)
    complete = db.Column(db.Boolean)

# Create api endpoints
# Home route to query all todos
@app.route("/")
def index():
    # Get all todos
    todo_list = Todo.query.all()
    # Render data as HTML
    return render_template("index.html", todo_list=todo_list)

# /add end point for adding a todo
@app.route("/add", methods=["POST"])
def add():
    # Get data from form request
    title = request.form.get("title")
    priority = request.form.get("priority")
    # Create new data object
    new_todo = Todo(title=title, priority=priority, complete=False)
    # Add data to DB and commit
    db.session.add(new_todo)
    db.session.commit()
    # Flask function for redirecting to original path
    return redirect(url_for("index"))

# Mark todo completed
@app.route("/complete/<string:todo_id>")
def complete(todo_id):
    # Edit todo data to mark complete
    todo = Todo.query.filter_by(id=todo_id).first()
    todo.complete = not todo.complete
    db.session.commit()
    return redirect(url_for("index"))

# Delete todo
@app.route("/delete/<string:todo_id>")
def delete(todo_id):
    # Get todo by id and delete it
    todo = Todo.query.filter_by(id=todo_id).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect(url_for("index"))


if __name__ == "__main__":
    # Create database and run app
    db.create_all()
    app.run(debug=True)
