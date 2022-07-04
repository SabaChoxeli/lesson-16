// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს
// და დააბრუნებს true - ს თუ რიცხვი არის ლუწი ან false - ს თუ რიცხვი არის კენტი.
function oddEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// let smth = oddEven(4);
// console.log(smth);

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის
// გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
function rectangleAr(x, y) {
  return x * y;
}
// let getRectArea = rectangleAr(4, 5);
// console.log(getRectArea);

// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის
// გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს.ფართობის გამოსათვლელად
// გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function squareAr(x) {
  return x * 4;
}
// let getSquareAr = squareAr(10);
// console.log(getSquareAr);

// 4. Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით
// დააგენერირებს და დააბრუნებს 0 - დან 100 - მდე შემთხვევით რიცხვს.

function genRandNum(limit = 100) {
  let random = Math.random() * limit;
  random = Math.round();
  return random;
}
// let generate = genRandNum();
// console.log(generate);

/*
სალამი ალინა :დ ფუნქციაში Math.round() ჩაკომენტარებული როცა მაქვს ცვლადი მუშაობს და
კონსოლში დაუმრგვალებელი რენდომ რიცხვი გამოაქვს მაგრამ როგორც კი Math.round()ს
ამოვაკომენტარებ კონსოლში NaN გამოაქვს და ვერ გავასწორე ვერაფრით :დ და
Math.floor() ზეც ეგრე მიკეთებს
*/

// 5. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად
// მიიღებს ვალუტის კოდს(USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს
// ამ კოდის შესაბამის სიმბოლოს($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის
// სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება
let currencies = [
  {
    code: "USD",
  },
  {
    code: "EUR",
  },
  {
    code: "GEL",
  },
];
function getCurrencySymbolFromCode() {
  const filterCurrencies = currencies.filter((currency) => {
    if (code === "USD") {
      return "$";
    } else if (code === "EUR") {
      return "€";
    } else if (code === "GEL") {
      return "₾";
    } else {
      return "Can't find that type of currency";
    }
  });
  // ესეც მგონია რომ სწორად დავწერე მაგრამ კონსოლში ვერ გამოვატანინე :დ
}

// 6. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც
// თითოეულ ობიექტს გააჩნია name და age ველები.შემდეგ შექმენით ფუნქცია,
// რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა
// ობიექტს(რომლის age ველიც არის უმცირესი).
let persons = [
  {
    name: "Saba",
    age: 20,
  },
  {
    name: "Natia",
    age: 21,
  },
  {
    name: "Lasha",
    age: 41,
  },
  {
    name: "Giorgi",
    age: 16,
  },
  {
    name: "Mariami",
    age: 27,
  },
];

function youngest() {
  const filterAge = persons.filter((el) => {
    return el.age < 20;
  });
}

let filteredAge = youngest();
console.log(filteredAge);
