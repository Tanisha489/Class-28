class Chain{

constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
length : 10,
stiffness: 0.5,
}
this.pointB = pointB
this.chain = Constraint.create(options)
World.add(world,this.chain);

}
fly(){
 this.chain.bodyA=null   
}




display(){
    if(this.chain.bodyA){
    var pa=this.chain.bodyA.position;
    var pb = this.pointB;
    strokeWeight(3);
   line (pa.x,pa.y,pb.x,pb.y)
    }
}



}