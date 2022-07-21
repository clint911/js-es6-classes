//classes
//methods
//properties

//YOU will also learn the this keyword
    class Car {
          constructor(name, color, topSpeed) {
            this.name = name;
            this.color = color;
            this.topSpeed = topSpeed;
            this.currentSpeed = 0;
         }
        zeroToSixty() {
            setTimeout(() => {
                console.log('pHEW! That was fast!');
                this.currentSpeed = 0;
            }
            )
        }

        drive() {
            console.log("I just drove 2 miles");
            this.currentSpeed += 10;
            console.log(`driving at ${this.currentSpeed} mph`);
    }
        brake() {
            console.log("Braking....");
            this.currentSpeed -= 10;
        }

        stop() {
            this.currentSpeed = 0;
            console.log("coming to a screeching halt");
        }


    } 
     //creating a new porsche car object
    const porsche = new Car('porsche', 'yellow', 250);
    [1, 2, 3, 4, 5].forEach(_ => porsche.drive());

    const ferrari = new Car('ferrari', 'red', 250);
    
          //console.log(ferrari.name);
          //console.log(ferrari.color);
          //console.log(ferrari.topSpeed);

    ferrari.drive();
    ferrari.drive();
    ferrari.drive();
    ferrari.drive();
    ferrari.drive();
    console.log(ferrari.currentSpeed);
    ferrari.brake();
    console.log(ferrari.currentSpeed);
    ferrari.stop();
    console.log(ferrari.currentSpeed);
    
    //using the porsche object
    porsche.drive();
    porsche.drive();
    porsche.drive();
    porsche.drive();
    porsche.drive();
    console.log(porsche.currentSpeed);
    porsche.brake();
    console.log(porsche.currentSpeed);
    porsche.stop();
    console.log(porsche.currentSpeed);
