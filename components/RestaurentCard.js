import React from 'react'
import { IMG_CDN_URL } from '../src/config';
import { useContext } from 'react';
import UserContext from '../utils/userContext';

const RestaurentCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravel,
  }) => {
    const {user} = useContext(UserContext)
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2 className='font-bold text-xl'>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravel}</h4>
        <h5 className='font-bold'>{user.name}- {user.email}</h5>
      </div>
    );
  };


export default RestaurentCard
