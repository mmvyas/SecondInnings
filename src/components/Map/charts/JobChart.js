import React from 'react'
import Chart from 'react-google-charts';
import {Spinner} from 'react-bootstrap'


export default class JobChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLGA: this.props.lga
        }
        const lgaid = this.props.lga
        console.log(lgaid)
        var jsonResponse
        var x = new XMLHttpRequest();
        x.open('GET', 'https://scin-dev-test.appspot.com/dataserv?rid='+ lgaid + '&fac=top5job');
        x.onload = x.onerror = function () {
            console.log(x.responseText)
            var data = x.responseText;
            jsonResponse = JSON.parse(data);
            console.log(jsonResponse);
                this.setState({
                    fetchData: jsonResponse
                })
            
        }.bind(this);
        x.send();
    }
    componentDidUpdate(previousProps, previousState) {
        const lgaid = this.props.lga
        console.log(lgaid)
        var jsonResponse
        var x = new XMLHttpRequest();
        x.open('GET', 'https://scin-dev-test.appspot.com/dataserv?rid=' + lgaid + '&fac=top5job');
        x.onload = x.onerror = function () {
            console.log(x.responseText)
            var data = x.responseText;
            jsonResponse = JSON.parse(data);
            console.log(jsonResponse);
            if (previousProps.lga !== this.props.lga) {
                this.setState({
                    fetchData: jsonResponse
                })
            }
        }.bind(this);
        x.send();

    }


    render() {
        const resultData = this.state.fetchData
        let dataSet = [['Job Industry', 'Number of Jobs']]
        let content = <p></p>
        if (resultData != null) {

            for (var i = 0; i < resultData.jobIndustry.length; i++) {
                let jobIndustry = resultData.jobIndustry[i].toString()
                let numberOfJobs = resultData.numberOfJobs[i]
                dataSet.push([jobIndustry, numberOfJobs])
            }
            console.log(resultData)
            content = <Chart
            height={400}
                chartType="ColumnChart"
                loader={<Spinner animation="border" variant="primary" />}
                data={dataSet}
                options={{
                    title: 'Top 5 popular jobs in this region',
                    // Material design options
                    chart: {
                        title: 'Top 5 popular jobs in this region',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        }
        
        return (

            <div className = "jobChart" >{content}</div>
        )
    }

}