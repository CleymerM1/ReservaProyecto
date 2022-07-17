import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { getDataColors } from '../helpers';

@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.css']
})
export class PolarComponent implements OnInit {

  title = 'Los productos más vendidos';
  public polarAreaChartLabels: string[] = [ 'Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 50, 25, 100, 33, 5 ], borderColor: getDataColors(), backgroundColor: getDataColors(20) },
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
    plugins: {
      legend: {position: 'left'}
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
