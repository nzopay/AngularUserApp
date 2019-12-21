import { Component, OnInit, Input } from '@angular/core';
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
  public userId: number
  @Input() public parentData;
  constructor(private userService: UserService) { }

  ngOnInit() {
    /*this.userService.getUsers().subscribe(
      (data: object []) => { this.data = data,
      this.userdata = this.data.data},
      (error) => console.log(error)
    );*/
    //console.log(UserComponent.pageNumber)
  }
  
  getUsersById(){
    this.userService.getUsersById(this.userId).subscribe(
      (data:any) => {console.log("data is "+ data), this.userdata = data},
      (error) => console.log(error)
    );
    console.log("this is the number",this.userId);
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

 
  increment(){
    UserComponent.pageNumber++;
    console.log("incremented " + UserComponent.pageNumber)
    this.setPageNumber()
  }
 
}
