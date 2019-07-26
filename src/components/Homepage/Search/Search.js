import React from 'react'
import Select from 'react-select';
import './Search.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {Spinner} from 'react-bootstrap'


export default class Search extends React.Component{
    constructor(props) {
        super(props);
    
    this.state = {
        lga: {
            "label": "ALPINE",
            "value": 451
          },
        result: null,
        }



        //  let jsonResponse = null
        // let url = 'https://scin-model-dev.appspot.com/searchreg?lgaid=' + lgaid
        // console.log(url)
        //   var res = encodeURI(url);
        //   var x = new XMLHttpRequest();
        //   x.open('GET', res);
        //   x.onload = x.onerror = function() {
        //   var data=x.responseText;
        //   jsonResponse = JSON.parse(data);
        //   console.log(jsonResponse);
        //   this.setState({
        //     result: jsonResponse,
        //     getResult: true
        //   })
        //   }.bind(this)
        //   x.send();
    }



    handleLgaChange = (e) =>{
        this.setState({
            lga: e
        })
        this.setState({
            getResult: false
          })
        
        const lgaid = this.state.lga.value
        console.log(lgaid)
    }

    // componentDidUpdate(previousProps, previousState) {

    //   if (previousState.lga !== this.state.lga) {
    //     const lgaid = this.state.lga.value
    //     console.log(lgaid)

    //     let jsonResponse = null
    //     let url = 'https://scin-model-dev.appspot.com/searchreg?lgaid=' + lgaid
    //     console.log(url)
    //       var res = encodeURI(url);
    //       var x = new XMLHttpRequest();
    //       x.open('GET', res);
    //       x.onload = x.onerror = function() {
    //       var data=x.responseText;
    //       jsonResponse = JSON.parse(data);
    //       console.log(jsonResponse);
    //       this.setState({
    //         result: jsonResponse,
    //         getResult: true
    //       })
    //       }.bind(this)
    //       x.send();
    // }
    // }

  
    render(){

      let pStyle={
        color:'white',
        marginBottom: '10px',
        margin:'0px',
        marginLeft:'30px',
        marginTop:'20px'
    }

        const lgalist = [
            {
              "label": "ALPINE",
              "value": 451
            },
            {
              "label": "ARARAT",
              "value": 593
            },
            {
              "label": "BALLARAT",
              "value": 599
            },
            {
              "label": "BASS COAST",
              "value": 351
            },
            {
              "label": "BAW BAW",
              "value": 605
            },
            {
              "label": "BENALLA",
              "value": 556
            },
            {
              "label": "BULOKE",
              "value": 587
            },
            {
              "label": "CAMPASPE",
              "value": 588
            },
            {
              "label": "CENTRAL GOLDFIELDS",
              "value": 591
            },
            {
              "label": "COLAC OTWAY",
              "value": 582
            },
            {
              "label": "CORANGAMITE",
              "value": 475
            },
            {
              "label": "EAST GIPPSLAND",
              "value": 466
            },
            {
              "label": "GANNAWARRA",
              "value": 506
            },
            {
              "label": "GLENELG",
              "value": 544
            },
            {
              "label": "GOLDEN PLAINS",
              "value": 484
            },
            {
              "label": "GREATER BENDIGO",
              "value": 589
            },
            {
              "label": "GREATER GEELONG",
              "value": 601
            },
            {
              "label": "GREATER SHEPPARTON",
              "value": 576
            },
            {
              "label": "HEPBURN",
              "value": 594
            },
            {
              "label": "HINDMARSH",
              "value": 562
            },
            {
              "label": "HORSHAM",
              "value": 566
            },
            {
              "label": "INDIGO",
              "value": 492
            },
            {
              "label": "LATROBE",
              "value": 574
            },
            {
              "label": "LODDON",
              "value": 563
            },
            {
              "label": "MACEDON RANGES",
              "value": 432
            },
            {
              "label": "MANSFIELD",
              "value": 603
            },
            {
              "label": "MILDURA",
              "value": 520
            },
            {
              "label": "MITCHELL",
              "value": 584
            },
            {
              "label": "MOIRA",
              "value": 491
            },
            {
              "label": "MOORABOOL",
              "value": 600
            },
            {
              "label": "MOUNT ALEXANDER",
              "value": 585
            },
            {
              "label": "MOYNE",
              "value": 560
            },
            {
              "label": "MURRINDINDI",
              "value": 554
            },
            {
              "label": "MURRINDINDI",
              "value": 353
            },
            {
              "label": "NORTHERN GRAMPIANS",
              "value": 590
            },
            {
              "label": "PYRENEES",
              "value": 592
            },
            {
              "label": "QUEENSCLIFFE",
              "value": 413
            },
            {
              "label": "SOUTH GIPPSLAND",
              "value": 579
            },
            {
              "label": "SOUTHERN GRAMPIANS",
              "value": 525
            },
            {
              "label": "STRATHBOGIE",
              "value": 577
            },
            {
              "label": "SURF COAST",
              "value": 583
            },
            {
              "label": "SWAN HILL",
              "value": 586
            },
            {
              "label": "TOWONG",
              "value": 410
            },
            {
              "label": "WANGARATTA",
              "value": 602
            },
            {
              "label": "WARRNAMBOOL",
              "value": 304
            },
            {
              "label": "WELLINGTON",
              "value": 597
            },
            {
              "label": "WEST WIMMERA",
              "value": 522
            },
            {
              "label": "WODONGA",
              "value": 493
            },
            {
              "label": "YARRIAMBIACK",
              "value": 474
            }
          ]
          const {lgaValue} = this.state.lga.value
          return(<div className = "searchLga">
              <p style = {pStyle}>Search your preferred region</p>
              <div className = 'stepperSelect'>
              <Select
              options={lgalist}
              onChange={this.handleLgaChange}
              defaultValue={{ label: this.state.lga.label, value: this.state.lga.value }}
              value = { lgaValue }
              autoFocus
            />
            </div>
            <Link to={{
              pathname: '/searchResult',
              state: {
                id: this.state.lga.value
  
              }
            }}>
            <Button className = "favSearch">Search</Button>
            </Link>
             
            
            </div>
        )
    }
   
}