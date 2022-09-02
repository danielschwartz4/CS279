// document.getElementById references the object using the id "app"
const notesContainer = document.getElementById("notes-section");
const addNoteButton = notesContainer.querySelector(".add-note");

// On render, all saved notes (via local storage) will be displayed and inserted into the notesContainer
getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

// "listens" for the user to click the add note button and then executes the addNote function
addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

// A function so that whenever we manipulate the note data, it saves via local storage
// An alternative is using a database to read and write the notes
function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

// Primary function for handling our helper functions
function createNoteElement(id, content) {
  // const element = document.createElement("div");
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  // element.innerHTML = "<textarea  class='text-area'/>";
  // const deleteNote = `deleteNote(${(id, element)})`;

  // element.innerHTML += `<div onclick=deleteNote(${
  //   (id, element)
  // }) style='display: flex'><i id='trash' class='fa fa-trash-o' style='font-size: 24px'></i></div>`;
  // element.addEventListener("change", () => {
  //   updateNote(id, element.value);
  // });

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    // Assign random id
    id: Math.floor(Math.random() * 100000),
    // Set content to an empty string
    content: "",
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
