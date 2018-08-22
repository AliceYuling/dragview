class Node {
  constructor(node) {
    this.left = node.left
    this.top = node.top
    this.width = node.width
    this.height = node.height
  }

  getLeftTopCoord() {
    let coord = {
      x: this.left,
      y: this.top
    }
    return coord
  }

  getTopCoord() {
    let coord = {
      x: this.left + this.width/2,
      y: this.top
    }
    return coord
  }

  getRightTopCoord() {
    let coord = {
      x: this.left + this.width,
      y: this.top
    }
    return coord
  }

  getLeftCenterCoord() {
    let coord  = {
      x: this.left,
      y: this.top + this.height/2
    }
    return coord
  }

  getRightCenterCoord() {
    let coord = {
      x: this.left + this.width,
      y: this.top + this.height/2
    }
    return coord
  }

  getLeftBottomCoord() {
    let coord = {
      x: this.left,
      y: this.top + this.height
    }
    return coord
  }

  getBottomCoord() {
    let coord = {
      x: this.left + this.width/2,
      y: this.top + this.height
    }
    return coord
  }

  getRightBottomCoord() {
    let coord = {
      x: this.left + this.width,
      y: this.top + this.height
    }
    return coord
  }
}

export default Node