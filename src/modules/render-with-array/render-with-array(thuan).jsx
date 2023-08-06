import React, { Component } from "react";

const listProduct = [
  {
    id: "1",
    name: "Black Car",
    price: "99$",
    img: "/images/cars/black-car.jpg",
  },
  { id: "2", name: "Red Car", price: "100$", img: "/images/cars/red-car.jpg" },
  {
    id: "3",
    name: "Silver Car",
    price: "123$",
    img: "/images/cars/silver-car.jpg",
  },
  {
    id: "4",
    name: "Steel Car",
    price: "322$",
    img: "/images/cars/steel-car.jpg",
  },
];

export default class RenderWithArayThuan extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Black Car</td>
              <td>99$</td>
              <td>
                <img
                  style={{
                    width: 200, //* => 200px
                  }}
                  src="/images/cars/black-car.jpg"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Red Car</td>
              <td>100$</td>
              <td>
                <img
                  style={{
                    width: 200, //* => 200px
                  }}
                  src="/images/cars/red-car.jpg"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Silver Car</td>
              <td>123$</td>
              <td>
                <img
                  style={{
                    width: 200, //* => 200px
                  }}
                  src="/images/cars/silver-car.jpg"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Steel Car</td>
              <td>322$</td>
              <td>
                <img
                  style={{
                    width: 200, //* => 200px
                  }}
                  src="/images/cars/steel-car.jpg"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
