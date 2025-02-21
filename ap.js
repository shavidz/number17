// 1. For ციკლი (0-15)
for (let i = 0; i <= 15; i++) {
    console.log(i);
}

// 2. While ციკლი (0-20)
let i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}

// 3. Do-while ციკლი (0-25)
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 25);

// 4. მასივის ლუწი რიცხვების გამოტანა
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 5. Switch-case მიმდინარე დღის დასადგენად
const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        console.log("კვირა");
        break;
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    default:
        console.log("უცნობი დღე");
}
