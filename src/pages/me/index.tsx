import React from 'react';
import { useHistory, useLocation, Route ,Switch} from 'react-router-dom';
import Order from '../order/order';
interface Props {
    name: string,
    age: number
}
const Me = (props) => {
    let { state } = useLocation()
    console.log(useHistory());
    
    return (
        <div>
            θΏζ―ζη{state?.id}
            <Switch>
                <Route path="/me/order" exact component={Order} />
            </Switch>
        </div>
    );
};






export default Me;