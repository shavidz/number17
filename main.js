// 1. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი
const numbers = [10, 20, 30, 40, 50];

// ჯამი
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// საშუალო არითმეტიკული
const average = sum / numbers.length;
console.log("Average:", average);

// 2. შექმენით ობიექტი წიგნის შესახებ
const book = {
    title: "Ugly Love",
    author: "Colleen Hoover",
    yearPublished: 2014
};

console.log(`${book.title} by ${book.author} was published in ${book.yearPublished}.`);

// 3. შეცვალეთ yearPublished და გამოიტანეთ შედეგი
book.yearPublished = 2020;
console.log("Updated book:", book);

// 4. შექმენით 3 ელემენტიანი მასივი, სადაც თითოეული ელემენტი არის ობიექტი
const products = [
    { productName: "Laptop", price: 1200, isAvailable: true },
    { productName: "Phone", price: 800, isAvailable: false },
    { productName: "Tablet", price: 500, isAvailable: true }
];

console.log("Products:", products);
