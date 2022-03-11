export default class Spaceship {
  positionY;
  speed;
  shipExpression;

  constructor(y, s, e) {
    this.positionY = y;
    this.speed = s;
    this.shipExpression = e;
  }

  moveShip() {
    this.positionY += this.speed;
  }

  resetShip() {
    this.positionY = 0;
  }

  generateRandomExpression(operation) {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    let expression;

    if (operation === "+") {
      expression = `${num1} + ${num2}`;
    } else if (operation === "-") {
      num1 >= num2
        ? (expression = `${num1} - ${num2}`)
        : (expression = `${num2} - ${num1}`);
    }

    console.log(expression);
    return expression;
  }

  adjustDifficulty(difficulty) {
    if (difficulty === "hard") {
      this.speed *= 2;
    }
  }
}
