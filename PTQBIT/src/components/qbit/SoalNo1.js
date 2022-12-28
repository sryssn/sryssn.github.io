import React from 'react';
import fruits from '../../utils/qbit/Fruits';

function SoalNo1() {
  const fruitNameToLowerCase = fruits.map((fruit) => (fruit.fruitName).toLowerCase());
  const fruitName = [...new Set(fruitNameToLowerCase)];
  return (
    <>
      <p className="soal">1. Buah apa saja yang dimiliki Andi?</p>
      <span>
        Jawaban:
        {' '}
        {fruitName.join(', ')}
      </span>
    </>
  );
}

export default SoalNo1;
