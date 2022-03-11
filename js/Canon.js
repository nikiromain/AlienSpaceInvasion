export default class Canon {
  positionX;
  canonAnswer;
  shotFired;

  constructor(x, a, f) {
    this.positionX = x;
    this.canonAnswer = a;
    this.shotFired = f;
  }

  moveCanonRight(element) {
    if (this.shotFired) {
      return;
    }
    this.positionX++;
    if (this.positionX > 5) {
      this.positionX = 1;
    }
    element.style.gridColumn = this.positionX;
  }

  moveCanonLeft(element) {
    if (this.shotFired) {
      return;
    }
    this.positionX--;
    if (this.positionX < 0) {
      this.positionX = 5;
    }
    element.style.gridColumn = this.positionX;
  }

  updateCanonText(canonElement) {
    canonElement.innerText = this.canonAnswer;
  }
}
