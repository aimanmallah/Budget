import React from 'react';
import { Form } from 'semantic-ui-react';

import { ButtonSaveOrCancel } from './ButtonSaveorCancel';

export const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input icon="tags" placeholder="New shiny thing" width={12} label="Description" />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          placeholder="Cost of shiny thing"
          width={4}
          label="Value"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};
