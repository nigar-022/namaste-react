import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * 
 * Nested child
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1</h1>
 *          <h2>I am h2</h2>
 *      </div>
 * </div>
 * 
 */

// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React");
// console.log(heading)   // JS Object
// // {
// //     "id": "heading",
// //     "children": "Hello World From React"
// // }
// const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(root)

// root.render(heading)   


// const heading2 = React.createElement("div", {id: "parent"}, 
// [React.createElement("div", {id: "child"}, 
// [React.createElement("h1", {}, "I am h1"),React.createElement("h2", {}, "I am h2")]

// ), React.createElement("div", {id: "child2"}, 
// [React.createElement("h1", {}, "I am h1"),React.createElement("h2", {}, "I am h2")]

// ),]
// )


//JSX is react element => Babel transcompile it to React.CreateElement. React create element is JS object => object is converted into html tag when we render it using root.render()

const jsxHeading = <h1>Namaste React from JSX</h1>
console.log(jsxHeading)

// React functional component

const Title = () => {
    return <h2>Here I am title</h2>
}

//const Title2= () =>  <h2>Here I am title</h2>


const HeadingComponent = () => {
    return (

    <>
    <Title />
    <h1>Namaste React from React Functional Component</h1>
    </>
    )
    
}


const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)

root.render(<HeadingComponent />)






