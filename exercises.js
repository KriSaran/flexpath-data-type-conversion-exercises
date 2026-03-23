import { json } from "stream/consumers";
import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` code below to match the EXACT name
     of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
     
     Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  //exercise_01();
  //exercise_02();
  exercise_19();
  // Modify the line of code ABOVE to run a different exercise
}


function exercise_01() {
  /* 
   
    Exercise 1
    
    Data Types: 
  	
    1. Create 4 variables to hold a value for each of these four data types:
        - String
        - Number
        - Boolean
        - Object
    2. Then, create a variable and DON'T assign it any value, just declare it. 
    3. Then, using the `typeof` keyword, log the type of each variable (including the unassigned one) to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  const sTr = String("Data Types");
  const nUm = Number(1999);
  const bOol = Boolean(true);
  const oBject1 = {
    firstName: "Sara",
    lastName: "Krish",
    course: "Launchcode Flex-Path Program",
    Year: 2026
  };

  let emptyVariable;

  console.log(`Type of emptyVariable: ${typeof (emptyVariable)}`);
  console.log(`Type of sTr: ${typeof (sTr)}`);
  console.log(`Type of nUm: ${typeof (nUm)}`);
  console.log(`Type of bOol: ${typeof (bOol)}`);
  console.log(`Type of oBject1: ${typeof (oBject1)}`);

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2
    
    Type Conversion: 
  	
    1. Create a variable and assign it a Number value
    2. Using the previous variable, convert it to a String and assign it to a new variable
    3. Then, log this new variable to the console along with its type, using typeof

  */

  // CODE IN THE OPEN LINES BELOW

  let num = 40;
  let numToStr= String(num);
  console.log(`Value of numToStr: ${numToStr}, Type of numToStr: ${typeof (numToStr)}`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Boolean Conversion: 
  	
    1. Create 2 variables: 
      * one that stores a Boolean conversion of the number 0 
      * one that stores a Boolean conversion of the number 1
    2. Then, log both of these variables to the console to see what 
        Booleans these numbers are converted to

  */

  // CODE IN THE OPEN LINES BELOW
    let boolFromZero = Boolean(0);
    let boolFromOne = Boolean(1);

     console.log(`Boolean conversion of 0: ${boolFromZero}`);
     console.log(`Boolean conversion of 1: ${boolFromOne}`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
  	
    1. Create a variable that attempts to convert a non-numeric string to a number
    2. Then, using the method isNan(), check if this variable is Not a Number (NaN)

  */

  // CODE IN THE OPEN LINES BELOW
       let numFromStr = Number("LauunchCode FlexPath");
       let NotaNumberCheck = isNaN(numFromStr);
       console.log(`Result of converting non-numeric string to number: ${numFromStr}`);
       console.log(`Is the result NaN? ${NotaNumberCheck}`);

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Template Literals: 
  	
    1. Create a variable that stores your age as a Number.
    2. Create a template literal string that embeds this variable in the message:
        "I am [age] years old."
    2. Then, log this string to the console

  */

  // CODE IN THE OPEN LINES BELOW


    let age=25;
    console.log(`I am ${age} years old`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  // DONT edit the code below
  const name = "Alice";
  const number = 5;
  // DONT edit the code above

  /* 
   
    Exercise 6
    
    Concatenate Strings: 
  	
    1. Using the `name` and `number` variables above and the `+` operator, 
       create a new string that says "Alice has 5 apples". Then log this string to the console.
       
    2. Then, using the `name` and `number` variables above and a template literal, create a new 
       string that says "Alice has 5 apples". Then log this string to the console.
  */

  // CODE IN THE OPEN LINES BELOW
      console.log(name + " has " + number + " apples");
      console.log(`${name} has ${number} apples`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
  	
    1. Create a JavaScript object, convert it to a JSON string, and log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW
     let personObj = {
        Program : "LaunchCode Flex-Path",
        Year: 2026,
        StudentEnrolled: true
  }

    let personJSON= JSON.stringify(personObj);
    console.log(`Object converted to JSON string: ${personJSON}`);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  // DONT edit the code below
  const jsonStringToParse = '{"name": "Charlie", "age": 35}';
  // DONT edit the code above

  /* 
   
    Exercise 8
    
    JSON Parsing: 
  	
    1. Using the JSON string stored in `jsonStringToParse`, parse this string into an object
       and then print one of its properties.

  */

  // CODE IN THE OPEN LINES BELOW

      let ParsedObj= JSON.parse(jsonStringToParse);
      console.log('Parsed JSON to OBJECT: ', ParsedObj);
      console.log(`One of the properties of the converted object: ${ParsedObj.name}`);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9
    
    Math Object: 
  	
    1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use Math.round(), Math.ceil(), and Math.floor() on that number, logging 
       the result to the console each time

  */

  // CODE IN THE OPEN LINES BELOW
    let decimalNum = 3.14159;
    console.log(`Original decimal Number:${decimalNum}`);
    console.log(`After rounding with Math.round(): ${Math.round(decimalNum)}`);
    console.log(`After ceiling with Math.ceil(): ${Math.ceil(decimalNum)}`);
    console.log(`After flooring with Math.floor(): ${Math.floor(decimalNum)}`);
    
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10
    
    Decimal Precision: 
  	
    1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use toFixed() on the variable and round it to 2 decimal places.
       Log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW
    let decimalNum = 2.71828;
    console.log(`Original Decimal Number: ${decimalNum}`);
    console.log(`Rounded to 2 decimal places with toFixed(): ${decimalNum.toFixed(2)}`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11
    
    Locale Number Formatting: 
  	
    1. Create a variable to hold a large number with 2 decimal points at the end of it
    2. Create a new Intl.NumberFormat object for the US locale
    3. Then, use this new objects `format` function to format the variable from step 1.
       Store the result in a new variable
    4. Log the new variable from step 3 to the console.

  */
  
  // CODE IN THE OPEN LINES BELOW
    let largeDecimalNum = 1234567.89;
    let numFormatterUS = new Intl.NumberFormat("en-US");
    let formattedNumber= numFormatterUS.format(largeDecimalNum);
    console.log(`Original number: ${largeDecimalNum}`);
    console.log(`Formatted number: ${formattedNumber}`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
    Exercise 12
    
    Locale-Based Currency: 
  	
    1. Create a variable named `salary` that holds a 5 digit integer
    2. Create a new Intl.NumberFormat object for the US locale, and provide
       an object as the second argument with these property/value pairs:

       {style: "currency", currency: "USD"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW
    let Salary=100000;
    let FormattedUSDSalary= new Intl.NumberFormat("en-US",{Style: "Currency", currency : "USD"});
    let formattedSalary= FormattedUSDSalary.format(Salary);
    console.log(`Orginal Salary: ${Salary}`);
    console.log(`Formatted Salary in USD: ${formattedSalary}`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13
    
    Other Locale Currency: 
  	
    1. Create a variable named `salary` that holds a 6 digit integer
    2. Create a new Intl.NumberFormat object using "ja-JP" for the first argument, 
       and provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "JPY"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW
    let Salary=1000000;
    let FormattedJPYSalary= new Intl.NumberFormat("ja-JP", {style : "currency", currency :"JPY"}).format(Salary);
    console.log(`Original Salary: ${Salary}`);
    console.log(`Formatted Salary in JPY: ${FormattedJPYSalary}`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14
    
    Date String Conversion: 

    1. Create a new Date object and assign it to a variable
    2. Then, call toDateString on the variable and print the result to the console
    3. Then, call toTimeString on the variable and print the result to the console
  	
  */

  // CODE IN THE OPEN LINES BELOW
     let currentDate = new Date();
     console.log(`Current Date as a string: ${currentDate.toDateString()}`);
     console.log(`Current Time as a string: ${currentDate.toTimeString()}`);

       const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  /* 
   
    Exercise 15
    
    Locale Date Formatting

    1. Create a new Date object and assign it to a variable
    2. Call the toLocaleDateString method on it and convert it to an en-US format date.
       Log it to the console.
    3. Call the toLocaleDateString method on it again and convert it to an en-GB format date.
       Log it to the console
  	
  */

  // CODE IN THE OPEN LINES BELOW
    let currentDate = new Date();
    let usFormattedDate= currentDate.toLocaleString("en-US");
    let gbFormattedDate= currentDate.toLocaleString("en-GB");
    console.log(`Current Date in US Format: ${usFormattedDate}`);
    console.log(`Current Date in GB Format: ${gbFormattedDate}`);

  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Error Handling: 
  	
    1. Write code that tries to parse invalid JSON and uses a try-catch block to handle the error.

  */

  // CODE IN THE OPEN LINES BELOW
  try{
  let inValidJson= JSON.parse("This is a not valid JSON String");
  }catch(error){
    console.log(`error Parsing JSON: ${error.message}`);
  }
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17

    1. Convert the Boolean value 'true' to a string.
       Log it to he console
    
  */

  // CODE IN THE OPEN LINES BELOW
    let booleanValue = true;
    let booleanToString = String(booleanValue);
    console.log(`converted boolean to String Value : ${booleanToString}`);
      const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18

    1. Create a variable that holds a 9-digit number with 2 decimal places.
    2. Then, use Intl.NumberFormat to create a number formatter for the US, Russia, and Japan.
       For each formatter, provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "[proper currency string]"}

       Hint: You probably don't know the string arguments to use to do this for Russia.
             Go to Google.com and search "Intl.NumberFormat argument for Greek format"
             Then also look up "Intl.NumberFormat option for greek currency"
             
             You will forget things all the time in this job, even as an expert.
             There's a lot of information to keep in your head. 

             That's why learning to put together good search prompts in Google and other
             search engines is CRUCIAL in this job.

             Don't worry, you'll get better at this over time as you pick up the terminology
             and understand how programs are written/executed.

    3. Then use each formatter to format the variable from step 1, and log it to the console
       each time.

  */

  // CODE IN THE OPEN LINES BELOW
     let largeDecimalNum=12345678910.12;
     let usFormatottedNum= new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(largeDecimalNum);
     let ruFormattedNum= new Intl.NumberFormat("ru-RU", {style: "currency", currency: "RUB"}).format(largeDecimalNum);
     let jpFormattedNum= new Intl.NumberFormat("ja-JP", {style: "currency", currency: "JPY"}).format(largeDecimalNum);
    console.log(`Orginal Number: ${largeDecimalNum}`);
    console.log(`US Format: ${usFormatottedNum}`);
    console.log(`RU Format: ${ruFormattedNum}`);
    console.log(`JP Format: ${jpFormattedNum}`);
  const placeholder = "Delete this line and code in this space";

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19
    
    Date Arithmetic: 

    1. Create a variable to hold a new Date object for today's date.
    2. Create a variable to hold a new Date object for a future date in 2025
    3. Find the time difference between the future date and the current date
    4. Convert this time difference to days
    5. Log the day difference to the console
  	
  */

  // CODE IN THE OPEN LINES BELOW
    let CurrentDate = new Date();
    let futureDate = new  Date(2027,0,1);
    let timeDifference = futureDate.getTime() - CurrentDate.getTime();
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    console.log(`Current Date: ${CurrentDate}`);
    console.log(`Future Date: ${futureDate}`);
    console.log(`Time difference in milliseconds: ${timeDifference}`);
    console.log(`Day difference: ${dayDifference.toFixed(2)} days`);

  const placeholder = "Delete this line and code in this space";


  // CODE IN THE OPEN LINES ABOVE
}
