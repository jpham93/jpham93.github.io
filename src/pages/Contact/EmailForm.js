import React from 'react';
import {
  Form,
  Icon,
} from 'semantic-ui-react';

const formStyle = {
  maxWidth: '640px',
  margin: 'auto'
};

export default function () {
  return (
    <Form action="https://formspree.io/jamespham93@yahoo.com" method="POST" style={formStyle}>
      <Form.Input label='Name' name='name' required/>
      <Form.Input label='Email' name='email' required/>
      <Form.Input label='Subject' name='subject' required/>
      <Form.TextArea style={{minHeight: '200px'}} label='Content' name='content' required/>
      <Form.Button color='green' id='submit-button' textAlign='center'><Icon name='send'/>Submit</Form.Button>
    </Form>
  );
}
