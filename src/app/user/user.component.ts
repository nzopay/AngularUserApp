import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public data:any = []
  public userdata: User[];
  public userdataChunk: User[];
  pageCnt = 1
  pageMaxSize = 3
  static pageNumber = 1
  page = 1;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: object []) => { this.data = data,
      this.userdata = this.data.data},
      (error) => console.log(error)
    );
    console.log(UserComponent.pageNumber)
  }
  setPageNumber(){ 
    if(UserComponent.pageNumber == this.pageCnt){
      //set page to 0
      this.increment()
    }else if (UserComponent.pageNumber == this.pageMaxSize){
      this.decrement()
    }

    console.log(UserComponent.pageNumber)
  }

  decrement(){
    UserComponent.pageNumber--;
    console.log("decremented " + UserComponent.pageNumber)
    this.setPageNumber()
  }

  toggle(){
    if( this.page == 1){
        this.page = 2;
    }else{
      this.page = 1;
    }
    this.loadData()
  }
  increment(){
    UserComponent.pageNumber++;
    console.log("incremented " + UserComponent.pageNumber)
    this.setPageNumber()
  }
  loadData(){
    console.log("In loadData")
    this.userService.getUsersByPage(this.page).subscribe(
      (data: object []) => { this.data = data,console.log(this.data),
      this.userdata = this.data.data,console.log(this.userdata)},
      (error) => console.log(error)
    );
  }

  paginate(event){
      this.userdataChunk = this.userdata.slice(event.first, event.first+event.rows)
  }
  
}
