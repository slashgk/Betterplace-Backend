**Features implemented:**

 1. Use of CSV file provided and dump it in your database.
 2. Backend: Node.js
 3. Frontend: Angular.JS
 4. Database: MongoDB
 5. Filters
 6. Sorting on columns
 7. Paging
 8. Specific page with channel details on the frontend.


----------


**Deployment Instruction:**

>  Database:

 1. Install MongoDB. (Not as a service)
 2. Create mongo-data folder in C:\Users\user_name\
 3. Go to : C:\Program Files\MongoDB\Server\4.0\bin and run `mongod.exe --dbpath="C:\Users\user_name\mongo-data"`. Here **dbpath** is the database path.

> Backend:

 1. Install Node.js
 2. Go to Backend/Betterplace/ and run `npm install`.
 3. Run `node data/load_csv.js`.
 4. Run `node server/server.js`. (Keep the server running)

> Frontend:

 1. Install AngularJS: `npm install -g @angular/cli` (Install Backend first)
 2. Go to Frontend/Betterplace/ and run `npm install`.
 3. Run `ng serve`.

> Run app:

    Go to `http://localhost:4200/`

    *

> **Ensure that database is running (Point 3 of database), backend is running(Point 4 of Backend) and Frontend is running(Point 3 of
> Frontend). Please check the chrome console for any errors.**

*

> Screenshots:

![enter image description here][1]{Main Page}


![enter image description here][2]{Filter applied}


![enter image description here][3]{:target='_blank'}
![enter image description here][4]{:target='_blank'}

![enter image description here][5]{:target='_blank'}


  [1]: https://he-s3.s3.amazonaws.com/media/uploads/ffbccda.PNG
  [2]: https://he-s3.s3.amazonaws.com/media/uploads/14ac83c.PNG
  [3]: https://he-s3.s3.amazonaws.com/media/uploads/3904fec.PNG
  [4]: https://he-s3.s3.amazonaws.com/media/uploads/3fd13f4.PNG
  [5]: https://he-s3.s3.amazonaws.com/media/uploads/485674b.PNG
