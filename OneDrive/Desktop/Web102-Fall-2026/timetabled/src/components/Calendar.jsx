import React from "react";
import { useState } from "react";
import Event from "./Event";


// const [description, setDescription] = useState()
// const [isMouseOver, SetMouseOver] = useState(false)

// const showDescription = () => {

// }


const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className="time">8 am</td>
                        <Event event='Starbucks' image='☕'  address='646 Michigan Ave' color='green'/> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk'  image='🍳' address='355 E Ohio St' color='green'/>

                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway'  image='🚇' address='Grand Station' color='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean'  image='🫘' address='Millennium Park' color='blue'/>

                    </tr>
                    <tr >
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='River Cruise' image='🚢'  address='Chicago River' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Deep Dish'  image='🍕' address="Giodano's" color='green'/>

                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway'  image='🚇' address='Washington Station' color='pink'/>
                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Art Institute' image='🖼️'  address='111 S Michigan Ave' color='blue'/>
                        <td></td>
                        <Event event='Girl & the Goat'   address='809 W Randolph St' color='green'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">3 pm</td>
                        <Event event='Cubs Game'  image='⚽' address='Wrigley Field' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway'  image='🚇' address='Roosevelt Station' color='pink'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner'  image='🍽️' address='Maple & Ash' color='green'/>

                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Shopping'  image='🛍️' address='Magnificent Mile' color='blue'/>
                        <td></td>
                    </tr>
                
                </tbody>
            </table>
        </div>
       
    )
}

export default Calendar