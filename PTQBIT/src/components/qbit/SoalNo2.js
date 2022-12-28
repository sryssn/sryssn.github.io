import React from 'react';
import fruits from '../../utils/qbit/Fruits';

function SoalNo2() {
  const fruitsType = fruits.map((fruit) => (fruit.fruitType));
  const fruitType = [...new Set(fruitsType)];
  const localFruits = fruits.filter((fruit) => fruit.fruitType === 'LOCAL').map((fruit) => fruit.fruitName.toLowerCase());
  const importFruit = fruits.filter((fruit) => fruit.fruitType === 'IMPORT').map((fruit) => fruit.fruitName.toLowerCase());
  const importFruits = [...new Set(importFruit)];
  return (
    <>
      <p className="soal">
        2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah.
        Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
      </p>
      <span>
        Jawaban:
        {' '}
        {fruitType.length}
        {' '}
        wadah.
        <br />
        Wadah local:
        {' '}
        {localFruits.join(', ')}
        <br />
        Wadah import:
        {' '}
        {importFruits.join(', ')}
      </span>
    </>
  );
}

export default SoalNo2;
