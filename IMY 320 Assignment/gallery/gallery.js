var scene, camera, renderer, container;
var american, russian, cuban;
var select;
var bioAmerican, bioCuban, bioRussian;

var WIDTH = document.getElementById('world').offsetWidth;
var HEIGHT = document.getElementById('world').offsetHeight;

window.addEventListener('load', init, false);

function init() {
  american = true;
  russian = false;
  cuban = false;

  select = 0;

  bioAmerican = document.getElementById('american');
  bioRussian = document.getElementById('russian');
  bioCuban = document.getElementById('cuban');
	leftBtn = document.getElementById("leftBtn");
	rightBtn = document.getElementById("rightBtn");

  initScene();
  initCamera();
  initLights();
  initRenderer();

  container = document.getElementById('world');
  container.appendChild(renderer.domElement);

  initModel();

  document.addEventListener('mousemove', handleMouseMove, false);

  render();
}

var mousePos = {
  x: 0,
  y: 0
};

function handleMouseMove(event) {
  //note to self, change width and height to that of the entire window
  var tx = -1 + (event.clientX / window.innerWidth) * 2;
  var ty = 1 - (event.clientY / window.innerHeight) * 2;

  mousePos = {
    x: tx,
    y: ty
  };
}

function initScene() {
  scene = new THREE.Scene();
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 13);
  camera.position.set(0, 3, 5);
  camera.lookAt(scene.position);
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setSize(WIDTH, HEIGHT);
}

var mesh = null;

function initModel() {
  var loader = new THREE.JSONLoader();
  if (american) {
    loader.load('american/characterfixednormals.json', function(geometry, materials) {
      var material1 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('american/apparel.png'),
        side: THREE.DoubleSide
      });
      var material2 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('american/head.png'),
        side: THREE.DoubleSide
      });
      materials2 = [material2, material1, materials[2]];
      mesh = new THREE.Mesh(geometry, materials2);
      mesh.scale.set(0.5, 0.5, 0.5);
      mesh.position.y -= 5;
      scene.add(mesh);
    });
  }

  if (russian) {
    loader.load('russian/russianRIGIFIFUCKUP.json', function(geometry, materials) {
      var material1 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('russian/coat.png'),
        side: THREE.DoubleSide
      });
      var material2 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('russian/gloves.001.png'),
        side: THREE.DoubleSide
      });
      var material3 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('russian/apparel.png'),
        side: THREE.DoubleSide
      });
      var material4 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('russian/pants.png'),
        side: THREE.DoubleSide
      });
      var material5 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('russian/face.png'),
        side: THREE.DoubleSide
      });
      var material6 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('russian/hat.png'),
        side: THREE.DoubleSide
      });

      var mats = [material1, material2, material3, material4, material5, material6];
      mesh = new THREE.Mesh(geometry, mats);
      mesh.scale.set(0.4, 0.4, 0.4);
      mesh.position.set(0, -6, -1);
      scene.add(mesh);
    });
  }

  if (cuban) {
    loader.load('cuban/cuban3.json', function(geometry, materials) {
      //var material1 = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('cuban/coat.png'), side: THREE.DoubleSide});
      //var material2 = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('cuban/gloves.001.png'), side: THREE.DoubleSide});
      var material3 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('cuban/PANTS.png'),
        side: THREE.DoubleSide
      });
      var material4 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('cuban/BELT.png'),
        side: THREE.DoubleSide
      });
      var material5 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('cuban/SHIRT.png'),
        side: THREE.DoubleSide
      });
      var material6 = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('cuban/cubanHead.001.png'),
        side: THREE.DoubleSide
      });

      var mats = [materials[0], materials[0], material3, material4, material5, material6];
      mesh = new THREE.Mesh(geometry, mats);
      mesh.scale.set(0.3, 0.3, 0.3);
      mesh.position.set(0, -9, 0);
      scene.add(mesh);
    });
  }
}

function rotateModel() {
  if (!mesh) {
    return;
  }
  mesh.rotation.y += 0.015 * mousePos.x;
};

function render() {
  requestAnimationFrame(render);
  rotateModel();
  renderer.render(scene, camera);
}

function initLights() {
  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);
}

function removeEntity() {
  scene.remove(mesh);
}

function changeModel(direction) {
  console.log(direction);
  if (direction == "left") {
    if (select < 3) {
			//rightBtn.style.visibility = true;
      select++;
    } else {
			leftBtn.style.visibility = false;
		}
    //console.log("left: " + select);
  }

  if (direction == "right") {
    if (select > 1) {
			//leftBtn.style.visibility = true;
      select--;
    } else {
    	rightBtn.style.visibility = false;
    }
    // console.log("right: " + select);
  }

  removeEntity();

  if (select % 3 == 0) {
    american = false;
    bioAmerican.style.display = "none";
    russian = false;
    bioRussian.style.display = "none";
    cuban = true;
    bioCuban.style.display = "initial";
  } else if (select % 2 == 0) {
    american = false;
    bioAmerican.style.display = "none";
    cuban = false;
    bioCuban.style.display = "none";
    russian = true;
    bioRussian.style.display = "initial";
  } else {
    russian = false;
    bioRussian.style.display = "none";
    cuban = false;
    bioCuban.style.display = "none";
    american = true;
    bioAmerican.style.display = "initial";
  }
  /*american = false;
  cuban = false;
  russian = true;*/
  initModel();
}
