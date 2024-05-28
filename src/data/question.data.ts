import { QuizType } from "../interfaces/question.interface";

export const quizQuestion: QuizType = {
  arrays: [
    {
      question:
        "Which of the following data structures is used to store multiple values in a single variable?",
      options: [
        {
          label: "A",
          value: "String",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "B",
          value: "Integer",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "Array",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "D",
          value: "Float",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "What is the index of the first element in an array?",
      options: [
        {
          label: "A",
          value: "0",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "1",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "-1",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "Depends on the programming language",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to add new elements to an array in JavaScript?",
      options: [
        {
          label: "A",
          value: "push()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "pop()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "shift()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "unshift()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to remove the last element from an array in JavaScript?",
      options: [
        {
          label: "A",
          value: "pop()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "push()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "shift()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "unshift()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "How do you iterate over elements in an array in Python using a for loop?",
      options: [
        {
          label: "A",
          value: "for i in range(len(my_array))",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "B",
          value: "for item in my_array",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "C",
          value: "for (var i = 0; i < myArray.length; i++)",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "for (var item of myArray)",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "What method is used to concatenate two arrays in JavaScript?",
      options: [
        {
          label: "A",
          value: "concat()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "join()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "splice()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "slice()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "How do you declare a multidimensional array in Java?",
      options: [
        {
          label: "A",
          value: "int[][] myArray;",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "int[][] myArray = new int[][];",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "int[][] myArray[];",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "int[] myArray[];",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 15,
      time: 18,
      point: 270,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to find the index of a specific element in an array in JavaScript?",
      options: [
        {
          label: "A",
          value: "indexOf()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "findIndex()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "search()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "includes()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "What method is used to sort elements in an array in JavaScript?",
      options: [
        {
          label: "A",
          value: "sort()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "sorted()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "order()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "arrange()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "How do you declare a fixed-size array in Java?",
      options: [
        {
          label: "A",
          value: "int[] myArray = new int[10];",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "int[10] myArray;",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "int myArray[10];",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "int myArray = new int[10];",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 15,
      time: 15,
      point: 225,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to remove an element from a specific index in an array in JavaScript?",
      options: [
        {
          label: "A",
          value: "splice()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "slice()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "remove()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "delete()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to convert an array to a string in JavaScript?",
      options: [
        {
          label: "A",
          value: "toString()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "stringify()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "toText()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "convertToString()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "How do you declare an empty array in Python?",
      options: [
        {
          label: "A",
          value: "my_array = []",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "my_array = {}",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "my_array = ()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "my_array = None",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to find the maximum value in an array in Java?",
      options: [
        {
          label: "A",
          value: "Arrays.max()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "B",
          value: "Collections.max()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "C",
          value: "Math.max()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "Arrays.getMax()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 14,
      point: 140,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to check if an array includes a specific element in JavaScript?",
      options: [
        {
          label: "A",
          value: "contains()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "B",
          value: "exists()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "includes()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "D",
          value: "has()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to reverse the order of elements in an array in Python?",
      options: [
        {
          label: "A",
          value: "reverse()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "backward()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "flip()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "invert()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 11,
      point: 110,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What method is used to convert a string to an array in JavaScript?",
      options: [
        {
          label: "A",
          value: "split()",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "parse()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "concat()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "join()",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "How do you remove all elements from an array in Java?",
      options: [
        {
          label: "A",
          value: "myArray.clear()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "B",
          value: "myArray.removeAll()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "myArray.clearElements()",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "myArray = new int[0];",
          isCorrect: true,
          isSelected: false,
        },
      ],
      score: 10,
      time: 14,
      point: 140,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What is the time complexity of accessing an element by its index in an array?",
      options: [
        {
          label: "A",
          value: "O(n)",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "B",
          value: "O(log n)",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "O(1)",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "D",
          value: "O(n^2)",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 20,
      time: 20,
      point: 400,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "How can you iterate through each element of an array in PHP?",
      options: [
       {
          label: "A",
          value: "for (i = 0; i < myArray.length; i++)",
          isCorrect: false,
          isSelected: false,
        }, {
          label: "B",
          value: "for (element in myArray)",
          isCorrect: true,
          isSelected: false,
        },      
        {
          label: "C",
          value: "while (myArray.hasNext())",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "foreach myArray as element",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question:
        "What is the difference between a one-dimensional array and a two-dimensional array (matrix)?",
      options: [
        {
          label: "A",
          value:
            "One-dimensional array stores only numbers, while a two-dimensional array can store any data type.",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "B",
          value:
            "One-dimensional array has a single row, while a two-dimensional array has multiple rows and columns.",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "C",
          value: "There is no difference, they are the same concept.",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value:
            "Two-dimensional arrays are always sorted, while one-dimensional arrays can be unsorted.",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 15,
      time: 20,
      point: 300,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "What are the benefits of using arrays in programming?",
      options: [
        {
          label: "A",
          value: "Arrays efficiently store collections of similar data types.",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "B",
          value: "Arrays can only be used for mathematical calculations.",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "C",
          value: "Arrays are slower to access than individual variables.",
          isCorrect: false,
          isSelected: false,
        },
        {
          label: "D",
          value: "Arrays require complex syntax to use.",
          isCorrect: false,
          isSelected: false,
        },
      ],
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
    },
    {
      question: "What is an array?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A single value that can change during program execution",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A collection of elements identified by index or key",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
  
        {
          value: "A named location in memory that stores a value",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the Last In, First Out (LIFO) principle",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "How do you access the third element in an array called 'arr' in most programming languages?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "arr[1]",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr[3]",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr[2]",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "arr.get(3)",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which of the following is a correct way to declare an array in Java?",
      score: 16,
      time: 15,
      point: 240,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "arr = new int[5];",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int arr = new int[5];",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int arr[5];",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int[] arr = new int[5];",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, how do you append an element 'x' to an array 'arr'?",
      score: 18,
      time: 15,
      point: 270,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "arr.append(x)",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "arr.add(x)",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.push(x)",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.insert(x)",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which method removes the last element from an array?",
      score: 20,
      time: 17,
      point: 340,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "arr.delete()",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.shift()",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.remove()",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.pop()",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "How can you find the length of an array 'arr' in JavaScript?",
      score: 22,
      time: 18,
      point: 396,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "arr.count()",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.size()",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.length",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "arr.length()",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What will be the output of the following PHP code: $arr = array(1, 2, 3); echo count($arr);?",
      score: 24,
      time: 20,
      point: 480,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "2",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "3",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
  
        {
          value: "1",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "4",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In C++, how do you declare an array of 10 integers?",
      score: 26,
      time: 22,
      point: 572,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "int arr = new int[10];",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int arr[10];",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
  
        {
          value: "int[] arr = new int[10];",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "array<int> arr = 10;",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What does the following Java code do: int[] arr = {1, 2, 3, 4};?",
      score: 28,
      time: 24,
      point: 672,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "Throws an error due to incorrect syntax",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Creates an empty array of size 4",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Declares an array without initializing it",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Declares and initializes an array with four integers",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which method would you use to sort an array in Python?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "arr.sorted()",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.sort()",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "arr.arrange()",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "arr.fixed()",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
  ],
  loops: [
    {
      question: "In Python, which loop iterates over a sequence of items?",
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Java, which loop is used to iterate over a collection of elements?",
      score: 11,
      time: 12,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What loop in C++ executes a block of code repeatedly until a specified condition is false?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which loop is used when the number of iterations is known?",
      score: 13,
      time: 11,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which loop in Python executes a block of code a specified number of times?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C#, which loop is used to execute a block of code repeatedly as long as a condition is true?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What loop in PHP is suitable for traversing through arrays?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "In Swift, which loop repeats a block of code until a condition becomes false?",
      score: 13,
      time: 12,
      point: 156,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "repeat-while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which loop in Java executes a block of code repeatedly based on a given Boolean condition?",
      score: 10,
      time: 13,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which loop is used to execute a block of code repeatedly while a condition is true?",
      score: 11,
      time: 12,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What loop in Python is used to iterate over a sequence of elements?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C++, which loop is used when the number of iterations is not known in advance?",
      score: 13,
      time: 10,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "foreach",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "for",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which loop in JavaScript iterates over the properties of an object?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "In PHP, what loop is suitable for traversing through arrays?",
      score: 15,
      time: 13,
      point: 195,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "In Swift, which loop repeats a block of code until a condition becomes false?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "repeat-while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "Which loop in Java executes a block of code repeatedly based on a given Boolean condition?",
      score: 14,
      time: 10,
      point: 140,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which loop is used to execute a block of code repeatedly while a condition is true?",
      score: 13,
      time: 12,
      point: 156,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What loop in Python is used to iterate over a sequence of elements?",
      score: 15,
      time: 13,
      point: 195,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C++, which loop is used when the number of iterations is not known in advance?",
      score: 16,
      time: 11,
      point: 176,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which loop in JavaScript iterates over the properties of an object?",
      score: 17,
      time: 12,
      point: 204,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "In PHP, what loop is suitable for traversing through arrays?",
      score: 18,
      time: 13,
      point: 234,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "foreach",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "for",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Java, which loop is used to iterate over a collection of elements?",
      score: 11,
      time: 12,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What loop in C++ executes a block of code repeatedly until a specified condition is false?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which loop is used when the number of iterations is known?",
      score: 13,
      time: 11,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which loop in Python executes a block of code a specified number of times?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C#, which loop is used to execute a block of code repeatedly as long as a condition is true?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, which loop is used to iterate over a sequence of items?",
      score: 10,
      time: 13,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question: "What loop in PHP is suitable for traversing through arrays?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Swift, which loop repeats a block of code until a condition becomes false?",
      score: 13,
      time: 12,
      point: 156,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "repeat-while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which loop in Java executes a block of code repeatedly based on a given Boolean condition?",
      score: 10,
      time: 13,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which loop is used to execute a block of code repeatedly while a condition is true?",
      score: 11,
      time: 12,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "for",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },

        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What loop in Python is used to iterate over a sequence of elements?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do-while",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "foreach",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
  ],
  functions: [
    {
      question: "What is a pure function?",
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A function that changes global variables",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A function that has no side effects and returns the same output given the same inputs",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A function that calls another function",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A function that always returns a random value",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "How do you define a function in Python?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "function myFunction() { }",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def myFunction():",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "func myFunction { }",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "myFunction() { }",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of a return statement in a function?",
      score: 15,
      time: 10,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To output a value and terminate the function",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To start a loop",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To declare a variable",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To call another function",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which keyword is used to create a function in JavaScript?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "define",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "func",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "function",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "create",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What does the 'void' keyword indicate in a function declaration in C?",
      score: 10,
      time: 14,
      point: 140,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "The function does not return a value",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "The function returns an integer",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The function takes no arguments",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The function has no parameters",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is recursion in programming?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A function with no parameters",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A function calling another function",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A function returning multiple values",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A function calling itself",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which function is used to get the length of a string in JavaScript?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "length()",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "size()",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "len()",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "length",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "How do you define an anonymous function in JavaScript?",
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "anonymous function() { }",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "function() { }",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "def function() { }",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "func() { }",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which Python keyword is used to start a function?",
      score: 13,
      time: 10,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "function",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "func",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "define",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Java, what is the default return type of a method that does not return any value?",
      score: 15,
      time: 15,
      point: 225,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "empty",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "null",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "void",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "undefined",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the use of the 'return' statement in Python?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To end the function execution and return a value",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To declare a variable",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To start a loop",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To define a function",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which keyword is used in Java to declare a method that must be implemented by a subclass?",
      score: 20,
      time: 20,
      point: 400,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "abstract",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "final",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "static",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "synchronized",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In which language are functions referred to as 'methods'?",
      score: 13,
      time: 10,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "Python",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Java",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "C",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "JavaScript",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which of the following is a correct way to declare a function in C?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "void functionName();",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "function functionName();",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def functionName();",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "func functionName();",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which keyword is used in Python to define a function?",
      score: 14,
      time: 10,
      point: 140,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "define",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "func",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "function",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which of the following is not a function declaration?",
      score: 12,
      time: 12,
      point: 144,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "function myFunction() {}",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const myFunction = function() {};",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let myFunction = () => {};",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "define myFunction() {}",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What does 'static' mean in the context of a Java method?",
      score: 13,
      time: 10,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "The method belongs to the class rather than an instance of the class",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "The method can only be called once",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The method can change the value of static variables",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The method is immutable",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "How do you define a function in Ruby?",
      score: 12,
      time: 12,
      point: 144,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "define functionName",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "function functionName",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "func functionName",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def functionName",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of the 'main' function in C?",
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To declare global variables",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To serve as the entry point of the program",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To define functions",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To handle errors",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "How do you return a value from a function in Java?",
      score: 15,
      time: 10,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "using the return keyword",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "using the yield keyword",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "using the break keyword",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "using the continue keyword",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what is the term for a function defined inside another function?",
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "Enclosed function",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Inner function",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Child function",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Nested function",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which of the following is a correct way to call a function in JavaScript?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "invoke myFunction()",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "myFunction();",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "call myFunction;",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "run myFunction();",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which of the following is used to define a function in JavaScript?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "function",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "func",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "define",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which keyword is used to define a function in Swift?",
      score: 12,
      time: 14,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "def",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "function",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "func",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "define",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, which keyword is used to define a function?",
      score: 13,
      time: 10,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "func",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "function",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "define",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "How do you call a method in Ruby?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "call method_name",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "method_name()",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "method call method_name",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "execute method_name",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the correct way to define a function in Kotlin?",
      score: 10,
      time: 14,
      point: 140,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "function functionName() {}",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "fun functionName() {}",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "define functionName() {}",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "def functionName() {}",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In which language can you use lambda expressions to define anonymous functions?",
      score: 10,
      time: 13,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "Python",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "C",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "HTML",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "SQL",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What keyword is used in Java to define a method?",
      score: 12,
      time: 12,
      point: 144,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "function",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "void",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "def",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "define",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which function in Python is used to get the length of a list?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "count()",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "length()",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "size()",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "len()",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which of the following is not a function declaration?",
      score: 15,
      time: 15,
      point: 225,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "function myFunction() {}",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const myFunction = function() {};",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let myFunction = () => {};",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "define myFunction() {}",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the return type of a function that does not return a value in C++?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "void",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "int",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "null",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "none",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
  ],
  variables: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "const",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "var",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, which symbol is used to assign a value to a variable?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "=",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: ":=",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "==",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "->",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the default value of an uninitialized variable in Java?",
      score: 13,
      time: 10,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "undefined",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "0",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "null",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "empty string",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which keyword is used to declare a constant variable in C++?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "const",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "constant",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "final",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Ruby, how do you declare a variable?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "var variable_name = value",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let variable_name = value",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "variable_name = value",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "const variable_name = value",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which keyword is used to declare a variable in Kotlin?",
      score: 12,
      time: 14,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "val",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "var",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "let",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Swift, which keyword is used to declare an immutable variable?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "val",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "var",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "constant",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In PHP, how do you declare a variable?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "$variable_name = value;",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "var variable_name = value;",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let variable_name = value;",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const variable_name = value;",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Java, which keyword is used to declare a constant variable?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "final",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "const",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "static",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "immutable",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which of the following is a correct variable declaration in C?",
      score: 13,
      time: 11,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "define myVar;",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "variable myVar;",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let myVar;",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int myVar;",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what is the keyword to declare a block-scoped variable?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "let",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "var",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "block",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "scope",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In C++, how do you declare a constant variable?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "final int myVar;",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const int myVar;",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "constant int myVar;",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let int myVar;",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Swift, what keyword is used to declare a variable that can be changed?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "var",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "let",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "mutable",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "changeable",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which keyword is used to declare a variable in C#?",
      score: 13,
      time: 10,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "define",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "var",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "const",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In PHP, which symbol is used to signify a variable?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "@",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "$",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "#",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "%",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Kotlin, what keyword is used to declare an immutable variable?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "val",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "const",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "var",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the default value of an uninitialized boolean variable in Java?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "null",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "true",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "false",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "undefined",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, which keyword is used to declare a global variable inside a function?",
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "global",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "Global",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "GLOBAL",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "globalvar",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which of the following is the correct way to declare a variable in Scala?",
      score: 13,
      time: 11,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "variable myVar: Int = 5",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let myVar: Int = 5",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int myVar = 5",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "var myVar: Int = 5",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Ruby, what character is used to indicate a global variable?",
      score: 12,
      time: 14,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "@",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "$",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "#",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "%",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the default value of an uninitialized integer variable in C?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "garbage value",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "0",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "undefined",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "null",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which keyword is used to declare a constant variable?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "immutable",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "constant",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "final",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, which character is used to denote a private variable?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "_",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "$",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "#",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "@",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In C#, which keyword is used to declare a read-only field?",
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "final",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "static",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "readonly",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In PHP, what is the correct way to declare a global variable inside a function?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "global $variable_name;",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "$global variable_name;",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "globalvar variable_name;",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "global variable_name;",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Swift, which keyword is used to declare a variable that cannot change?",
      score: 15,
      time: 15,
      point: 225,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "immutable",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "var",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Kotlin, how do you declare a variable?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "var myVar = value",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "val myVar = value",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let myVar = value",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const myVar = value",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Java, what is the default value of a char variable?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "'\\u0000'",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "'0'",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "null",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "undefined",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C++, what is the keyword used to declare a constant pointer?",
      score: 12,
      time: 15,
      point: 180,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "constant",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "let",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "final",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, how do you declare a variable?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "define variable_name = value",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "var variable_name = value",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let variable_name = value",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "variable_name = value",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, which keyword is used to declare a variable that can be reassigned?",
      score: 13,
      time: 11,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "constant",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "const",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "let",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "var",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, what character is used to denote a variable?",
      score: 11,
      time: 12,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "$",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "_",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "#",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "@",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
  ],
  classes: [
    {
      question: "What is a class in object-oriented programming?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A conditional statement",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A predefined function",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A blueprint for creating objects",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A loop structure",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which keyword is used to create a class in Python?",
      score: 11,
      time: 14,
      point: 154,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "class",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "def",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "struct",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "interface",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Java, how do you declare a class?",
      score: 12,
      time: 15,
      point: 180,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "struct",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "define",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "type",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "class",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is encapsulation?",
      score: 13,
      time: 16,
      point: 208,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "Inheritance from multiple classes",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "Binding data and methods that manipulate the data into a single unit",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "Creating an instance of a class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Reusing code from a superclass",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which of the following best describes inheritance?",
      score: 14,
      time: 17,
      point: 238,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A mechanism in which a new class is derived from an existing class",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A mechanism for creating multiple instances of a class",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A process of binding data and methods into a single unit",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A process of hiding the implementation details of a class",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is polymorphism?",
      score: 15,
      time: 13,
      point: 195,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "The process of creating multiple objects from a class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability of a function or method to behave differently based on the object it is acting upon",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "The process of hiding the implementation details of a class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The process of creating a new class from an existing class",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a constructor?",
      score: 16,
      time: 12,
      point: 192,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A method used for destroying objects",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method used for performing a specific task",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A special method used for initializing objects",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A method used for inheriting properties from a superclass",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is method overriding?",
      score: 17,
      time: 18,
      point: 306,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "The process of creating multiple objects from a class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The process of hiding the implementation details of a class",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of redefining a method in a subclass that is already defined in its superclass",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "The process of creating a new class from an existing class",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question: "What is method overloading?",
      score: 18,
      time: 16,
      point: 288,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "The process of creating a new class from an existing class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The process of hiding the implementation details of a class",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The process of creating multiple objects from a class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability to define multiple methods with the same name but different parameters",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a destructor?",
      score: 19,
      time: 14,
      point: 266,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A special method used for destroying objects",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A method used for initializing objects",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method used for performing a specific task",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method used for inheriting properties from a superclass",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a superclass?",
      score: 20,
      time: 13,
      point: 260,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A class that cannot be instantiated",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A class from which other classes are derived",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A class with no methods",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A class with no properties",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a subclass?",
      score: 21,
      time: 12,
      point: 252,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A class that is derived from another class",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A class that cannot be instantiated",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A class with no methods",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A class with no properties",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of a constructor in a class?",
      score: 22,
      time: 17,
      point: 374,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To define the methods of the class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To destroy the object",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To initialize the newly created object",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To declare the properties of the class",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which of the following best describes method overriding?",
      score: 23,
      time: 19,
      point: 437,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A subclass provides a specific implementation of a method that is already provided by its superclass",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A subclass inherits properties from its superclass",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A subclass provides a generic implementation of a method",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A subclass provides multiple implementations of a method",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of method overloading?",
      score: 24,
      time: 20,
      point: 480,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "To provide a specific implementation of a method in a subclass",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To provide multiple implementations of a method",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To hide the implementation details of a method",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To define multiple methods with the same name but different parameters",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of method hiding?",
      score: 25,
      time: 21,
      point: 525,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To hide the implementation details of a method",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To provide a new implementation of a method in a subclass without modifying the superclass",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "To provide multiple implementations of a method",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To define multiple methods with the same name but different parameters",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of inheritance in classes?",
      score: 26,
      time: 22,
      point: 572,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To hide the implementation details of a method",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To define multiple methods with the same name but different parameters",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To allow a class to inherit properties and methods from another class",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To provide multiple implementations of a method",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a static method?",
      score: 20,
      time: 23,
      point: 460,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A method that is used to initialize an object",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A method that is called automatically when an object is created",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A method that is defined in a subclass to provide a specific implementation",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A method that belongs to the class rather than any instance of the class",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is an instance method?",
      score: 28,
      time: 24,
      point: 672,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A method that belongs to the class rather than any instance of the class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method that operates on an instance of a class",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value:
            "A method that is called automatically when an object is created",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method that is used to initialize an object",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a constructor method?",
      score: 29,
      time: 25,
      point: 725,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A special method used to initialize objects",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A method that belongs to the class rather than any instance of the class",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A method that is called automatically when an object is created",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method that is used to destroy objects",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a destructor method?",
      score: 30,
      time: 20,
      point: 600,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A method that is called automatically when an object is created",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A method that belongs to the class rather than any instance of the class",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A special method used to destroy objects",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A method that is used to initialize objects",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question: "What is method overloading?",
      score: 15,
      time: 12,
      point: 180,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "Defining multiple methods with the same name but different parameters",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "Defining multiple methods with the same name and same parameters",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Defining a method that calls itself",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Defining a method that cannot be overridden",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is constructor chaining in Java?",
      score: 20,
      time: 14,
      point: 280,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "Invoking a superclass constructor from a subclass constructor",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "Invoking one constructor from another constructor within the same class",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "Invoking a static method from a constructor",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Invoking a method with different parameters",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the purpose of method overriding in object-oriented programming?",
      score: 18,
      time: 16,
      point: 288,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To prevent a method from being overridden by a subclass",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To define a method in a subclass with a different signature from the superclass",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To provide a specific implementation of a method in a subclass",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "To define multiple methods with the same name but different parameters",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a static method in a class?",
      score: 17,
      time: 15,
      point: 255,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A method that can only be accessed by other static methods in the class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method that can only be called once",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method that operates on an instance of the class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A method that belongs to the class itself and can be called without creating an instance of the class",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the purpose of inheritance in object-oriented programming?",
      score: 16,
      time: 13,
      point: 208,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "To allow a class to inherit properties and methods from another class",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To prevent a class from being instantiated",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To define multiple methods with the same name but different parameters",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To hide the implementation details of a class",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is encapsulation in object-oriented programming?",
      score: 19,
      time: 17,
      point: 323,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "The process of creating multiple objects from a class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of defining multiple methods with the same name but different parameters",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "The process of hiding the implementation details of a class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of combining data and methods that operate on the data into a single unit",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is polymorphism in object-oriented programming?",
      score: 21,
      time: 18,
      point: 378,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "The process of creating multiple objects from a class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of defining a method in a subclass with the same name as in the superclass",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability of a function to behave differently based on the object it is acting upon",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "The process of combining data and methods that operate on the data into a single unit",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is an abstract class?",
      score: 22,
      time: 19,
      point: 418,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A class with only private methods",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A class that cannot be instantiated and may contain abstract methods",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "A class that is derived from another class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A class with only static methods",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is method hiding?",
      score: 23,
      time: 20,
      point: 460,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "Making a method private in the superclass to prevent it from being overridden",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "Defining a method in a subclass with a different signature from the superclass",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "Redefining a method in a subclass with the same signature as in the superclass",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "Making a method public in the superclass to allow it to be overridden",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is dynamic polymorphism?",
      score: 24,
      time: 22,
      point: 528,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "The process of defining a method in a subclass with the same name as in the superclass",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability of a function to behave differently based on the object it is acting upon",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "The process of creating multiple objects from a class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of combining data and methods that operate on the data into a single unit",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a destructor method?",
      score: 30,
      time: 25,
      point: 750,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A method that belongs to the class rather than any instance of the class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A method that is called automatically when an object is created",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method that is used to initialize objects",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A special method used to destroy objects",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
  ],
  general: [
    {
      question:
        "What is the purpose of a constructor in object-oriented programming?",
      score: 15,
      time: 15,
      point: 225,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To initialize an object when it is created",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To destroy an object when it is no longer needed",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To define properties and methods of a class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To provide access to private members of a class",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the difference between procedural and object-oriented programming?",
      score: 20,
      time: 20,
      point: 400,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "Procedural programming focuses on procedures or functions, while object-oriented programming focuses on objects",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "Procedural programming uses objects, while object-oriented programming uses procedures",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "Procedural programming is more efficient than object-oriented programming",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "Procedural programming is older than object-oriented programming",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of a static method in a class?",
      score: 18,
      time: 18,
      point: 324,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To be called automatically when an object is created",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To be callable without needing an instance of the class",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "To be able to access instance variables of the class",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To be overridden by subclasses",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What is the purpose of a destructor in object-oriented programming?",
      score: 17,
      time: 20,
      point: 340,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To define properties and methods of a class",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To initialize an object when it is created",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To release resources held by an object before it is destroyed",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To provide access to private members of a class",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the difference between a function and a method?",
      score: 16,
      time: 18,
      point: 288,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A method is associated with an object, while a function is not",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A function is associated with an object, while a method is not",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A function can only be called once, while a method can be called multiple times",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A method returns a value, while a function does not",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is polymorphism in programming?",
      score: 19,
      time: 25,
      point: 475,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "The process of defining a method in a subclass with the same name as in the superclass",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability to define multiple methods with the same name but different parameters",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability of a variable, function, or object to take on multiple forms",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "The process of combining data and methods that operate on the data into a single unit",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is encapsulation in programming?",
      score: 21,
      time: 20,
      point: 420,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "The ability of a variable, function, or object to take on multiple forms",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of defining multiple methods with the same name but different parameters",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of defining a method in a subclass with the same name as in the superclass",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The bundling of data and methods that operate on the data into a single unit",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is abstraction in programming?",
      score: 22,
      time: 30,
      point: 660,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "The process of defining multiple methods with the same name but different parameters",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The process of hiding implementation details and showing only essential features of the object",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "The process of defining a method in a subclass with the same name as in the superclass",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability of a variable, function, or object to take on multiple forms",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a variable?",
      score: 23,
      time: 15,
      point: 345,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A process of defining a method in a subclass with the same name as in the superclass",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A function that performs a specific task",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A placeholder to store data",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A way to access data stored in an object",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a loop?",
      score: 24,
      time: 22,
      point: 528,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A way to store multiple values in a single variable",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A process of defining a method in a subclass with the same name as in the superclass",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A placeholder to store data",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a conditional statement?",
      score: 25,
      time: 25,
      point: 625,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A placeholder to store data",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to store multiple values in a single variable",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A process of defining a method in a subclass with the same name as in the superclass",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A statement that executes different actions based on whether a condition is true or false",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is an array?",
      score: 26,
      time: 25,
      point: 650,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A process of defining a method in a subclass with the same name as in the superclass",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to access data stored in an object",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A data structure that stores a collection of elements",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a function?",
      score: 27,
      time: 25,
      point: 675,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A reusable block of code that performs a specific task",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A placeholder to store data",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to access data stored in an object",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a class?",
      score: 28,
      time: 25,
      point: 700,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A data structure that stores a collection of elements",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A blueprint for creating objects that defines properties and methods",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "A way to access data stored in an object",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is recursion?",
      score: 29,
      time: 26,
      point: 754,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A data structure that stores a collection of elements",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to access data stored in an object",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A programming technique where a function calls itself",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a data type?",
      score: 30,
      time: 27,
      point: 810,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A programming technique where a function calls itself",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to access data stored in an object",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A classification of data that specifies the type of values a variable can hold",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of a pointer in programming?",
      score: 16,
      time: 20,
      point: 320,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To perform mathematical calculations",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To store the memory address of another variable",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To control the flow of program execution",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To define a constant value",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is recursion?",
      score: 18,
      time: 18,
      point: 324,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A programming technique where a function calls itself",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A way to define multiple methods with the same name but different parameters",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A process of hiding implementation details and showing only essential features of an object",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the difference between compile-time and runtime?",
      score: 20,
      time: 20,
      point: 400,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "Compile-time and runtime are the same thing",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },

        {
          value:
            "Compile-time refers to the time when the program is executed, while runtime refers to the time when code is converted to machine language",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "Compile-time refers to the time when code is converted to machine language, while runtime refers to the time when the program is executed",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "Compile-time and runtime are two different programming languages",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of the 'break' statement in a loop?",
      score: 22,
      time: 18,
      point: 396,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To terminate the program immediately",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To restart the loop from the beginning",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "To skip the current iteration of the loop and continue with the next iteration",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To exit the loop prematurely",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of the 'continue' statement in a loop?",
      score: 24,
      time: 20,
      point: 480,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "To skip the rest of the code in the current iteration and continue with the next iteration",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To exit the loop prematurely",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To restart the loop from the beginning",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To terminate the program immediately",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a module in programming?",
      score: 26,
      time: 22,
      point: 572,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A placeholder to store data",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to store multiple values in a single variable",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A self-contained unit of code that can be reused in different parts of a program",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is an API?",
      score: 28,
      time: 24,
      point: 672,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "Application Programming Interface - a set of rules and protocols for building and interacting with software applications",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A way to store multiple values in a single variable",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "None of the above",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is the purpose of a switch statement in programming?",
      score: 30,
      time: 25,
      point: 750,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "To perform mathematical calculations",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To define a constant value",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "To select one of many code blocks to be executed",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "To control the flow of program execution",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a stack?",
      score: 30,
      time: 25,
      point: 750,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A self-contained unit of code that can be reused in different parts of a program",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the First In, First Out (FIFO) principle",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to store multiple values in a single variable",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the Last In, First Out (LIFO) principle",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a queue?",
      score: 30,
      time: 25,
      point: 750,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A data structure that follows the First In, First Out (FIFO) principle",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the Last In, First Out (LIFO) principle",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to store multiple values in a single variable",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A self-contained unit of code that can be reused in different parts of a program",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is an algorithm?",
      score: 25,
      time: 25,
      point: 625,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A step-by-step procedure for solving a problem",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A way to store multiple values in a single variable",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A self-contained unit of code that can be reused in different parts of a program",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is polymorphism in object-oriented programming?",
      score: 15,
      time: 12,
      point: 180,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A control structure that repeats a block of code until a condition is false",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A way to store multiple values in a single variable",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the First In, First Out (FIFO) principle",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability of different objects to respond to the same message in different ways",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is encapsulation in object-oriented programming?",
      score: 17,
      time: 20,
      point: 340,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A way to store multiple values in a single variable",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The ability of different objects to respond to the same message in different ways",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The technique of bundling the data and methods that operate on the data into a single unit or class",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the First In, First Out (FIFO) principle",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is inheritance in object-oriented programming?",
      score: 19,
      time: 19,
      point: 361,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "The ability of different objects to respond to the same message in different ways",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "The mechanism by which one class acquires the properties and behaviors of another class",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "A way to store multiple values in a single variable",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the First In, First Out (FIFO) principle",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a closure in programming?",
      score: 21,
      time: 20,
      point: 420,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value:
            "A function that retains access to its lexical scope even when the function is executed outside that scope",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "A reusable block of code that performs a specific task",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the First In, First Out (FIFO) principle",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "A placeholder to store data",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What is a hash table?",
      score: 23,
      time: 20,
      point: 460,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "A way to store multiple values in a single variable",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that follows the Last In, First Out (LIFO) principle",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value:
            "A data structure that maps keys to values for efficient lookup",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value:
            "A self-contained unit of code that can be reused in different parts of a program",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
  ],
  "data types": [
    {
      question:
        "Which data type in Python is used to store a single character?",
      score: 10,
      time: 13,
      point: 130,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "char",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "str",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "string",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Java, what data type is used to store floating-point numbers with more precision?",
      score: 11,
      time: 12,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "float",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "double",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "real",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "decimal",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which data type in C++ is used to store a sequence of characters?",
      score: 12,
      time: 10,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "char",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "string",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "str",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what data type is used to represent a sequence of characters?",
      score: 13,
      time: 11,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "char",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "string",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "str",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What data type in Python is used to represent a sequence of characters?",
      score: 14,
      time: 12,
      point: 168,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "str",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "char",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "string",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C#, what data type is used to represent a true or false value?",
      score: 11,
      time: 13,
      point: 143,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "bool",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "boolean",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "logical",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "truefalse",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which data type in Java is used to represent integer values?",
      score: 12,
      time: 11,
      point: 132,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "int",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "integer",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "float",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, what data type is used to represent whole numbers?",
      score: 13,
      time: 12,
      point: 156,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "number",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "integer",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "float",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What data type in JavaScript is used to represent whole numbers?",
      score: 14,
      time: 13,
      point: 182,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "int",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "integer",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "float",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C++, what data type is used to represent single precision floating-point numbers?",
      score: 15,
      time: 11,
      point: 165,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "float",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "double",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "real",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "decimal",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "In Java, what data type is used to represent single precision floating-point numbers?",
      score: 16,
      time: 15,
      point: 240,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "float",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "double",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "real",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "decimal",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What data type in C# is used to represent single precision floating-point numbers?",
      score: 17,
      time: 13,
      point: 221,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "float",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "double",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "real",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "decimal",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what data type is used to represent single precision floating-point numbers?",
      score: 18,
      time: 18,
      point: 324,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "float",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "double",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "real",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what data type is used to represent floating-point numbers?",
      score: 19,
      time: 15,
      point: 285,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "double",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "float",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "real",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "What data type in C++ is used to represent whole numbers?",
      score: 20,
      time: 15,
      point: 300,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "number",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "integer",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "float",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Java, what data type is used to represent whole numbers?",
      score: 21,
      time: 13,
      point: 273,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "int",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "integer",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "float",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what data type is used to represent true or false values?",
      score: 10,
      time: 14,
      point: 140,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "boolean",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "bool",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "logical",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "truefalse",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "Which data type in Java is used to represent characters?",
      score: 11,
      time: 15,
      point: 165,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "char",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "string",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "chr",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C++, what data type is used to represent single characters?",
      score: 12,
      time: 16,
      point: 192,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "chr",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "string",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "char",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What data type in JavaScript is used to represent true or false values?",
      score: 13,
      time: 17,
      point: 221,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "logical",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "boolean",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "bool",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "truefalse",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what data type is used to represent decimal numbers?",
      score: 14,
      time: 15,
      point: 210,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "decimal",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "float",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "double",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which data type in Java is used to represent true or false values?",
      score: 15,
      time: 14,
      point: 210,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "bool",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "boolean",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "logical",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "truefalse",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In C++, what data type is used to represent integer values?",
      score: 16,
      time: 13,
      point: 208,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "integer",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "int",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "number",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "float",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What data type in JavaScript is used to represent whole numbers?",
      score: 17,
      time: 12,
      point: 204,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "int",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "integer",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "float",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "In Python, what data type is used to represent single characters?",
      score: 18,
      time: 15,
      point: 270,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "char",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "str",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "string",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },

    {
      question: "In Java, what data type is used to represent decimal numbers?",
      score: 19,
      time: 14,
      point: 266,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "decimal",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "float",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "double",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "Which data type in JavaScript is used to represent decimal numbers?",
      score: 20,
      time: 13,
      point: 260,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "decimal",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "float",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "double",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "number",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "In C#, what data type is used to represent characters?",
      score: 21,
      time: 12,
      point: 252,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "char",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "string",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "character",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "chr",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What data type in Python is used to represent true or false values?",
      score: 22,
      time: 14,
      point: 308,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "boolean",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "bool",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "logical",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "truefalse",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Java, what data type is used to represent true or false values?",
      score: 23,
      time: 15,
      point: 345,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "bool",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "boolean",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "logical",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "truefalse",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: `let color = "white"; color = "black". What will be the value of 'color' variable?`,
      score: 10,
      time: 10,
      point: 100,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "green",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "white",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "black",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "invalid",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: `let num1 = "2";\nlet num2 = 3;\nresult = num1 + num2;\nWhat will be the outcome of 'result' variable?`,
      score: 10,
      time: 15,
      point: 150,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: `'23'`,
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "23",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "Error",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "5",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
  ],
  "conditional statements": [
    {
      question: "Which keyword is used for the 'if' statement in Python?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "if",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "when",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "condition",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "check",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In JavaScript, how do you represent 'else if'?",
      score: 11,
      time: 14,
      point: 154,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "elseif",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "elif",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "else if",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "else-if",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What symbol is used for 'greater than' in most programming languages?",
      score: 12,
      time: 15,
      point: 180,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: ">",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "<",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: ">=",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "<=",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, how do you represent 'not equal to'?",
      score: 13,
      time: 16,
      point: 208,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "<>",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "==",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "!=",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "=/=",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What keyword is used to end an 'if' statement in many programming languages?",
      score: 14,
      time: 17,
      point: 238,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "end",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "endif",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "done",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "}",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what is used to execute a block of code repeatedly as long as a condition is true?",
      score: 15,
      time: 13,
      point: 195,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "for",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "loop",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, how do you represent 'less than or equal to'?",
      score: 16,
      time: 12,
      point: 192,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: ">=",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "<=",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "=>",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "=<",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What keyword is used to check multiple conditions in many programming languages?",
      score: 17,
      time: 17,
      point: 289,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "if",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "and",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "else",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "else if",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "In C++, what is used to execute a block of code repeatedly as long as a condition is true?",
      score: 18,
      time: 14,
      point: 252,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "for",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "loop",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what is used to execute a block of code once, depending on the result of a condition?",
      score: 19,
      time: 13,
      point: 247,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "else",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "for",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What symbol is used for 'less than' in most programming languages?",
      score: 20,
      time: 14,
      point: 280,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "<=",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: ">",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "<",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: ">=",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, how do you represent 'greater than or equal to'?",
      score: 21,
      time: 15,
      point: 315,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: ">=",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "<=",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "=>",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "=<",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What keyword is used to execute a block of code repeatedly as long as a condition is true in Python?",
      score: 22,
      time: 16,
      point: 352,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "repeat",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what is used to execute a block of code repeatedly, as long as a condition is true?",
      score: 23,
      time: 17,
      point: 391,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "else",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "for",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "In C++, how do you represent 'equal to'?",
      score: 24,
      time: 18,
      point: 432,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "=",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "==",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "===",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "!=",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What symbol is used for 'not equal to' in most programming languages?",
      score: 25,
      time: 19,
      point: 475,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "=",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "<>",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "==",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "!=",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "In Python, what is used to execute a block of code repeatedly for a specified number of times?",
      score: 15,
      time: 15,
      point: 225,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "for",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "repeat",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In JavaScript, how do you represent 'not equal to'?",
      score: 27,
      time: 21,
      point: 567,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "<>",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "!=",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "==!",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "=!",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C++, what is used to execute a block of code once, depending on the result of a condition?",
      score: 28,
      time: 22,
      point: 616,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "switch",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "else",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what is used to execute a block of code repeatedly until a certain condition is met?",
      score: 20,
      time: 18,
      point: 360,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "do while",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "repeat until",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "for",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what is used to execute a block of code once, before the condition is checked, and then repeatedly until the condition is false?",
      score: 30,
      time: 20,
      point: 600,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do...while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "for",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "What symbol is used for 'less than or equal to' in most programming languages?",
      score: 10,
      time: 12,
      point: 120,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "=>",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: ">=",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "=<",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "<=",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what is used to execute a block of code once, depending on the result of a condition?",
      score: 11,
      time: 14,
      point: 154,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "if",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "else",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "switch",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In C++, what is used to execute a block of code once, before the condition is checked, and then repeatedly until the condition is false?",
      score: 12,
      time: 15,
      point: 180,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "do...while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "for",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "What symbol is used for 'greater than or equal to' in most programming languages?",
      score: 13,
      time: 16,
      point: 208,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: ">=",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "<=",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "=<",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "=>",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In Python, how do you represent 'not equal to'?",
      score: 14,
      time: 17,
      point: 238,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "<>",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "==",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "!=",
          label: "C",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "=!=",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question: "In JavaScript, how do you represent 'not equal to'?",
      score: 15,
      time: 13,
      point: 195,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "=!",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "<>",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "==!",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "!=",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question: "In C++, how do you represent 'equal to'?",
      score: 16,
      time: 12,
      point: 192,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "=",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "==",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },

        {
          value: "===",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "!=",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what is used to execute a block of code repeatedly as long as a condition is true?",
      score: 17,
      time: 18,
      point: 306,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "for",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "repeat",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },

    {
      question:
        "In JavaScript, what is used to execute a block of code once, depending on the result of a condition?",
      score: 18,
      time: 16,
      point: 288,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "else",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "switch",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "D",
          isCorrect: true,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In Python, what is used to execute a block of code repeatedly until a certain condition is met?",
      score: 19,
      time: 14,
      point: 266,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "do while",
          label: "A",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "while",
          label: "B",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "repeat until",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "for",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
    {
      question:
        "In JavaScript, what is used to execute a block of code repeatedly, as long as a condition is true?",
      score: 20,
      time: 13,
      point: 260,
      isAnswered: false,
      isCompleted: false,
      options: [
        {
          value: "while",
          label: "A",
          isCorrect: true,
          isSelected: false,
        },
        {
          value: "for",
          label: "B",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "if",
          label: "C",
          isCorrect: false,
          isSelected: false,
        },
        {
          value: "else",
          label: "D",
          isCorrect: false,
          isSelected: false,
        },
      ],
    },
  ],
};
