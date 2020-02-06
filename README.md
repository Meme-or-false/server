# Meme or False API Documentation

## Show Memes

Returns meme data randomly in JSON data.

* URL
  * `/memes`
* Method
  * `GET`
* URL Params
  * None
* Data Params
  * None
* Success Response
  * Code: 200
  * Content: 
  ```javascript
    // {something here}
  ```
* Error Response
  * Code: 500
  * Content:
  ```javascript
    {"message": "INTERNAL SERVER ERROR!"}
  ```
* Sample Call
  ```javascript
    // {something here}
  ```

---

## Show Questions

Returns question data randomly in **Array of JSON data** with total amount of 10 questions.

* URL
  * `/trivia`
* Method
  * `GET`
* URL Params
  * None
* Data Params
  * None
* Success Response
  * Code: 200
  * Content: 
  ```javascript
  [
    {
        "question": "In 2016, the United Kingdom voted to stay in the EU.",
        "correct_answer": "False",
        "incorrect_answer": "True"
    },
    {
        "question": "United States President John F. Kennedy was assassinated during his presidential motorcade in Atlanta, Georgia on November 22nd, 1963.",
        "correct_answer": "False",
        "incorrect_answer": "True"
    },
    ...
  ]
  ```
* Error Response
  * Code: 500
  * Content:
  ```javascript
    {"message": "INTERNAL SERVER ERROR!"}
  ```
* Sample Call
  ```javascript
  $.ajax({
    type: "GET",
    url: "/trivia"
  })
    .done(questions => {
      // do your awesome things here
    })
    .fail(error => {
      // handle here
    });
  ```

---

## Show Translations

Returns Indonesian-English translated words or sentences that is/are located in **req.body.question** in **JSON data**.

* URL
  * `/yandex`
* Method
  * `POST`
* URL Params
  * None
* Data Params
  ```javascript
  {
    question: // your words or sentences here (string)
  }
  ```
* Success Response
  * Code: 200
  * Content: 
  ```javascript
  {
    "result": "Saya suka kopi, coding, dan JavaScript!"
  }
  ```
* Error Response
  * Code: 500
  * Content:
  ```javascript
    {"message": "INTERNAL SERVER ERROR!"}
  ```
* Sample Call
  ```javascript
  $.ajax({
    type: "POST",
    url: "/trivia",
    data: {
      question: "I love coffee, coding, and JavaScript!"
    }
  })
    .done(translation => {
      // do your awesome things here
    })
    .fail(error => {
      // handle here
    });
  ```

---

## Match

This is a route that handles match-related operations, to accumulate scores, calculate highest score, etc.

### Match Start

This will start a match upon user id and generate the match id, match id will be used for accumulating scores and highest scores.

* URL
  * `/match`
* Method
  * `POST`
* URL Params
  * None
* Data Params
  ```javascript
  {
    user_id: // your user id (integer)
  }
  ```
* Success Response
  * Code: 200
  * Content: 
  ```javascript
  {
    "match_id": // the match id (integer)
  }
  ```
* Error Response
  * Code: 500
  * Content:
  ```javascript
  {
    "message": "INTERNAL SERVER ERROR!"
  }
  ```
* Sample Call
  ```javascript
  $.ajax({
    type: "POST",
    url: "/match",
    data: {
      user_id: 1
    }
  })
    .done(match_id => {
      // do your awesome things here
    })
    .fail(error => {
      // handle here
    });
  ```

---

### Match End

This will end a match, accumulate the final score into user's highest_score column, and delete the match row corresponds to user id.

* URL
  * `/match`
* Method
  * `DELETE`
* URL Params
  * None
* Data Params
  ```javascript
  {
    user_id: // your user id (integer)
  }
  ```
* Success Response
  * Code: 200
  * Content: 
  ```javascript
  {
    "match_id": // the match id (integer)
  }
  ```
* Error Response
  * Code: 500
  * Content:
  ```javascript
  {
    "message": "INTERNAL SERVER ERROR!"
  }
  ```
* Sample Call
  ```javascript
  $.ajax({
    type: "POST",
    url: "/match",
    data: {
      user_id: 1
    }
  })
    .done(match_id => {
      // do your awesome things here
    })
    .fail(error => {
      // handle here
    });
  ```

---