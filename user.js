class User {

    constructor(){
        this.index = null;
        this.user = null;
        this.input = null;
        this.radio = null;
        this.radio2 = null;
        this.radio3 = null;
    }

    updateCount(count){
        database.ref('/').update({
          peopleCount: count
        });
      }

    update(){
        var playerIndex = "players" + this.index;
        database.ref(playerIndex).set({
         input : this.input,
         email : this.email,
         answer : [],
         radio : this.radio,
         radio1 : this.radio1,
         radio2 : this.radio2,
         radio3 : this.radio3
        });
      }

      reset(){
        this.index = null;
        this.email = null
        this.input = null;
        this.radio = null;
        this.radio2 = null;
        this.radio3 = null;
    }

}