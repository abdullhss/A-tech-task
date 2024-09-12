import { Component , AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements AfterViewInit {
  constructor() { }
  ngAfterViewInit() : void {
    const option = {
      
      xAxis: {
        type: 'category',
        data: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
      },
      yAxis: {
        show:false
      },
      series: [
        {
          data: [820, 932, 901, 270, 1290, 1330, 70, 932, 901, 934,600, 1330, ],
          type: 'line',
          smooth: true,
          itemStyle: {
            color: 'rgba(138, 116, 249, 1)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(138, 116, 249, 1)'
              },
              {
                offset: 1,
                color: 'rgba(138, 116, 249, 0)'
              }
            ])
          }
        }
      ]
    };
    
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);

  }
}