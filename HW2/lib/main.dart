// This is the main flutter file where code is run
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import './screens/home.dart';

void main() {
  // A flutter function to run your application
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  // Initialize MyApp
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of the application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(
        SystemUiOverlayStyle(statusBarColor: Colors.transparent));
    // App object with relevant metadata
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'ToDo App',
      // Displays home screen default rout for app
      home: Home(),
    );
  }
}
