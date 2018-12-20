import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      amount: 1
    }
    this.addAmount = this.addAmount.bind(this)
    this.subtractAmount = this.subtractAmount.bind(this)
  }

  addAmount(item){
    this.setState({
      amount: this.state.amount + 1
    })
  }

  subtractAmount(){
    if (this.state.amount > 0){
      this.setState({
        amount: this.state.amount - 1
      })
    }
  }

  render() {
      return (
        <List.Item>
          <List.Header>{this.state.amount} of {this.props.item.amountNeeded} {this.props.item.name} ({this.props.item.status})</List.Header>
          <List.Content>
            <Button onClick={this.addAmount}>+</Button>
            <Button onClick={this.subtractAmount}>-</Button>
            <Button onClick={() => this.props.deleteItem(this.props.item.name)}>Delete Item</Button>
          </List.Content>
        </List.Item>
      )
  }
}
