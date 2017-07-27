# Displaying a List of Items, but Smart

Displaying a list of items is mandatory in most web applications. When using a view layer library such as React, you would only have to iterate over the list of items and return valid JSX. However, often these displayed items need a couple of features such as filtering, sorting or pagination. Not every list component needs it though, but it would be great to have these functioanlities as opt-in features whenever displaying a list of items.

We are excited to open source our in-house solution at Small Improvements that handled the previous use case for us: [react-redux-composable-list](https://github.com/SmallImprovements/react-redux-composable-list). In our web application, it often happens that we have to display tables of data for our customers to manage their feedback or objectives in the company. Our customers at Small Improvements range from a active user count from 20 to 2000 users. Thus it can happen that we need to display a lot of data but keeping it accessible for people managing it.

The requirements of each data table are different. One table is just fine with a filter functionality. Yet another data table would add selectable rows to the filterable table. Each data table has different requirements. The library that we are open sourcing today comes with all the requirements we had in-house at Small Improvements. However, since the library is highly extendable and builds up on composition, you can come up with your own opt-in features.

## Demo and Features

Basically the react-redux-composable-list comes with the following main features:

* Filtering (AND filter, OR filter, multiple filters)
* Selecting
* Sorting
* Magic Column (collapsing multiple columns in one column)
* Pagination

There are two demo applications up and running to show the feature set of react-redux-composable-list.

* [Real World](https://react-redux-composable-list-realworld.wieruch.com/)
* [Showcases](https://react-redux-composable-list-showcases.wieruch.com/)

While the former one demonstrates all features in one real world example, the latter one separetes the examples by feature. The Real World example shows that all features can be used altogether by composing them.

You can find the implementations of both demo applications in the official [GitHub repository](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/examples). In addition, the documentation about the specific features can be found in the [official docs](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/features).

## Getting Started

If you want to jump right away into using the library, you should checkout the [Getting Started](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/GettingStarted.md) section in the official documentation.

If you want to dive deeper into the library, you can checkout the whole [documentation](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs) to get to know what the library is about and how to use it.

## Extend it & Contribute

You can write your own enhancements and enhancers, because you have access to the library API. To be more specific, the library API is nothing but action creators and selectors for the Redux store. All the state that is managed for the tables is organized in a Redux store. You will find everything you need to know about the API in each [documented feature](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs/features). In general, the documentation is a good place to get started and to read up all the features.

We would love, if you would give it a show and give us feedback about it. In addition, [we welcome you to make contributions for the library](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/Contribute.md).

## Resources

* [GitHub Repository](https://github.com/SmallImprovements/react-redux-composable-list)
* Demo Applications: [Real World](https://react-redux-composable-list-realworld.wieruch.com/) ([Source Code](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/examples/RealWorld)), [Showcases](https://react-redux-composable-list-showcases.wieruch.com/) ([Source Code](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/examples/Showcases))
* [Official Documentation](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/docs)
* [Getting Started](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/GettingStarted.md)