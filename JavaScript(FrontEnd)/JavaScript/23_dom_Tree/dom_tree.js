 // #####################################################################################################################################################################################################
 //                                                                                 DOM TREE
 // #####################################################################################################################################################################################################

 /*
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
 
 
 */




 /*                                   
                                                                                  [Document] (Root Node) --> Javascript Object                
                                                                                      |
                                                                                      |
                                                                                      V
                                                                                    [HTML]   (Root Element)--> Child Node of document.
                                                                                      |
                                                                                     V
                       -----------------------------------------------------------------------------------------
                       |                                                              |                         |
                       |                                                              |                         |
                       V                                                              v                         |
(child Node of HTML) [ Head ]                                                     [/n] (text Node)           [body]
                       |                                                          // newline space              |
                       |                                                                                         |
                       |                                                                                        |
    ------------------------------------------------------------------------                                    |
    |                  |                 |                   |            |                                     |
    |                  |                 |                   |            |                                     |
   [/n] (text Node)   [title]            [/n] (text Node)   [script]     [/n] (text Node)                       |
  // newline space     |               // newline space                   // newline space                      |
                       |                                                                    ------------------------------------------------
                       V                                                                    |                   |                          |
                 (DOM Traversing)                                                  [/n] (text Node)             |                      [/n] (text Node)  
                 // text inside                                                    // newline space             |                      // newline space  
                                                                                                                |
                                                                                                              [div]
                                                                                                                |
                                                                                                                |
                                                                                            --------------------------------------------------------------------------
                                                                                            |                   |                |              |                    |
                                                                                            |                   |                |              |                    |
                                                                                          [/n] (text Node)     [h1]    [/n] (text Node)        [p]               [/n] (text Node) 
                                                                                          // newline space      |      // newline space         |               // newline space
                                                                                                                |                               |
                                                                                                                |                               |
                                                                                                            (My heading)                    (some Information)
                                                                                                            // text Inside                     // text Inside



 */

                                                                                                            