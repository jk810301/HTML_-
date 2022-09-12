const getBMI = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point)

const elementEl = document.querySelector(".title");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const nameEl = document.querySelector("#name");
const calcEl = document.querySelector("#calc");

// tag,class,id

elementEl.innerText = "BMIII";
console.log(elementEl);
console.log(nameEl);
console.log(heightEl);
console.log(weightEl);
console.log(calcEl);

calcEl.innerText = "分析";

calcEl.addEventListener("click", () => {
    //alert("123");

    let comments = [
        { 'bmi': 18.5, 'color': '', 'comment': '體重過輕，請多攝取營養。' },
        { 'bmi': 24, 'color': '', 'comment': '正常範圍，恭喜你，請繼續保持。' },
        { 'bmi': 35, 'color': '', 'comment': '異常範圍，請節食運動!' },
    ];


    let bmiEl = document.querySelector("#comment .bmi");
    console.log(bmiEl);
    let name = nameEl.value;
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == "" || weight == "") {
        alert("Not null");
        return;
    }

    let bmi = getBMI(height, weight);

    if (isNaN(bmi)) {
        alert("Not null");
        return;
    }

    console.log(name, height, weight, bmi);
    //alert(`${name} BMI:${bmi}`);

    bmiEl.innerHTML = bmi;


});