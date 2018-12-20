import React, { Component } from 'react'
import { Form, Button, Radio } from 'semantic-ui-react'
import '../index.css'

export default class ItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      amount: 1,
      amountNeeded: 1,
      status: 'Everyday item'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event, result){
    this.setState({
      [result.name]: result.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createItem(this.state)
    this.setState({
      name: '',
      amount: 1,
      amountNeeded: 1,
      status: 'Everyday item'
    })
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input name='name' label='New grocery item: ' placeholder='Item Name' value={this.state.name} onChange={this.handleChange} />
        <Form.Input name='amountNeeded' label='Amount needed: ' placeholder='0' value={this.state.amountNeeded} onChange={this.handleChange} />
        <Form.Field>
          This is a:
        </Form.Field>
        <Form.Field name='status'>
          <Radio
            label='Everyday item'
            name='status'
            value='Everyday item'
            checked={this.state.status === 'Everyday item'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Recipe ingredient'
            name='status'
            value='Recipe ingredient'
            checked={this.state.status === 'Recipe ingredient'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Button color='teal'>Add to basket</Form.Button>
      </Form>
    )
  }
}
