import React from "react";
import styled from "@emotion/styled";

const LogoCard = styled.div`
    margin: 1rem 0 2rem;
    border: 6px solid ${props => props.borderColor || "#DB444A"};
    border-radius: 5%;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    filter: drop-shadow(4px 4px 4px hsl(202, 21%, 52%, 0.9));
    li{
      padding-top: .35rem;
    }
    h3{
      font-family: 'montserrat', sans-serif;
      font-weight: 600;
      font-size: 2rem;
    }
`

export default LogoCard
