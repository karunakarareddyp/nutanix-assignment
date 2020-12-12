import React, {useEffect} from 'react';
import Highcharts from 'highcharts/highstock';
import highchartsWordcloud from 'highcharts/modules/wordcloud';
import HighchartsReact from 'highcharts-react-official'

highchartsWordcloud(Highcharts);

const WordCloudView = (props) => {
  function getSeriesData() {
    const lines = props?.data?.split(/[,\. ]+/g);
    const seriesData = lines.reduce((arr, word) => {
      let obj = Highcharts.find(arr, function (obj) {
        return obj.name === word;
      });
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {name: word, weight: 1};
        arr.push(obj);
      }
      return arr;
    }, []);
    return seriesData;
  }

  const options = {
    series: [{
      type: 'wordcloud',
      data: getSeriesData(),
      name: 'nutanix'
    }],
    credits: false,
    title: {
        text: undefined
    }
  };

  return (<HighchartsReact highcharts={Highcharts} options={options}/>);
}

export default WordCloudView;
