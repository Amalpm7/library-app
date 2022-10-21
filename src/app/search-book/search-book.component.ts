import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  book_name=""
  readvalue=()=>{
    let data={
      "book_name":this.book_name
    }
    console.log(data)
    this.myapi.searchData(data).subscribe(
      (response)=>{
        this.bookData=response
      }
    )
    }
    updateData=()=>{
      this.myapi.updateData(this.bookData[0]).subscribe(
        (response)=>{
          alert("Succesfully updated")
        }
      )
    }
  bookData:any=[]


  ngOnInit(): void {
  }

}
