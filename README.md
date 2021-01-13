# Onramp FullStack Take Home Project

## **Getting started: the Front End**
`npm install`

`npm start` to start localhost

## **Getting started the Back End**
`npm install`

`npm run server` to start the development server

`psql postgres` to open up postgres in the command line

`createdb blogdb` to create database

`\c blogdb` to connect the database

`\d` to view all the tables

`\d table-name` to see a specific table

`knex migrate:latest --knexfile knexfile.ts` to run table migrations

`npm run test` to run tests with jest

## **Planning Artifacts**
Simple Wireframing
![alt text][wireframe]

[wireframe]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/wireframes.png "wireframes screenshot"

Database Schema Design
![alt text][db-schema]

[db-schema]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/db-schema.png "database schema design screenshot"

## **User Flow**
Register: The starting point, this is where a user to creates an account
![alt text][register]

[register]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:register.png "/register screenshot"

Login: The user is then redirected to login. If the user clicks the logout button in the top right corner of the screen, they are redirected back to this page.
![alt text][login]

[login]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:login.png "/login screenshot"

View Feed: After a successful login the user is redirected to the blog feed, a view of all blog posts from all users
![alt text][feed]

[feed]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:feed.png "/feed screenshot"

View a Post: The user can choose to read any post by clicking the "read" link under each post 
![alt text][post-id]

[post-id]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:post-id.png "/post/:id screenshot"

Add a Post: From the /feed page the user can create a new post by clicking Add Post, the link redirects them to a form where they can add a blog title and write content
![alt text][add-post]

[add-post]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:add-post.png  "/add-post screenshot"

Edit a Post: When viewing a post, the user can choose to edit the post, they are redirected to a pre-populated form so they can update the content
![alt text][edit-post]

[edit-post]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:edit-post-id.png  "/edit-post/:id screenshot"

View an Edited Post: After submitting the changes, the user is redirected to the feed, where they can see the updated post (to view updated content, the user has to click on the "read" link)
![alt text][post-id-edit]

[post-id-edit]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:post-id-edited  "edited post screenshot"


View Favorites: Once they have favorites they see this view
![alt text][favorites]

[favorites]: https://github.com/DeeDowns/onramp-take-home-project/blob/main/client/public/screenshots/:favorites.png  "/favorites screenshot"

---

## **Feature Requirements**

```
id: 1; // auto-generated
username: 'user1'; // string, required
email: 'user1@email.com'; //string, required (for signup only)
password: 'user1pass'; //string, required (will be hashed)
```

| Method | URL            | Description         |
| ------ | -------------- | ------------------- |
| POST   | /users/register | register a new user |
| POST   | /login    | login user          |


### 1. Create an account
* Client: A sign in form is implemented in the `Register.tsx` component where the inputs are sent to the back end api via the `handleRegSubmit()`. The `userActions.ts` and `userReducer.ts` files handle the endpoint calls and user state management 
           
* Server: The `userModel.ts` file handles the database queries, specifcally `createNewUser()` queries the Users database table to insert the specified user into the table. `users.ts` in the `server/src/routes` folder implements the endpoints and CRUD requests, specifically the `POST` request handles the client request to add a new user, save their info and hash their password in the database 
            

### 2.Login
* Client: A sign-in form is implemented in the `Login.tsx` component where the inputs are sent to the back end API via `login()`. The `userActions.ts` and `userReducer.ts` files handle the endpoint calls and user state management 
           
* Server: The `userModel` file handles the database queries, specifcally `findUser()` queries the `Users` database table to find the specified user. The `auth.ts` in `server/src/routes` implements the endpoint and CRUD request, specifically the `POST` request handles the client request to add a find the user trying to login, compare their password to the stored password and if it matches up, sends back a token.

### 3. Logout
* Client: A button is implemented in the `Logout.tsx` component where `handleLogout()` sets the local storage token to an empty string and calls `useHistory` hook to redirect the user to the login page.

```
id: 1; // auto-generated
title: 'Blog Title'; // string, required
username: 'user1'; // string, auto-generated (user who created post)
image: 'image_url'; // string, optional (in column in table, but not implemented)
content: 'Blog text'; // string, required
```

| Method | URL                        | Description                 |
| ------ | ------------------------   | --------------------------- |
| GET    | /feed/     | fetch all of blog post |
| GET    | /feed/:id  | fetch specific blog post       |
| POST   | /feed      | add new blog post              |
| PUT    | /feed/:id  | update specific post      |
| DELETE | /feed/:id | delete specific post      |


### 4. Create a new blog post
* Client: A form is implemented in the `AddPost.tsx` component where the inputs are sent to the back end API via `handleSubmit()`, imported from the `blogFeedActions.ts`, to take care of the endpoint call and the `blogFeedReducers.ts` files for state management. 
           
* Server: The `blogFeedModel.ts` file handles the database queries, specifcally `addNewPost()` queries the `Posts` database table to insert the specified post. The `blogFeed.ts` in `server/src/routes` implements the endpoint and CRUD request, specifically the `POST` request handles the client request to add the new post


### 5. Read a blog post
* Client: A React Router `Link` is provided so a user can view a single post. The `BlogPost.tsx` component renders the post from an endpoint call, made via `fetchBlogPostById()` created in the `blogFeedActions.ts`, again state and props handled with Redux and the `blogFeedReducer.ts`
           
