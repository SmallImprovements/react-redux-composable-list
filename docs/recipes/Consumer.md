# Consumer

The library already brings implicit API consumer in terms of [Enhancer Components](/docs/Concepts.md). They already use the library API to alter enhancements. You can have a look into the [Enhancements](/docs/features/README.md) section to find them depending on the enhancement. For instance, the `Sort` component is such an enhancer component that comes with the library.

In addition, you can manually consume the library API. Each enhancement offers an API to alter it in the Redux store. To get to know all of these APIs, you can check again the [Enhancements](/docs/features/README.md) section. Each enhancement has its own action and selector API to the Redux store.

After all, you can extend the library with your own Enhancements and Enhancer Components. You only need to use the library API to access and update enhancements in the Redux store. You can find one of these custom Enhancer Components in the [Filter Enhancement](/docs/features/Filter.md).
