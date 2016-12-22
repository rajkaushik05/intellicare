// Soap Consumption in MT -1
$(function () {
    Highcharts.chart('SoapConsumptionInMT-1', {
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
            name: 'Compare',
            data: [138, 227, 340, 319, 370, 239, 350],
            lineColor: "#6eaa55",
            
            marker: {
                symbol: 'circle',
                fillColor: '#6eaa55',
                lineColor: "#6eaa55",
                radius: 6
            }
        },
        {
            name: 'Selected',
            data: [198, 267, 320, 389, 430, 209, 400],
            lineColor: "#6dc0fa",
            
            marker: {
                symbol: 'circle',
                fillColor: '#6dc0fa',
                lineColor: "#6dc0fa",
                radius: 6
            }
        }]
    });
});


// Soap Consumption in MT - 2
$(function () {
    Highcharts.chart('SoapConsumptionInMT-2', {
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
            name: 'Compare',
            data: [50, 100, 150, 100, 80, 60, 10, 5],
            lineColor: "#6eaa55",
            
            marker: {
                symbol: 'circle',
                fillColor: '#6eaa55',
                lineColor: "#6eaa55",
                radius: 6
            }
        },
        {
            name: 'Selected',
            data: [40, 80, 150, 60, 10],
            lineColor: "#6dc0fa",
            
            marker: {
                symbol: 'circle',
                fillColor: '#6dc0fa',
                lineColor: "#6dc0fa",
                radius: 6
            }
        }]
    });
});