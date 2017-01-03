// var thisWeekDate = [];

// var newDate = new Date();
// var manth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var currentMonth = manth[newDate.getMonth()];
// var getDate = newDate.getDate();


// Soap Consumption in MT -1

var lastWeekDate = ['Dec1', 'Dec2', 'Dec3', 'Dec4', 'Dec5', 'Dec6','Dec7'];
var thisWeekDate = ['Dec8', 'Dec9', 'Dec10', 'Dec11', 'Dec12', 'Dec13','Dec14'];
var lastMonthDate = ['Nov1', 'Nov2', 'Nov3', 'Nov4', 'Nov5', 'Nov6', 'Nov7', 'Nov8', 'Nov9', 'Nov10', 'Nov11', 'Nov12', 'Nov13', 'Nov14', 'Nov15', 'Nov16', 'Nov17', 'Nov18', 'Nov19', 'Nov20', 'Nov21', 'Nov22', 'Nov23', 'Nov24', 'Nov25', 'Nov26', 'Nov27', 'Nov28', 'Nov29', 'Nov30'];

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
        exporting: {
            enabled: false
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            symbolHeight: 6,
            symbolWidth: 6,
            symbolRadius: 6,
            enabled: false,
            itemStyle: {
                "fontSize": "14px", 
                "fontWeight": "normal"
            },
            itemDistance: 15,
            itemMarginTop: 10
        },
        xAxis: {
            categories: thisWeekDate
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
            chart.xAxis[0].setCategories(thisWeekDate);
        }

        if (chart.series.length === 1 && thisVal == 'lastweek') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-1',
                data: [50, 100, 150, 100, 80, 60, 30],
                lineColor: "#6eaa55",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#6eaa55',
                    lineColor: "#6eaa55",
                    radius: 6
                }
            });
            chart.xAxis[0].setCategories(lastWeekDate);
        }
        if (chart.series.length === 1 && thisVal == 'lastmonth') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-1',
                data: [100, 150, 200, 230, 250, 300, 400, 430, 450, 400, 390, 380, 250, 290, 350, 340, 370, 380, 400, 250, 222, 235, 300, 150, 200, 230, 60, 70, 29, 40],
                lineColor: "#6eaa55",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#6eaa55',
                    lineColor: "#6eaa55",
                    radius: 6
                }
            });
            chart.xAxis[0].setCategories(lastMonthDate);
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
        exporting: {
            enabled: false
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            borderColor: "#1ea1ed",
            symbolHeight: 6,
            symbolWidth: 6,
            symbolRadius: 6,
            enabled: false,
            itemStyle: {
                "color": "#7d7d7d",  
                "fontSize": "14px", 
                "fontWeight": "normal"
            },
            itemDistance: 15,
            itemMarginTop: 10
        },
        xAxis: {
            categories: thisWeekDate
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
            lineColor: "#1ea1ed",
            
            marker: {
                symbol: 'circle',
                fillColor: '#1ea1ed',
                lineColor: "#1ea1ed",
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
                lineColor: "#1ea1ed",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#1ea1ed',
                    lineColor: "#1ea1ed",
                    radius: 6
                }
            });
            chart.xAxis[0].setCategories(thisWeekDate);
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
            chart.xAxis[0].setCategories(lastWeekDate);
        }
        if (chart.series.length === 1 && thisVal == 'lastmonth') {
            chart.series[0].remove();
            chart.addSeries({
                name: 'site-2',
                data: [100, 150, 200, 230, 250, 300, 400, 430, 450, 400, 390, 380, 250, 290, 350, 340, 370, 380, 400, 250, 222, 235, 300, 150, 200, 230, 60, 70, 29, 40],
                lineColor: "#1ea1ed",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#1ea1ed',
                    lineColor: "#1ea1ed",
                    radius: 6
                }
            });
            chart.xAxis[0].setCategories(lastMonthDate);
        }   
    })

});