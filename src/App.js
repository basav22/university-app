// @ts-check
import React from 'react';
import ShippingPackage from './Shippingpackage';
import Title from './title';

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
      shippingPackageList: [
        {
          orderId: 12421,
          packageId: 424,
          amount: 142
        },
        {
          orderId: 5324,
          packageId: 23,
          amount: 12
        }
      ],
      name: "pune"
    }

    this.newPackage = {
      orderId: 3424,
      packageId: 123,
      amount: 90
    };

  }

  addToList() {
    if (!this.newPackage)
      return;
    // DO NOT DO THIS
    // this.state.shippingPackageList.push(this.newPackage);

    // this.setState({
    //   shippingPackageList:
    //     [...this.state.shippingPackageList, this.newPackage]
    // });

    this.state.shippingPackageList.push(this.newPackage);
    this.setState({
      shippingPackageList: this.state.shippingPackageList
    });

    // this.setState(() => ({
    //   shippingPackageList:
    //     [...this.state.shippingPackageList, this.newPackage]
    // }))
  }
  myFUn() {
    var list = [1, 3]
    console.log(list);

    this.updateList(list, 4)
    console.log(list);
  }

  updateList(list, item) {
    list.add(item);
  }

  // just after the first render -called only once
  componentDidMount() {
    // API call
    // Get List
    // Set state
    console.log("did mount")
  }
  
  // just before the first render - called only once
  componentWillMount() {
    console.log("will mount")
  }

  // calls after every update and rerender
  componentDidUpdate() {
    console.log("did update")
  }

  render() {
    return <div>
      <p>{this.state.name} {this.state.lastName}</p>
      <Title>To Deliver List</Title>
      {
        this.state.shippingPackageList
          .map(shippingpackage => <ShippingPackage key={shippingpackage.orderId} {...shippingpackage} />)
      }
      <button type="button" onClick={() => this.addToList()}>Add To List</button>
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
