import React from 'react'
import styled from "styled-components";
import {LG, XL} from "@zendeskgarden/react-typography";
import { ReactComponent as TerminalCliIcon } from '@zendeskgarden/svg-icons/src/16/terminal-cli-fill.svg';

const CardProfileTitleWrapper = styled(LG)`
   padding: 2px;
   margin-top:5px;
   opacity: .8; 
`;

const CardProfileTitle = ({ text }) => (
    <CardProfileTitleWrapper>
        <TerminalCliIcon /> {text}
    </CardProfileTitleWrapper>

);


export default CardProfileTitle