* Server: The `blogFeedModel.ts` file handles the database queries, specifcally `findPostById()` queries the `Posts` database table to find and return the specified post by id. The `blogFeed.ts` in `server/src/routes` implements the endpoint and CRUD request, specifically the `GET` request handles the client request find and send back the specified blog post.

### 6. Update a post
* Client: A form is implemented in `EditPost.tsx` component, with an axios call to `GET` a specified post by id, `useState` hook is used to set the input fields with the response data. `handleSubmit()` sends a `PUT` request to the back end via axios to update and save the edited post.
           
* Server: The `blogFeedModel.ts` file handles the database queries, specifcally `editPost()` queries the `Posts` database table to update the specified post by id. The `blogFeed.ts` in `server/src/routes` implements the endpoint and CRUD request, specifically the `PUT` request handles the request to update the specified blog post with the changes sent by the client.

### 7. Delete a post
* Client: `handleDelete()` is implemented in `BlogPost.tsx` component, with an axios call to the endpoint to `DELETE` a specified post by id.
           
* Server: The `blogFeedModel.ts` file handles the database queries, specifcally `deletePost()` queries the `Posts` database table to delete the specified post by id. The `blogFeed.ts` in `server/src/routes` implements the endpoint and CRUD request, specifically the `DELETE` to request handles the client request remove the specified blog post. This request also deletes the post from the `Favorites` database table, so that any other user's favorites can't have a post thats been removed. 

### 8. Search for a blog post
* Client: A form is implemented in `BlogFeed.tsx` component for the search bar. The state is handled by `useState` hook and as the user types the state is updated via `handleSearchInputChange()`. With all of the blog posts rendered on the page, a `filter()` method is applied to the posts on the title and username properties. The title and username strings and the search input string are turned to lowercase to easily compare them and if either the title or username includes the input string as it is being typed out those posts will be filtered to show the matches.  

| Method | URL                        | Description                 |
| ------ | ------------------------   | --------------------------- |
| GET    | /favorites     | fetch all of a users favorites |
| POST   | /feed/:id    | add a blog post to a users favorites             |

### 9. Favorite one or more blog posts at the same time
* Client: The `fetchFavorites()` function from the `favoritesActions.ts`, makes an endpoint call to render a users favorite posts in `Favorites.tsx`. 
           
* Server: The `favoritesModel.ts` file handles the database queries, specifcally `addToFavorites()` queries the Favorites database table to insert the post's and user's ids. The `favorites.ts` in `server/src/routes` implements the endpoint and CRUD request, specifically the `POST` request handles the client request.

#### TODO - Improvements: 
I created functionality to add a single post at a time, instead of multiple at one time, but with more time I would implement a user being able to click on multiple post and those posts sent as the request body in the form of an array objects `[{postId, userId}, ...]`, to then be inserted into the multiple rows of the `Favorites` table

Also I created a query to remove a post from the `Favorites` table, which is used in order to delete a post from the Posts table, with more time I would build out the endpoint and functionality so a user can unfavorite a post


### 10. View all user favorites
* Client: `fetchFavorites()` from the `favoritesActions.ts`, makes an endpoint call to render a users favorite posts in `Favorites.tsx`. 

* Server: The `favoritesModel.ts` file handles the database queries, specifcally `getFavorites()` queries the `Favorites` database table, while also joining the `Users` and `Posts` tables, to grab a user's favorite posts and order them in reverse chronological order. The `favorites.ts` in `server/src/routes` implements the endpoint and CRUD request, specifically the `GET` request handles the client request fetch all of a users favorites and send that information back to the client.

---

## **Best Practices**
* Though I am new to Typescript, kept strict configuration as a default and tried my best to work with Typing. It is definitely something that will take more exposure to get a better understanding. Though the experience was challanging, it was also rewarding to attempt pick up the language so quicky and build something with it. Where I could, I provided the nessecary typing, definitely an area for growth. 

* I also attempted to abstract out as much of the code as I could. For example, in the `server/src/routes` files, I initially had the database queries in the route requests themselves, but later decided it would be best to create `models` to handle to queries and just import them into the routes. This greatly imporves the readability of the code and keeps it looking neat and uncluttered. With more time, I could dive even deeper in modulizing the code. 

* I wanted to keep the file structure simple and easy to navigate, so splitting the client and the server into separate files. Then in the client having folders for components, and Redux store, and utils, justs keeps everything neat. 

#### TODO - Improvements: 
* Use stricter typing: with more time I would and use less of the `any` keyword for typing variables, use more interfaces to help Typescript work better for my code. I am still learning the landguage, but this is definitely an area I would like to gain more knowledge in. 

* More testing: I ran into typescript and jest configuration issues in setting up the unit tests. That coupled with time constraints, reduced the amount of testing carried out. It is an area I would expand on if continuing to work on the app. 

* More route middleware: I would implement more custom validation middleware. This middleware would help with things like preventing a user editing or deleting a post that does not belong to them, making sure a post exists before any modifications are done to it, validate the request body of an incoming post to make sure it isn't missing information (like the title)

* Form validation: Putting checks in place, with something like Yup, to make sure that a user fills out a form correctly and display error messages when mistakes are made.

---

## **Architectural Design Pattern**
I chose to implement Redux to structure my app. The Store, View, the connection between the two. The Store holds the data/state needed by the View/the components that render the data. The connection between the two is what gets the data to the components, with mapStateToProps. I chose this so that the data was readily avaiable to any component that needed it, without the components having to prop drill to get props to each other. 
    




