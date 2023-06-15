import Fruits from "./Fruits";
import { choice, remove } from "./helpers";
import React from "react"

class VendingMachine extends React.Component{
    render(){
    let leftovers=remove(Fruits)
    console.log(leftovers)
        return(
            <div>
                <p>I am hungry for a {Fruits} please</p>
                <p>Here, just for you: {Fruits}</p>
                <p>Sorry, we ran out, we have {leftovers.length} other items left.</p>
            </div>
        )
    }
}
export default VendingMachine
