const canvas = document.getElementById("AngryBird");
const ourWorld = window.boxbox.createWorld(canvas);
const offsetX = 30.60;
const offsetY = 27.60;
drawCanvas();
var inputflag = 1;
var chargeflag = 1;

function drawCanvas() {
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

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

  ourWorld.createEntity({
    name: "projectile",
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
        inputflag = 0;
      }
    },
    onImpact: function (entity, force) {
      if (entity.name() === "negative-charge") {
        this.applyImpulse(60);
      }
      if (entity.name() === "target") {
        this._world._destroy(this);
      }
      if (entity.name() === "ground") {
        this._world._destroy(this);
      }
    },  
  });

  const block = {
    name: "target",
    shape: "square",
    type: "static",
    color: "pink",
    width: 4,
    height: 0.4,
    onImpact: function (entity, force) {
      if (entity.name() === "projectile") {
        this.color("green");
      }
    },
  };

  ourWorld.createEntity(block, {
    y: 12,
    x: 20
  });
}

canvas.addEventListener("click", function(event) { 
    var userX = event.clientX / offsetX;
    var userY = event.clientY / offsetY;
    placeCharge(userX, userY);
});

function placeCharge(userX, userY) {
  ourWorld.createEntity({
    name: "negative-charge",
    shape: "square",
    type: "static",
    color: "purple",
    width: 3,
    height: 0.5,
    x: userX,
    y: userY
  })
  console.log(userX);
  console.log(userY);
}