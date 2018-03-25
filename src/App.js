// @ts-check
import React from 'react';
import ShippingPackage from './Shippingpackage';
import Title from './title';

function App() {
  const shippingPackageList = [
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
];

  return <div>
    <Title>To Deliver List</Title>
    {
      shippingPackageList
        .map(shippingpackage => <ShippingPackage key={shippingpackage.orderId} {...shippingpackage} />)
    }

    
    {
      // <ShippingPackage 
      // orderId={12421} 
      // packageId={424}
      // amount={142}
    // />
    }
  </div>
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
