//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler (name) {
    if(name === "Tyler"){
      return true;
    } else {
      return false;
    }
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName () {
  return prompt('what is your name?');
 }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


  function welcome (){
    alert("Welcome, " + getName())
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// The argument goes into the parameter, an argument is the value of the parameter.
// The parameters of a function/method describe to you the values that it uses to calculate its result.
// The arguments of a are the values assigned to these parameters during a particular call of the function/method.



//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// (false)(null)(undefined)(NaN)(0)("")
// Check by using an If statment.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  return "Hillary";
}




//Now save the function definition of myName into a new variable called newMyName

function newMyName(){
  return myName = "Vanpatten";
}

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
  return (function() {
    return "Hillary"
});
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();  //Code Here

//Now invoke innerFn.
