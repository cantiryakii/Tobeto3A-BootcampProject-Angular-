import { Component ,OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetListBootcampResponse } from '../../Models/responses/Bootcamp/get-list-bootcamp-response';
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { bootcampResponseModel } from '../../Models/responses/ResponseModel/bootcampResponseModel';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  apiUrl = "http://localhost:5062/api/Bootcamp/GetAllAsync";
  Bootcamps: GetListBootcampResponse[] = [];


  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    console.log("asd");
    this.getBootcamps();
  }

   getBootcamps() {
     this.HttpClient.get<bootcampResponseModel>(this.apiUrl).subscribe(
       (response) => {
         this.Bootcamps = response.data;
       }
     );
      }
    }