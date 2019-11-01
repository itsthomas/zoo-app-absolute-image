import React from 'react'
import jsonResponse from '../data'
import styled from 'styled-components'

const StyledUl = styled.ul`
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const StyledLi = styled.li`
    width: 100%;
    float: left;
    padding: 40px;
    background-color: #eee0cb;
    outline: 1px solid #ccc;

    /*  Tablet View  */
    @media (min-width: 45.563em) and (max-width: 61.312em) {
        width: 50%;
        height: 82vh;
    }

    /*  Desktop View  */
    @media (min-width: 61.313em) {
      width: 33.33%;
      height: 84vh;
    }
`

const ImageDiv = styled.div`
    display: block;

    img {
      max-width: 100%;
      cursor: pointer;
    }
`

const TextContainer = styled.div`
    color: rgb(58, 58, 73);
    text-align: left;
`

const Btn = styled.button`
    width: 26%;
    height: 40px;
    background-color: rgb(77, 55, 23);
    color: white;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    font-size: 1rem;

    @media (min-width: 45.563em) and (max-width: 61.312em) {
      width: 42%;
    }
      
    @media (min-width: 61.313em) {
      width: 42%;
    }
`

console.log(jsonResponse)

function ZooList ({ setID }) {
  const list = jsonResponse.animals.map((item) => {
    return (
      <StyledLi key={item.id}>
        <ImageDiv>
          <img
            src={item.image_url}
            alt={item.name}
            onClick={() => setID(item.id)}
          />
        </ImageDiv>
        <TextContainer>
          <h3>{item.name}</h3>
          <p>
            <b>Distribution</b>: {item.distribution}
            <br />
            <b>Diet</b>: {item.details.diet}
          </p>
          <p>{item.details.short}</p>
        </TextContainer>
        <Btn onClick={() => setID(item.id)}>Read more</Btn>
      </StyledLi>
    )
  })

  return (
    <StyledUl className='cf'>
      {list}
    </StyledUl>
  )
}

export default ZooList
