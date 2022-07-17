import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { getDataColors } from '../helpers';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  title = 'Las categorías más vendidas';
  colors = ['#007bff', '#dc3545', '#ffc107', '#28a745', '#6c757d', '#17a2b8', '#f8f9fa', '#343a40', '#7b1fa2'];

  // Dona
  public doughnutChartLabels: string[] = [ 'Categoria 1', 'Categoria 2', 'Categoria 3' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: '', borderColor: getDataColors(), backgroundColor: getDataColors(20) },

    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    plugins: {
      legend: {position: 'left'}
    }
  };



  constructor() { }

  ngOnInit(): void {
  }

}
