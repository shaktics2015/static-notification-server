# Static notification server 
 
## Install required dependencies

    npm install

## Run the app

    npm start

## REST API
 
### Get all notifications

`GET /json/notification/`

    curl -i -H 'Accept: application/json' http://localhost:9000/json/notification/

### Response

    [
        {
            "id":1,
            "author":"J. K. Rowling",
            "text":"Aww yeah, you successfully read this important alert message.",
            "seen":false,
            "clickable":true,
            "avator":"http://localhost:9000/file/download/avator.png",
            "dateTime":"05/29/2015 5:50 AM"
        },
        {
            "id":2,
            "author":"Daniel Radcliffe",
            "text":"Aww yeah, you successfully read this important alert message.",
            "seen":false,
            "clickable":false,
            "avator":"http://localhost:9000/file/download/avator.png",
            "dateTime":"05/29/2015 5:50 AM"
        },
        {
            "id":3,
            "author":"Rupert Grint",
            "text":"Aww yeah, you successfully read this important alert message.",
            "seen":false,
            "clickable":true,
            "avator":"http://localhost:9000/file/download/avator.png",
            "dateTime":"05/29/2015 5:50 AM"
        }
    ] 

### Mark all notification seen

`PUT /json/mark/all/notification/seen`

    curl -i -H 'Accept: application/json' http://localhost:9000/json/mark/all/notification/seen

### Response

    true

### Mark a notification seen

`PUT /json/toggle/notification/{id}/{status}`

    curl -i -H 'Accept: application/json' http://localhost:9000/json/toggle/notification/2/false

### Response

    true

### Download files

`GET /file/download/{fileName}`

    curl -i -H 'Accept: application/json' http://localhost:9000/file/download/avator.png

### Response

    Downloads the file

 