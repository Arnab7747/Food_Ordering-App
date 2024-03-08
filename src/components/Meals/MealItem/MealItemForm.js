import React from 'react'
import classes from './MealItem.module.css'
import Input from '../../UI/Input'
export default function MealItemForm(props) {
  return (
    <form className={classes.form}>
        <input label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}>
        <button>Add</button>
        </input>
      
    </form>
  )
}
