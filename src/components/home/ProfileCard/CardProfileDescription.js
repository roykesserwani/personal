import React from "react";
import styled from "styled-components";
import {LG} from "@zendeskgarden/react-typography";


const CardProfileDescriptionWrapper = styled(LG)`
    padding: 8px;
    opacity: .7;
    hr {
      width: 50%;
    }
`;


const CardProfileDescription = ({ text }) => (
    <CardProfileDescriptionWrapper>
        <hr />
            {text}
        <hr />
    </CardProfileDescriptionWrapper>
);


export default CardProfileDescription