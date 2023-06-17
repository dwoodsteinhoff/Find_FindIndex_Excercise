
const userArr = [
	{username: 'mlewis'},
	{username: 'akagen'},
	{username: 'msmith'}
  ];

function findUserByUsername (arr, str){
	const findUser = arr.find(function(user){
		if (Object.values(user).toString() === str) return str
	})
	
	if (findUser !== undefined){
		return Object.values(findUser).toString();
	}
	else{
		return undefined
	}
}

let newUserList = [];

function removeUser(arr,str){


	if(arr !== newUserList && arr.length !== 0){
		const findUser = arr.findIndex(function(user){
			if (Object.values(user).toString() === str) return arr.indexOf()
		})

		const filterFindUser = arr.filter(function(idx){
			if(arr.indexOf(idx) !== findUser){
				newUserList.push(idx);
			}
			else{
				return arr.indexOf(idx) === findUser
			}
		})
		return filterFindUser;
	}
	else if(arr === newUserList || arr.length === 0){
		const findUser = arr.findIndex(function(user){
			if (Object.values(user).toString() === str) return arr.indexOf()
		})

		if(findUser === -1){
			return undefined
		}
		else{
			return newUserList;
		}
	}
		
}


// const filterFindUser = arr.filter(function(idx){
// 	return arr.indexOf(idx) !== findUser
// })