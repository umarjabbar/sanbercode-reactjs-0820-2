import React from 'react';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

function kilogram (berat) {
  let kg = berat / 1000;
  return kg; 
}

class TableBuah extends React.Component {
  render() {
    return (
      <>
        <h2 className="Judul-table">Tabel Harga Buah</h2>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody>
            {dataHargaBuah.map(el=> {
            return (
              <tr>
                <td>{el.nama}</td>
                <td>{el.harga}</td>
                <td>{kilogram(el.berat)} Kg</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}


export default TableBuah;

