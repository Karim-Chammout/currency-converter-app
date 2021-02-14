import React from "react";

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    onChangeCurrecny,
    selectCurrency,
    onChangeAmount,
    amount
  } = props;
  
  return (
    <>
      <input type="number" value={amount} onChange={onChangeAmount} />
      <select value={selectCurrency} onChange={onChangeCurrecny} >
        {currencyOptions.map((option, index) => {
          return <option key={index} value={option}>{option}</option>
        })}
      </select>
    </>
  )
}

export default CurrencyRow;