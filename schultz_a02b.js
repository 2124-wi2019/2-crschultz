//Chris Schultz
//schultz_a02b.js
//Info 2124 WW
//Thoendel
//12-10-2019

//declare gloabl variables
let age = 37; //globally-scoped variable delared outside brackets per req b

//because we want at least one block-scoped variable, opening a bracket
{
    //declare block-scoped variables
    let name = "Chris Schultz"; //block-scoped variable by using let between curly braces as per req a 
    const HAIR = "Brown";  //block-scoped constant as per req c (it doesn't specify scope req)
    const EYES = "Blue";  //block-scoped constant as per req d (it doesn't specify scope req)

    //output
    console.log(); //single blank line per e.i
    console.log("My name:"); //e.ii
    console.log(name); //e.iii
    console.log("My age:"); //e.iv
    console.log(age);  //e.v
    console.log("My hair color:");  //e.vi
    console.log(HAIR);  //e.vii
    console.log("My eye color:");  //e.viii
    console.log(EYES);  //e.ix
    console.log();    //e.x
}//end bracket

//end program