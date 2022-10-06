// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Evolution EcoSystem

// Creature class

// Create a "bloop" creature



class Agent {

  
  constructor(x, z, r1, r2,r,g,b) {
    
    var rand = Math.random()*7;
    if (rand<1){ this.colorR=1;this.colorG=0;this.colorB=0;}
    else if (rand<2){ this.colorR=1;this.colorG=1;this.colorB=0;}  
    else if (rand<3){ this.colorR=1;this.colorG=0;this.colorB=1;} 
    else if (rand<4){ this.colorR=0;this.colorG=1;this.colorB=0;} 
    else if (rand<5){ this.colorR=0;this.colorG=1;this.colorB=1;}    
    else  { this.colorR=0;this.colorG=0;this.colorB=1;} 
    this.colorA = 1;
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);    
    myMaterial.alpha = this.colorA ;
    if (x > 0) {
      this.r = r1 + r2;
      this.maxspeed = (4 - this.r);      
      this.agentMesh = BABYLON.MeshBuilder.CreateSphere(
        "sphere",
        { diameter: 2 * this.r, segments: 8 },
        scene
      );
      this.agentMesh.position.x = x;
      this.agentMesh.position.z = z;
      this.colorR=r;this.colorG=g;this.colorB=b;       
    } else {
      this.r = Math.random() * 2;
      this.maxspeed = (2 - this.r);

      this.agentMesh = BABYLON.MeshBuilder.CreateSphere(
        "sphere",
        { diameter: 2 * this.r, segments: 8 },
        scene
      );
      myMaterial.diffuseColor = new BABYLON.Color3(this.colorR, this.colorG, this.colorB);
      this.agentMesh.material=myMaterial; 
      this.agentMesh.position.x = Math.random() * 120 - 60;
      this.agentMesh.position.z = Math.random() * 120 - 60;
    }

    //this.agentMesh.position.y= 5;
    this.health = 1000; // Life timer
    this.xoff = Math.random() * 1000; // For perlin noise
    this.zoff = Math.random() * 1000;


  }


  update() {

    let vx = (noise.perlin2(this.xoff, 0)) * this.maxspeed;
    let vz = (noise.perlin2(0, this.zoff)) * this.maxspeed;
    this.xoff += 0.005;
    this.zoff += 0.005;
    this.agentMesh.position.x += vx;
    this.agentMesh.position.z += vz;
    this.health -= 1;

    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor = new BABYLON.Color3(this.colorR, this.colorG, this.colorB);
    this.colorA -= 0.001 ; 
    myMaterial.alpha = this.colorA; 
    this.agentMesh.material=myMaterial;
  }


  borders() {
    const width = 150;
    if (this.agentMesh.position.x < -width / 2 + this.r / 2) this.agentMesh.position.x = width / 2 - this.r / 2;
    if (this.agentMesh.position.x > width / 2 - this.r / 2) this.agentMesh.position.x = -width / 2 + this.r / 2;
    if (this.agentMesh.position.z < -width / 2 + this.r / 2) this.agentMesh.position.z = width / 2 - this.r / 2;
    if (this.agentMesh.position.z > width / 2 - this.r / 2) this.agentMesh.position.z = -width / 2 + this.r / 2;
  }

  isDead() {
    if (this.health < 0.0) {
      return true;
    } else {
      return false;
    }
  }

  getRadius() {
    return this.r;
  }
  getVelocity() {
    return this.maxspeed;
  }
  changeHealth(value){
    this.health += value;
    if (this.health>1000){this.health=1000;}
  }
  
  getColorR(){
    return this.colorR;
  }
  getColorG(){
    return this.colorG;
  }
  getColorB(){
    return this.colorB;
  }
  changeAlpha(value){
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor = new BABYLON.Color3(this.colorR, this.colorG, this.colorB);
    this.colorA += value ; 
    if (this.colorA>1){this.colorA=1;}
    myMaterial.alpha = this.colorA; 
    this.agentMesh.material=myMaterial;
  }

}
