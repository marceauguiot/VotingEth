import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class NewElectionForm extends Component {
  state = {
    description: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createElection(this.state.description).send({
        from: accounts[0]
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, description: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>New election</label>
          <Input
            value={this.state.description}
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Open!
        </Button>
      </Form>
    );
  }
}

export default NewElectionForm;
