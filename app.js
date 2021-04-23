import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import { Text, Container, Row } from '@paypalcorp/pp-react'
import { Message } from '@paypalcorp/worldready-react'
import { Logger as clientLogger } from 'beaver-logger'
import Button from '@material-ui/core/Button'
//import Button from 'react-bootstrap/Button'
import data from './products.json'

const Home = React.lazy(() => import('./screens/home'))
const Help = React.lazy(() => import('./screens/help'))
//const Cart = React.lazy(() => import('./screens/cart'))

const logger = clientLogger({
  url: '/sampleapp/log',
  // Log level to display in the browser console
  logLevel: 'debug',
})
/*
function App() {
  logger.info('CLIENT', { message: 'returning app landing page' }) //client side logging
  return (
    <div>
      <Button>Hello</Button>
    </div>
  )
}
*/
class App extends Component {
  render() {
    return (
      <div>
        {data.map((el) => {
          const itemID = el.id;
          return (
            <div class="shop-item" key="${id}">
              <div class="shop-item-name">{el.productName}</div>
              <img
                class="cart-item-image"
                src="{el.image}"
                width="100"
                height="100"
              ></img>

              <div class="shop-item-price">{el.price}</div>
              <div class="shop-item-desc">{el.description}</div>
              <button>Add to Cart</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
