import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { getDataColors } from '../helpers';
@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  title = 'Productos más vendidos por departamento';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Olancho', 'El Paraiso', 'Choluteca', 'Valle', 'Yoro', 'Gracias a Dios', 'Cortes' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Producto 1', backgroundColor: getDataColors(), borderColor: getDataColors(), borderWidth: 1 },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Producto 2', backgroundColor: getDataColors(), borderColor: getDataColors(), borderWidth: 1 },
      { data: [ 24, 12, 91, 40, 33, 14, 10 ], label: 'Producto 3', backgroundColor: getDataColors(), borderColor: getDataColors(), borderWidth: 1 },
      { data: [ 1, 10, 90, 105, 30, 84, 26 ], label: 'Producto 4', backgroundColor: getDataColors(), borderColor: getDataColors(), borderWidth: 1 },
      { data: [ 14, 24, 20, 9, 33, 2, 90 ], label: 'Producto 5', backgroundColor: getDataColors(), borderColor: getDataColors(), borderWidth: 1 }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    plugins: {
      legend: {position: 'left'},
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
