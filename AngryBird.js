const canvas = document.getElementById("angrybird");
const ourWorld = boxbox.createWorld(canvas);

ourWorld.createEntity({
  name: "bird",
  shape: "circle",
  radius: 1,
  imageStretchToFit: true,
  density: 4,
  x: 2,
  onKeyDown: function (e) {
    this.applyImpulse(200, 60);
  },
});

ourWorld.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(0,0,0)",
  width: 20,
  height: 0.5,
  y: 12.5,
});

const block = {
  name: "block",
  shape: "square",
  color: "red",
  width: 0.5,
  height: 4,
  onImpact: function (entity, force) {
    if (entity.name() === "bird") {
      this.color("black");
    }
  },
};

ourWorld.createEntity(block, {
  x: 15
}

ourWorld.createEntity(block, {
  x: 17
}

ourWorld.createEntity(block, {
  x: 16,
  y: 1,
  width: 4,
  height: .5
}