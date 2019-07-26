import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { Jumbotron } from 'reactstrap';
import List from './List'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../Visa/NextSteps.css';




const styles = theme => ({
  root: {
    width: '100%', 
    justifyContent: 'center',
    display: 'flex'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});




class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    List: false
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleClose = () => {
    this.setState({
      List: false
    });
  };
  
  handleListShow = () => {
    this.setState({ List: true });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    let pStyle = {
      maxWidth:'800px',
      textAlign:'justify',
      alignSelf:'center'
      }
    let aStyle = {
      color: '#49a942',
      fontWeight:'bold'
      
      }  

      function getSteps() {
  return ['Submit an Expression of Interest', 'Apply for the Skilled Regional Provisional Visa (Subclass 489)', 'Wait for a decision', 'Receive your visa and start working'];
}

this.getStepContent = (step) => {
  switch (step) {    
    case 0:
      return <p>You will need to submit an Expression of Interest (EOI). See a step-wise guide on how to write your EOI on <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/make-an-expression-of-interest" target="_blank" style={{textDecoration:'none'}}>SkillSelect</a>.</p>;  
    case 1:
      return <div>
        <p>After you receive an invitation, you can lodge your application. You will have 60 days to do this. Your application will <br /> require that you submit several documents.</p>
        <article class = "nsArticle" onClick={this.handleListShow}>
            <div className = "ListText">       
          
          <a style={aStyle}>See List of documents here</a>
          </div>
          </article><List show={this.state.List}
            onHide={this.handleClose}></List>
        </div>;  
    case 2:
    return <p>It can take several months for the DHA to make a decision on your visa application. In 2016, the processing time for the <br /> 489 visa was 3 months.</p>;
    case 3:
    return <p>Once your application is approved, you will receive your visa and can start work in Australia. You must continue to abide<br /> 
              by the current 489 visa conditions and live in a regional area for at least two years and work full time (minimum 35 <br />
              hours a week) for at least 12 months, before you become eligible to apply for permanent residency. </p>;
            
    default:
      return 'Unknown step';
  }
}


    return (
      <div >
        <Jumbotron className="nextsteps-jumbo">
        <div className="nsJumboContent">
            <h1>Eligible for the 489 Regional Visa? </h1>

            <h2>The Skilled Regional (Provisional) visa (subclass 489) can provide a pathway <br /> to Australian Permanent Residence.</h2>
            

            <h3>See below the Next Steps to apply this visa</h3>
          </div>
        
        </Jumbotron>
      <div className="Nscontent">
      <h2></h2>
      <p style = {pStyle}>The Prime Minister made announcement on 20 March expressesing that there might be an extra advantage for 
        international students studying at regional universities, giving them access to an extra year in Australia 
        on a post-study about work visa. <p></p>Currently, the points score required 
        for an invitation for a 189 visa remains very high. On the other side, the 489 visa gives you an additional 10 
        points for regional sponsorship, solicitations whenever amid the year (once every month), and just 
        the minimum 65 points are required (counting the 10 points for sponsorship). <p></p>This visa could be a perfect 
        answer for anybody attempting to acquire extra focuses through different methods, and will kick you off 
        towards your dream of permanent residency much sooner. </p>
        <a  style = {{color: '#49a942'}} className = 'NextStepsLink'>Follow the steps below to apply for the Skilled Regional (Provisional) Visa 489</a>
      </div>
      <div className = "nextStepper">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{this.getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#49a942"
                    }}
                      variant="contained"
                      color="primary"                      
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
       
      </div>
      </div>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);