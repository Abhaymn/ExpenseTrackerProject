import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Premium.module.css';
import { themeActions } from '../Store/themeSlice';

const Premium = () => {
  const dispatch = useDispatch();
  
  const activatePremium = useSelector((state) => state.theme.premium);
  const totalAmount = useSelector((state) => state.expense.totalAmount);
  

  

  // activating premium membership
  const activatePremiumHandler = () => {
    dispatch(themeActions.premium(true));
  };

  

  if (totalAmount <= 10000 && activatePremium) {
    dispatch(themeActions.premium(false));
  }

  return (
    <React.Fragment>
      {totalAmount > 10000 && (
        <div className={classes.activate}>
          {!activatePremium && (
            <button onClick={activatePremiumHandler}>Activate Premium</button>
          )}
         
        </div>
      )}
    </React.Fragment>
  );
};

export default Premium;