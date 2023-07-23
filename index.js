function saySomething1() {
    console.log('ไม่ต้องห่วงฉัน 1');
}

let saySomething2 = () => {
    console.log("ไม่ต้องห่วงฉัน 2");
}

saySomething1();
saySomething2();

// For use case
let sayBbutton = document.getElementById('say-button');

sayBbutton.addEventListener('click', function() {
    console.log('ไม่ต้องห่วงฉัน 1');
})