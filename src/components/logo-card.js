import React, {useState} from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  margin: 1rem 0 2rem;
  border: 6px solid ${props => props.borderColor || "#DB444A"};
  border-radius: 5%;
  padding: 10px 10% 10px;
  display: grid;
  grid-template-rows: 72vw 2rem auto 10px;
  justify-items: center;
  align-items: center;
  background-color: #ffffff;
  filter: drop-shadow(4px 4px 4px hsl(202, 21%, 52%, 0.9));
  position: relative;
  height: calc(72vw + 2rem + 55px);
  transition: height .25s;
  &[data-opened='true']{
    height: 540px;
  }
  ul{
    opacity: 0;
    grid-row: 3;
    transition: opacity .1s ease 0s;
    align-self: start;
    &[data-opened='true']{
      opacity: 1;
      transition: opacity .25s ease .15s;
  }
  li{
    padding-top: .35rem;
    }
  }
  h3{
    font-family: 'montserrat', sans-serif;
    font-weight: 600;
    font-size: 2rem;
  }
  button{
    position: absolute;
    bottom: 4px;
    background-color: #ffffff;
    border-top: none;
    border-bottom: none;
    border-left: 4px solid ${props => props.borderColor};
    border-right: 4px solid ${props => props.borderColor};
    padding: 1px 6px 2px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'montserrat', serif;
    &:focus, :hover{
      background-color: ${props => props.borderColor};
      color: #ffffff;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 1120px){
    padding: 10px;
    min-width: 280px;
    width: 20%;
    height: calc(260px + 2rem + 55px);
    grid-template-rows: 260px 2rem auto 10px;
    &[data-opened='true']{
      height: 540px;
    }
  }
`

const LogoCard = (props) => {
    const [opened, setOpened] = useState(false)
    const button = (opened ? "Collapse" : "Expand")

    return <Card
        borderColor={props.borderColor}
        data-opened={opened}
    >
        {props.children}
        <ul data-opened={opened}>
            <li>{props.pointOne}</li>
            <li>{props.pointTwo}</li>
            <li>{props.pointThree}</li>
        </ul>
        <button
            borderColor={props.borderColor}
            onClick={() => {
                if (opened === true) {
                    setOpened(false)
                } else {
                    setOpened(true)
                }
            }}
        >
            {button}
        </button>
    </Card>
}

export default LogoCard
