import { Component, OnInit } from '@angular/core';
import flightsData from './flights.json';
import { BookingService } from '../services/booking.service';

interface Flight {
  id: String;
  from: String;
  to: String;
  departure: String;
  arrival: String;
  price: String;
}

@Component({
  selector: 'app-contact',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  flights: Flight[] = flightsData;
  flightIdsToPay: String[] = [];

  constructor(private bookingService: BookingService) {}

  saveBooking(
    id: string,
    from: string,
    to: string,
    departure: string,
    arrival: string,
    price: string
  ) {
    const toSave: Flight = {
      id: id,
      from: from,
      to: to,
      departure: departure,
      arrival: arrival,
      price: price,
    };

    if (this.flightIdsToPay.indexOf(id) == -1) {
      this.bookingService.flightsToPay.push(toSave);
      this.flightIdsToPay = this.bookingService.flightsToPay.map(
        (entry) => entry.id
      );
    } else {
      this.bookingService.flightsToPay =
        this.bookingService.flightsToPay.filter((entry) => entry.id !== id);
      this.flightIdsToPay = this.bookingService.flightsToPay.map(
        (entry) => entry.id
      );
    }

    console.log(this.flightIdsToPay);
    /*
    if (document.getElementById(id).style.color == 'grey') {
      document.getElementById(id).style.color = 'green';
    } else {
      document.getElementById(id).style.color = 'grey';
    }
    */
  }

  onChangeFrom(event) {
    this.flights = flightsData.filter(function (entry) {
      return entry.from.toLowerCase().includes(event.toLowerCase());
    });
  }

  onChangeTo(event) {
    this.flights = flightsData.filter(function (entry) {
      return entry.to.toLowerCase().includes(event.toLowerCase());
    });
  }

  onClickSubmit(data) {
    this.flights = flightsData.filter(function (entry) {
      return entry.from == data.from && entry.to == data.to;
    });
  }

  ngOnInit() {}
}
