class Form {

    constructor(){
        this.nametext = createElement('h3', 'Name');
        this.input = createInput("");
        this.email = createInput("");
        this.emailtext = createElement('h3', 'Email');
        this.reset = createButton('Reset');
        this.reset.style('height','50px');
        this.thoughts = createInput("Any Thoughts ?");
        this.button = createButton('Submit');
        this.button.style('height','50px');
        this.greeting = createElement('h2');
        this.text = createElement('h1', 'Lets do a survey!!!');
        this.qs1 = createElement('h3', 'Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?');
        this.radio = createRadio('h3');
        this.radio.option('Yes!');
        this.radio.option('No');
        this.qs2 = createElement('h3', 'Q2. Would you be willing to contribute a small amount every month for such a program?');
        this.radio2 = createRadio('h3');
        this.radio2.option('Yes!');
        this.radio2.option('No');
        this.qs3 = createElement('h3', 'Q3. If yes, then how much are you willing to Contribute?');
        this.radio3 = createRadio('h3');
        this.radio3.option('₹100');
        this.radio3.option('₹100-500');
        this.radio3.option('₹500-1000');
        this.radio3.option('More than the above');
    
    }

    display(){
        this.nametext.position(620,255)
        this.input.position(570, 305);
        this.emailtext.position(820,255)
        this.email.position(770, 305);
        this.button.position(707, 700);
        this.greeting.position(600, 105);
        this.text.position(630, 105);
        this.qs1.position(500, 360);
        this.radio.position(600, 420);
        this.qs2.position(500, 450);
        this.radio2.position(600, 510);
        this.qs3.position(500, 540);
        this.radio3.position(600, 600);
        this.reset.position(787, 700);
        this.thoughts.position(690, 650)

        this.button.mousePressed(() => {
            alert("Thank you for your submission!")
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

        this.reset.mousePressed(() => { 
            alert("The survey has been reset. You can take the survey now.")
            this.input.value('');
            this.email.value('');
            this.radio.value('');
            this.radio2.value('');
            this.radio3.value('');
          });    

    }
}