import React from 'react'
import Chart from 'react-google-charts';
import {Spinner} from 'react-bootstrap'


export default class HospitalChart extends React.Component {
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
        x.open('GET', 'https://scin-dev-test.appspot.com/dataserv?rid=' + lgaid + '&fac=hoslist');
        x.onload = x.onerror = function () {
            var data = x.responseText;
            jsonResponse = JSON.parse(data);
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
        x.open('GET','https://scin-dev-test.appspot.com/dataserv?rid=' + lgaid + '&fac=hoslist');
        x.onload = x.onerror = function () {
            var data = x.responseText;
            jsonResponse = JSON.parse(data);
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
        
        let content = []

        if (resultData != null) {
            console.log(resultData)
            let hospitals = resultData.name
            console.log(hospitals)
            console.log(hospitals.length)
            for (var i = 0;i < hospitals.length;i++){
                content.push(<li>{hospitals[i]}</li>)
            }           
    }
        else{
            content = <p>No data for hospitals in this region</p>
        }

        let list = <ul> {content} </ul>
        
        return (
<div className = "hospitalChart" >
                {list}
            </div>
            
        )
    }

}