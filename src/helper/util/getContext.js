import React from 'react'

const createEagerElementUtil = (
  hasKey,
  isReferentiallyTransparent,
  type,
  props,
  children
) => {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type({ ...props, children })
    }
    return type(props)
  }

  const Component = type

  if (children) {
    return <Component {...props}>{children}</Component>
  }

  return <Component {...props} />
}

const isClassComponent = Component => Boolean(
  Component &&
  Component.prototype &&
  typeof Component.prototype.isReactComponent === 'object'
)

const isReferentiallyTransparentFunctionComponent = Component => Boolean(
  typeof Component === 'function' &&
  !isClassComponent(Component) &&
  !Component.defaultProps &&
  !Component.contextTypes &&
  (process.env.NODE_ENV === 'production' || !Component.propTypes)
)

const createEagerFactory = type => {
  const isReferentiallyTransparent =
    isReferentiallyTransparentFunctionComponent(type)
  return (p, c) =>
    createEagerElementUtil(false, isReferentiallyTransparent, type, p, c)
}

const getDisplayName = Component => {
  if (typeof Component === 'string') {
    return Component
  }

  if (!Component) {
    return undefined
  }

  return Component.displayName || Component.name || 'Component'
}

const wrapDisplayName = (BaseComponent, hocName) =>
  `${hocName}(${getDisplayName(BaseComponent)})`

const createHelper = (
  func,
  helperName,
  setDisplayName = true,
  noArgs = false
) => {
  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    if (noArgs) {
      return BaseComponent => {
        const Component = func(BaseComponent)
        Component.displayName = wrapDisplayName(BaseComponent, helperName)
        return Component
      }
    }

    return (...args) =>
      BaseComponent => {
        const Component = func(...args)(BaseComponent)
        Component.displayName = wrapDisplayName(BaseComponent, helperName)
        return Component
      }
  }

  return func
}

const getContextBase = contextTypes => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)
  const GetContext = (ownerProps, context) => (
    factory({
      ...ownerProps,
      ...context
    })
  )

  GetContext.contextTypes = contextTypes

  return GetContext
}

const getContext = createHelper(getContextBase, 'getContext');

export {
  getContext
};
