 

 // Root Node --> with help of getRootNode method
// const rootNode = document.getRootNode();
// console.log(rootNode); // document object
// So, Root Node --> document Object 


// Child Node of Root Node ---> with help of childNodes
// const childOfRootNode = rootNode.childNodes;
// console.log(childOfRootNode);  // NodeList [html]
// So, child of Root Node --> gave Nodelist --> all child Nodes will be in it.
// 0 : html --> child of Root Node.
// fetching it
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);

// Now HtmlElementNode --> Root Element 
// const htmlchildNodes = htmlElementNode.childNodes;
// console.log(htmlchildNodes); // NodeList(3) [head, text, body]

// Child Nodes of HTML fetching them :

// const headElementNode = htmlchildNodes[0];
// const textElementNode = htmlchildNodes[1];
// const bodyElementNode = htmlchildNodes[2];
// console.log(headElementNode);
// console.log(textElementNode);
// console.log(bodyElementNode);


// To check Parent Node with parentNode
// console.log(headElementNode.parentNode);

/*
   
 # 1 How do I get the root node in html?
-    getRootNode() method. The getRootNode() method returns the node object's root node, 
it optionally also includes the shadow root if it is available. Composed: A Boolean 
that indicates if the shadow root should be returned (false), or a root node beyond shadow
 root (true).

# 2 What is childNodes?
Description. The childNodes property returns a collection (list) of an elements's child 
nodes. The childNodes property returns a NodeList object. The childNodes property is 
read-only. childNodes[0] is the same as firstChild 

# 3  What is a parentNode in JavaScript?
The read-only parentNode property of the Node interface returns the parent of the 
specified node in the DOM tree. Document and DocumentFragment nodes can never have
 a parent, so parentNode will always return null . It also returns null if the node
  has just been created and is not yet attached to the tree

*/

/*
   # 4 .  What does nextSibling do in JavaScript?
   Description. The nextSibling property returns the next node on the same tree level. 
   The nextSibling returnes a node object. The nextSibling property is read-only.


*/
// Sibling Relation

// console.log(headElementNode.nextSibling);
// console.log(textElementNode.nextSibling);
// console.log(bodyElementNode.nextSibling);

/*

// # 5 . What is inside text Node??

console.log(textElementNode);
// nodeValue : "\n    "
*/
// property to skip text  node and get directly nextelementsibling .
// console.log(headElementNode.nextElementSibling);

/*

# 6. What is nextElementSibling in JavaScript?

- The nextElementSibling property returns the next element in the same tree level. 
nextElementSibling property is read-only.

*/


/* Lets See HTML Child Nodes  */
// console.log(headElementNode.childNodes);


/* 
  task :
   <html>
    <head>
        <title> DOM Traversing</title>
        <script src="dom_tree.js" defer></script>
    </head>
    <body>
        <div class="container">
            <h1>My Heading</h1>
            <p>Some Useful Information .</p>
        </div>
    </body>
    </html>

    here: select h1 tag and traverse dom to its parent
    and change background color .
*/


/*

// solution :

const h1 = document.querySelector("h1");
const parentdivofh1 = h1.parentNode;
const body = h1.parentNode.parentNode;
parentdivofh1.style.color = "#efefef";
parentdivofh1.style.backgroundColor = "#333";
body.style.backgroundColor = "purple";

*/

/*
 //  We can select body directly this way.

const body =  document.body;
body.style.backgroundColor = "red";
*/
// -----------------------------------------------------------------
// Use
// We got head Element:
const head = document.querySelector("head");
console.log(head);

//Then we can traverse all the child nodes and make changes:
// In this Way :
const headtitle = head.querySelector("title");
console.log(headtitle);
console.log(headtitle.childNodes);
console.log(headtitle.nextElementSibling);


// When we Traverse through DOm we dont want text
//  or Newline Space in it and directly get next Elements
// So this is the way:

const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children); // This is Way
