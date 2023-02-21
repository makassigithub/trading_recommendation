import React from 'react';

const SelectBox = ({items, updateState, type }) => {
    const setSelectedItem = evt => {
      console.log(evt.target.value);
      updateState({
        type,
        value: evt.target.value
      })
    }
  return (
    <div style={styles.wrapper}>
       <select onChange={setSelectedItem}>
        {
            items.map(item => <option value={item} key={item}>{item}</option>)
        }
    </select>
    </div>
  )
}

const styles = {
  wrapper: {
   // borderColor: 'grey',
    padding: '5px'
  }
}

export default SelectBox;