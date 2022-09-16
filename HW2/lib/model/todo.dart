// Creates ToDo class with attributes necessary for each todo
class ToDo {
  String? id;
  String? todoText;
  bool isDone;

  ToDo({
    required this.id,
    required this.todoText,
    this.isDone = false,
  });

// To display in home.dart
  static List<ToDo> todoList() {
    return [
      ToDo(
          id: '01',
          todoText: 'Delete this and create your first note!',
          isDone: false),
    ];
  }
}
