import React from 'react';
import { Statistic } from 'semantic-ui-react';

export const DisplayBalance = ({ balance }) => {
  return (
    <Statistic size="small">
      <Statistic.Label>Your Balance:</Statistic.Label>
      <Statistic.Value>{balance}</Statistic.Value>
    </Statistic>
  );
};
