/* TABLERO O ESCENARIO */
//Escenario
const escenario1 = [
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  //
  [
    // TERCER
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // QUINTA
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEXTA
    2, 1, 0, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEPTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // OCTAVA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // NOVENA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // DECIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // ULTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // DECIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // NOVENA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // OCTAVA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEPTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // Sexta
    2, 1, 0, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // Quinta
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // TERCERA
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
];

/**COLORES PARA EL ESCENARIO 1 */
/*
Contrato: i,cell,j => function (Recibe tres parametros y retrna una serie de funciones)
Propósito: Colorear el tablero dependiendo del numero de celda actual del escenario
Prototipo: coloreaTablero1(i,cell,j){}
*/
function coloreaTablero1(i, cell, j) {
  switch (cell) {
    case 0:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#014779');
      rect(j * lado, i * lado, lado, lado);
      break;
    case 1:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#013A63');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 2:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#252525');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 3:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#01538D');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 4:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#015FA2');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 5:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#016BB7');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 6:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#0177CB');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 7:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#0183DF');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 8:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#018FF4');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 9:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#0B99FE');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 10:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#20A1FE');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 11:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#34AAFE');
      rect(j * lado, i * lado, lado, lado);
      break;

    default:
      return null;
      break;
  }
}



const escenario2 = [
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 2,
  ],
  [
    2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
];

/*
Contrato: i,cell,j => function (Recibe tres parametros y retrna una serie de funciones)
Propósito: Colorear el tablero dependiendo del numero de celda actual del escenario
Prototipo: coloreaTablero1(i,cell,j){}
*/
function coloreaTablero2(i, cell, j) {
  switch (cell) {
    case 0:
      strokeWeight(0.5);
      stroke('#C2C2C2');
      fill('#C2C2C2');
       rect(j * lado, i * lado, lado, lado);
      break;
    case 1:
      strokeWeight(0.5);
      stroke('#635B86');
      fill('#C2C2C2');
      rect(j * lado, i * lado, lado, lado);
      break;
    case 2:
      strokeWeight(0.5);
    stroke('#635B86');
    fill('#635B86');
    rect(j * lado, i * lado, lado, lado);
    break;
    default:
      return null;
      break;
  }
}

const escenario4 = [
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  //
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  [
    // TERCER
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    // TERCER
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // QUINTA-
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // QUINTA-
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // Sexta
    2, 1, 0, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // QUINTA-
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // QUINTA-
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // TERCERA
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    // TERCERA
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
];

/*
Contrato: i,cell,j => function (Recibe tres parametros y retrna una serie de funciones)
Propósito: Colorear el tablero dependiendo del numero de celda actual del escenario
Prototipo: coloreaTablero1(i,cell,j){}
*/
function coloreaTablero4(i, cell, j) {
  switch (cell) {
    case 0:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#8C545F');
      rect(j * lado, i * lado, lado, lado);
      break;
    case 1:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#804D57');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 2:
      strokeWeight(0.5);
      stroke('#A3292D');
      fill('#A3292D');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 3:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#995C68');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 4:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#A36672');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 5:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#AB737E');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 6:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#B3808A');
      rect(j * lado, i * lado, lado, lado);
      break;

    default:
      return null;
      break;
  }
}


const escenario5 = [
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  //
  [
    // TERCER
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // QUINTA
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEXTA
    2, 1, 0, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEPTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // OCTAVA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // NOVENA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // DECIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // ULTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // DECIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // NOVENA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // OCTAVA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEPTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // Sexta
    2, 1, 0, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // Quinta
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // TERCERA
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
];

/*
Contrato: i,cell,j => function (Recibe tres parametros y retrna una serie de funciones)
Propósito: Colorear el tablero dependiendo del numero de celda actual del escenario
Prototipo: coloreaTablero1(i,cell,j){}
*/
function coloreaTablero5(i, cell, j) {
  switch (cell) {
    case 0:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#972024');
      rect(j * lado, i * lado, lado, lado);
      break;
    case 1:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#871D20');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 2:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#252525');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 3:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#A82428');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 4:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#B9272C');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 5:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#CA2B30');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 6:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#D4353A');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 7:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#D8464B');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 8:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#DB575B');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 9:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#DF686C');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 10:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#E2787C');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 11:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#34AAFE');
      rect(j * lado, i * lado, lado, lado);
      break;

    default:
      return null;
      break;
  }
}
const escenario3 = [
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  //
  [
    // TERCER
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // QUINTA
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEXTA
    2, 1, 0, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEPTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // OCTAVA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // NOVENA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // DECIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // ULTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // DECIMA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7,
    5, 4, 3, 0, 1, 2,
  ],
  [
    // NOVENA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // OCTAVA
    2, 1, 0, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // SEPTIMA
    2, 1, 0, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // Sexta
    2, 1, 0, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // Quinta
    2, 1, 0, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3,
    0, 1, 2,
  ],
  [
    // CUARTA
    2, 1, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    0, 1, 2,
  ],
  [
    // TERCERA
    2, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 1, 2,
  ],
  [
    //SEGUNDA
    2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2,
  ],
  [
    // PRIMERA
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ],
];
/*
Contrato: i,cell,j => function (Recibe tres parametros y retrna una serie de funciones)
Propósito: Colorear el tablero dependiendo del numero de celda actual del escenario
Prototipo: coloreaTablero1(i,cell,j){}
*/
function coloreaTablero3(i, cell, j) {
  switch (cell) {
    case 0:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#353073');
      rect(j * lado, i * lado, lado, lado);
      break;
    case 1:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#2E2A65');
      rect(j * lado, i * lado, lado, lado);
      break;
 //este
    case 2:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#252525');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 3:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#3B3681');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 4:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#423C90');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 5:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#48429E');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 6:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#4F48AD');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 7:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#5952B7');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 8:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#6761BD');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 9:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#756FC3');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 10:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#837EC9');
      rect(j * lado, i * lado, lado, lado);
      break;

    case 11:
      strokeWeight(0.5);
      stroke('#252525');
      fill('#908CCF');
      rect(j * lado, i * lado, lado, lado);
      break;

    default:
      return null;
      break;
  }
}


//----------------------------------
//FUNCIONES PARA DIBUJAR TABLERO
/*
Contrato: l,f,index=0 => function() (No recibe ningun parametro pero retorna una funcion)
Propósito: Esta funcion denominada forEach2 (debido a que forEach ya estaba definida) lo que hace es poder recorrer una matriz (lista de listas) teniendo en cuenta su columna y fila actual lo cual nos sirve para colorear el escenario, que es una matriz.
Prototipo: forEach2(l,f,index=0){}
Aclaracion: Esta funcion fue implementada en un principio por el codigo del profesor el cual nos mostro inicialmente.
*/
function forEach2(l, f, index = 0) {
  if (!isEmpty(l)) {
    f(first(l), index);
    forEach2(rest(l), f, index + 1);
  }
}
//-------------------------------------
/*
Contrato: none => function (No recibe ningun parametro pero retorna una funcion)
Propósito: Colorear el tablero a partir de un doble forEach2 dependiendo del tablero actual, pues cada tablero tiene su funcion de color especifico
Prototipo: compruebaTablero()
*/
function compruebaTablero() {
  if (Mundo.escenario == escenario1) {
    forEach2(Mundo.escenario, (row, i) => {
      forEach2(row, (cell, j) => {
        coloreaTablero1(i, cell, j);
      });
    });
  } else if (Mundo.escenario == escenario2) {
    forEach2(Mundo.escenario, (row, i) => {
      forEach2(row, (cell, j) => {
        coloreaTablero2(i, cell, j);
      });
    });
  } else if (Mundo.escenario == escenario3) {
    forEach2(Mundo.escenario, (row, i) => {
      forEach2(row, (cell, j) => {
        coloreaTablero3(i, cell, j);
      });
    });
  } else if (Mundo.escenario == escenario4) {
    forEach2(Mundo.escenario, (row, i) => {
      forEach2(row, (cell, j) => {
        coloreaTablero4(i, cell, j);
      });
    });
  } else if (Mundo.escenario == escenario5) {
    forEach2(Mundo.escenario, (row, i) => {
      forEach2(row, (cell, j) => {
        coloreaTablero5(i, cell, j);
      });
    });
  }else if (Mundo.escenario == escenario6) {
    forEach2(Mundo.escenario, (row, i) => {
      forEach2(row, (cell, j) => {
        coloreaTablero6(i, cell, j);
      });
    });
  }
  else {
    return null;
  }
}

