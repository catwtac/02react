

function calculPourcentage(nombreACalculer: number, tva: number): number {

  const tvaMontant = (nombreACalculer * tva) / 100;
  return tvaMontant;
}

export default calculPourcentage;
