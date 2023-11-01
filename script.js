//Person class to hold all the details!
class Person{
    constructor(name,age,gender,email)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }
}
const person1 = new Person("santhosh","21","male","santhoshavs9823@gmail.com");
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.email);

//class to calculate the uber price!

class UberPrice {
    constructor() {
      this.baseFare = 100;
      this.perMinuteRate = 4;
      this.perMileRate = 15;
    }
      calculatePrice(distanceMiles, durationMinutes) {
      const price = this.baseFare + (this.perMinuteRate * durationMinutes) + (this.perMileRate * distanceMiles);
      return price;
    }
  }
  const calculator = new UberPrice();
  const distanceMiles = 5;
  const durationMinutes = 15;
  const price = calculator.calculatePrice(distanceMiles, durationMinutes);
  console.log(`Estimated Uber Price: ${price.toFixed(2)}`);

//Class - Movie!
  
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }}
    const Movie1 = new Movie("Casino Royale", "Eon Productions")
    console.log(Movie1.title);
    console.log(Movie1.studio);
    console.log(Movie1.rating);
    const Movie2 = new Movie("Casino Royale", "Eon Productions","PG13")
    console.log(Movie2);

//Circle Class!

class Circle{
    
    constructor(radius,color){
         this.radius = radius; 
         this.color = color;
    }
    get radiusCircle(){
         return this.radius;
    }
    set radiusCircle(radius){
         this.radius = radius;
    }
    get colorCircle(){ 
         return this.color;
    }
    set colorCircle(color) { 
         this.color = color;
    }
    get toString(){
         return `"Circle[radius=${this.radius}, color=${this.color}]"` 
    } 
    get areaCircle(){
         return Math.PI*this.radius*this.radius;
    }
    get circumferenceCircle(){
         return 2*Math.PI*this.radius; 
    }
}
    var obj1 = new Circle(1.0, "red"); 
    console.log(obj1.radiusCircle); 
    obj1.radiusCircle = 2.2
    console.log(obj1.radiusCircle); 
    console.log(obj1.colorCircle); 
    obj1.colorCircle = "blue";
    console.log(obj1.colorCircle); 
    console.log(obj1.toString);
    console.log(obj1.areaCircle);
    console.log(obj1.circumferenceCircle);

    

    

