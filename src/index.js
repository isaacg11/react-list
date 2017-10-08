import React from 'react';
import ReactDOM from 'react-dom';

class Products extends React.Component {
  state = {
    products: ['apples', 'oranges', 'peaches', 'plums']
  }

  render() {
    return (
      <span>
        <ul id="parentList">
        </ul>

        <button onClick={() => this.makeUL()}>Show Items</button>
      </span>
    )
  }

  makeUL() {
    let list = document.getElementById('parentList');
    for(let i = 0; i < this.state.products.length; i++) {
        // Create the list item:
        let item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(this.state.products[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
  }

}

ReactDOM.render(
  <Products />,
  document.getElementById('root')
)
