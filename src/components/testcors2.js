import React from 'react'
export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://scin-recom-serv.appspot.com/findreg?nat=Afghanistan&age=15-24&jin=Accommodation%20and%20Food%20Services&hpr=&hrt=",{
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        credentials: "include", // include, *same-origin, omit
    }
)
        // .then(res => JSON.parse(res))
        .then(
          (result) => {
            console.log(result)
            this.setState({
              isLoaded: true,
              items: result.items
            });
            
          },
          
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              console.log(error)
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
            <br></br>
            <br></br>
            <br></br>
          <p>{this.state.items}</p>
          <p>show sth</p>
          </div>
        );
      }
    }
  }