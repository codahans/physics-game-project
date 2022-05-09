const canvas = document.getElementById("AngryBird");
const ourWorld = window.boxbox.createWorld(canvas);
var inputflag = 1;
var chargeflag = 1;

ourWorld.createEntity({
  name: "bird",
  shape: "circle",
  image: "negative-electron.png",
  radius: 1,
  imageStretchToFit: true,
  density: 4,
  x: 1.5,
  y: 11,
  onKeyDown: function (e) {
    if (e.key === " " && inputflag) {
      this.applyImpulse(120, 60);
      console.log(e);
      inputflag = 0;
    }
  },
  onImpact: function (entity, force) {
    if (entity.name() === "positive-charge") {
      this.applyImpulse(90, 65);
    }
    if (entity.name() === "target") {
      this._world._destroy(this);
    }
    if (entity.name() === "ground") {
      this._world._destroy(this);
    }
  },  
});

ourWorld.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(0,0,0)",
  width: 42,
  height: 0.5,
  y: 12.5,
  x: 1,
});

ourWorld.createEntity({
  name: "spawnpoint",
  shape: "square",
  type: "static",
  color: "red",
  width: 4,
  height: 0.5,
  y: 12,
  x: 1,
});

const block = {
  name: "target",
  shape: "square",
  type: "static",
  color: "pink",
  width: 4,
  height: 0.4,
  onImpact: function (entity, force) {
    if (entity.name() === "bird") {
      this.color("green");
    }
  },
};

function placeCharge() {
  ourWorld.createEntity({
    name: "positive-charge",
    shape: "square",
    type: "static",
    color: "purple",
    width: 3,
    height: 0.5,
    x: 10,
    y: 12,
  })
}

ourWorld.createEntity(block, {
  y: 12,
  x: 20
})