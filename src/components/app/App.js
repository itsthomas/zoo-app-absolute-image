import React, { useState } from 'react'
import ZooList from '../ZooList'
import ZooTile from '../ZooTile'
// Creating Global Style
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: ${props => (props.bodyMargin = '0')};
  }

  * {
    box-sizing: border-box;
  }
  .cf:before,
  .cf:after {
    content: ' ';
    display: table;
  }

  .cf:after {
    clear: both;
  }
`

const App = props => {
  const [id, setID] = useState(null)
  console.log(id)

  return (
    <>
      <GlobalStyle bodyMargin />
      {id || id === 0 ?
        <ZooTile setID={setID} newID={id} />
        :
        <ZooList setID={setID} />
      }
    </>
  )
}

export default App
