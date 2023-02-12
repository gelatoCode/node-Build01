TAGS : SETUP 
    DONE : npm init @ init -y  
        - package.json 
    DONE : npm install express
        - package-lock.json
        - node-modules folder 
    DONE : npm install nodemon
            [x] - Open package.json 
            [x] - Go to 'script', change 'test' to 'start' 
            [x] - 'start' = 'nodemon app'
            [x] - Go to terminal, type 'npm start' 
    DONE : Create a file called app.js 
            [x] - Create a Server 

TAGS : First Step [ Server ]
    [x] - Import Express Module 
    [x] - Call a function express() to object 'app' 
        # SYNTAX  app.listen(path, [callback]) 
    [x] - Create a app.listen() function 
    [x] - For port, 8080 and add function. 
    [x] - In function, add console.log().
    [x] - In terminal, type 'npm start' 

Done!

TAGS : Run Express server from browser
    DONE : Create a function.
    # SYNTAX - app.all(path, [callback]);
        [x] - Use a 'app.all()' method 
        [x] - Then in path, put '/'.
        [x] - For callback, put '(request, response)' parameter.
    # SYNTAX - res.send([body]) 
        [x] - For input, 'res.send()' - It send this to the requesting client.
        [x] - For body, sending the string "Hello World".
        [x] - Run. [ npm start ]
        [x] - Open browser and type 'localhost:8080"

FIXME : I will FOCUS!! to URL path in browser

TAGS : Render HTML
    DONE : Import a path Module
    DONE : Call a 'express.Router()' function
    DONE : Middleware 
    # SYNTAX - app.use([path,] callback[, callback...])
        [x] - Use a 'app.use()' method 
        [x] - Create a views folder (html files)
    # SYNTAX - express.static(root, [option]) 
        [x] - Use a 'express.static()', it for middleware function to serve static asset (css, js, images) 
        [x] - For option, put 'views' folder (html, js, css)
    done : In Views folder
        [x] - Create a files.
        [x] - Then file called index.html
    DONE : Router 
    # SYNTAX - router.METHOD(path, [callback, ...]callback)
        [x] - Use a 'router.get()' function
        [x] - For path, '/'.
        [x] - For parameter, (request, respond).
    # SYNTAX - res.render(view[, locals][, callback])
        [x] - For render html files, 'res.render'
        [x] - For view, name files .html
    DONE : Run the Program
        [x] - Open in browser, localhost:8080

Done !

TAGS : Design Content in html.
    TODO : Create content and two a tags 

FIXME : You guys create whatever you guys want
IMPORTANT : Must Have two input or button!

FOCUS : FREE button
TAGS : Page Count with ExpressJS / Node
    DONE : Install node-persist Module
        - npm install node-persist
        [x] - Load a node-persist Module
    DONE : Declare the count.                 
    DONE : First call storage.init (use 'Promise Method')
        [x] - Put init()
    # SYNTAX : storage.getItem('name') 
        [x] - Get the item, use promise method
    DONE : Set the item in routes
        [x] - Use 'app.get' method, and put the path '/count'.
        [x] - Put increment "count++"
        # SYNTAX : storage.setItem('name', 'yourName') 
        [x] - Put storage.setItem function
        [x] - Inside function, 'res.json(count)'
    DONE : Location to the html file
        [x] - Create a file inside views folder.
        [x] - New file called pageCount.html
        [x] - Use 'app.get' method, in path put '/pageCount'
        [x] - To specify url path, use res.sendFile 
        [x] - In pageCount.html file, put p tag and set id to 'pageCount'
        [x] - To connect with count function, Use 'fetch' function.
        [x] - In path, put same with setItem '/count'.

FOCUS : I don't Know Button
TAGS : Timer using JS (Focus to URL Path)
    DONE : Under routes, add use 'app.get'.
        [x] - Path, '/pageTimer' .
        [x] - Let creates a new file under views folder
        [x] - Put name, 'pageTimer.html'.
        [x] - In function, add 'res.sendFile'
        [x] - Go to index, under a tag in href, put path same with app.get method path

IMPORTANT : This page I do count down you guys can copy code in w3school code.

Finally the Result 

FIXME : It missing something , I want add button "Back" in pageCount and pageTimer

TAGS : FINALLY!!! Let Design put css 
    DONE : Design website.

TAGS : Git 
    TODO : git init
    TODO : git status
    TODO : git commit -m "Initial Message"
    TODO : git status 
    TODO : git add .
    TODO : git remote add origin <>
    TODO : git push origin main
