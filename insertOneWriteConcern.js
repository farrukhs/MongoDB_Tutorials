try {
   var result = db.Questions.insertOne( {
		  "category": "Entertainment: Music",
		  "type": "multiple",
		  "difficulty": "medium",
		  "question": "In the song &ldquo;The Ultimate Showdown of Ultimate Destiny,&rdquo; who is the only one to survive the battle?",
		  "correct_answer": "Mr. Rogers",
		  "incorrect_answers": [
			"Batman",
			"Chuck Norris",
			"Godzilla"
		  ]
		}, { writeConcern: { w : 3} });
   printjson(result);
} catch (e) {
   print (e);
};
