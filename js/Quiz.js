class Quiz{
    constructor(){}
    
    //getState function to fetch or read the state value present in database
    getState(){
        //setting reference variable to read gameState value from database
        var reference = database.ref('gameState');
        //set up a listener
        reference.on("value",function(data){
            //data.val() function shows new value created for the gameState
            gameState = data.val();
        });
    }
        // I have set state because its a new variable present for purpose of updation in database
        update(state){
            database.ref("/").update({gameState:state});
        }
        //creating an asynchronous start which is an independent function() which isnt connected to any other baseClass
    async start(){
        //gameState === 0 shows the gameState is the 1st gameState
        if(gameState === 0){
            //This means a new contestant would be created and assigned a value each time the player enters in info which would apply only for contestant itself
            //so this function is an asynchronous function
            contestant1 = new Contestant();
            var contestantCountref = await database.ref('contestantCount').once("value");
            //setting an if loop to contestantCount or no.of contestants 
            if(contestantCountref.exists()){
                contestantCount = contestantCountref.val();
                contestant1.getContestantCount();
            }
            //creating a new question after contestantCount increases and displayed it
            question = new Question();
            question.display();
            

        }
    }
    
}

