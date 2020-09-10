import React, {Component, useState} from 'react';

function kilogram (berat) {
  let kg = berat / 1000;
  return kg; 
}

const Hooks = () => {
  const [buah, setBuah] = useState([])
  const [nama, setNama] = useState('');
  const [berat, setBerat] = useState('');
  const [harga, setHarga] = useState('');

}

const handleSubmit = (event) => {
  event.preventDefault();
  let input = {nama: this.state.nama, harga: this.state.harga, berat: this.state.berat};
  setBuah(input);
  setNama("");
  setHarga("");
  setBerat("");

}
class Coli extends React.Component {

  handleSubmit(event) {
    this.setState({
    })
  }

  handleNama(event) { this.setState({nama: event.target.value}) }
  handleHarga(event) { this.setState({harga: event.target.value}) }
  handleBerat(event) { this.setState({berat: event.target.value}) }

  handleEdit(event, index) {
    event.preventDefault()
    this.setState({index: index})
    let buahMana = this.state.buah[index];
    this.state.buah.splice(index, 1);
    console.log(`Edit buah ${buahMana.nama}`);
    
    this.setState({
      nama: buahMana.nama,
      harga: buahMana.harga,
      berat: buahMana.berat,
    })
  }

  handleDelete(event, index) {
    event.preventDefault()
    let buahMana = this.state.buah[index];
    alert(`Buah ${buahMana.nama} akan dihapus `)
    this.state.buah.splice(index, 1);
    this.setState({
      buah: this.state.buah,
    })
    // console.log(this.state.buah)
  }
  

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
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.buah.map((el, index) => {
            return (
              <tr>
                <td>{el.nama}</td>
                <td>{el.harga}</td>
                <td>{kilogram(el.berat)} Kg</td>
                <td style={{width: 100}}>
                  <a href="#" onClick={(e) => this.handleEdit(e, index)} className="btn-edit">Edit </a>
                  <a href="#" onClick={(e) => this.handleDelete(e, index)} className="btn-delete"> Delete</a>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>

        <h1>Tambah Buah</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Nama : </label>
          <input onChange={this.handleNama} value={this.state.nama}/><br/>
          <label>Harga : </label>
          <input onChange={this.handleHarga} value={this.state.harga}/><br/>
          <label>Berat : </label>
          <input onChange={this.handleBerat} value={this.state.berat}/><br/>
          <button>Tambah</button>
        </form>

      </>
    )
  }
}

export default Hooks;

