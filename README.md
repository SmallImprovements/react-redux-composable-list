# react-redux-composable-list

The react-redux-composable-list offers you a solution to display a list of complex items. That sounds simple. Why would you need a library to deal with it?

The library comes with various opt-in features to manipulate the list of items or to change the representation of the list. These opt-in features are called **enhancements** or to stay in the React world: higher order components. Multiple enhancements can be composed to opt-in multiple features like **sorting, filtering or pagination**. After all, it gives you only an entry point to these enhancements. You can come up with enhancements on your own and just compose them into the set of enhancements that come with the library.

In addition, in order to manipulate the state of those enhancements, you can use (built-in) **enhancer** components. They can be used everywhere in your application and allow you to manipulate the sorting, filtering etc. state. There again the library stays extendable. You can write your own enhancer components.

![Demo](https://media.giphy.com/media/xUOrvUtfjt2EhMUjvi/giphy.gif)

With the mental model behind this [idea](/docs/Idea.html) and [concepts](/docs/Concepts.html), you can come up with great opt-in features on your own. All features, coming from the library or from yourself, can be used to be composed into each other. The library comes with several features that you can already use, but it is not bound to a rigid endgame solution.

## Demo

You can checkout the live demonstrations ([Showcases](https://react-redux-composable-list-showcases.wieruch.com/), [Real World](https://react-redux-composable-list-realworld.wieruch.com/)) that show several features of the library.

In addition, you can checkout the [examples/](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/examples) folder in the GitHub repository. In each sub folder you will find instructions to set up the demonstrated project.

## Why should you use it?

The react-redux-composable-list solved a real problem for us at [Small Improvements](https://www.small-improvements.com/). By using this approach, we were able to display lists of items in a powerful yet flexible way. It always depends on your use case if you want to add a powerful set of features to your displayed list (pagination, filter, sorting) or if you want to keep it simple by only adding the selection feature.

In the end, we thought we are not the only ones who need this common set of features in such a composable and extendable way.

### Composable

The library builds up on the React concept of composability. You can weave multiple higher order components into each other to manipulate your list, for instance with sorting, or to alter the final representation of the list, for instance with pagination.

### Extendable

Since the library API, that is basically an API for your Redux store, is well documented, you can come up with your own enhancements and enhancer components. Only a few enhancements and enhancers come with the library. Yet, with the mental model behind it, you can extend the feature set of the library on your own.

### Built-in Features

The library comes already with several features like sorting, filtering, pagination, extendable columns and selecting of items. These are common features when displaying a list of items. But you can come up with your own opt-in features as well.

## Getting Started

If you want to jump right away into using the library, you should checkout the [Getting Started](/docs/GettingStarted.md) section in the documentation.

If you want to dive deeper into the library, you can checkout the whole [documentation](/docs/) to get to know what the library is about and how to use it.

## Contribute

Please let us know if you have any feedback. The repository is open for contribution, please read the [contribution guidelines](/docs/Contribute.md).
