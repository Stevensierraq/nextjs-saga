# React SSR

## Clasic SSR with React.js

ReactDOM.hydrate is same as ReactDOM.render(), but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. React will attempt to attach event listeners to the existing markup.

```js
const { Server } = require('http');
const createExpressServer = require('express');
const { renderToString } = require('react-dom/server');
const HomeLayout = require('.UI/components/layout');

const server = createExpressServer();
const http = Server(server);

server.get('/home', (req, res) => {
    const ssrHtml = renderToString(HomeLayout);

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>My financial App</title>
        </head>
        <body>
            <div id="root">${ssrHtml}</div>
            <script>
                ReactDOM.hydrate(HomeLayout, document.getElementById('root'))
            </script>
        </body>
        </html>
    `;

    // With redux
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${ssrHtml}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
      `;
});

http.listen(port, () => console.log(`Listening on *:${port}`));
```
## Isomorphic Rendering with Next.js

> React applications with [Next.js](https://nextjs.org/)

#### Basic features

1. Automatic code splitting
1. filesystem based routing
1. hot code reloading and universal rendering.
1. Fully Extensible

#### Isomorphic method

getInitialProps is a static method that execute on server or client pending of navigation

```js
static async getInitialProps({ctx}) {
    const pageProps = await fetch('backend');

    return {pageProps}
  }
```

#### Authentication

Add Auth0 implementation [Auth0](https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/)

#### Usage redux-saga

uses the redux store created by [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper). Please refer to their documentation for more information.

#### Configure Store

```js
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

function configureStore(preloadedState, {isServer, req = null}) {

  /**
   * Recreate the stdChannel (saga middleware) with every context.
   */

  const sagaMiddleware = createSagaMiddleware()

  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass
   * `preloadedState` when creating the store.
   */

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  )

  /**
   * next-redux-saga depends on `sagaTask` being attached to the store during `getInitialProps`.
   * It is used to await the rootSaga task before sending results to the client.
   * However, next-redux-wrapper creates two server-side stores per request:
   * One before `getInitialProps` and one before SSR (see issue #62 for details).
   * On the server side, we run rootSaga during `getInitialProps` only:
   */

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore
```

#### Configure Custom `_app.js` Component

```js
import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from './configure-store'

class ExampleApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(withReduxSaga(ExampleApp))
```

#### Connect Page Components

```js
import React, {Component} from 'react'
import {connect} from 'react-redux'

class ExamplePage extends Component {
  static async getInitialProps({store}) {
    store.dispatch({type: 'SOME_ASYNC_ACTION_REQUEST'})
    return {staticData: 'Hello world!'}
  }

  render() {
    return <div>{this.props.staticData}</div>
  }
}

export default connect(state => state)(ExamplePage)
```
