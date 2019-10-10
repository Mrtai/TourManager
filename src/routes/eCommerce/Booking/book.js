import React from 'react';
import { Route, Switch } from "react-router-dom";
import Booking from '../../../modules/eCommerce/Booking'

const Book = ({match}) => {
    return (
        <Booking tourid={match.params}/>
    );
}
export default Book;