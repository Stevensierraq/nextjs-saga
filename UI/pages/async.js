import React, {Component} from 'react'
import {string} from 'prop-types'
import {connect} from 'react-redux'
import withReduxSaga from '..'
import Layout from '../components/layout'

import {
  STATIC_PROP_TEXT,
  SYNC_REDUX_PROP_TEXT,
  GET_SYNC_REDUX_PROP_TYPE,
  GET_ASYNC_REDUX_SAGA_PROP_TYPE,
} from '../../BL/test/constants'

class AsyncExample extends Component {
  static propTypes = {
    staticProp: string,
    syncReduxProp: string,
    asyncReduxSagaProp: string,
  }

  static getInitialProps({ctx: {store}}) {
    console.log('Ejecutando get initial Props => /async')

    store.dispatch({type: GET_ASYNC_REDUX_SAGA_PROP_TYPE})
    return { staticProp: STATIC_PROP_TEXT }
  }

  render() {
    const {staticProp, syncReduxProp, asyncReduxSagaProp, asyncLoading} = this.props

    return (
      <Layout>
        <section>
          Received <strong>static</strong> prop:
          <pre>
            <code>{staticProp}</code>
          </pre>
        </section>
        <section>
          Received <strong>synchronous</strong> Redux prop:
          <pre>
            <code>{syncReduxProp}</code>
          </pre>
        </section>
        <section>
          Received <strong>asynchronous</strong> Redux-Saga prop:
          <pre>
            <code>{asyncReduxSagaProp}</code>
            {asyncLoading && <code>loading...</code>}
          </pre>
        </section>
      </Layout>
    )
  }
}

export default withReduxSaga(connect(state => state)(AsyncExample))
