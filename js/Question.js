class Question{
    constructor(){
        //creating variable for input or asking a question to the user to fill the blank
        //Always remember in each class, create the inputs and greetings first and then display them
        this.input = createInput("Name");
        //the below line shows the greeting or the heading which should be displayed in h3 size
        this.greeting = createElement(h3);
        //creating element to show the option
        this.Option = createElement(h3);
        
    }
    hide(){
        //hiding the element
        this.greeting.hide();
    }
    
    display(){
        // creating a title first
        this.title.html("MyQuiz Game");
        //setting a position for title to be displayed
        this.title.position(305,120);
        //setting a question and this deals with html as its an input which needs to be filled
        this.Question.html("Who is the former CEO of Tesla?");
        this.Question.position(200,80);
        this.Option.html("Option 1: Elon Musk");
        this.Option.position(150,80);
        this.Option2.html("Option 2: Sundar Pichai");
        this.Option2.position(150,120);
    }

}
