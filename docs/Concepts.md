# Concepts

It makes sense to know the concepts behind the library in order to use it. First, the general terms and the three ingredients Enhancements, Enhanced Component and Enhancer Components will be explained. Second, you will get to know the flow in context with all ingredients.

## Terms

* **basic component:** a plain functional stateless or ES6 class component in React

* **enhancement:** a higher order order component that takes a basic component as input and returns an enhanced component

* **enhanced component:** the output of an enhancement that takes a basic or already enhanced component

* **enhancer component:** a component that alters an implicit enhancement

* **state key:** an identifier for the enhanced component to track all its enhancements

### Enhancements

The library comes with higher order components as **enhancements**. These enhancesments get applied on a **basic component** that becomes an **enhanced component**. In addition, these enhancements either **manipulate** your list of items, add **conditional rendering** or **extend** the component that gets enhanced. In the following the 3 kinds of enhancements will be explained.

A manipulation could be sorting or filtering. Your enhanced component wouldn't get the plain list of items, but an altered version of it. The list would be sorted and filtered before it reaches your enahnced component that would show it.

A conditional rendering could be to show a placeholder when the list is empty or the list is not empty but the filter enhancement returns an filtered list that is empty. Giving the user feedback about why no data shows up would support the user experience.

A extensions of the basic component could be pagination. Whenever you see a paginated list of data, you get controls to navigate through the pages. It can be useful for huge lists of data. The extension would wrap around the basic component to give you these controls.

Composeability makes it possible to enhance a component. You can use the third-party library [recompose](https://github.com/acdlite/recompose) to compose multiple enhancements on your component.

### Enhanced Component

Your enhanced component can show the list of data in any way. However, a list of items is shown most of the time in a table. That's why the library comes with useful components to compose a table of data. The natural Enhanced wrapper should always be used to identify the component. It can be used to opt-in more functionalities. Afterwards the library provides you with Row, Cell and Header components.

### Enhancer Components

In addition, there are enhancer components. They can be used inside or outside of your enhanced component. In fact, they can be used anywhere in your application. They will be responsible to trigger enhancements implicitly. These enhancements will be stored and flow back to the enhanced component via its defined enhancements.

There are several active enhancer that come in-house with the library. However, since the library builds up on composeability, you can use your own enhancer components too. There is an API to manipulate the enhancements in the store.

## The Flow

After all, how is the general integration across enhancements, enhanced component and enhancer components? You can create an enhanced component by using enhancements. Multiple enhancements can be composed into each other to create a more powerful enhanced component. The enhanced component decides how to show the data. To close the loop, enhancer components can be used inside or outside of the enhanced component to manipulate the enhancements. The manipulated list of data flows through all enhancements and shows up again in the enhanced component.
