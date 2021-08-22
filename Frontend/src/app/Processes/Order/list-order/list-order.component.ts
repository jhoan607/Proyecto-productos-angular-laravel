import { Component, OnInit } from '@angular/core';

export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}   

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  constructor()    
  {    
    this.myItems.push(    
      new MyItems("First Value"),    
      new MyItems("Second Value"),    
      new MyItems("Third Value"),    
      new MyItems("Forth Value"),    
      new MyItems("Fifth Value")    
    );    
  }

  title = 'Working With Array In Angular 5';    
    
  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    
  // Provide some values to the array    
  
  
  AddItem() {    
    this.myItems.push(    
      this.newItem    
    );    
    this.newItem = {};    
  } 
  
  // When user selects edit option  
EditItem(i) {  
  this.newItem.Value = this.myItems[i].Value;  
  this.updatedItem = i;  
  this.IsForUpdate = true;  
}  
  
// When user clicks on update button to submit updated value  
UpdateItem() {  
  let data = this.updatedItem;  
  for (let i = 0; i < this.myItems.length; i++) {  
    if (i == data) {  
      this.myItems[i].Value = this.newItem.Value;  
    }  
  }  
  this.IsForUpdate = false;  
  this.newItem = {};  
}

DeleteItem(i) {  
  this.myItems.splice(i, 1);  
}  

  ngOnInit() {
  }

}
