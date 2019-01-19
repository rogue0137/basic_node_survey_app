# Krystal's Survey App


## Run the app

## Interact with the app

Open a new terminal. 

### Creating a survey

Copy and paste the following.

```
curl -X POST \
  http://localhost:4000/surveys/ \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 1ef56eb0-f1bb-4f33-b962-a68a7902a6bc' \
  -H 'cache-control: no-cache' \
  -d '{
	"question":"Will George R.R. Martin ever finish a Song of Ice and Fire?"
}'
```

It should return the newly created object:

```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 0
}
```


### Taking a Survey 

Copy and paste the following:

```
curl -X POST \
  http://localhost:4000/surveys/1 \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 44de86a5-6231-4f84-85ee-b5b6af9e152e' \
  -H 'cache-control: no-cache' \
  -d '{
	"answer":"no"
}'
```
It should return the object with an updated survey response:
```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 1
}
```
### Getting results of a survey

Copy and paste the following:

```
curl -X GET \
  http://localhost:4000/surveys/1 \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 476fecc3-cf5e-40d6-b86a-da070b5067eb' \
  -H 'cache-control: no-cache'
  ```

It should return the results of the object specified:

```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 1
}
```

### Delete a Survey

Copy and paste the following:

```
curl -X DELETE \
  http://localhost:4000/surveys/1 \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 565a94a6-0187-45ac-b326-1385db54c64f' \
  -H 'cache-control: no-cache'
  ```

It should return the object that has been deleted:
```
{
    "id": 1,
    "question": "Will George R.R. Martin ever finish a Song of Ice and Fire?",
    "yes": 0,
    "no": 1
}
```
