import Fernanda from "../assets/Fernanda.png"
import Raimundo from "../assets/Raimundo.png"

export function getVotingCategoriesData() {

  // Remember ID:0 = 'Null' > reserved vote id!

  return {
    PREFEITO: {
      digits: 2,
      candidates: [
        {Id: 11, Nome: "PATA ROUCA", Partido: "FAMILIA ROUBA MAIS FAZ", pictureUrl: "https://i.ibb.co/bXSjSqg/Fernanda.png"},
        {Id: 15, Nome: "BULDOG DA SHOPEE", Partido: "SOTOMATAKA", pictureUrl: "https://i.ibb.co/qMjwqTq/Raimundo.png"},
      ]
    },
    // bebidas: {
    //   digits: 3,
    //   candidates: [
    //     {Id: 444, Nome: "Refrigerante", Partido: "RefriBra", pictureUrl: "refri.png"},
    //     {Id: 777, Nome: "Suco", Partido: "Frutas", pictureUrl: "suco.png"},
    //     {Id: 999, Nome: "Água", Partido: "Potável", pictureUrl: "agua.png"}
    //   ]
    // },
    // automoveis: { //Basta descomentar isso para funcionar!
    //   digits: 4,
    //   candidates: [
    //     {Id: 1111, Nome: "Carro", Partido: "Combustão"},
    //     {Id: 2222, Nome: "Bicicleta", Partido: "Ambiente"},
    //     {Id: 3333, Nome: "Aviao", Partido: "Nuvem"}
    //   ]
    // }
  }
}

