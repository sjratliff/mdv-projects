var json = {
			"contact1":	{
				"group": 	["Group:", "Bears"],
				"tname": 	["Team Name:","My Vick In A Box"],
				"sex":   	["Sex:","male"],
				"startdate":	["Startdate:","2011-12-13"],
				"pword":	["Password:","123456"],
				"cpword":	["Confirm Password:","123456"],
				"email":	["Email:","sjratliff@me.com"],
				"rating":	["Rating:","8"],
				"comments":	["Comments:","Autofill for testing"]
	
			},
			"contact2":	{
				"group": 	["Group:", "Packers"],
				"tname": 	["Team Name:","Somewhere over Dwayne Bowe"],
				"sex":   	["Sex:","female"],
				"startdate":	["Startdate:","2011-12-11"],
				"pword":	["Password:","239900"],
				"cpword":	["Confirm Password:","239900"],
				"email":	["Email:","section22@yahoo.com"],
				"rating":	["Rating:","4"],
				"comments":	["Comments:","Autofill for testing"]
			}
				
		};
            	//store the JSON OBJECT into local storage
		for(var n in json){
			var id              = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	