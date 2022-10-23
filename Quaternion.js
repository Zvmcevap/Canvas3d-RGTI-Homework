// Probimo rotacije s kvaternioni :S
// https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles
export class Quaternion {
  constructor(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  // *Mislm* da se tko rotira s kvaternioni :S
  quatObrat(seznamRotacij) {
    //c cosinus, s sinus za vsako os posebej
    let cx = Math.cos(seznamRotacij[0] * 0.5);
    const sx = Math.sin(seznamRotacij[0] * 0.5);

    const cy = Math.cos(seznamRotacij[1] * 0.5);
    const sy = Math.sin(seznamRotacij[1] * 0.5);

    const cz = Math.cos(seznamRotacij[2] * 0.5);
    const sz = Math.sin(seznamRotacij[2] * 0.5);

    // Potem ko imamo cosinuse pa sinuse za x y z osi...
    this.w = cx * cy * cz + sx * sy * sz;
    this.x = sx * cy * cz - cx * sy * sz;
    this.y = cx * sy * cz + sx * cy * sz;
    this.z = cx * cy * sz - sx * sy * cz;
  }

  // Nevem, preberi spodaj
  // https://danceswithcode.net/engineeringnotes/quaternions/quaternions.html
  quatVRotMatriko() {
    // se prav če w, x, y, z napišemo kot (Da bom laži prepisoval formulo)
    let q0 = this.w;
    let q1 = this.x;
    let q2 = this.y;
    let q3 = this.z;

    // vVrstaStolpec, pol k vrnem "transpondiram" zato ker v Applikacija.js jih pišem M[Solpec][Vrsta]
    let v00 = 1 - 2 * q2 * q2 - 2 * q3 * q3;
    let v01 = 2 * q1 * q2 - 2 * q0 * q3;
    let v02 = 2 * q1 * q3 + 2 * q0 * q2;

    let v10 = 2 * q1 * q2 + 2 * q0 * q3;
    let v11 = 1 - 2 * q1 * q1 - 2 * q3 * q3;
    let v12 = 2 * q2 * q3 - 2 * q0 * q1;

    let v20 = 2 * q1 * q3 - 2 * q0 * q2;
    let v21 = 2 * q2 * q3 + 2 * q0 * q1;
    let v22 = 1 - 2 * q1 * q1 - 2 * q2 * q2;

    return [
      [v00, v10, v20, 0],
      [v01, v11, v21, 0],
      [v02, v12, v22, 0],
      [0, 0, 0, 1],
    ];
  }

  normalizirajKvaternion(staticComponent) {
    if (this.w > 1) {
      this.w = 1;
    }
    if (this.x > 1) {
      this.x = 1;
    }
    if (this.y > 1) {
      this.y = 1;
    }
    if (this.z > 1) {
      this.z = 1;
    }

    let delitelj = Math.sqrt(
      this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z
    );

    this.x /= delitelj;
    this.y /= delitelj;
    this.z /= delitelj;
    this.w /= delitelj;
  }
}
