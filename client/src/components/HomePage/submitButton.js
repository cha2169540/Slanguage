import React from 'react';
import { Button } from 'react-bootstrap';



export default function Submit(props) {
    return (
        <Button variant="primary" type="submit" size="lg" onClick={props.handleFormSubmit} block>
    Sign In
  </Button>
    );
}