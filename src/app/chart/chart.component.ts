import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart: any = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForcast()
        .subscribe(res => {
          // console.log(res);
          const temp_max = res['list'].map( resp => resp.main.temp_max);
          const temp_min = res['list'].map( resp => resp.main.temp_min);
          const alldates = res['list'].map( resp => resp.dt);


          const weatherDates = [];
          alldates.forEach((resp) => {
            const jsdate = new Date(resp * 1000);
            weatherDates.push(jsdate.toLocaleTimeString('en', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }));
          });

          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
              labels: weatherDates,
              datasets: [
                {
                  data: temp_max,
                  borderColor: '#3cba9f',
                  fill: false,
                  backgroundColor: 'rgb(255, 99, 132)'
                },
                {
                  data: temp_min,
                  borderColor: '#ffcc00',
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }],
              }
            }
          });

        });
  }

}
