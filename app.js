

function Cars(img, make, model, color, price) {
  this.img = img;
  this.make = make;
  this.model = model;
  this.color = color;
  this.price = price;
}

var car1 = new Cars(
  "https://w7.pngwing.com/pngs/94/822/png-transparent-10th-generation-white-honda-civic-sedan-2018-honda-civic-honda-civic-type-r-2017-honda-civic-2016-honda-civic-honda-white-car-compact-car-sedan-car-accident-thumbnail.png",
  "Civic",
  "2022",
  "White",
  "85,000,000"
);
var car2 = new Cars(
  "https://w7.pngwing.com/pngs/286/98/png-transparent-silver-toyota-fortuner-suv-toyota-fortuner-toyota-hilux-car-toyota-corolla-tuning-vehicle-transport-metal-thumbnail.png",
  "Toyota",
  "2025",
  "Grey", // corrected spelling
  "10,85,000,000"
);
var car3 = new Cars("https://w7.pngwing.com/pngs/698/473/png-transparent-bmw-m3-car-bmw-3-series-bmw-m3-background-compact-car-sedan-performance-car-thumbnail.png", 
  "BMW", 
  "2023", 
  "White", 
  "285,000,000");
  var car4 = new Cars("https://w7.pngwing.com/pngs/994/935/png-transparent-mercedes-benz-a-class-car-mercedes-benz-e-class-mercedes-benz-r-class-mercedes-compact-car-sedan-car-thumbnail.png", 
    "Mercedes", 
    "2024", 
    "White", 
    "376,000,000");
    var car5 = new Cars("https://w7.pngwing.com/pngs/460/259/png-transparent-ferrari-488-car-enzo-ferrari-ferrari-ff-ferrari-car-performance-car-vehicle-thumbnail.png", 
      "Ferrari", 
      "2025", 
      "red", 
      "150,000,000");

var cars = [car1, car2, car3, car4, car5];
var getCard = document.getElementById('main');

for (var i = 0; i < cars.length; i++) {
  getCard.innerHTML += `<div class="col-md-4">
    <div class="card rounded-5 text-center p-3 mb-5 "  display: inline-block; margin: 10px;">
      <img src="${cars[i].img}" class="card-img-top" width="100%" height="200px" alt="Car Image">
      <div class="card-body bg-info text-dark">
      <h4 class="card-text">Price: ${cars[i].price}</h4>
        <h2 class="card-title">Brand: ${cars[i].make}</h2>
        <p class="card-text">Model: ${cars[i].model}</p>
        <p class="card-text">Color: ${cars[i].color}</p>
      </div>
    </div>
    </div>`;
}









