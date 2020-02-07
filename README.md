# Meme or False API Documentation

## Show Memes

Returns meme data randomly in JSON data.

* URL
  * `/memes`
* Method
  * `GET`
* URL Params
  * None
* Header Params
  ```javascript
  {
    token: // your token
  }
  ```
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
* Header Params
  ```javascript
  {
    token: // your token
  }
  ```
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
* Header Params
  ```javascript
  {
    token: // your token
  }
  ```
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
* Header Params
  ```javascript
  {
    token: // your token
  }
  ```
* Data Params
  * None
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
* Header Params
  ```javascript
  {
    token: // your token
  }
  ```
* Data Params
  * None
* Success Response
  * Code: 200
  * Content: 
  ```javascript
  {
    "message": "Succesfully ended match!"
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
    type: "DELETE",
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

### Match Score Update

This will update the score in every match if the player answers correctly, by default, this will add 100 for each correct answer into the score column in match table.

* URL
  * `/match`
* Method
  * `PUT`
* URL Params
  * None
* Header Params
  ```javascript
  {
    token: // your token
  }
  ```
* Data Params
  ```javascript
  {
    match_id: // your match id
  }
  ```
* Success Response
  * Code: 200
  * Content: 
  ```javascript
  {
    "message": "Succesfully added score!"
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
    type: "PUT",
    url: "/match",
    data: {
      match_id: 23
    }
  })
    .done(updatedMatch => {
      // do your awesome things here
    })
    .fail(error => {
      // handle here
    });
  ```

---

### User Highest Score Update

This will update the player's highest score based on the most recent score when the current match has successfully finished. In other words, this will accumulate the player's latest highest score with the total score of current match.

* URL
  * `/match`
* Method
  * `PATCH`
* URL Params
  * None
* Header Params
  ```javascript
  {
    token: // your token
  }
  ```
* Data Params
  ```javascript
  {
    match_id: // your match id
  }
  ```
* Success Response
  * Code: 200
  * Content: 
  ```javascript
  {
    "message": "Succesfully ended updated user highest score!"
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
    type: "PATCH",
    url: "/match",
    data: {
      user_id: 23
    }
  })
    .done(update => {
      // do your awesome things here
    })
    .fail(error => {
      // handle here
    });
  ```

---