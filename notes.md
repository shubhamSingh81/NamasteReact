# useState - > use state is a hook which react gives you to create a local state variable in a Functional component. so never used useState in functional component.

# /*
<!--  npx parcel index.html -> for running and building our project 
// npm i -D parcel ->for installing  Dev dependencies
// How can we install react -> npm i react;
// Script type in script tag ? 

HMR -< hot module Replacement
Dist folder -> create a dev build and hot it on server .
dist basically specialise entry point of your app.
Parcel is a buindler 
parcel did  bundling
parcel did minify
parcel is cleaning our code.
parcel manages dev and prod build
parcel is super fast build algorithm.
parcel does caching for you
parcle does image optimization
parcel caching while development
parcel do compression
parcle compatable with older version of browser
Parcel enabled HTTPS on dev
parcel manages port number 
// we should put parcel-cache in git ignore.

Parcel uses Consistent Hashing Algorithm
Parcel is a zero config bundler

Parcel does Tree Shaking -> Removing unwanted code



// Transative Dependencies



*/

/**
          Header
             - Logo
             - List item
         Body 
             - Search Bar
             - RestaurentList
             - Restaurent Card (many card)
                 - Image
                 - Name 
                 - Rating
                 - Cusines
         Footer
                - Links
                - CopyRight
          */

// React.createElement gives us Object => HTML(DOM)
//JSX example
//JSX -> jsx is having one parent tag

// component -> Functional Component
// Name of the component should be in the capital letter
-->
# install formik library for createing form -> 
# install React Router for createing routes
# there are Two type of Routing Exist -> client side and server side
# All the children will go into outLet according to the routes.
# Children are always render inside the outlet

// class based Component


// Cs Things : 
-> Normal Native Css
-> SCSS
-> inlise css
-> component Libraries : Materail Ui , Base Ui, Ant , Chakra UI -> these all are nothing but its a packages.
-> styled Component

// Going to learn Tailwind CSS Frameworks
 - Css on the go(in the same file)
 - reusability
 - less bundle size
 - flexible ui (customization)
 - 

 pros of tailwind -> easy to debug
                   - code is less 
                   - faster development time
                   - it's giving a lot more control

cons of tailwind -> so much classname
                   - there is a high learning curve
                   - 


state and props : 
            state is a local variabel
            props is a value passed b/w one component two another.

// how can we pass data from child to parent
Ans : - one way is we can build our custom hooks
      - 
//useContext is a way we can pass data from anywhere.
// why do we use useContext -> for aviod prod drilling.

 // reducer is modified slice of store.
 // selector : selctor is a hooks(useSelector);

 How to write inside redux store => // +(if you click on plus button we ) dispatches(action) -> which call the reducer function which updates the slices of redux store.

 +(button) => dispatch action =>recucer function => update the redux store

 // useSelctor is known as subscribing our store.

 /*
Create Store -:
           - configureStore() - RTK(Redux tool kit)
           - Provide my store to app
                   - <Provider store = {store}> - import from react-redux
           - slice  
                   -RTK - createSlice({
                    name:"",
                    initialState:
                    reducers:{
                        addItem:(state,action) => {
                            state =     action.payload
                        }
                    }
                   })
            export const {addItem,removeItem} = cartSlice.actions
            export default cartSlice.reducer;

    put the slice in to store.
    - {
        reducer : {store}
    }
 */

// What is useSelector is used for -> its used for too subscribed the store.