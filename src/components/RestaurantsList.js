import React from 'react';
import 'antd/dist/antd.css';
import Restaurant from './Restaurant';

export default function RestaurantsList({ restaurants }) {
   return restaurants.map(restaurant => (
      <Restaurant
         restaurant={restaurant}
         key={restaurant.id}
         defaultOpen={restaurant.id === restaurants[0].id}
      ></Restaurant>
   ));
}
