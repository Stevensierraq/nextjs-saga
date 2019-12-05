import React, {Component} from 'react'
import {string} from 'prop-types'
import {connect} from 'react-redux'
import withReduxSaga from '..'
import Layout from '../components/layout'

import {
  STATIC_PROP_TEXT,
  GET_SYNC_REDUX_PROP_TYPE,
  SYNC_REDUX_PROP_TEXT,
} from '../../BL/test/constants'

class SyncExample extends Component {
  static propTypes = {
    staticProp: string,
    syncReduxProp: string,
    asyncReduxSagaProp: string,
  }

  static getInitialProps({ctx: {store}}) {
    store.dispatch({
      type: GET_SYNC_REDUX_PROP_TYPE,
      data: SYNC_REDUX_PROP_TEXT,
    })

    return {staticProp: STATIC_PROP_TEXT}
  }

  render() {
    const {staticProp, syncReduxProp, asyncReduxSagaProp} = this.props

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
            <code>{asyncReduxSagaProp || ''}</code>
          </pre>
        </section>
      </Layout>
    )
  }
}

export default withReduxSaga(connect(state => state)(SyncExample))
