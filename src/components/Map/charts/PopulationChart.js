import React from 'react'
import Chart from 'react-google-charts';
import {Spinner} from 'react-bootstrap'

export default class PopulationChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLGA: this.props.lga,
            fetchData: null
        }
        const lgaid = this.props.lga
        console.log(lgaid)
        var jsonResponse
        var x = new XMLHttpRequest();
        x.open('GET', 'https://scin-dev-test.appspot.com/dataserv?rid=' + lgaid + '&fac=pop');
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
        x.open('GET', 'https://scin-dev-test.appspot.com/dataserv?rid='+ lgaid + '&fac=pop');
        x.onload = x.onerror = function () {
            console.log(x.responseText)
            var data = x.responseText;
            jsonResponse = JSON.parse(data);
            console.log(jsonResponse);
            if (previousProps.lga !== this.props.lga || previousProps.charttype !== this.props.chartType) {
                this.setState({
                    fetchData: jsonResponse
                })
            }
        }.bind(this);
        x.send();

    }
    render() {
        const resultData = this.state.fetchData
        let content = null
        let dataSet = [['Native culture', 'Population']]
        if (resultData != null) {

            for (var i = 0; i < resultData.nationality.length; i++) {
                let nationality = resultData.nationality[i].toString()
                let population = resultData.population[i]
                dataSet.push([nationality, population])
            }
            console.log(resultData)
            content = (

                <Chart
                    height={600}
                    chartType="PieChart"
                    loader={<Spinner animation="border" variant="primary" />}
                    data={dataSet}
                    options={{
                        title: 'Top 5 cultures in this Region',
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '5' }}
                />
            )
        }





        else {
            content = <p></p>

        }
        return (
            <div className = "populationChart" >
            {content}
            </div>

        )
    }

}
