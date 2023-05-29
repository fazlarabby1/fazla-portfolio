import React from 'react';
import { Fade } from 'react-reveal';
import ReactJotformEmbed from 'react-jotform-embed';

const SendEmail = () => {
    return (
        <Fade right>
            <ReactJotformEmbed src="https://form.jotform.com/223435543167456" />
        </Fade>
    );
};

export default SendEmail;