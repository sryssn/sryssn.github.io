import React from 'react';
import fruits from '../../utils/qbit/Fruits';

function SoalNo3() {
  const localFruits = fruits.filter((fruit) => fruit.fruitType === 'LOCAL').map((fruit) => fruit.stock);
  const importFruits = fruits.filter((fruit) => fruit.fruitType === 'IMPORT').map((fruit) => fruit.stock);

  function sumFunc(total, num) {
    return total + num;
  }

  return (
    <>
      <p className="soal">3. Berapa total stock buah yang ada di masing-masing wadah?</p>
      <span>
        Jawaban: Wadah local
        {' '}
        {localFruits.reduce(sumFunc)}
        {' '}
        stock. Wadah import
        {' '}
        {importFruits.reduce(sumFunc)}
        {' '}
        stock
      </span>
    </>
  );
}

export default SoalNo3;
