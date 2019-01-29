always use sttyled components in babel before next config
/\_
"babel": {
"env": {
"development": {
"pulgins": [

"styled-components",

{

"ssr": true,

"displayName": true,

"preprocess": false

}

],
"presets": [

"next/babel"

]
},
"production": {
"pulgins": [

"styled-components",

{

"ssr": true,

"displayName": true,

"preprocess": false

}

],
"presets": [

"next/babel"

]
},
"plugins": [

"styled-components",

{

"ssr": true,

"displayName": true,

"preprocess": false

}

]
}
}\_/

---

next official docs:
That's exactly what we do with . Instead of PHP, we build the app with JavaScript and React. Here are some other cool features Next.js brings to the table:

Server-rendered by default
Automatic code splitting for faster page loads
Simple client-side routing (page based)
Webpack-based dev environment which supports (HMR)
Able to implement with Express or any other Node.js HTTP server
Customizable with your own Babel and Webpack configurations

---

#how to manage state in Next.js

- we need a heirarchy parent component
- next provides App component by default that stands on top of every component
- we can override this App component by creating pages/\_app.js
- Then we have to provide state and default components on everypage in it.
- but instead we can make a seprate wrapper component outside of pages directory.
- that sperate wrapper component will hold state and default components
- we have to pass every component dynamically in it
- so we will pass {this.props.children} inside wrapper
- then we can import that wrapper in pages/\_app.js and use as a wrapper
- we will wrap destructed Component from props inside Page component.
- and thats it for passing state in different components in nextjs.

---

#what we have to do to pass state

- put the state in \_app.js
- pass the state inside <page/> and <component/> component
- from there pass it inside navbar
