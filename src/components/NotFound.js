import React from 'react';
import { Header } from "semantic-ui-react";

const HeaderStyle = {
  height: 'calc(100vh - 84px)',
  textAlign: 'center',
  margin: 0,
  paddingTop: 'calc(5em)'
};

/**
 * NotFound Component
 *
 * Returns an error message for invalid route
 */
export default function () {
  return (
    <Header as='h2' style={HeaderStyle}>
      Sorry, we can't find the page you were looking for.
    </Header>
  );
}
