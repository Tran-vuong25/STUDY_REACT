import React, { Component } from "react";
import CardCar from "../card/card-car";

// https://drive.google.com/drive/folders/1kaGEHc7IQJYCuXO-GHRO-KUFY1Xj9LHD?fbclid=IwAR3JxwIpgcSTrQJ9NTTGacXXZsVXwbC5lS8IAy_w7L2fxykzwkZzzBVTQEk

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

export default class ListCard extends Component {
  render() {
    const nameCyber = 'Cyber Soft';
    return (
      <div className="container mt-2 d-flex gap-2 text-center">
        {/* <Card/> */}
        {listProduct.map((item) => {
          // *Tạo props: name có giá trị là {item.name}
          return (
            <CardCar
              hinhAnh={item.img}
              gia={item.price}
              name={item.name}
              key={item.id}
            />
          );
        })}
        <ComponentCon tenCyber={nameCyber} />
      </div>
    );
  }
}

class ComponentCon extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        cupiditate natus magni voluptate. Quis officiis illo architecto
        accusamus adipisci perspiciatis.
        <br/>
        {/* Cyber Soft */}
        {this.props.tenCyber}
      </div>
    );
  }
}
