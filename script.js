 var database = [
 {
 	username:"sally",
 	password:"777",
 },
 {
 	username:"elham",
 	password:"123",
 },
 {
 	username:"mahtab",
 	password:"555",
 }

 ];
  var newsfeed = [
  {
  	username:"sana",
  	timeline:"!"
  },
   {
   	username:"elham",
   	timeline:"!"
   },
   {
   	username:"mahtab",
   	password:"!"
   }

  ];
  var userNamePrompt= prompt("what is your name?");
  var passwordPrompt= prompt("what is your password");

    function isUserValid(username , password){

		   	for( var i= 0; i < database.length; i++){
				if ( database[i].username===username && database[i].password===password){
				   		return true;
				       }
				   	 }return false;
	}



    function signIn(user,pass) {

    	
		   	
				if (isUserValid(user , pass)){
				   		console.log(newsfeed);
				   	}else{
				   		alert("you username or password is not corect!try again.");
				   	}
		       }
    signIn(userNamePrompt,passwordPrompt);