// @ts-check

import React from "react";
import Avatar from "./Avatar";
import BottomNavigation from "./BottomNavigation";
import BottomNavigationItem from "./BottomNavigationItem";

import style from "./test.css";


// function App2_old() {
//     return <React.Fragment>
//         <Avatar size={150} src={google}>
//             Hello
//         </Avatar>
//         <Avatar size={50} src={google2}>
//             Google 2
//         </Avatar>
//     </React.Fragment>
// }

class App2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items:
                this.props.items
        }
    }

    makeActive(item) {
        this.setState(prevState => {
            let newItems = [];
            // reset all 
            newItems = prevState.items.map(i => {
                if (item.label === i.label)
                    return { ...i, active: true };

                return { ...i, active: false };
            });

            return {
                items: newItems
            };
        })
    }

    render() {
        return <React.Fragment>
            <BottomNavigation>
                {this.state.items.map(item => <BottomNavigationItem
                    key={item.label}
                    makeActive={() => this.makeActive(item)}
                    label={item.label}
                    icon={item.icon}
                    active={item.active} />)}
            </BottomNavigation>
        </React.Fragment>
    }
}


// function App3() {
//     return <Accordion>
//         <AccordionItem>
//             <AccordionSubItem>

//             </AccordionSubItem>
//         </AccordionItem>
//     </Accordion>
// }


// function App2_old2() {
//     return <React.Fragment>

//         <BottomNavigation>
//             <BottomNavigationItem
//                 label="Recents"
//                 icon={google}
//                 active={false} />
//             <BottomNavigationItem
//                 label="Favourites"
//                 icon={google2} />
//             <BottomNavigationItem
//                 label="Favourites"
//                 icon={google2}
//                 active={true} />
//         </BottomNavigation>

//     </React.Fragment>
// }

export default App2;