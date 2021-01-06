const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

    function preload() {

    }
function setup(){
    createCanvas(800,600)
    engine = Engine.create();
    world = engine.world;
    hex=new Polygon()
    rope=new Rope(hex.body,{x:100,y:500})
    block1=new Blocks(450,400)
    platform=new Platform(450,420,)
    block2=new Blocks(415,400)
    block3=new Blocks(485,400)
    block4=new Blocks(432,310)
    block5=new Blocks(468,310)
    block6=new Blocks(450,250)
    platform2=new Platform(650,250)
    block7=new Blocks(650,230)
    block8=new Blocks(615,230)
    block9=new Blocks(685,230)
    block10=new Blocks(632,190)
    block11=new Blocks(668,190)
    block12=new Blocks(650,110)
}
   
function draw(){
    background(234)
    Engine.update(engine);
    hex.display()
    rope.display()
    block1.display()
    platform.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    platform2.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
}
function mouseDragged(){
    Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly()

}