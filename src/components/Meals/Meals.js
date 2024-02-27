import React from 'react'
import { Fragment } from 'react'
import MealsSummary from './MelasSummary'
import AvailableMeals from './AvailableMeals'


export default function Meals() {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
      
    </Fragment>
  )
}
