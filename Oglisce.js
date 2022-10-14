export class Oglisce {
  constructor(seznamKoordinat) {
    this.zacetneKoordinate = [...seznamKoordinat];
    this.zacetneKoordinate.push(1);
    this.risaniVektor = [
      this.zacetneKoordinate[0],
      this.zacetneKoordinate[1],
      this.zacetneKoordinate[2],
      1,
    ];
  }

  // Nariše okrogla vozlišča
  // arc(x, y, r, začetni kot, končni kot) --- x, y sta središčne koordinate krogota, r je polmer, kot povek kok kroga nariše 2 pija je cel krog 
  narisiOglisce(ctx) {
    ctx.beginPath();
    ctx.arc(
      700 + this.risaniVektor[0] * 100,
      350 + this.risaniVektor[1] * 100,
      2,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "red";
    ctx.fill();
  }

  // Kvadratki so hitrejši za narisat, sam krogci so lepši
  narisiKvadratnoOglisce(ctx, vektor) {
    ctx.fillStyle = "rgb(140,0," + Math.floor(0) + ")";
    ctx.fillRect(
      700 + vektor[0] * 100,
      350 + vektor[1] * 100,
      10 + vektor[2],
      10 + vektor[2]
    );
  }
}