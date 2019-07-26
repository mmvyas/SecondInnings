import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import './Stepper.css'
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'



const styles = theme => ({
    root: {
        // width: '60%',
        borderRadius: '10px',
        backgroundColor: 'rgba(20,50,70,0.6)',
        color: 'white!important'
    },
    button: {
        marginRight: theme.spacing.unit,
        color: 'white!important'
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        color: 'white!important',
    },
    stepper1: {
        borderRadius: '10px',
        backgroundColor: 'transparent !important',
        color: 'white!important',
        iconColor: '#49a942'
    },
    whiteText: {
        color: 'white!important'
    },
    greenBackGround: {
        color: 'white!important',
        icon: '#49a942 !important'

    },
    button: {
        background: '#49a942 !important',
        marginRight: '30px !important;'
    },

    buttonMargin: {
        marginLeft: '30px !important',
        color: 'white!important',
    }


});



function getSteps() {
    return ['Job Industry', 'House price', 'Nationality', 'Order Result By'];
}



class HorizontalNonLinearAlternativeLabelStepper extends React.Component {
    state = {
        activeStep: 0,
        completed: new Set(),
        skipped: new Set(),
        Nationality: "",
        Age: "",
        Job: "",
        RentHouse: "",
        BuyHouse: "",
        getResult: false,
        rentOrBuy: "rent",
        topFiveAreas: null,
        SuggestionClick: false,
        Mostimportant: 'dis'
    };


    JobSelectionChanged = (e) => {
        this.setState({
            Job: e.value
        });
    }

    totalSteps = () => getSteps().length;


