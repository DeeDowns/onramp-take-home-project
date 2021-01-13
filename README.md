# Onramp FullStack Take Home Project

## **User Flow**
Register: 
![alt text][screenshot]

[logo]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:register.png "/register screenshot"

Login: 
![alt text][logo]

[logo]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:login.png?raw=true "/login"

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
* Client: A form is implemented in EditPost.tsx component, with an axios call to GET a specified post by id, useState hook is used to set the input fields with the response data. The handleSubmit() function sends a PUT request to the back end via axios to update and save the edited post.
           
* Server: The blogFeedModel.ts file handles the database queries, specifcally editPost() queries the Posts database table to update the specified post by id. The blogFeed.ts in the server/src/routes folder implements the endpoint and CRUD request, specifically the PUT to /'feed'/:id request handles the request to update the specified blog post with the changes sent by the client.

### 7. Delete a post
* Client: A handleDelete() function is implemented in BlogPost.tsx component, with an axios call to the endpoint to DELETE a specified post by id.
           
* Server: The blogFeedModel.ts file handles the database queries, specifcally deletePost() queries the Posts database table to delete the specified post by id. The blogFeed.ts in the server/src/routes folder implements the endpoint and CRUD request, specifically the DELETE to /'feed'/:id request handles the client request remove the specified blog post. This request also deletes the post from the Favorites database table, so that any other user's favorites can't have a post thats been removed. 

### 8. Search for a blog post
* Client: A form is implemented in BlogFeed.tsx component for the search bar. The state is handled by useState hook and as the user types the state is updated via the handleSearchInputChange functiion. With all of the blog posts rendered on the page, a filter() method is applied to the posts on the title and username properties. The title and username strings and the search input string  are turned to lowercase to easily compare them and if either the title or username includes the input string as it is being typed out those posts will be filtered to show the matches.  

### 9. Favorite one or more blog posts at the same time
* Client: The fetchFavorites() function from the favoritesActions.ts, makes an endpoint call to render a users favorite posts in Favorites.tsx. 
           
* Server: The favoritesModel.ts file handles the database queries, specifcally addToFavorites() queries the Favorites database table to insert the post's and user's ids. The favorites.ts in the server/src/routes folder implements the endpoint and CRUD request, specifically the POST /favorites/:id request handles the client request add a post favorites and based on the post id.

* TODO - Improvements: I did created functionality to add a single post at a time, instead of multiple at one time, but with more time I would implement a user being able to click on multiple post and those posts sent as the request body in the form of an array objects [{postId, userId}, ...], to then be inserted into the multiple rows of the Favorites table


### 10. View all user favorites
* Client: The fetchFavorites() function from the favoritesActions.ts, makes an endpoint call to render a users favorite posts in Favorites.tsx. 

* Server: The favoritesModel.ts file handles the database queries, specifcally getFavorites() queries the Favorites database table, while also joining the Users and Posts tables, to grab a user's favorite posts and order them by most recent to older. The favorites.ts in the server/src/routes folder implements the endpoint and CRUD request, specifically the GET /favorites/ request handles the client request fetch all of a users favorites and send that information back to the client.

---

## **Best Practices**
* Though I am new to Typescript, kept strict configuration as a default and tried my best to work with Typing. It is definitely something that will take more exposure to get a better understanding, but the experience has been challanging and rewarding to attempt pick up the language so quicky and build something with it. Where I could, I provided the nessecary typing, definitely an area for growth. 

* I also attempted to abstract out as much of the code as I could. For example, in the server/src/routes files, I initially had the database queries in the route requests themselves, but later decided it would be best to create models to handle to queries and just import them into the routes. This greatly imporves the readability of the code and keeps it looking neat and uncluttered. With more time, I could dive even deeper in modulizing the code. 

* I wanted to keep the file structure simple and easy to navigate, so splitting the client and the server into separate files. Then in the client having folders for components, and redux store, and utils, justs keeps everything neat. 

---

## **Architectural Design Pattern**
    




