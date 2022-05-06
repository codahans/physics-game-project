const canvas = document.getElementById("AngryBird");
const ourWorld = window.boxbox.createWorld(canvas);

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
  width: 60,
  height: 0.5,
  y: 12.5,
});

const block = {
  name: "block",
  shape: "square",
  color: "pink",
  width: 4,
  height: 0.5,
  onImpact: function (entity, force) {
    if (entity.name() === "bird") {
      this.color("black");
    }
  },
};

ourWorld.createEntity(block, {
  y: 12
})