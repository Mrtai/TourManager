import {all} from 'redux-saga/effects';
import General from './General/saga';
import Product from 'modules/eCommerce/Product/redux/sagas';
import Cart from 'modules/eCommerce/Cart/redux/sagas';
import Home from 'modules/eCommerce/Home/redux/sagas';
import Category from 'modules/eCommerce/Category/redux/sagas';
import Auth from 'modules/Account/redux/sagas';
import Checkout from 'modules/eCommerce/Checkout/redux/sagas';
export default function* rootSaga (){
    yield all([
      General(),
      Product(),
      Home(),
      Cart(),
      Category(),
      Auth(),
      Checkout()
    ])
}
