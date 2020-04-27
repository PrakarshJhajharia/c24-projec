// You could have multiple flags like: start, launch to indicate the state of the game.
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


var engine, world;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ground1,can
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1200,400);
    ground1 = new gr(600,400,1200,20)
    can = new canon(50,370)
}

function draw() {
    background(0);
    Engine.update(engine);
    ground1.display();
    can.display()
// Remember to update the Matter Engine and set the background.
}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}