import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentServiceService {
  private url_create_booking = '/createTravel/';

  constructor(private http: HttpClient) {}

  public booking_trip(data: any): void {
    this.http
      .post(environment.apiUrl + this.url_create_booking, data)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          //this.presentToast('Error!');
          console.log(err);
        }
      );
  }
}