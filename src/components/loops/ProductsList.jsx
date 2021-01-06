import React from 'react';
import ProductsList from '../../data/products';

export default () => {
  const list = ProductsList.map((products) => {
    return (
      <tr key={products.id}>
        <td>
          {products.id}
        </td>
        <td>
          {products.name}
        </td>
        <td>
          {products.price}
        </td>
      </tr>
    )
  })

  return (
    <>
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
          {list}
        </tbody>
      </table>
    </>
  )
}