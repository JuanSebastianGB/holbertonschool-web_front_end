const roomDimensions = {
  width: 50,
  height: 100,
  getArea () {
    return this.width * this.height;
  }
};

const { getArea } = roomDimensions;
const boundGetArea = getArea.bind(roomDimensions);
boundGetArea();
