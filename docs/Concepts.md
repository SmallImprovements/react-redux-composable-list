# Concepts

It makes sense to know the concepts behind the library in order to use it. First the three ingredients blocks Enhancements, Enhanced Component and ENhancer Components are explained. Second the flow with all ingredients will get explained.

## Enhancements

The library comes with higher order components as **enhancements**.  These enhancesments get applied on a component that becomes an **enhanced component**. In addition, these enhancements can either **manipulate** your list of items, add **conditional rendering** or **extend** the component that gets enhanced.

A manipulation could be sorting or filtering. Your enhanced component wouldn't get the plain list of items, but an altered version of it. The list would be sorted and filtered before it reaches your enahnced component that would show it.

A conditional rendering could be to show a placeholder when the list is empty or the list is not empty but the filter enhancement returns an empty filtered list. Giving the user feedback about why no data shows up would support the user experience.

A extensions could be pagination. Whenever you see a paginated list of data, you get controls to navigate through the pages. It can be useful for huge lists of data.

Composeability makes it possible to enhance a component. You can use the third-party library [recompose](TODO LINK) to compose multiple enhancements on your component.

## Enhanced Component

Your enhanced component can show the list of data in any way. However, a list of items is shown most of the time in a table. That's why the library comes with useful components to compose a table of data. You can use rows and cells.

## Enhancer Components

In addition, there are enhancer components. They can be used in your enhanced component or outside of it. In fact, they can be used anywhere in your application.


There are several active enhancer that come in-house with the library. Since the library builds up on composeability, you can use your own enhancer components that speak with the library API to manipulate the data.

## The Flow

- enhancements can upgrade a component that shows a list of data to an enhanced component
- the enhanced component shows the (manipulated) list of data
- there are enhancer components outside or inside of the enhanced component that manipulate the list of data
- the manipulated list of data flows through all enhancements and shows up again
