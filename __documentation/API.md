`GET: "/api/homepage/:pagenumber"`
200:

```json
  "status": 200,
  "body": [{
    "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
    "price": "$49.99",
    "body_location": "Wrist",
    "category": "Fitness",
    "id": 6543,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHB...<REST_OF_IMAGE_ENCODING>",
    "numInStock": 9,
    "companyId": 19962
  },
  //23 more of this kind of object,
  ]
  "message":"Success"
```

404:

```json
{ "status": 404, "message": "Request failed", "body": "req.params" }
```

`GET: "/api/product/:id"`

```json
  "status": 200,
  "body": {
    "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
    "price": "$49.99",
    "body_location": "Wrist",
    "category": "Fitness",
    "id": 6543,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHB...<REST_OF_IMAGE_ENCODING>",
    "numInStock": 9,
    "companyId": 19962
  },
  "message":"Success"
```

404:

```json
{
  "status": 404,
  "message": "Request failed",
  "body": "put the whole request url here"
}
```

`GET: "/api/company/:id"`
200:

```json
{
  "status": 200,
  "body": {
    "name": "Barska",
    "url": "http://www.barska.com/",
    "country": "United States",
    "id": 19962
  },
  "message": "Company data retrieved successfully"
}
```

404

```json
{ "status": 404, "message": "failed to retrieve company data at {url}" }
```

`PUT "/api/product/:id/"`
200 
```json
//TODO (can we just pass the number of items to remove in the req url or do we HAVE to pass a body)
//ALSO does it matter if PATCH or PUT
```

<!-- 
200
```json
{"status":200,
"body":"the updated object would go here",
"message"}
``` -->
