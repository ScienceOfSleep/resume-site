import React from "react";
import styled from "@emotion/styled";

const LogoCard = styled.div`
    margin-top: 2rem;
    border: 6px solid ${props => props.borderColor || "#DB444A"};
    border-radius: 5%;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    filter: drop-shadow(4px 4px 4px #3c3c3c);
    li{
      padding-top: .35rem;
    }
`

export default LogoCard
