import { useState } from 'react';
import DropDownForm from './DropDownForm';
import StocksTable from './StocksTable';

const StockPage = () => {
  const [formSort, setFormSort] = useState('');

  const sortMethodFunc = (value) => {
    setFormSort(value);
  };

  return (
    <>
      <DropDownForm func={sortMethodFunc} />
      <StocksTable method={formSort} />
    </>
  );
};

export default StockPage;
