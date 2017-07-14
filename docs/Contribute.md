# Contribute

Please let us know if you have any feedback. You can create Issues to provide feedback, to point out bugs or to provide information about improvements that you want to contribute.

## Primary Goals:

Basically it would be great to improve the core of the library to make it more robust.

* exceptional test coverage for the core functionalities
* functionality to use custom styles (e.g. row selected style, general row style, pagination style)
* performance (e.g. usage of shouldComponentUpdate), because there were no performance optimizations made yet
* introduce own sort by functionality and get rid of lodash.sortby
* introduce a default filter for the filter enhancements that can be passed in as configuration (similar to the sort enhancement that is already having this functionality)

For now, we don't want to encourage you to add new functionalities. The library comes with a fixed set of enhancements (filter, sort, ...) that you can use to enhance your composable list. However, since you can opt-in every time an own enhancement, because the library is extendable, we are curious about the enhancements you come up with. Perhaps they can be added in the future to this library.

## Installation

* `git clone git@github.com:SmallImprovements/react-redux-composable-list.git`
* `cd react-redux-composable-list`
* `npm install`
* `npm run test`
* `npm start`
* visit `http://localhost:8080/`
