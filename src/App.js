// @ts-check
import React from 'react';
import ShippingPackage from './Shippingpackage';
import Title from './title';
import AddPackageForm from './AddPackageForm';

// function addToList(packageObj) {
//   if (!packageObj)
//     return;
//   shippingPackageList.push(packageObj);
//   App()
// }

// function App_old() {

//   const shippingPackageList = [
//     {
//       orderId: 12421,
//       packageId: 424,
//       amount: 142
//     },
//     {
//       orderId: 5324,
//       packageId: 23,
//       amount: 12
//     }
//   ];
//   const newPackage = {
//     orderId: 3424,
//     packageId: 123,
//     amount: 90
//   };


//   return <div>
//     <Title>To Deliver List</Title>
//     {
//       shippingPackageList
//         .map(shippingpackage => <ShippingPackage key={shippingpackage.orderId} {...shippingpackage} />)
//     }
//     <button type="button" onClick={() => addToList(newPackage)}>Add To List</button>

//     {
//       // <ShippingPackage 
//       // orderId={12421} 
//       // packageId={424}
//       // amount={142}
//       // />
//     }
//   </div>
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shippingPackageList: [],
      showAddForm: false,
      newPackage: {
        packageId: 1,
        orderId: 2,
        amount: 3
      }
    }

    this.newPackage = {
      orderId: 3424,
      packageId: 123,
      amount: 90
    };

    // event handler declarations to maintain context
    this.addToList = this.addToList.bind(this);
    this.setNewData = this.setNewData.bind(this);
  }

  getData() {
    return fetch("http://www.mocky.io/v2/5ac076aa2f0000560096115e", {
      headers: {},
      method: "GET"
    }).then(res => {
      if(res.ok) {
        return Promise.resolve(res.json())
      }
    });
  }

  setNewData(key, value) {
    this.setState({
      newPackage: {...this.state.newPackage, [key]: value}
    })
  }



  showForm() {
    this.setState({
      showAddForm: true
    })
  }

  addToList() {
    const newPackage = this.state.newPackage;
    if (! newPackage)
      return;
    // DO NOT DO THIS
    // this.state.shippingPackageList.push(this.newPackage);

    this.setState({
      shippingPackageList:
        [...this.state.shippingPackageList, newPackage],
      showAddForm: false
    });

    // this.state.shippingPackageList.push(this.newPackage);
    // this.setState({
    //   shippingPackageList: this.state.shippingPackageList
    // });

    // this.setState(() => ({
    //   shippingPackageList:
    //     [...this.state.shippingPackageList, this.newPackage]
    // }))
  }

  // just after the first render -called only once
  componentDidMount() {
    // API call
    // Get List
    // Set state
    console.log("did mount");
    this.getData().then(shippingPackageList => {
      // console.log(shippingPackageList);
      this.setState({
        shippingPackageList
      });
    });;
  }
  
  // just before the first render - called only once
  componentWillMount() {
    console.log("will mount")
  }
  
  // is for performance things - optimization
  // shouldComponentUpdate(props, state) {
  //   // logic
  //   return false;
  // }

  // calls after every update and rerender
  componentDidUpdate() {
    console.log("did update")
    // this.setState({
    //   showAddForm: false
    // })
  }

  render() {
    const { showAddForm, shippingPackageList} = this.state;
    return <div>
      <Title>To Deliver List</Title>
      {
        shippingPackageList
          .map(shippingpackage => <ShippingPackage key={shippingpackage.orderId} {...shippingpackage} />)
      }
      {!showAddForm && <button type="button" onClick={() => this.showForm()}>Add To List</button>}
      {showAddForm ? 
        <AddPackageForm 
          {...this.state.newPackage} 
          setNewData={this.setNewData}
          onAdd={this.addToList}/> : null}
    </div>
  }
}




// class based component
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <Title name="Pune" lastName="university"/>
//       </div>
//     );
//   }
// }

export default App;
