import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filter-actions';
import { getFilterValue } from 'redux/filter/filter-selectors';
import style from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        type="text"
        value={filterValue}
        onChange={onChange}
        className={style.input}
      ></input>
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
