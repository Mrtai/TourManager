import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getProvince} from "../../base/redux/General/GeneralAction";
import { logOut } from "modules/Account/redux/actions";
import { Layout } from "antd";
import HeaderPC from "./HeaderPC";
import "./header.less";
const { Header } = Layout;

const Index = React.memo(() => {
  const {listProvince} = useSelector(state => state.GeneralReducer);
  const {authUser} = useSelector(state => state.AuthReducer);
  const {carts} = useSelector(state => state.CartReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if(listProvince.length <= 0){
      dispatch(getProvince())
    }
  }, [])
  return (
    <Header className="header">
        <HeaderPC/>
    </Header>
  );
});
export default Index;
