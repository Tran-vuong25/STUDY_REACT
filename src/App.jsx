import Card from "./modules/cach-tao-component/card";
import RccComponent from "./modules/cach-tao-component/rcc-component";
import RfcComponent from "./modules/cach-tao-component/rfc-component";
import HomeLayout from "./modules/home-layout/home-layout";
import BindingData from "./modules/binding-data/binding-data";
import HandleEvent from "./modules/handle-event/handle-event";
import StyleInReact from "./modules/style-in-reactjs";
import State from "./modules/state/state";
import TangGiamFontSize from "./modules/state/tang-giam-font-size";
import ChangeColorHouse from "./modules/state/change-color-house/change-color-house";
import ChangeBackGroundCar from "./modules/state/change-bg-car/change-bg-car";
import RenderWithArayThuan from "./modules/render-with-array/render-with-array(thuan)";
import RenderWithArayBiding from "./modules/render-with-array/render-with-array(Biding)";
import ListCard from "./modules/props/list-card/list-card-car";
import PhoneShop from "./modules/props/phone-shop/phone-shop";
import PhoneShopV1 from "./modules/props/phone-shop/phone-shop(1)";
import CountRedux from "./modules/demo-redux/count";
import ChangeCarRedux from "./modules/demo-redux/change-car-redux/change-car-redux";
import PhoneShopRedux from "./modules/demo-redux/phone-shop-redux/phone-shop-redux";

import { ReactForm } from "./modules/react-form";

// đây là file, tạo component App để đưa lên giao diện.
// js + css + html => .jsx
function App() {
  return (
    <>
      <ReactForm />
      {/* <PhoneShopRedux /> */}
      {/* <ChangeCarRedux /> */}
      {/* <CountRedux /> */}

      {/* <PhoneShopV1 /> */}
      {/* <PhoneShop /> */}
      {/* {<ListCard />} */}

      {/* <RenderWithArayBiding/> */}
      {/* <RenderWithArayThuan /> */}

      {/* <ChangeBackGroundCar/> */}
      {/* <ChangeColorHouse /> */}
      {/* <TangGiamFontSize /> */}
      {/* <State/> */}

      {/* <StyleInReact /> */}
      {/* <HandleEvent /> */}

      {/* <BindingData /> */}
      {/* <HomeLayout /> */}
      {/* <h1>Hello World</h1> */}

      {/* 1. */}
      {/* <RccComponent /> */}
      {/* <input /> */}

      {/* 2. */}
      {/* <RccComponent></RccComponent> */}
      {/* <p></p> */}

      {/* <RfcComponent /> */}

      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </>
  );
}

export default App;
