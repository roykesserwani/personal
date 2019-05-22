import React from 'react';
import styled from 'styled-components';
import { SM, MD, LG } from '@zendeskgarden/react-typography';



const Card = styled.div`
    width: 100%;
    height: auto;
    min-height: 150px;
    text-align: center;
    
`;

const CardProfileImage = styled.img`
    border-radius: 20px;
    width: 75px;
    height: 75px;
    
`;

const HomeProfileCard = (props) => {
    return (
        <Card>
            <CardProfileImage src={props.image} />
            <MD monospace><b>{props.name}</b></MD>
            <SM monospace> Software Engineer Bitch </SM>
        </Card>
    );
};

export default HomeProfileCard