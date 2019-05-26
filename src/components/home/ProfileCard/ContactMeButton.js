import React from 'react'
import { Button } from '@zendeskgarden/react-buttons'
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/16/home-fill.svg';


const ContactMeButton = () => (
    <Button focusInset style={{ backgroundColor: '#03363d' }}>
        <HomeIcon style={{ marginTop: 5 }} /> Contact Me
    </Button>
);

export default ContactMeButton