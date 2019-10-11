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
      <Form.Input label='Name' name='name'/>
      <Form.Input label='Email' name='email'/>
      <Form.Input label='Subject' name='subject'/>
      <Form.TextArea style={{minHeight: '200px'}} label='Content' name='content'/>
      <Form.Button color='green'><Icon name='send'/>Submit</Form.Button>
    </Form>
  );
}
