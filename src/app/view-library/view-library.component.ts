import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-library',
  templateUrl: './view-library.component.html',
  styleUrls: ['./view-library.component.css']
})
export class ViewLibraryComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putViewLibrary() }
  putViewLibrary=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.libraryData=data
      }
    )
  }
  deleteBook=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteBook(data).subscribe(
      (resp)=>{
        alert("Deleted")
      }
    )
    this.putViewLibrary()
  }
  libraryData:any=[]
  

  ngOnInit(): void {
  }

}
