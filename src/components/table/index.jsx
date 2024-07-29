const Table = ({ columns = [], data = [] }) => {

  function flatCols(columns, result = [], rowSpan = 1 ) {
      columns.map(col => {
          if (col.columns) {
            rowSpan++; 
            flatCols(col?.columns, result, rowSpan)
          } else {
              result.push(col)
          }
      })

      return {
        result,
        rowSpan
      };
  }

  const orderColsOrigin = flatCols(columns)?.result;

  function generateHeader(columns, rowSpan) {
    let rows = [];

    function traverse(columns, depth) {
      if(!rows[depth]) rows[depth] = [];
      columns.forEach(col => {
        if (col.columns) {
          const colSpan = col.columns.reduce((span, c) => span + (c.columns ? c.columns.length : 1), 0)
          
          rows[depth].push(<td colspan={colSpan}> {col.caption} </td>);
          traverse(col.columns, depth + 1);
        } else {
          rows[depth].push(<td rowspan={3 - depth}> {col.caption} </td>)
        }
      })
    }

    columns.forEach(item => {
      if (item.dataField) {
        if (!rows[0]) rows[0] = [];
        rows[0].push(<th rowspan={rowSpan}> {item.caption} </th>)
      } else if (item.columns) {
        const colSpan = item.columns.reduce((span, c) => span + (c.columns ? c.columns.length : 1), 0);
        if (!rows[0]) rows[0] = [];
        rows[0].push(<th colspan={colSpan}> {item.caption} </th>);
        traverse(item.columns, 1);
      }
    })

    return rows.map(row => <tr>{row}</tr>);
  }
  
  const header = generateHeader(columns, flatCols(columns)?.rowSpan);
  console.log(header);

  const dataBody = data?.map(item => {
    return <tr>
      {
        orderColsOrigin.map((col, index) => { 
          return <td colSpan={index === 0 ? 6 : 1}> {item[col]} </td> 
        })
      }
    </tr>
  })

  const test = (
    <>
       <tr>
  	<td rowspan="6"> Tong </td>
  	<td>Khach hang dong y tra</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
  </tr>
  <tr>
  	<td>Cho thanh toan</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
  </tr>
  <tr>
  	<td>Cho thanh toan</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
  </tr>
  <tr>
  	<td>dich vu khach hang thay doi</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
  </tr>
  <tr>
  	<td>tong</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
    <td>6</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>5</td>
  </tr>
    </>
  )

  return (
    <table> 
      {header}
      {dataBody} 
      {test}
    </table>
  )
}

export default Table