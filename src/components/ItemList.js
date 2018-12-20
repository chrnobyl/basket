import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'
import Item from './Item'
import '../index.css'

export default function ItemList(props){
  return (
    <List>
      <List.Header><h3>Items in basket:</h3></List.Header>
      {props.items.map((item, index) => (
        <Item key={index} item={item} addAmount={props.addAmount} subtractAmount={props.subtractAmount} deleteItem={props.deleteItem} />
        )
      )}
    </List>
  )
}
