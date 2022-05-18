var engine = Matter.Engine.create();

var inputFlag = true;

var render = Matter.Render.create({
  element: document.body,
    engine: engine,
    options: {
    width: 1600,
    height: 800, 
    wireframes: false
  }
});
      
Matter.use('matter-tools');
Matter.use('matter-collision-events');
Matter.use('matter-attractors');

var ground = Matter.Bodies.rectangle(800, 500, 1200, 20, { isStatic: true }); 
      
var ball = Matter.Bodies.circle(300, 470, 20);

var target = Matter.Bodies.rectangle(1200, 483, 100, 10, { isStatic: true, color: "green"});

var mouse = Matter.Mouse.create(render.canvas);
var mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
  render: {visible: false}
  }
});
render.mouse = mouse;

Matter.World.add(engine.world, [ground, ball, mouseConstraint, target]);

Matter.Runner.run(engine);
Matter.Render.run(render);