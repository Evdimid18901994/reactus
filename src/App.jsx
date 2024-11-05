import React from 'react'
import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items'
import Categories from './Components/Categories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: [],
      orders: [],
      items: [

          {
            id: 1,
            title: 'Georgie',
            image: "./img/georgie.jpg",
            desc: "----------",
            category: "Children",
            price: "10.27"
          },

          {
            id: 2,
            title: 'Bill',
            image: "./img/bill.jpg",
            desc: "----------",
            category: "Losers club",
            price: "110.37"
          },

          {
            id: 3,
            title: 'Viktor',
            image: "./img/viktor.jpg",
            desc: "----------",
            category: "ISUUS22",
            price: "15.27"
          },

          {
            id: 4,
            title: 'Ben',
            image: "./img/ben.jpg",
            desc: "----------",
            category: "Losers club",
            price: "96.47"
          },

          {
            id: 5,
            title: 'Roma',
            image: "./img/roma.jpg",
            desc: "----------",
            category: "ISUUS22",
            price: "22.74"
          },

          {
            id: 6,
            title: 'Beverly',
            image: "./img/beverley.jpg",
            desc: "----------",
            category: "Losers club",
            price: "114.28"
          },

          {
            id: 7,
            title: 'Ricci',
            image: "./img/ricci.jpg",
            desc: "----------",
            category: "Losers club",
            price: "102.77"
          },   
          
          {
            id: 8,
            title: 'Luntik',
            image: "./img/luntik.jpg",
            desc: "----------",
            category: "Children",
            price: "66.29"
          },  

          {
            id: 9,
            title: 'Kuzya',
            image: "./img/kuzya.jpg",
            desc: "----------",
            category: "Children",
            price: "55.44"
          },  

          {
            id: 10,
            title: 'Upsen',
            image: "./img/upsen.jpg",
            desc: "----------",
            category: "Children",
            price: "61.20"
          },  
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(props) {
    return (
    <div className='wrapper'>
    <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
    <Categories chooseCategory = {this.chooseCategory}/>
    <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

    <Footer /> 
    </div>
    )
  }
  
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
  
  deleteOrder(id) {
    //console.log(id)
    this.setState({orders: this.state.orders.filter(el =>
    el.id !== id
    )})
  }

  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    if (!arrayId) {
    this.setState({orders: [...this.state.orders, item]})
  }
}

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(el => el.category === category)})
  }
}

export default App
