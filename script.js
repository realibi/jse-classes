// ООП - объектно-ориентированное программирование
// Функция, которая находится внутри класса, называется "метод".

class CounterControl{
    constructor(startValue, plusBtn, minusBtn){
        this.counterValue = startValue;
        this.plusBtn = plusBtn;
        this.minusBtn = minusBtn;

        plusBtn.addEventListener("click", () => {
            this.increase();
            this.drawValue();
        })

        minusBtn.addEventListener("click", () => {
            this.decrease();
            this.drawValue();
        })
    }

    drawValue(){
        let span = document.querySelector("#counter");
        span.innerHTML = this.counterValue;
    }

    increase(){
        this.counterValue++;
    }

    decrease(){
        this.counterValue--;
    }
}

let cc = new CounterControl(0, document.querySelector("#plusBtn"), document.querySelector("#minusBtn"));