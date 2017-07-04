# react-redux-composable-list

The react-redux-composable-list offers you a solution to show a list of items. That sounds simple. Why would you need a library to deal with it?

The library comes with various opt-in features to manipulate the list of items or to change the representation of the list. These opt-in features are called enhancements or to stay in the React world: higher order components. Multiple enhancements can be composed to opt-in multiple features like sorting, filtering or pagination. After all, it gives you only an entry point to these enhancements. You can come up with enhancements on your own, since these enhancements are reusable and composable and the library API is well documented.

In addition, in order to manipulate the state of those enhancements, you can use built-in enhancer components. They can be used everywhere in your application and allow you to manipulate sorting, filtering etc. There again the library stays extendable. You can write your own enhancer components.

[TODO GIF]

With the mental model behind this [idea](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/Idea.md) and [concepts](https://github.com/SmallImprovements/react-redux-composable-list/blob/master/docs/Concepts.md), you can come up with great features on your own. All features can be used to be composed into each other. The library comes with several features that you can already use, but it is not bound to a rigid endgame solution.

## Demo

You can checkout the live [demo](TODO link) that demonstrates several features of the library.

In addition, you can checkout the [examples/](https://github.com/SmallImprovements/react-redux-composable-list/tree/master/examples) folder in the GitHub repository. In each of them you will find instructions to set up the each project. You can try them by cloning the whole library repository

## Why should you use it?

The react-redux-composable-list solved a real problem for us at Small Improvements. After the implementation, we were able to show lists of items in tables and to opt-in multiple features. In the end, we think we are not the only ones who need this common set of features in such a composable and extendable way.

### Composeable

The library builds up on the React concept of composeability. You can weave multiple higher order components into each other to manipulate your list, for instance with sorting, or to alter the final representation of the list, for instance with pagination.

### Extendable

Since the library API to the Redux store is documented, you can come up with your own enhancements and enhancer (higher order) components. Only a few enhancements and enhancers come with the library. Yet, with the mental model behind it, you can extend the feature set of the library.

### Built-in Features

The library comes already with several features like sorting, filtering, pagination, extendable columns and selecting of items. These are common features in a list of items. But you can come up with your own opt-in features.

## Getting Started

If you want to jump right away into using the library, you should checkout the [Getting Started](https://rwieruch.gitbooks.io/react-redux-composable-list/docs/GettingStarted.html) section in the documentation.

Apart from that you should checkout the whole [documentation](https://rwieruch.gitbooks.io/react-redux-composable-list) to get to know what is the library about and how to use it.

## Contribute

Please let us know if you have any feedback. You can create Issues to give feedback or to contribute improvements. Read the [contribution guidelines](/docs/Contribute.md).
