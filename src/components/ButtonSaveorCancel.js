import React from 'react';
import { Button } from 'semantic-ui-react';

export const ButtonSaveOrCancel = ({ text, isPrimary }) => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>Ok</Button>
    </Button.Group>
  );
};
