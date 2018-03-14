$('.nav-tabs a[href="#live"]').tab('show');

Highcharts.chart('column_basic', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },

    xAxis: {
        categories: [
            '00 ',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23'
        ],

        crosshair: true
    },
    yAxis: {
        labels: {
            format: '{value} kWh',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        min: 0,
        title: {
            text: ' kWh'
        }

    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
    },

    plotOptions: {

        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{

        name: 'BUYING',
        data: [10, 12.5, 18.5, 25.2, 12.5, 7.0, 10, 4, 7.5, 16.5, 13.5, 7.5, 10.0, 12.5, 17.5, 7.5, 16.5, 12.5, 10.0, 12.5, 4.0, 6.5, 13.5, 8.5]

    }, {
        name: 'SELLING',
        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 17.5, 0.0, 0.0, 0.0, 0.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 14.0, 0.0, 0.0, 0.0]

    }]

});
Highcharts.chart('column_basic2', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },

    xAxis: {
        categories: [
            '00 ',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23'
        ],

        crosshair: true
    },
    yAxis: {
        labels: {
            format: '{value} kWh',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        min: 0,
        title: {
            text: ' kWh'
        }

    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
    },

    plotOptions: {

        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{

        name: 'BUYING',
        data: [10, 12.5, 18.5, 25.2, 12.5, 7.0, 10, 4, 7.5, 16.5, 13.5, 7.5, 10.0, 12.5, 17.5, 7.5, 16.5, 12.5, 10.0, 12.5, 4.0, 6.5, 13.5, 8.5]

    }, {
        name: 'SELLING',
        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 17.5, 0.0, 0.0, 0.0, 0.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 14.0, 0.0, 0.0, 0.0]

    }]

});
Highcharts.chart('column_basic3', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },

    xAxis: {
        categories: [
            '00 ',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23'
        ],

        crosshair: true
    },
    yAxis: {
        labels: {
            format: '{value} kWh',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        min: 0,
        title: {
            text: ' kWh'
        }

    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
    },

    plotOptions: {

        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{

        name: 'BUYING',
        data: [10, 12.5, 18.5, 25.2, 12.5, 7.0, 10, 4, 7.5, 16.5, 13.5, 7.5, 10.0, 12.5, 17.5, 7.5, 16.5, 12.5, 10.0, 12.5, 4.0, 6.5, 13.5, 8.5]

    }, {
        name: 'SELLING',
        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 17.5, 0.0, 0.0, 0.0, 0.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 14.0, 0.0, 0.0, 0.0]

    }]

});
Highcharts.chart('column_basic4', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },

    xAxis: {
        categories: [
            '00 ',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23'
        ],

        crosshair: true
    },
    yAxis: {
        labels: {
            format: '{value} kWh',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        min: 0,
        title: {
            text: ' kWh'
        }

    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
    },

    plotOptions: {

        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{

        name: 'BUYING',
        data: [10, 12.5, 18.5, 25.2, 12.5, 7.0, 10, 4, 7.5, 16.5, 13.5, 7.5, 10.0, 12.5, 17.5, 7.5, 16.5, 12.5, 10.0, 12.5, 4.0, 6.5, 13.5, 8.5]

    }, {
        name: 'SELLING',
        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 17.5, 0.0, 0.0, 0.0, 0.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 14.0, 0.0, 0.0, 0.0]

    }]

});

$(".nav li:not(:first-child)").click(function() {
    $(this).parent().addClass("checked"); //добавляем класс текущей (нажатой)
    $(this).parent().removeClass("checked2");
});

$(".nav li:first-child").click(function() {
    $(this).parent().addClass("checked2");
});
