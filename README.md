**react-hooks-demo**

This application demonstrates the usage of React 16.8 Hooks along with comments about its various use cases. 

#### Context 

>Hooks are functions that let you “hook into” React state and lifecycle features from function components. – React docs

Hook is a fairly new concept to React and it was introduced with the React 16.8 release.  With the help of Hooks, React applications can now be constructed with functional components alone. That means it is now possible to bring in features of class components that we all adore to functional components. Essentially, with the help of Hooks, we can

1. Hold local state in functional components
2. Perform side effects and clean up without lifecycle methods
3. Write custom hooks to reuse stateful logic

>Note: Hooks do not replace class components(or at least not in the near future) but it merely serves as an alternative to class components. So it is advised not to rewrite your existing class components with hooks but rather gain understanding about hooks in the long run and possibly write your future components with hooks. Read more about why Hooks was introduced in the first place here.
You can find the application logic written in 
both using classes and hooks so it can help you to compare and relate them. 

#### References:

1. Custom Hooks Vs. HOC: Reusing Component Logic: https://ahamedblogs.wordpress.com/2020/08/02/custom-hooks-vs-hoc-reusing-component-logic/
2. Hooks React Docs: https://reactjs.org/docs/hooks-reference.html