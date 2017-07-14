# Concepts

It makes sense to know the concepts behind the library in order to use it. First, the general terms and the three ingredients Enhancements, Enhanced Component and Enhancer Components will be explained. Second, you will get to know the flow, the connection in context, between all ingredients.

## Terms

* **basic component:**
  * a plain functional stateless or ES6 class component in React
* **enhancement:**
  * a higher order order component that takes a basic component (or already enhanced component) as input and returns an enhanced component
* **enhanced component:**
  * a component that is the output of one enhancement or multiple enhancements
* **enhancer component:**
  * a component that alters an enhancement that can be anywhere in the application yet it can be in an enhanced component itself
* **state key:**
  * an [identifier](https://www.robinwieruch.de/redux-state-keys/) for the enhanced component to track all its enhancements

### Enhancements

The library comes with higher order components described as **enhancements**. These enhancements get applied on a **basic component** that becomes an **enhanced component**. Multiple enhancements can be used to create an enhanced component. Already enhanced components can get further enhancements too.

The enhancements either **manipulate** your list of items, add **conditional rendering** or **extend** the component that gets enhanced. In the following the 3 kinds of enhancements will be explained.

A **manipulation** could be sorting or filtering. Your enhanced component wouldn't get the plain list of items anymore, but an altered version of it. The list would be sorted and filtered before it reaches your enhanced component. The enhanced component would have the manipulated list of data at its disposal.

A **conditional rendering** could be to show a placeholder when the list is empty or the list is not empty but the filter enhancement returns an filtered list that is empty. Giving the user feedback about why no data shows up would improve the user experience.

An **extension** of the basic component could be pagination. Whenever you see a paginated list of data, you get controls to navigate through the pages. It can be useful for huge lists of data. The extension would wrap around the basic component to give you these controls.

Composability makes it possible to enhance a component. You can use the third-party library [recompose](https://github.com/acdlite/recompose) to compose multiple enhancements into an enhanced component.

### Enhanced Component

Your enhanced component can show the list of data in any way. After all, it only gets a (manipulated) list of data. However, a list of items is shown most of the time in a kind of table component. That's why the library comes with useful components to compose a table of data. A mandatory wrapper component, the Enhanced Component, is used to identify the applied enhancements with a state key. In addition, the library provides you with Row, Cell and HeaderCell components to layout your enhanced component. But as mentioned, you don't need to use them apart from the Enhanced Component.

### Enhancer Components

In addition, there are enhancer components. They can be used inside or outside of your enhanced component. In fact, they can be used anywhere in your application. They will be responsible to alter enhancements. These enhancements will be stored and flow back to the enhanced component via its composed enhancements.

There are several active enhancer that already come with the library. However, since the library builds up on extendability, you can use your own enhancer components too. There is a library API to manipulate the enhancements in the Redux store by using Redux actions. So you can write your own enhancer components that lead to changes in (built-in) enhancements.

## The Flow

After all, how is the general integration across enhancements, enhanced component and enhancer components? You can create an enhanced component by using enhancements. Multiple enhancements can be composed into each other to create a more powerful enhanced component. The enhanced component decides how to show the data. It can use components from the library yet you can decide on your own how to show it. To close the loop, enhancer components can be used inside or outside of the enhanced component to manipulate the enhancements. All enhancements will apply the manipulations to the enhanced component. The manipulated data flows through all enhancements to the enhanced component. In the end, the enhanced component shows the (manipulated) list of data again.
