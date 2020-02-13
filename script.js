class Element {
	constructor(pname,prname,cat,img,next = null,prev = null){
		this.pname=pname;
        this.prname=prname;
        this.cat=cat;
        this.img=img;
		this.next=next;
		this.prev=prev;
	}
}

class Stack {
	constructor(){
		this.length=0;
		this.head=null;
		this.tail=null;
		this.pointer = null;

	}

	pushToList(pname,prname,cat,img){
		var element = new Element(pname,prname,cat,img);
		if(this.length==0){
			this.pointer  = this.tail =  this.head  = element;
			
		}else
		{
			this.tail.next = element;
			element.prev = this.tail;
			this.tail=element;
			
		}

		this.length++;
		return element;

	}

	
	dispElement(){
		if(this.pointer){
			return '<div> <img src="img/'+this.pointer.img +'"><h1>'+ this.pointer.pname + '</h1><h3> by: '+this.pointer.prname+'</h3><h3>Category : '+this.pointer.cat+ '</h3></div>';
		} else return "No Data";
	}



}


let stack = new Stack();


// STACK

function empiler(){
	stack.pushToList(document.getElementById("pname").value,document.getElementById("prname").value,document.getElementById("cat").value,document.getElementById("imglink").value);
	printElement();
	
}



function printElement(){
	document.getElementById("the-3-PODCASTS").innerHTML += stack.dispElement();
}

