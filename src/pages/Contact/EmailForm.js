import React from 'react';
import {
  Form
} from 'semantic-ui-react';

export default function () {
  return (
    <Form action="https://formspree.io/jamespham93@yahoo.com" method="POST">
      <Form.Input label='Name' name='name' />
      <Form.Input label='Email' name='email' />
      <Form.Input label='Subject' name='subject' />
      <Form.TextArea label='Content' name='content' />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
}
