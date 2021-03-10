class Contestant{
    constructor(

    ){
        //Setting index and name value as null because its reserved in order to fill the name of contestant as he/she logs into game and the value would be stored in the database
        this.index = null;
        this.name = null;
        this.button = createButton("SUBMIT");
    }

    //reading contestantCount or no.of contestants who logged into the game
    getContestantCount(){
        var reference = database.ref('contestantCount');
        //Listener should always contain the variable which will always refer to the database and the para required should be placed in {} as its a json
        //ContestantCount takes in the value ('val') which is referred particularly for contestantCount
        reference.on("value",(data)=>{contestantCount = data.val()});

    }
    updateCount(count){
        // "/" refers to the same parameter contestantCount which is in database and new variable count is assigned so as to update the no.of player to the
        //database.
        database.ref("/").update({contestantCount:count});
    }
    display(){
        //the reason => put is to show that the entire code gets binded and executed once
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input.hide();
            this.button.hide();
            //setting name input to contestant1
            contestant1.name = this.input.value();
            //As the value or the data is entered the count of the player in the database increments by 1
            contestantCount+=1;
            //Index value is set
            contestant1.index = contestantCount;
            //The contestant value gets updated by 1 that is the value gets added to 'count' that is new variable created
            
            contestant1.update();
            //count also becomes +1 value
            contestant1.updateCount(contestantCount);
        });
    }
    
}