# Krystal's Survey App


## Run the app

- Ensure you have node and npm installed. 

	`node -v && npm -v`

	Which would return something similar to 

	```
	v6.2.2
	6.4.1
	```

	You do not need these exactly, but should node and npm greater than 

	```
	v6.x.x
	6.x.x
	```

	If you do not, please install or update.

- Clone the repo.

	`git clone https://github.com/rogue0137/basic_node_survey_app.git`

- CD into the repository's folder

	`cd basic_node_survey_app`
- Install dependencies

	`npm install`
- Run the server

	`node server.js`

## Interact with the app

- Open a new terminal. Follow the directions below.

### Creating a survey

Copy and paste the following.

```
curl -X POST \
  http://localhost:4000/surveys/ \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"question":"Will George R.R. Martin ever finish a Song of Ice and Fire?"
}'
```

It should return the newly created object.

```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 0
}
```


### Taking a Survey 

Copy and paste the following.

```
curl -X POST \
  http://localhost:4000/surveys/1 \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"answer":"no"
}'
```
It should return the object with an updated survey response.
```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 1
}
```
### Getting results of a survey

Copy and paste the following.

```
curl -X GET \
  http://localhost:4000/surveys/1 \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
  ```

It should return the results of the object specified.

```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 1
}
```

### Delete a Survey

Copy and paste the following.

```
curl -X DELETE \
  http://localhost:4000/surveys/1 \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
  ```

It should return the object that has been deleted.
```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 1
}
```

## How I would persist data using a database

Since this exercise does not deal with more than one table, I would not use a relational DB like MySQL. Instead, I would use a document based DB. MongoDB is one of the most commonly used document based DBs. As `mongoose` is one of the most popular node.js MongoDB-based data modeling libraries, I would choose that. MongoDB uses collections instead of tables. Please note that when referencing collection instead of table below.

I would add the following to `server.js` .

```
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/survey', { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
```

 I would then need to create a models folder and a specific model for surveys. 
 
 Inside `models/Surveys.js`, I would include:

```
const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  survey: String,
  yes: Number,
  no: Number
});

module.exports = mongoose.model('Survey', SurveySchema);
``` 

I would not include `id` or `_id` as a field in the schema because Mongoose creates one by default if not automatically passed it in the schema.

After successful schema migration, I would update `routes/surveys.js` to use specific functions provided by `mongoose` to perform CRUD operations. 

For instance, _Getting the Results of a Survey_ would look something like the following.

```
const mongoose = require('mongoose');
const Survey = require('../models/survey.js');

// Getting results of a survey 
router.get('/:id', function(req, res, next) {
  Surveys.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
```



## Humor


![](images/kill_a_stark.jpg)

