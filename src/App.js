import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';

import { MainHeader } from './components/MainHeader';
import { NewEntryForm } from './components/NewEntryForm';
import { DisplayBalance } from './components/DisplayBalance';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance balance="2,500.54" />

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: 'left' }}>Income</Statistic.Label>
                <Statistic.Value>1,045.05</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: 'left' }}>Expenses</Statistic.Label>
                <Statistic.Value>545.05</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type="h3" />

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something 1
            </Grid.Column>
            <Grid.Column width={3}>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something 2
            </Grid.Column>
            <Grid.Column width={3}>$20.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something 3
            </Grid.Column>
            <Grid.Column width={3}>$15.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
