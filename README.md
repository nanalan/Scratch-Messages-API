# What's this?  

*Scratch Messages API* is an API to retrieve info about the logged-in user's messages or inbox on the website [Scratch](https://scratch.mit.edu) by MIT Lifelong Kindergarten Group.  
It does this through JavaScript, with a simple function that takes an options object and a callback function, with an API similar to the one used in Scratch's own website API (see [LLK/scratch-rest-api](https://github.com/LLK/scratch-rest-api))
Seems interesting? Check out the wiki for full documentation!

## ... and what are all these files!?
`main.js` and `main.min.js` are the only ones you'll really need to worry about; `gulpfile.js`, `package.json` and `.gitignore` is just for building for developers, `LICENSE` is icky legal stuff and `README.md` is what you're reading right now.  
Usually, in production, you'll want to use the minified file, `main.min.js`. Just copy and paste it's contents, include it in a script tag or require it in your userscripts.  
If you just want to read the code, however, do check out `main.js`.
