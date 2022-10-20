import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  book_name=""
  author=""
  date=""
  volume=""
  readvalue=()=>{
    let data={
      "book_name":this.book_name,
      "author":this.author,
      "date":this.date,
      "volume":this.volume
    }
    console.log(data)
    this.myapi.putData(data).subscribe(
      (response)=>{

      }
    )
    alert("Successfully Added")
    this.book_name=""
    this.author=""
    this.date=""
    this.volume=""
  }

  ngOnInit(): void {
  }

}
