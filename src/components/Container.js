import React, { Component } from 'react'
import ItemList from './ItemList'
import ItemForm from './ItemForm'
import { List, Grid, Icon, Button } from 'semantic-ui-react'
import '../index.css'

export default class Container extends Component {
  constructor(){
    super()
    this.state = {
      items: [
        { name: 'Milk', amountNeeded: 1, status: 'Everyday item' },
        { name: 'Cereal', amountNeeded: 1, status: 'Everyday item' },
        { name: 'Gourmet cheese', amountNeeded: 1, status: 'Everyday item' }
      ]
    }

    this.createItem = this.createItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.removeAll = this.removeAll.bind(this)
  }

  createItem(item){
    this.setState((previousState) => {
      return {
        items: [...previousState.items, item]
      }
    })
  }

  deleteItem(itemName){
    this.setState({
      items: this.state.items.filter(item => item.name !== itemName)
    })
  }

  removeAll(){
    this.setState({
      items: []
    })
  }

  render() {
      return (
        <Grid centered padded relaxed divided stackable>
          <Grid.Row>
            <h1><Icon name='shopping basket' color='teal'/> Basket <Icon name='shopping basket' color='teal'/></h1>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <ItemForm createItem={this.createItem} />
            </Grid.Column>
            <Grid.Column className='itemList' width={4}>
              <ItemList items={this.state.items} addAmount={this.addAmount} subtractAmount={this.subtractAmount} deleteItem={this.deleteItem} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button color='orange' onClick={this.removeAll}>Remove all from basket</Button>
          </Grid.Row>
        </Grid>
      )
  }
}
