import React, { useState } from 'react';
import allMenu from '../../utils/MenuPage/AllMenu';

function MenuBody() {
  const [category, setCategory] = useState('');
  return (
    <div className="menu-body">
      <div className="beverages">
        <h2>COLD & HOT BEVERAGES</h2>
        <img src="MenuPage/title-separator.png" alt="title separator" loading="lazy" />
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
        </h6>
      </div>
      <div className="button-menu">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={() => setCategory('COFFEE')} />
          <label className="btn btn-outline-dark" htmlFor="btnradio1">COFFEE</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => setCategory('NON-COFFEE')} />
          <label className="btn btn-outline-dark" htmlFor="btnradio2">NON-COFFEE</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => setCategory('FOOD')} />
          <label className="btn btn-outline-dark" htmlFor="btnradio3">FOOD</label>
        </div>
      </div>
      <div className="list-menu">
        { category
          ? allMenu.filter((menu) => menu.category === category).map((menu) => (
            <div className="item-menu">
              <div className="card m-2" key={menu.id}>
                <img src={menu.image} loading="lazy" className="card-img-top" alt={menu.title} />
                <div className="card-body card-body-menu">
                  <h5 className="card-title">{menu.title}</h5>
                  <p className="card-text">{menu.description}</p>
                </div>
              </div>
            </div>
          )) : allMenu.map((menu) => (
            <div className="item-menu">
              <div className="card m-2" key={menu.id}>
                <img src={menu.image} loading="lazy" className="card-img-top" alt={menu.title} />
                <div className="card-body card-body-menu">
                  <h5 className="card-title">{menu.title}</h5>
                  <p className="card-text">{menu.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MenuBody;
