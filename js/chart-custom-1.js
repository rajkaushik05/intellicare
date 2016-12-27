// Soap Consumption in MT -1
$(function () {
    var chart = Highcharts.chart('SoapConsumptionInMT-1', {
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
            text: '',
            href: 'http://srijan.net/'
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            borderColor: "#1ea1ed",
            borderRadius: 20,
            itemStyle: {
                "color": "#7d7d7d",  
                "fontSize": "14px", 
                "fontWeight": "normal"
            },
            itemDistance: 15,
            itemMarginTop: 10
        },
        xAxis: {
            categories: ['Dec1', 'Dec2', 'Dec3', 'Dec4', 'Dec5', 'Dec6',
                'Dec7']
        },
        yAxis: {
            title: {
                text: 'Number of washes'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'site-1',
            data: [138, 227, 340, 319, 370, 239, 350],
            lineColor: "#6eaa55",
            
            marker: {
                symbol: 'circle',
                fillColor: '#6eaa55',
                lineColor: "#6eaa55",
                radius: 6
            }
        }]
    });

    
    $('.consumptionChartSelect').on('change', function(){
        var thisVal = $(this).val();
        if (chart.series.length === 1 && thisVal == 'thisweek') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-1',
                data: [138, 227, 340, 319, 370, 239, 350],
                lineColor: "#6eaa55",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#6eaa55',
                    lineColor: "#6eaa55",
                    radius: 6
                }
            });
        }

        if (chart.series.length === 1 && thisVal == 'lastweek') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-1',
                data: [50, 100, 150, 100, 80, 60, 30],
                lineColor: "#1ea1ed",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#1ea1ed',
                    lineColor: "#1ea1ed",
                    radius: 6
                }
            });
        }
        if (chart.series.length === 1 && thisVal == 'lastmonth') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-1',
                data: [198, 267, 320, 389, 430, 209, 400],
                lineColor: "#eea166",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#eea166',
                    lineColor: "#eea166",
                    radius: 6
                }
            });
        }   
    })

});


// Soap Consumption in MT - 2
$(function () {
    var chart = Highcharts.chart('SoapConsumptionInMT-2', {
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
            text: '',
            href: 'http://srijan.net/'
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            borderColor: "#1ea1ed",
            borderRadius: 20,
            itemStyle: {
                "color": "#7d7d7d",  
                "fontSize": "14px", 
                "fontWeight": "normal"
            },
            itemDistance: 15,
            itemMarginTop: 10
        },
        xAxis: {
            categories: ['Dec1', 'Dec2', 'Dec3', 'Dec4', 'Dec5', 'Dec6',
                'Dec7']
        },
        yAxis: {
            title: {
                text: 'Number of washes'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'site-2',
            data: [138, 227, 340, 319, 370, 239, 350],
            lineColor: "#6eaa55",
            
            marker: {
                symbol: 'circle',
                fillColor: '#6eaa55',
                lineColor: "#6eaa55",
                radius: 6
            }
        }]
    });

    $('.consumptionChartSelect').on('change', function(){
        var thisVal = $(this).val();
        if (chart.series.length === 1 && thisVal == 'thisweek') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-2',
                data: [138, 227, 340, 319, 370, 239, 350],
                lineColor: "#6eaa55",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#6eaa55',
                    lineColor: "#6eaa55",
                    radius: 6
                }
            });
        }

        if (chart.series.length === 1 && thisVal == 'lastweek') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-2',
                data: [50, 100, 150, 100, 80, 60, 30],
                lineColor: "#1ea1ed",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#1ea1ed',
                    lineColor: "#1ea1ed",
                    radius: 6
                }
            });
        }
        if (chart.series.length === 1 && thisVal == 'lastmonth') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-2',
                data: [198, 267, 320, 389, 430, 209, 400],
                lineColor: "#eea166",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#eea166',
                    lineColor: "#eea166",
                    radius: 6
                }
            });
        }   
    })

});