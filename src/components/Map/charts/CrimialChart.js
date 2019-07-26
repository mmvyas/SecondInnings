import React from 'react'
import Chart from 'react-google-charts';
import Select from 'react-select';
import {Spinner} from 'react-bootstrap'


export default class CriminalChart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rateOrIncident: "Criminal Rate",
            currentLGA: this.props.lga
        }
        const lgaid= this.props.lga
        console.log(lgaid)
        var jsonResponse
        var x = new XMLHttpRequest();
        x.open('GET', 'https://scin-dev-test.appspot.com/dataserv?rid='+ lgaid +'&fac=crmn');
        x.onload = x.onerror = function() {
        console.log(x.responseText)
        var data=x.responseText;
        jsonResponse = JSON.parse(data);
        console.log(jsonResponse);
            this.setState({
                fetchData: jsonResponse
            })
        
        }.bind(this)
        x.send();

    }
       

        
    

    componentDidUpdate(previousProps, previousState){
        const lgaid= this.props.lga
        console.log(lgaid)
        var jsonResponse
        var x = new XMLHttpRequest();
        x.open('GET', 'https://scin-dev-test.appspot.com/dataserv?rid='+ lgaid +'&fac=crmn');
        x.onload = x.onerror = function() {
        console.log(x.responseText)
        var data=x.responseText;
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

    
    // doCORSRequest = (lgaid) =>{
    //     var jsonResponse
    //     var x = new XMLHttpRequest();
    //     x.open('GET', 'https://cors-anywhere.herokuapp.com/' + 'https://nd-inning-236710.appspot.com/dataserv?rid='+ lgaid +'&fac=crmn');
    //     x.onload = x.onerror = function() {
    //     console.log(x.responseText)
    //     var data=x.responseText;
    //     jsonResponse = JSON.parse(data);
    //     console.log(jsonResponse);
    //     this.setState({
    //         fetchData: jsonResponse
    //     }
    //     )
    //     }.bind(this);
    //     x.send();
    // }
    ChartDataSelectionChanged = (e) => {
        this.setState({
            rateOrIncident: e.value
        });
      }

    render() {
        console.log("render")
        const resultData = this.state.fetchData
        let dataSet1 = [['Year', 'Criminal Rate (per 10k)']]
        let dataSet2 = [['Year', 'Criminal incidents']]
        let content = null
        if (resultData != null){

            for (var i =0; i<resultData.years.length;i++){
                let year = resultData.years[i].toString()
                let rate = resultData.rates[i]
                let incidents = resultData.incidents[i]
                dataSet1.push([year,rate])
                dataSet2.push([year,incidents])

            }
       
        const { rateinciOption } = this.state.rateOrIncident
        const rateinciOptionSelect = [
            {
              "label": "Criminal Rate",
              "value": "Criminal Rate"
            },
            {
              "label": "Criminal Incidents",
              "value": "Criminal Incidents"
            }
           ]
           let dataSet = null
           if (this.state.rateOrIncident ==="Criminal Rate"){
               dataSet = dataSet1
           }
           else{
               dataSet = dataSet2
           }
           content = (
               <div>
           <Select 
                value={rateinciOption} 
                onChange={this.ChartDataSelectionChanged} 
                options={rateinciOptionSelect}
                defaultValue={{ label: "Criminal Rate", value: "Criminal Rate" }} />
           
           <Chart
              height={'350px'}
               chartType="LineChart"
               loader={<Spinner animation="border" variant="primary" />}
               
               data={dataSet}
               options={{
                   // Material design options
                   chart: {
                       title: 'Criminal in this area',
                   },
               }}
               // For tests
               rootProps={{ 'data-testid': '2' }}
           />
           </div>
           )
           

    }
        else{
            content = <p></p>

        }
        

        return (
            <div className = "criminalChart" >
                {content}
            </div>

        )
    }

}