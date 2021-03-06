
import { Route, Switch } from "react-router-dom"
import Home from '../pages/home'
import Me from '../pages/me'
import Order from '../pages/order/order'

const index = () => {
    return <div>
        <Switch forcerefresh={false}>
            <Route path="/" exact component={Home}  />
            <Route path="/me"  component={Me} />
            <Route path="/order" exact component={Order} />

        </Switch>
    </div>
}

export default index