import React from 'react';
import styled from 'styled-components';
import { XXL  } from '@zendeskgarden/react-typography';
import CardProfileTitle from './CardProfileTitle';
import CardProfileImage from './CardProfileImage';
import CardProfileDescription from './CardProfileDescription'


const Card = styled.div`
    width: 100%;
    height: auto;
    min-height: 150px;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 25px;
    padding-top:25px;
`;

const CardProfileName = styled(XXL)`
    margin-top: 7px;
`;



const ProfileCard = ({ image, name, title, description }) => {
    return (
        <Card>
            <CardProfileImage src={image} />
            <CardProfileName monospace>{name}</CardProfileName>
            <CardProfileTitle text={title} monospace> </CardProfileTitle>
            <CardProfileDescription text={description} />
        </Card>
    );
};

export default ProfileCard