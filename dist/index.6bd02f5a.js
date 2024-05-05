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
 */ const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World From React");
console.log(heading) // JS Object
;
// {
//     "id": "heading",
//     "children": "Hello World From React"
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
const heading2 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1"),
        React.createElement("h2", {}, "I am h2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1"),
        React.createElement("h2", {}, "I am h2")
    ])
]);
root.render(heading2);

//# sourceMappingURL=index.6bd02f5a.js.map
