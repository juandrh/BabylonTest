// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Evolution EcoSystem

// Creature class

// Create a "bloop" creature



class Agent {
  constructor() {

    this.r =Math.random()*3;
    this.maxspeed = (3-this.r)/1;

    this.agentMesh = BABYLON.MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 2*this.r, segments: 8 },
      scene
    );

    this.agentMesh.position.x= Math.random()*120-60;
    this.agentMesh.position.z= Math.random()*120-60;
    this.agentMesh.position.y= 10;
    this.health = 200; // Life timer
    this.xoff = Math.random()*1000; // For perlin noise
    this.zoff = Math.random()*1000; 
   
     
  }

  run() {
    this.update();
    this.borders();
    //this.display();
  }

 

  // At any moment there is a teeny, tiny chance a bloop will reproduce
 /*  reproduce() {
    // asexual reproduction
    if (random(1) < 0.0005) {
      // Child is exact copy of single parent
      let childDNA = this.dna.copy();
      // Child DNA can mutate
      childDNA.mutate(0.01);
      return new Bloop(this.position, childDNA);
    } else {
      return null;
    }
  } */

  
  update() {
    
    let vx = (noise.perlin2(this.xoff,0))*this.maxspeed; 
    let vz = (noise.perlin2(0,this.zoff))*this.maxspeed; 
    this.xoff += 0.005;
    this.zoff += 0.005;   
    this.agentMesh.position.x += vx;
    this.agentMesh.position.z += vz;
    
    this.health -= 0.2;
  }

 
  borders() {
    const width = 150;
    if (this.agentMesh.position.x < -width/2+this.r/2) this.agentMesh.position.x = width/2-this.r/2;
    if (this.agentMesh.position.x > width/2-this.r/2) this.agentMesh.position.x = -width/2+this.r/2;
    if (this.agentMesh.position.z < -width/2+this.r/2) this.agentMesh.position.z = width/2-this.r/2;    
    if (this.agentMesh.position.z > width/2-this.r/2) this.agentMesh.position.z = -width/2+this.r/2;
  }

  isDead() {
    if (this.health < 0.0) {
      return true;
    } else {
      return false;
    }
  }

  getRadius(){
  return this.r;
  }
}
