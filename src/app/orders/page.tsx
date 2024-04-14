import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className=''>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>237861238721</td>
            <td>19.07.2023</td>
            <td>89.90</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td>On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage