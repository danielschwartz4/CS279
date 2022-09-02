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
  // Create a dom element when that is our new note
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Todo";

  // When there is a change to the text area, we update the note and save it to local storage
  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  // On double click of the note, we delete the element
  element.addEventListener("dblclick", () => {
    // Since deleting a note can be risky, we want to issue a confirmation box first
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

// Add note function
function addNote() {
  const notes = getNotes();
  const noteObject = {
    // Assign random id
    id: Math.floor(Math.random() * 100000),
    // Set content to an empty string
    content: "",
  };

  // Call function from above to create a new note element
  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  // Insert the element in the notes section grid
  notesContainer.insertBefore(noteElement, addNoteButton);

  // Save the notes object which now includes our new note
  notes.push(noteObject);
  saveNotes(notes);
}

// Updating is necessary to save our new text to local storage
function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

// To delete a note, we first update the notes object using the deleted note's id, then we remove the note from the dom
function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
