import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MainPage(),
    );
  }
}

class MainPage extends StatelessWidget {
  const MainPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          height: 300,
          width: 300,
          color: Colors.black,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () {},
                child: Text('Get Help a Problem '),
                style: ElevatedButton.styleFrom(
                    primary: Colors.grey,

                    textStyle: const TextStyle(fontSize: 20)),
              ),
              SizedBox(
                height: 20,
              ),
              ElevatedButton(
                  onPressed: () {},
                  child: Row(
                      mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.share),
                      SizedBox(width: 5),
                      Text('Share 75 hard '),
                    ],
                  ),
                  style: ElevatedButton.styleFrom(
                      primary: Colors.grey,

                      textStyle: const TextStyle(fontSize: 20)))
            ],
          ),
        ),
      ),
    );
  }
}
