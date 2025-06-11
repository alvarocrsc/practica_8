====================================================================

# 📘 API - Blog
This RESTful API allows you to manage authors and posts for a blog platform. You can create, retrieve, update, and delete authors and their posts, as well as create and view posts with their associated author information.

Please ensure that you configure the environment variables in the `.env` file to establish a successful connection to your database.

**Base URL:** `http:localhost:3000/api`

====================================================================

## 🖋️ Authors

## Get all the authors

**Method:** GET
**URL:** /api/author
**Headers:** XXXX
**Body:** XXXX

Response: 

* `200 OK`: Return a list of the authors with all their data.

``` json
{
  "message": "Authors retrieved successfully",
  "results": [
    {
      "id": 1,
      "name": "Tom Smith",
      "email": "tom.smith@example.com",
      "image": "https://example.com/img/tom.jpg"
    },
    ...
  ]
}
```

* `500 Internal Server Error`: Server error

## Get an author from its ID

**Method:** GET
**URL:** /api/author/<AUTHORID>
**Headers:** XXXX
**Body:** XXXX

Response: 

* `200 OK`: Returns an object containing the author's data.

``` json
{
  "id": 1,
  "name": "Tom Smith",
  "email": "tom.smith@example.com",
  "image": "https://example.com/img/tom.jpg"
}
```

* `404 Not Found`: Author not found
* `500 Internal Server Error`: Server error

## Get all the posts an author has published from its ID

**Method:** GET
**URL:** /api/author/<AUTHORID>/posts
**Headers:** XXXX
**Body:** XXXX

Response: 

* `200 OK`: Returns an object containing the author's data, including a "posts" field which is an array of all posts published by that author.

``` json
{
  "message": "Posts retrieved successfully",
  "author": {
    "id": 1,
    "name": "Tom Smith",
    "email": "tom.smith@example.com",
    "image": "https://example.com/img/tom.jpg",
    "posts": [
      {
        "id": 1,
        "title": "Getting Started with Node.js",
        "description": "A beginner's guide to Node.js and Express.",
        "creation_date": "2025-06-10T07:41:41.000Z",
        "category": "Programming"
      },
      ...
    ]
  }
}
```

* `404 Not Found`: Author not found
* `500 Internal Server Error`: Server error

## Create a new author

**Method:** POST
**URL:** /api/author
**Headers:** XXXX
**Body:** name, email, image

Response: 

* `201: Created`: The object that represents the new created author.

``` json
{
  "message": "Author created successfully",
  "result": {
    "id": 1,
    "name": "Tom Smith",
    "email": "tom.smith@example.com",
    "image": "https://example.com/tom.jpg"
  }
}
```

* `400 Bad Request`: Name and email are required
* `409 Conflict`: Author with this email already exists
* `500 Internal Server Error`: Server error

## Edit an existing author's full data

**Method:** PUT
**URL:** /api/author/<AUTHORID>
**Headers:** XXXX
**Body:** name, email, image

Response:

* `200: OK`: The object that represents the modified author.

``` json
{
  "message": "Author updated successfully",
  "result": {
    "id": 1,
    "name": "Tom Marshall",
    "email": "tom.marshall@example.com",
    "image": "https://example.com/tom.jpg"
  }
}
```

* `400 Bad Request`: Name, email, and image are required
* `404 Not Found`: Author not found
* `500 Internal Server Error`: Server error

## Delete an existing author

**Method:** DELETE
**URL:** /api/author/<AUTHORID>
**Headers:** XXXX
**Body:** XXXX

Response: 

* `200: OK`: The object that represents the deleted author.

``` json
{
  "message": "Author deleted successfully",
  "result": {
    "id": 9,
    "name": "Tom Marshall",
    "email": "tom.marshall4@example.com",
    "image": "https://example.com/tom.jpg"
  }
}
```

* `404 Not Found`: Author not found
* `500 Internal Server Error`: Server error

====================================================================

## 📰 Posts

## Get all the posts

