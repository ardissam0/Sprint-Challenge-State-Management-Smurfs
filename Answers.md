1. What problem does the context API help solve?
- Context API helps solve Prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- actions are information payloads that send data from the app to the store. 
- reducers are used to determine changes to the app state, it uses actions to change it.
- the store holds the state in app and it is known as the single source of truth because the state of the app is stored within the single store, nowhere else.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state refers to the entrire app (global state)
- component state refers to one component (local state)
- You should use application state for large apps and component state for smaller apps
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- redux-thunk is a middleware that allows us to have multiple types of actions and allows redux to be asynchronous 
1. What is your favorite state management system you've learned and this sprint? Please explain why!
- I would have to say context API, since it is very simple and easy to use
