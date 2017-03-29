# Idea

React has several great concepts and patterns that can be used to achieve a flexible yet sophisticated approach to show and manipulate data. The main idea behind the library is composeability.

On the one hand higher order components (HOCs) can be used and re-used to **opt-in various enhancements**. A basic component, that simply shows a list of items, can become an enhanced version of the component. The enhancement could be to make the list filterable or sortable. Or it could be to add the ability to select items from the list. These opt-in enhancements can get stacked by using composition. Multiple enhancements have a compound effect of features on your basic component. With composition the library enables you to sort, filter and paginate your list.
The library comes with various in-house enhancements, but you can **opt-in your own higher order components**.

On the other hand, the children property keeps the components that show the data composeable, reusable and extendable. It's not one component that takes a big configuration object. You can **decide on your own what you want to do with the data** that comes from all your opt-in enhancements. You can show it in a table layout, but you are not forced to. Yet it is a common way to show a lot of data in a table to keep it accessible. That's why the library comes with a bunch of in-house components to layout a table. These components are used to show the data. But you can of course **use your own components too**.
