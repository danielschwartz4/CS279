// Creates ToDo class with attributes necessary for each todo
class ToDo {
  String? id;
  String? todoText;
  bool isDone;

  ToDo({
    // ID for identification of todo
    required this.id,
    // text content
    required this.todoText,
    // boolean for crossing off todo
    this.isDone = false,
  });

// To display in home.dart
  static List<ToDo> todoList() {
    // Start off with one note
    return [
      ToDo(
          id: '01',
          todoText: 'Delete this and create your first note!',
          isDone: false),
    ];
  }
}
