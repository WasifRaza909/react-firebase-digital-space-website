import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';
import UsersScreen from './screens/UsersScreen';
import ProductsScreen from './screens/ProductsScreen';
import OrdersScreen from './screens/OrdersScreen';
import AddProductScreen from './screens/AddProductScreen.js';
import EditProductScreen from './screens/EditProductScreen.js';
import EditUserScreen from './screens/EditUserScreen.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import './index.css';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeOrder" component={PlaceOrderScreen} />
        <Route path="/order" component={OrderScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/users" component={UsersScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/product" component={ProductScreen} />
        <Route path="/orders" component={OrdersScreen} />
        <Route path="/add" component={AddProductScreen} />
        <Route path="/edit" component={EditProductScreen} />
        <Route path="/editUser" component={EditUserScreen} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
