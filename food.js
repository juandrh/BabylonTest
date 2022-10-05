// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Evolution EcoSystem

// A collection of food in the world

class Food {

  
  constructor(num) {
    // Start with some food
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
      myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
      myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
      myMaterial.emissiveColor = new BABYLON.Color3(0.0, 0.58, 0.02);
      myMaterial.ambientColor = new BABYLON.Color3(0.0, 0.58, 0.02);
    this.food = [];
    for (let i = 0; i < num; i++) {
      this.foodMesh = BABYLON.Mesh.CreateBox("box", 2,scene);
      this.foodMesh.position.x= Math.random()*120-60;
      this.foodMesh.position.z= Math.random()*120-60;
      this.foodMesh.position.y= 10;
      this.foodMesh.material=myMaterial ;
     this.food.push(this.foodMesh); 
    }
  }

   // Add new food item
   addFood() {
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);

      myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
      myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
      myMaterial.emissiveColor = new BABYLON.Color3(0.0, 0.58, 0.02);
      myMaterial.ambientColor = new BABYLON.Color3(0.0, 0.58, 0.02);
    this.foodMesh =  BABYLON.Mesh.CreateBox("box", 2,scene);
    this.foodMesh.position.x= Math.random()*120-60;
    this.foodMesh.position.z= Math.random()*120-60;
    this.foodMesh.position.y= 10;
    this.foodMesh.material=myMaterial ;
   this.food.push(this.foodMesh);    
    
  } 

  eatFood(i){
    this.food[i].dispose();
    this.food.splice(i,1);
    this.addFood();
  }
  
  // Return the list of food
  getFood() {
    return this.food;
  } 

  getFoodLength(){
    return this.food.length;
  }

  getFoodPosition(i){
    return new BABYLON.Vector2(this.food[i].position.x,this.food[i].position.z);
  }
}