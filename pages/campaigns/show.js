import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import NewElectionForm from "../../components/NewElectionForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();
    const elections = await campaign.methods.elections(0).call();
    return {
      address: props.query.address,
      balance: summary[0],
      electionsCount: summary[1],
      votersCount: summary[2],
      admin: summary[3],
      elections: elections["description"]
    };
  }

  renderCards() {
    const { balance, manager, electionsCount, votersCount, admin } = this.props;

    const items = [
      {
        header: admin,
        meta: "Address of the administrator of the elections",
        description: "The admin created this campaign and can open elections",
        style: { overflowWrap: "break-word" }
      }
    ];

    return <Card.Group items={items} />;
  }

  //test
  //static async getInitialProps() {
  //  const elections = await campaign.methods.elections().call();
  //  return { elections };
  //}

  renderElections() {
    console.log(this.props.elections);
    const items = this.props.elections.map(address => {
      return {
        header: this.props.elections,
        description: (
          <Link route={`/elections/${this.props.elections}`}>
            <a>View Elections</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  // fin du test
  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <NewElectionForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Elections</Button>
                </a>
              </Link>
              //test
              {this.renderElections()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