**Method:** GET
**URL:** /api/post
**Headers:** XXXX
**Body:** XXXX

Response: 

* `200 OK`: An array containing all the posts, each one with all the author data associated to them.

``` json
{
  "message": "Posts retrieved successfully",
  "results": [
    {
      "id": 1,
      "title": "Getting Started with Node.js",
      "description": "A beginner's guide to Node.js and Express.",
      "creation_date": "2025-06-10T07:41:41.000Z",
      "category": "Programming",
      "author_id": 1,
      "author": {
        "id": 1,
        "name": "Tom Smith",
        "email": "tom.smith@example.com",
        "image": "https://example.com/img/tom.jpg"
      }
    },
    ...
  ]
}
``` 

* `500 Internal Server Error`: Server error

## Get a post from its ID

**Method:** GET
**URL:** /api/post/<POSTID>
**Headers:** XXXX
**Body:** XXXX

Response:

* `200 OK`: Returns An object with the post data and all the author data associated to it.

``` json 
{
  "id": 1,
  "title": "Getting Started with Node.js",
  "description": "A beginner's guide to Node.js and Express.",
  "creation_date": "2025-06-10T07:41:41.000Z",
  "category": "Programming",
  "author_id": 1,
  "author": {
    "id": 1,
    "name": "Tom Smith",
    "email": "tom.smith@example.com",
    "image": "https://example.com/img/tom.jpg"
  }
}
```

* `404 Not Found`: Post not found
* `500 Internal Server Error`: Server error

## Create a new post

**Method:** POST
**URL:** /api/post
**Headers:** XXXX
**Body:** title, description, category, author_id

Response: 

* `201: Created`: The object that represents the new created post.

``` json
{
  "message": "Post created successfully",
  "result": {
    "id": 13,
    "title": "Homemade Pizza Secrets",
    "description": "Tips and tricks for making delicious pizza at home.",
    "creation_date": "2025-06-10T12:41:11.000Z",
    "category": "Food",
    "author_id": 1,
    "author": {
      "id": 1,
      "name": "Tom Smith",
      "email": "tom.smith@example.com",
      "image": "https://example.com/img/tom.jpg"
    }
  }
}
```

* `400 Bad Request`: Title, description, category, and author_id are required
* `500 Internal Server Error`: Server error

## Edit and existing post's full data

**Method:** PUT
**URL:** /api/post/<POSTID>
**Headers:** XXXX
**Body:** title, description, category, author_id

Response:

* `200: OK`: The object that represents the modified post.

``` json
{
  "message": "Post updated successfully",
  "result": {
    "id": 13,
    "title": "Homemade Pizza Secrets",
    "description": "Tips and tricks for making delicious pizza at home.",
    "creation_date": "2025-06-10T12:41:11.000Z",
    "category": "Food",
    "author_id": 2,
    "author": {
      "id": 2,
      "name": "Emily Johnson",
      "email": "emily.johnson@example.com",
      "image": "https://example.com/img/emily.jpg"
    }
  }
}
```

* `400 Bad Request`: Title, description, category, and author_id are required
* `404 Not Found`: Post not found
* `500 Internal Server Error`: Server error

## Delete an existing post

**Method:** DELETE
**URL:** /api/post/<POSTID>
**Headers:** XXXX
**Body:** XXXX

Response: 

* `200: OK`: The object that represents the deleted post.

``` json
{
  "message": "Post deleted successfully",
  "result": {
    "id": 14,
    "title": "Homemade Pizza Secrets",
    "description": "Tips and tricks for making delicious pizza at home.",
    "creation_date": "2025-06-11T05:57:20.000Z",
    "category": "Food",
    "author_id": 1,
    "author": {
      "id": 1,
      "name": "Tom Marshall",
      "email": "tom.marshall@example.com",
      "image": "https://example.com/tom.jpg"
    }
  }
}
```

* `404 Not Found`: Post not found
* `500 Internal Server Error`: Server error

====================================================================