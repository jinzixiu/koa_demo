# stream-view

This is a "Hello World" application, using a view that inherits from a Readable stream.

To invoke, the following command begins listening on localhost:3000.

    node app.js

To see results:

    http://localhost:3000

## Interesting points

1. The main function of app.js instantiates a "View" from the view.js file.
主函数从app.js实例化了 View 类 从 view.js

2. The View overrides the Readable's _read() function with an empty function.
View 类 复写了 Readable 的 _read() 函数 用一个空函数

3. The View also overrides the Readable's render() function to do the following:
View也复写了  Readable 的 render() 函数 去做接下来的工作

4. Immediately push out the text for the \<head> of the page
5. Yield to a function that will ultimately (in the next tick) return the "Hello World" text. The render() function pauses at that point.
6. When that function returns, render() resumes, and assigns the return value to the `body` variable
7. Push out the returned text wrapped in \<body> tags
8. Push out the closing \</html> tag and
9. Close the connection with push(null)