    isStepOptional = step => step === 100;

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        });
    };

    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    handleComplete = () => {
        // eslint-disable-next-line react/no-access-state-in-setstate
        const completed = new Set(this.state.completed);
        completed.add(this.state.activeStep);
        this.setState({
            completed,
        });

        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        if (completed.size !== this.totalSteps() - this.skippedSteps()) {
            this.handleNext();
        }
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: new Set(),
            skipped: new Set(),
            getResult: false,
            SuggestionClick: false,
            Nationality: "",
            Age: "",
            Job: "",
            RentHouse: "",
            BuyHouse: "",
            rentOrBuy: "rent",
        });
    };

    skippedSteps() {
        return this.state.skipped.size;
    }

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    isStepComplete(step) {
        return this.state.completed.has(step);
    }

    completedSteps() {
        return this.state.completed.size;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps() - this.skippedSteps();
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    RentHouseSelectionChanged = (e) => {
        this.setState({
            RentHouse: e.value
        });
    }

    BuyHouseSelectionChanged = (e) => {
        this.setState({
            BuyHouse: e.value
        });
    }

    NationalitySelectionChanged = (e) => {
        this.setState({
            Nationality: e.value
        });
    }

    PrioritySelectionChanged = (e) => {
        this.setState({
            Mostimportant: e.value
        });
    }

    getSuggestionButtonClick = () => {

        const job = this.state.Job
        const nationlity = this.state.Nationality
        const buyHouse = this.state.BuyHouse
        const rentHouse = this.state.RentHouse
        const mostimportant = this.state.Mostimportant
        let count = 0

        if (job === "") {
            count = count + 1
        }
        if (nationlity === "") {
            count = count + 1
        }
        if (buyHouse === "") {
            count = count + 1
        }
        if (buyHouse === "") {
            count = count + 1
        }

        if (count > 3) {
            alert("Fill in more select list to get better suggestion!")
        }
        else {
            let jsonResponse = null
            let url = 'https://scin-model-dev.appspot.com/findreg?nat=' + nationlity +
                '&jin=' + job + '&hpr=' + buyHouse + '&hrt=' + rentHouse + '&sort=' + mostimportant
            var res = encodeURI(url);
            var x = new XMLHttpRequest();
            x.open('GET', res);
            x.onload = x.onerror = function () {
                var data = x.responseText;
                jsonResponse = JSON.parse(data);
                console.log(jsonResponse)
                this.setState({
                    topFiveAreas: jsonResponse,
                    getResult: true
                })
            }.bind(this)
            x.send();
            this.setState({
                SuggestionClick: true
            })
        }

    }

    render() {

        let pStyle = {
            color: 'white',
            marginBottom: '10px',
            margin: '0px',
            marginLeft: '30px'
        }

        let bStyle = {
            background: '#49a942',
            marginTop: '10px'
        }

        let p1Style = {
            color: 'white',
            marginBottom: '10px',
            margin: '0px',
            marginLeft: '30px',
            textAlign: 'left',
            marginTop: '10px',
            marginRight: '10px'

        }

        const compareBtnStyle = {
            marginLeft: '30px',
            backgroundColor: '#49a942 !important',
        }


        const colourStyles = {

            option: base => ({
                ...base,
                color: 'black',
                marginLeft: '30px'
            })

        };
        let result = null
        if (this.state.getResult) {
            result = <div className="suggestion">
                <h2 className='stepperh2'>Top 5 areas that match your preference</h2>
                <div className="top5areas">
                    <p>1. {this.state.topFiveAreas[0].name}</p>
                    <p>2. {this.state.topFiveAreas[1].name}</p>
                    <p>3. {this.state.topFiveAreas[2].name}</p>
                    <p>4. {this.state.topFiveAreas[3].name}</p>
                    <p>5. {this.state.topFiveAreas[4].name}</p></div>
                <Link to={{
                    pathname: '/compare',
                    state: {
                        topFiveAreas: this.state.topFiveAreas,
                        jobIndustry: this.state.Job,
                        culture: this.state.Nationality
                    }
                }}>
                    <Button className='compareFiveButton' variant="contained" color="primary" style={compareBtnStyle}>Compare among Top 5</Button>
                </Link>
                <Button onClick={() => this.setState({ getResult: false, SuggestionClick: false })} style={{ color: 'white' }}>Back</Button>
                <p style={p1Style}>*The result shows the top five regions with profile that is closest matched with your preference input.</p>
            </div>
        }


        const nationlity = [
            {
                "label": "Not concerned",
                "value": ""
            },
            {
                "value": "Afghanistan",
                "label": "Afghanistan"
            },
            {
                "value": "Australia",
                "label": "Australia"
            },
            {
                "value": "Bangladesh",
                "label": "Bangladesh"
            },
            {
                "value": "Bosnia Herzegov",
                "label": "Bosnia Herzegov"
            },
            {
                "value": "Cambodia",
                "label": "Cambodia"
            },
            {
                "value": "Canada",
                "label": "Canada"
            },
            {
                "value": "Chile",
                "label": "Chile"
            },
            {
                "value": "China",
                "label": "China"
            },
            {
                "value": "Croatia",
                "label": "Croatia"
            },
            {
                "value": "Egypt",
                "label": "Egypt"
            },
            {
                "value": "England",
                "label": "England"
            },
            {
                "value": "Fiji",
                "label": "Fiji"
            },
            {
                "value": "France",
                "label": "France"
            },
            {
                "value": "Germany",
                "label": "Germany"
            },
            {
                "value": "Greece",
                "label": "Greece"
            },
            {
                "value": "Hong Kong",
                "label": "Hong Kong"
            },
            {
                "value": "India",
                "label": "India"
            },
            {
                "value": "Indonesia",
                "label": "Indonesia"
            },
            {
                "value": "Iran",
                "label": "Iran"
            },
            {
                "value": "Iraq",
                "label": "Iraq"
            },
            {
                "value": "Ireland",
                "label": "Ireland"
            },
            {
                "value": "Italy",
                "label": "Italy"
            },
            {
                "value": "Japan",
                "label": "Japan"
            },
            {
                "value": "Korea South",
                "label": "Korea South"
            },
            {
                "value": "Lebanon",
                "label": "Lebanon"
            },
            {
                "value": "Malaysia",
                "label": "Malaysia"
            },
            {
                "value": "Malta",
                "label": "Malta"
            },
            {
                "value": "Mauritius",
                "label": "Mauritius"
            },
            {
                "value": "Myanmar",
                "label": "Myanmar"
            },
            {
                "value": "Nepal",
                "label": "Nepal"
            },
            {
                "value": "Netherlands",
                "label": "Netherlands"
            },
            {
                "value": "New Zealand",
                "label": "New Zealand"
            },
            {
                "value": "Nthern Ireland",
                "label": "Nthern Ireland"
            },
            {
                "value": "Pakistan",
                "label": "Pakistan"
            },
            {
                "value": "PNG",
                "label": "PNG"
            },
            {
                "value": "Philippines",
                "label": "Philippines"
            },
            {
                "value": "Poland",
                "label": "Poland"
            },
            {
                "value": "Scotland",
                "label": "Scotland"
            },
            {
                "value": "Singapore",
                "label": "Singapore"
            },
            {
                "value": "South Africa",
                "label": "South Africa"
            },
            {
                "value": "SE Europe nfd",
                "label": "SE Europe nfd"
            },
            {
                "value": "Sri Lanka",
                "label": "Sri Lanka"
            },
            {
                "value": "Taiwan",
                "label": "Taiwan"
            },
            {
                "value": "Thailand",
                "label": "Thailand"
            },
            {
                "value": "FYROM",
                "label": "FYROM"
            },
            {
                "value": "Turkey",
                "label": "Turkey"
            },
            {
                "value": "USA",
                "label": "USA"
            },
            {
                "value": "Vietnam",
                "label": "Vietnam"
            },
            {
                "value": "Wales",
                "label": "Wales"
            },
            {
                "value": "Zimbabwe",
                "label": "Zimbabwe"
            },
            {
                "value": "Elsewhere",
                "label": "Elsewhere"
            }
        ]
        const industry = [
            {
                "label": "Not concerned",
                "value": ""
            },
            {
                "label": "Accommodation and Food Services",
                "value": "Accommodation and Food Services"
            },
            {
                "label": "Administrative and Support Services",
                "value": "Administrative and Support Services"
            },
            {
                "label": "Agriculture Forestry and Fishing",
                "value": "Agriculture Forestry and Fishing"
            },
            {
                "label": "Arts and Recreation Services",
                "value": "Arts and Recreation Services"
            },
            {
                "label": "Construction",
                "value": "Construction"
            },
            {
                "label": "Education and Training",
                "value": "Education and Training"
            },
            {
                "label": "Electricity Gas Water and Waste Services",
                "value": "Electricity Gas Water and Waste Services"
            },
            {
                "label": "Financial and Insurance Services",
                "value": "Financial and Insurance Services"
            },
            {
                "label": "Health Care and Social Assistance",
                "value": "Health Care and Social Assistance"
            },
            {
                "label": "Information Media and Telecommunications",
                "value": "Information Media and Telecommunications"
            },
            {
                "label": "Manufacturing",
                "value": "Manufacturing"
            },
            {
                "label": "Mining",
                "value": "Mining"
            },

            {
                "label": "Professional Scientific and Technical Services",
                "value": "Professional Scientific and Technical Services"
            },
            {
                "label": "Public Administration and Safety",
                "value": "Public Administration and Safety"
            },
            {
                "label": "Rental Hiring and Real Estate Services",
                "value": "Rental Hiring and Real Estate Services"
            },
            {
                "label": "Retail Trade",
                "value": "Retail Trade"
            },
            {
                "label": "Transport Postal and Warehousing",
                "value": "Transport Postal and Warehousing"
            },
            {
                "label": "Wholesale Trade",
                "value": "Wholesale Trade"
            },
            {
                "label": "Other Services",
                "value": "Other Services"
            }
        ]
        const buyHouse = [
            {
                "label": "Not concerned",
                "value": ""
            },
            {
                "label": "<$200,000",
                "value": "<$200,000"
            },
            {
                "label": "$200,000-$400,000",
                "value": "$200,000-$400,000"
            },
            {
                "label": "$400,000-$600,000",
                "value": "$400,000-$600,000"
            },
            {
                "label": "$600,000-$800,000",
                "value": "$600,000-$800,000"
            },
            {
                "label": "$800,000-$1,000,000",
                "value": "$800,000-$1,000,000"
            }
            ,
            {
                "label": ">$1,000,000",
                "value": ">$1,000,000"
            }

        ]
        const rentHouse = [
            {
                "label": "Not concerned",
                "value": ""
            },
            {
                "label": "<$201 pw",
                "value": "<$201 pw"
            },
            {
                "label": "$201-$300 pw",
                "value": "$201-$300 pw"
            },
            {
                "label": "$301-$400 pw",
                "value": "$301-$400 pw"
            },
            {
                "label": "$401-$500 pw",
                "value": "$401-$500 pw"
            },
            {
                "label": ">$500 pw",
                "value": ">$500 pw"
            }
        ]

        const priorityAll = [
            {
                "label": "Has more job opportunities in your industry",
                "value": 'jin'
            },
            {
                "label": "Has more people with your cultural background",
                "value": 'nat'
            },
            {
                "label": "Has more hospitals",
                "value": 'hos'
            },
            {
                "label": "Has a low criminal rate",
                "value": 'crm'
            },
            {
                "label": "Has low house prices",
                "value": 'hpr'
            },
            {
                "label": "Closest to Melbourne City",
                "value": 'dis'
            }
        ]

        const priorityNoJob = [

            {
                "label": "Has most people with the same cultural background",
                "value": 'nat'
            },
            {
                "label": "Has most hospitals",
                "value": 'hos'
            },
            {
                "label": "Has low criminal rate",
                "value": 'crm'
            },
            {
                "label": "Has the cheapest house",
                "value": 'hpr'
            },
            {
                "label": "Closest to Melbourne City",
                "value": 'dis'
            }
        ]

        const priorityNoJobNoNat = [

            {
                "label": "Has most hospitals",
                "value": 'hos'
            },
            {
                "label": "Has low criminal rate",
                "value": 'crm'
            },
            {
                "label": "Has the cheapest house",
                "value": 'hpr'
            },
            {
                "label": "Closest to Melbourne City",
                "value": 'dis'
            }
        ]

        const priorityNoNat = [
            {
                "label": "Has most job opportunities",
                "value": 'jin'
            },
            {
                "label": "Has most hospitals",
                "value": 'hos'
            },
            {
                "label": "Has low criminal rate",
                "value": 'crm'
            },
            {
                "label": "Has the cheapest house",
                "value": 'hpr'
            },
            {
                "label": "Closest to Melbourne City",
                "value": 'dis'
            }
        ]

        let priorityOptions = null
        if (this.state.Job === "" && this.state.Nationality === '') {
            priorityOptions = priorityNoJobNoNat

        }
        else if (this.state.Job === '' && this.state.Nationality !== '') {
            priorityOptions = priorityNoJob
        }

        else if (this.state.Job !== '' && this.state.Nationality === '') {
            priorityOptions = priorityNoNat
        }

        else {
            priorityOptions = priorityAll
        }

        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const { nationlitySelectedOption } = this.state.Nationality;
        const { industrySelectedOption } = this.state.Job;
        const { RentHouseSelectedOption } = this.state.RentHouse
        const { BuyHouseSelectedOption } = this.state.BuyHouse
        const { prioritySelectionOption } = this.state.Mostimportant


        let housePriceButton = null
        let housePriceType = null
        if (this.state.rentOrBuy === 'rent') {
            housePriceType = <div className='stepperSelect'><Select styles={colourStyles} defaultValue={{ label: this.state.RentHouse, value: this.state.RentHouse }} value={RentHouseSelectedOption} onChange={this.RentHouseSelectionChanged} options={rentHouse} /></div>
            housePriceButton = <div className='rentBuyButton'>
                <Button style={bStyle} className={classes.whiteText} onClick={() => this.setState({ rentOrBuy: "rent" })}>Rent</Button>
                <Button className={classes.whiteText} onClick={() => this.setState({ rentOrBuy: "buy" })}>Buy</Button></div>
        }
        else {
            housePriceType = <div className='stepperSelect'><Select styles={colourStyles} defaultValue={{ label: this.state.BuyHouse, value: this.state.BuyHouse }} value={BuyHouseSelectedOption} onChange={this.BuyHouseSelectionChanged} options={buyHouse} /></div>
            housePriceButton = <div className='rentBuyButton'>
                <Button className={classes.whiteText} onClick={() => this.setState({ rentOrBuy: "rent" })}>Rent</Button>
                <Button style={bStyle} className={classes.whiteText} onClick={() => this.setState({ rentOrBuy: "buy" })}>Buy</Button>
            </div>
        }

        this.getStepContent = (step) => {
            switch (step) {
                case 0:
                    return <div className="industry">
                        <p style={pStyle}>What is your job industry?</p>
                        <div className='stepperSelect'><Select styles={colourStyles} defaultValue={{ label: this.state.Job, value: this.state.Job }} value={industrySelectedOption} onChange={this.JobSelectionChanged} options={industry} /></div>
                    </div>;
                case 1:
                    return <div className="housePrice">
                        <p style={pStyle}>Do you prefer to rent or buy the house? Select the price range you prefer.</p>
                        {housePriceButton}
                        {housePriceType}
                    </div>

                case 2:
                    return <div className="nationality">
                        <p style={pStyle}> Do you prefer to live with people with your own cultural background? <br />What is your native culture? </p>
                        <div className='stepperSelect'><Select styles={colourStyles} defaultValue={{ label: this.state.Nationality, value: this.state.Nationality }} value={nationlitySelectedOption} onChange={this.NationalitySelectionChanged} options={nationlity} /></div>
                    </div>
                case 3:
                    return <div className="priority">
                        <p style={pStyle}>Order your region match result by...</p>

                        <span>
                            <div className='stepperSelect'><Select styles={colourStyles} defaultValue={{ label: "Closest to Melbourne City", value: "dis" }} value={prioritySelectionOption} onChange={this.PrioritySelectionChanged} options={priorityOptions} ></Select></div>
                        </span>

                    </div>

                default:
                    return 'Unknown step';
            }
        }

        let FindMatchButton = <div>
        <Typography className={classes.whiteText} className={classes.instructions}>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.getSuggestionButtonClick} style={{ marginLeft: '30px' }}>
                FIND MATCH
                            </Button>
            {result}

        </Typography>
        <Button className={classes.whiteText} onClick={this.handleReset} style={{ marginLeft: '30px' }}>Reset</Button>
    </div>
        if (!this.state.getResult && !this.state.SuggestionClick) {
            FindMatchButton = <div>
                <Typography className={classes.whiteText} className={classes.instructions}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.getSuggestionButtonClick} style={{ marginLeft: '30px' }}>
                        FIND MATCH
                                    </Button>
                   

                </Typography>
                <Button className={classes.whiteText} onClick={this.handleReset} style={{ marginLeft: '30px' }}>Reset</Button>
            </div>
        }
        else if (!this.state.getResult && this.state.SuggestionClick) {
            FindMatchButton = <div>
                <div className = 'stepperSelect'><Spinner  animation="border" variant="primary" /></div>
            <Button className={classes.whiteText} onClick={this.handleReset} style={{ marginLeft: '30px' }}>Reset
            </Button></div>
        }

        else {
            FindMatchButton = <div>{result}
            <Button className={classes.whiteText} onClick={this.handleReset} style={{ marginLeft: '30px' }}>Reset</Button></div>
        }


        return (
            <div className='SuggestionForm'>
                <div className={classes.root}>
                    <Stepper className={classes.stepper1} alternativeLabel nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const props = {};
                            const buttonProps = {};
                            if (this.isStepOptional(index)) {
                                buttonProps.optional = <Typography className={classes.whiteText} variant="caption">Optional</Typography>;
                            }
                            if (this.isStepSkipped(index)) {
                                props.completed = false;
                            }
                            return (
                                <Step className={classes.whiteText} key={label} {...props}>
                                    <StepButton className={classes.whiteText}
                                        onClick={this.handleStep(index)}
                                        completed={this.isStepComplete(index)}
                                        {...buttonProps}
                                    >
                                        <div className={classes.whiteText}>
                                            {label}
                                        </div>
                                    </StepButton>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <div >
                        {this.allStepsCompleted() ? 
                           (<div>{FindMatchButton}</div>)
                         : (
                                <div className='selectionForm'>
                                    <Typography className={classes.instructions}><div className={classes.whiteText}>{this.getStepContent(activeStep)}</div></Typography>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                            className={classes.buttonMargin}

                                        >
                                            Back
                </Button>

                                        {activeStep !== steps.length &&
                                            (this.state.completed.has(this.state.activeStep) ? (
                                                <Button className={classes.button} variant="contained" color="primary" onClick={this.handleComplete}>
                                                    {this.completedSteps() === this.totalSteps() ? 'FINISH' : 'NEXT'}
                                                </Button>
                                            ) : (
                                                    <Button className={classes.button} variant="contained" color="primary" onClick={this.handleComplete}>
                                                        {this.completedSteps() === this.totalSteps() ? 'FINISH' : 'NEXT'}
                                                    </Button>
                                                ))}

                                    </div>
                                </div>
                            )}

                    </div>
                </div>
            </div>
        );
    }
}

HorizontalNonLinearAlternativeLabelStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalNonLinearAlternativeLabelStepper);
