try {
   var result = db.Questions.insertMany( [{
      "category": "Entertainment: Books",
      "type": "multiple",
      "difficulty": "medium",
      "question": "By what nickname is Jack Dawkins known in the Charles Dickens novel, &#039;Oliver Twist&#039;?",
      "correct_answer": "The Artful Dodger",
      "incorrect_answers": [
        "Fagin",
        "Bull&rsquo;s-eye",
        "Mr. Fang"
      ]
    },
    {
      "category": "Entertainment: Board Games",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is the world&#039;s oldest board game?",
      "correct_answer": "Senet",
      "incorrect_answers": [
        "Chess",
        "Checkers",
        "Go"
      ]
    },
    {
      "category": "Entertainment: Japanese Anime & Manga",
      "type": "boolean",
      "difficulty": "easy",
      "question": "The name of the attack &quot;Kamehameha&quot; in Dragon Ball Z was named after a famous king of Hawaii.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    }] );
   printjson(result);
} catch (e) {
   print (e);
};
