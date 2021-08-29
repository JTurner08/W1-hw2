import React,{component} from 'react'
import groceries from './groceriesList'

export default class App extends Component {
  
  state={
    groceries:groceries
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
  }

  
};

render () {
  return (
    <div>
      <h1>Grocery List</h1>
    </div>
    <form>
      <label>Item 1</label>
      <input> </input><br></br>
      <label> </label>
      <input> </input><br></br>
      <label> </label>
      <input> </input><br></br>
    </form>
    <div/>
  )
}

}