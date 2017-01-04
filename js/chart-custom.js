// Soap Consumption In Regions
$(function () {

    // variable define
    var previous12Hours = [];
    var previous24Hours = [];


    // logic for get current hour and next hours
    var getHour = document.getElementById('getHour');
    var getTime = new Date();
    var currentHours = getTime.getHours();
    var hourFormat = 24;

    // previous 12 hours get
    for(var i=0; i<12; i++){
        var hr = currentHours - i;
        if(hr >= 1){
            previous12Hours.push(hr);       
        }else {
            hourFormat = hourFormat - 1;
            previous12Hours.push(hourFormat);   
        }   
    }
    previous12Hours.reverse();

    // previous 24 hours get
    var count = 1;
    for(var i=1; i<=12; i++){
        var hr = currentHours + i;
        if(hr <= 24){
            previous24Hours.push(hr);       
        }else {
            hourFormat = count++;
            previous24Hours.push(hourFormat);   
        }   
    }
    
    var nextAndPreviousHours = previous24Hours.concat(previous12Hours);
    

    var chart = Highcharts.chart('soapConsumptionChart', {
        title: {
            text: ''
        },
        type: 'spline',
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: nextAndPreviousHours
        },
        yAxis: {
            title: {
                text: 'Number of Washes'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            series: {
                lineWidth: 2
            }
        },
        exporting: {
            enabled: false
        },
        credits: {
            text: '',
            href: 'http://srijan.net/'
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            borderColor: "#1ea1ed",
            symbolHeight: 6,
            symbolWidth: 6,
            symbolRadius: 6,
            itemStyle: {
                "color": "#7d7d7d",  
                "fontSize": "14px", 
                "fontWeight": "normal"
            },
            itemDistance: 15,
            itemMarginTop: 0
        },

        series: [{
            name: 'Restroom2',
            data: [5, 50, 100, 200, 300, 400, 500, 600, 700, 750, 500, 400, 200, 100, 5, 50, 100, 200, 300, 400, 500, 600, 500, 400],
            lineColor: "#e0e0e0",
            
            marker: {
                symbol: 'circle',
                fillColor: '#e0e0e0',
                lineColor: "#fff",
                radius: 6
            }
        }, {
            name: 'Grocery',
            data: [10, 40, 90, 190, 250, 440, 600, 610, 720, 710, 400, 300, 220, 60, 10, 40, 90, 190, 600, 610, 720, 710, 400, 300],
            lineColor: "#5bcef6",
            marker: {
                symbol: 'circle',
                fillColor: '#5bcef6',
                radius: 6           }
        }, {
            name: 'Kitchen',
            data: [5, 30, 60, 160, 240, 430, 650, 670, 700, 650, 440, 330, 180, 20, 5, 30, 60, 160, 240, 430, 700, 650, 440, 330],
            lineColor: "#84de63",
            marker: {
                symbol: 'circle',
                fillColor: '#84de63',
                radius: 6
            }
        }, {
            name: 'Restroom',
            data: [5, 20, 30, 50, 150, 200, 250, 400, 250, 150, 100, 50, 20, 10, 5, 20, 30, 50, 150, 200, 250, 150, 100, 50],
            lineColor: "#eea166",
            marker: {
                symbol: 'circle',
                fillColor: '#eea166',
                radius: 6
            }
        },{
            name: 'Meeting Room',
            data: [5, 20, 10, 50, 100, 140, 250, 350, 380, 220, 150, 100, 50, 40, 5, 20, 10, 50, 100, 140, 250, 350, 150, 100],
            lineColor: "#3e3e44",
            marker: {
                symbol: 'circle',
                fillColor: '#3e3e44',
                radius: 6
            }
        }]
    });
    chart.xAxis.forEach(function(d){
        d.setExtremes(12, 23);
    })

    $('#prev24HoursSoapConsumption').click(function(){
        $('#prev12HoursSoapConsumption').css('display','inline-block');
        $(this).css('display', 'none');
        chart.xAxis.forEach(function(d){
            d.setExtremes(0, 11);
        })
        // chart.xAxis[0].setCategories(nextAndPreviousHours);
    })

    // back button click show default data
    $('#prev12HoursSoapConsumption').click(function(){
        $('#prev24HoursSoapConsumption').css('display','inline-block');
        $(this).css('display', 'none');
        chart.xAxis.forEach(function(d){
            d.setExtremes(12, 23);
        })
        // chart.xAxis[0].setCategories(nextAndPreviousHours);
    });
    

});






// Overall Hand Hygiene Health


$(function () {


    // High chart code here
    var chart = Highcharts.chart('overallHandHygieneHealth', {
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
            // ,
            // options: [
            //     color: 'red'
            // ]
            
        },
        series: [
            {
                name: 'site-1',
                data: [138, 227, 340, 319, 370, 239, 350],
                lineColor: "#6eaa55",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#6eaa55',
                    lineColor: "#6eaa55",
                    radius: 6
                }
            }
        ]
    });

    var compareSite = $('#siteCompareTwo select').val();
    $('#siteCompareTwo select').on('change', function(){
        var thisVal = $(this).val();
        if (chart.series.length === 2 && thisVal == 'site-3') {
            $(this).css('border-color','#eea166');
            chart.series[1].remove();
            
            chart.addSeries({
                name: 'Site-3',
                data: [158, 200, 310, 319, 220, 100, 50],
                lineColor: "#eea166",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#eea166',
                    lineColor: "#eea166",
                    radius: 6
                }
            });
        }
        if (chart.series.length === 2 && thisVal == 'site-2') {
            $(this).css('border-color','#6dc0fa');
            chart.series[1].remove();
            chart.addSeries({
                name: 'Site-2',
                data: [198, 267, 320, 389, 430, 209, 400],
                lineColor: "#6dc0fa",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#6dc0fa',
                    lineColor: "#6dc0fa",
                    radius: 6
                }
            });
        }   
    })

    $('#handHygieneHealth #compareSiteBtn').click(function(){
        if (chart.series.length === 1 && compareSite == 'site-2') {
            $('#siteCompareTwo select').css('border-color','#6dc0fa');
            $('#siteCompareOne select').css('border-color','#6eaa55');
            chart.addSeries({
                name: 'Site-2',
                data: [198, 267, 320, 389, 430, 209, 400],
                lineColor: "#6dc0fa",
                
                marker: {
                    symbol: 'circle',
                    fillColor: '#6dc0fa',
                    lineColor: "#6dc0fa",
                    radius: 6
                }
            });
        }
    });
});


