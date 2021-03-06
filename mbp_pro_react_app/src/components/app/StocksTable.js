import { useEffect, useState } from 'react';
import { Table, Image } from 'react-bootstrap';
import { getStocksApi } from '../../lib/api';
import '../styles/table.css';

const StocksTable = (props) => {
  const [stocks, setStocks] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (props.method === '') {
      getStocksApi().then((response) => {
        setStocks(response.data.data);
        setShowLoading(false);
      });
    } else if (props.method === 'Alphabetically') {
      const sortedArr = [...stocks];

      //   sort A to Z
      sortedArr.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) {
          return -1;
        }

        return 0;
      });

      setStocks(sortedArr);
    } else if (props.method === 'Numerically') {
      const sortedArr = [...stocks];

      //   sort from biggest to smallest
      sortedArr.sort((a, b) => {
        return b.allData.price - a.allData.price;
      });

      setStocks(sortedArr);
    }

    // eslint-disable-next-line
  }, [props]);

  const tableData = () => {
    return (
      <div className='center-table'>
        <Table striped bordered hover className='m-5 table-size'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Current Price</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((stock) => {
              return (
                <tr key={stock.id}>
                  <td>{stock.id}</td>
                  <td>
                    <Image
                      src={stock.allData.image}
                      alt={`${stock.name} logo`}
                    />
                  </td>
                  <td>{stock.name}</td>
                  <td>{stock.allData.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <>
      {!showLoading && tableData()}
      {showLoading && <h1>Loading...</h1>}
    </>
  );
};

export default StocksTable;
