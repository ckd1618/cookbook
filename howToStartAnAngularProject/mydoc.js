ng new public --routing
//public is the name of the file that will be made
ng build --watch
//this builds the index file and runs the angular project, so express can properly serve the index file
ng g c note
//this generates a component called note
ng build --watch
//this will run the project
ng serve
//this will also run the project but will tell you the localhost address as well

//now setup the app.routing.module.ts file
//go into app.component.html and delete the top part

ng g s http
//this generates a service and names it http

nodemon server.js
//run the server with this command

