# Jumpserve

A teeny weeny node server for building static HTML sites and sandboxes. Clone it and have a simple HTML/JS project up and running in 60 seconds.

## Get the server up and running

You'll need **node** and **npm**, which you can install on OS X using Homebrew or any other way you want. Once you have them, getting the server running is:

```
$ cd {project dir}
$ npm install
$ node bin/server.js {port, default 8000}
```

Load up <http://localhost:8000> and you'll see your server running.

## Building new sections and files

Create a root home page at public/index.html and any other folders and pages you want inside public, accessing them like "public/your/path/index.html" -> <http://localhost:8000/your/path>


