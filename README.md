# Onramp FullStack Take Home Project

## **User Flow**
Register: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Login: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Feed: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Add Post: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"


View Favorites: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

---

## **Feature Requirements**

### 1. Create an account
* Client: A sign in form is implemented in the Register.tsx component where the inputs are sent to the back end api via the handleRegSubmit funtion. The userActions.ts and userReducer.ts files handle the endpoint calls and user state management 
           
* Server: The userModel file handles the database queries, specifcally createNewUser queries the Users database table to insert the specified user into the table. The user.ts in the server/src/routes folder implements the endpoints and CRUD requests, specifically the POST request handles the client request to add a new user, save their info and hash their password in the database 
            

### 2.Login
* Client: A sign in form is implemented in the Login.tsx component where the inputs are sent to the back end API via the login handler funtion. The userActions.ts and userReducer.ts files handle the endpoint calls and user state management 
           
* Server: The userModel file handles the database queries, specifcally findUser() queries the Users database table to find the specified user. The auth.ts in the server/src/routes folder implements the endpoint and CRUD request, specifically the POST request handles the client request to add a find the user trying to login, compare their password to the stored password and if it matches up, sends back a token.

### 3. Logout
* Client: A button is implemented in the Logout.tsx component where handleLogout() removes the token from local storage and calls useHistory hook to redirect the user to the login page.

### 4. Create a new blog post
* Client: A form is implemented in the AddPost.tsx component where the inputs are sent to the back end API via the handleSubmit() handler funtion, imported from the blogFeedActions.ts, to take care of the endpoint call and the blogFeedReducers.ts files for state management. 
           
* Server: The blogFeedModel.ts file handles the database queries, specifcally addNewPost() queries the Posts database table to insert the specified post. The blogFeed.ts in the server/src/routes folder implements the endpoint and CRUD request, specifically the POST to '/feed' request handles the client request to add the new post


### 5. Read a blog post
* Client: A React Router Link is provided so a user can view a single post. The BlogPost.tsx component renders the post from an endpoint call, made via the fetchBlogPostById function created in the blogFeedActions.ts, again state and props handled with redux and the blogFeedReducer.ts
           
* Server: The blogFeedModel.ts file handles the database queries, specifcally findPostById() queries the Posts database table to find and return the specified post by id. The blogFeed.ts in the server/src/routes folder implements the endpoint and CRUD request, specifically the GET to /'feed'/:id request handles the client request find and send back the specified blog post.

### 6. Update a post
  * Where:
        Client:
            > test
        Server: 
            > test
  * How:

### 7. Delete a post
  * Where:
        Client:
            > test
        Server: 
            > test
  * How:

### 8. Search for a blog post
  * Where:
        Client:
            > test
        Server: 
            > test
  * How:

### 9. Favorite one or more blog posts at the same time
  * Where:
        Client:
            > test
        Server: 
            > test
  * How:

### 10. View all user favorites
  * Where:
        Client:
            > test
        Server: 
            > test
  * How:

---

## **Best Practices**

---

## **Architectural Design Pattern**
    




