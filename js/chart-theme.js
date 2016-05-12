var seriesColors = [
  '#2b908f', //0
  '#90ee7e',
  '#f45b5b',
  '#7798BF',
  '#aaeeee',
  '#ff0066', //5
  '#eeaaee',
  '#55BF3B',
  '#DF5353',
  '#7798BF',
  '#aaeeee' //10
];

var chartColors = [
  '#000000', //0
  '#3e3e40',
  '#606063',
  '#E0E0E3'
];

Highcharts.theme = {
  colors: [seriesColors[0], seriesColors[1], seriesColors[2], seriesColors[3], seriesColors[4], seriesColors[5], seriesColors[6], seriesColors[7], seriesColors[8], seriesColors[9], seriesColors[10]],

  chart: {
    backgroundColor: chartColors[0],
    plotBorderColor: chartColors[2]
  },

  title: {
    style: {
      color: chartColors[2],
    }
  },

  subtitle: {
    style: {
      color: chartColors[2],
    }
  },

  xAxis: {
    gridLineColor: chartColors[1],
    labels: {
      style: {
        color: chartColors[2]
      }
    },
    lineColor: chartColors[1],
    minorGridLineColor: chartColors[1],
    tickColor: chartColors[1],
    title: {
      style: {
        color: chartColors[2]
      }
    }
  },

  yAxis: {
    gridLineColor: chartColors[1],
    labels: {
      style: {
        color: chartColors[2]
      }
    },
    lineColor: chartColors[1],
    minorGridLineColor: chartColors[1],
    tickColor: chartColors[1],
    title: {
      style: {
        color: chartColors[2]
      }
    }
  },

  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    style: {
      color: chartColors[2]
    }
  },

  plotOptions: {
    series: {
      dataLabels: {
        color: chartColors[1]
      },
      marker: {
        lineColor: chartColors[0]
      }
    },
    boxplot: {
      fillColor: chartColors[0]
    },
    candlestick: {
      lineColor: chartColors[0]
    },
    errorbar: {
      color: chartColors[0]
    }
  },

  legend: {
    itemStyle: {
      color: chartColors[2]
    },
    itemHoverStyle: {
      color: chartColors[2]
    },
    itemHiddenStyle: {
      color: chartColors[1]
    }
  },

  credits: {
    style: {
      color: chartColors[1]
    }
  },

  labels: {
    style: {
      color: chartColors[1]
    }
  },

  navigation: {
    buttonOptions: {
      symbolStroke: chartColors[2],
      theme: {
        fill: chartColors[1]
      }
    }
  },

  rangeSelector: {
    buttonTheme: {
      fill: chartColors[0],
      stroke: chartColors[3],
      style: {
        color: chartColors[3]
      },
      states: {
        hover: {
          fill: chartColors[1],
          stroke: chartColors[3],
          style: {
            color: chartColors[3]
          }
        },
        select: {
          fill: chartColors[3],
          stroke: chartColors[3],
          style: {
            color: chartColors[1]
          }
        },
        disabled: {
          fill: 'transparent',
          stroke: 'transparent',
          style: {
            color: chartColors[1],
            cursor: 'default'
          }
        }
      }
    },
    inputBoxBorderColor: chartColors[1],
    inputStyle: {
      backgroundColor: chartColors[1],
      color: chartColors[2]
    },
    labelStyle: {
      color: chartColors[2]
    }
  },

  navigator: {
    handles: {
      backgroundColor: chartColors[0],
      borderColor: chartColors[3]
    }
  },

  scrollbar: {
    barBackgroundColor: chartColors[0],
    barBorderColor: chartColors[1],
    buttonArrowColor: chartColors[2],
    buttonBackgroundColor: chartColors[0],
    buttonBorderColor: chartColors[1],
    rifleColor: chartColors[3],
    trackBackgroundColor: chartColors[1],
    trackBorderColor: chartColors[1]
  }
};

Highcharts.setOptions(Highcharts.theme);
