import React from 'react'

export default class Testcors extends React.Component{
 
    constructor(props){
      super(props)
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      // let jsonResponse = null
      // let url = 'https://scin-recom-serv.appspot.com/findreg?nat=Afghanistan&age=15-24&jin=Accommodation%20and%20Food%20Services&hpr=&hrt='
      // var res = encodeURI(url);
      // console.log(res)
      // var x = new XMLHttpRequest();
      // x.open('GET',res);
      // x.onload = x.onerror = function() {
      // var data=x.responseText;
      // jsonResponse = JSON.parse(data);
      // console.log(jsonResponse);
      // this.setState({
      //   fetchData:jsonResponse
      // })
      // }.bind(this)
      // x.send()
      fetch("https://scin-recom-serv.appspot.com/findreg?nat=Afghanistan&age=15-24&jin=Accommodation%20and%20Food%20Services&hpr=&hrt=")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    }

    componentDidMount() {
      
    }
    render(){
        return(<p>{this.state.fetchData}</p>)
    }
}