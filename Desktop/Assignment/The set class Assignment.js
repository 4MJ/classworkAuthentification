//The Set Class.
class Group{
	constructor(set=[]){
		this.set=set=[];
	}
	add(content){
		if(this.set.includes(content)){
			return;
	}else{
		this.set.push(content);
		console.log(this.set);
	}
	} 
	delete(content){
		if(this.set.includes(content)){
		let del=this.set.filter(function(value){
			return value !=content;
		});
		console.log(del);
		this.set=del;
		}else
			return;	
	}
	has(content){
		if(this.set.includes(content)){
			console.log(`true`);
		}else{
			console.log(`false`);
		}
	}
}
let content = new Group(12);
content.add(2);
content.add(2);
content.add(4);
content.add(6);
content.delete(2);
content.add(9);
content.delete(5);
content.has(9);