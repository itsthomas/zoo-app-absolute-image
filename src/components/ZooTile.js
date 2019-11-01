import React from 'react'
import jsonResponse from '../data'
import styled from 'styled-components'

const TileDiv = styled.div`
    width: 100%;
    height: 100vh;
    float: left;
    padding: 40px;
    background-color: #eee0cb;
    outline: 1px solid #ccc;
`

const ImageDiv = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    outline: 1px solid rgb(172, 172, 172);
    border: 20px solid #fff;

    img {
      max-width: 100%;
      cursor: pointer;
    }

    /*  Tablet View  */
    @media (min-width: 45.563em) and (max-width: 61.312em) {
      width: 70%;
    }

    /*  Desktop View  */
    @media (min-width: 61.313em) {
      width: 50%;
    }
`

const TextContainer = styled.div`
    color: rgb(58, 58, 73);
    text-align: left;
`

const TileBtn = styled.button`
    width: 40%;
    height: 40px;
    background-color: rgb(77, 55, 23);
    color: white;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    font-size: 1rem;

    /*  Tablet View  */
    @media (min-width: 45.563em) and (max-width: 61.312em) {
      width: 30%;
    }

    /*  Desktop View  */
    @media (min-width: 61.313em) {
      width: 18%;
    }
`

console.log(jsonResponse)

function ZooTile ({ setID, newID }) {
  console.log('The new id is  :' + newID)

  return (
    <TileDiv>
      <ImageDiv>
        <img
          src={jsonResponse.animals[newID].image_url}
          alt={jsonResponse.animals[newID].name}
        />
      </ImageDiv>
      <TextContainer>
        <h3>{jsonResponse.animals[newID].name}</h3>
        <p><b>Distribution</b>: {jsonResponse.animals[newID].distribution}</p>
        <p>{jsonResponse.animals[newID].details.long}</p>

        <TileBtn className='btn--tile' onClick={() => setID(null)}>Back to overview</TileBtn>
      </TextContainer>
    </TileDiv>
  )
}

export default ZooTile
