# parking-lot

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd parking-lot`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)



# Project Guidelines #########################
Assumptions/Rules:  
1. There is a parking lot.  
2. There are there three types of vehicles:  
  1. Motorcycle  
  2. Sedan  
  3. Truck
3. There are three types of parking spaces:  
  1. Small  
  2. Medium  
  3. Large
4. The vehicles can park in the following spaces:  
  1. A motorcycle can part in all spaces, small, medium and large.  
  2. A sedan can park only in the medium and large space.  
  3. A truck can only park in the large space.  
5. If the parking lot is full, new vehicles can no longer enter.  They must wait in queue.   
6. Vehicles cannot cut in front of other vehicles in the queue.  
    
Please create a program that:  
	1. Display the state of the parking lot and queue in some kind of GUI to the user.  
	2. Persists the state of the parking lot and vehicles in queue.  If using a web application, the state should persist over server restarts.  If thick client/console, the state should persist an application restart.   
	3. Give the user the ability to add a new type of vehicle to the system, motorcycle, sedan or truck.   
	4. When the vehicle is introduced, it should follow the rules mentioned above   
	5. Give the user the ability to remove a random vehicle from the parking lot.   
	6. When a vehicle is removed, the next car in the queue should attempt to park with the rules above.  If there are no available parking spaces, the next vehicle should continue to wait.   
	7. When the state of the parking lot/queue changes, the UI should be updated accordingly. 


  #Process
  on page load:
1. add 5 random vehicles to lot
  1.1 each can be motorcycle, sedan, or truck
2. add 5 random vehicles to queue
  2.1 each can be motorcycle, sedan, or truck
  2.2 assign id, icon, space

1. click +
2. create vehicle from type user clicks on
3. set computed properties (icon, space-size)
4. add vehicle into queue


1. click -
2. remove a vehicle from lot
3. check to see if the next vehicle in queue can park
  3.1 if yes
    3.1.1 add vehicle into lot
    3.1.2 remove vehicle from queue
  3.2 if no
    3.2.1 end loop