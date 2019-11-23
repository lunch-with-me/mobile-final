import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    Button,
    TouchableOpacity,
    ImageBackground,
    Alert,
    Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    MAPTIME
}from '../../api/API';
import * as actions from '../../redux/actions';
import backgound from '../../assests/Images/back.jpg';
import clock4 from '../../assests/Images/clock4.png';
import Icon from 'react-native-vector-icons/FontAwesome';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class TimePickerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            startShow: false,
            endDate: new Date(),
            endShow: false,
        }
    }

    setStartTime = (event, date) => {
        date = date || this.state.startDate;
        this.setState({
            startShow: Platform.OS === 'ios' ? true : false,
            startDate: date,
        });
        this.props.startTimePicked(moment(date).format('LTS'));
    }

    setEndTime = (event, date) => {
        date = date || this.state.endDate;
        this.setState({
            endShow: Platform.OS === 'ios' ? true : false,
            endDate: date,
        });

        this.props.endTimePicked(moment(date).format('LTS'));
        console.log(this.state.endDate);
        console.log(this.state.startDate);
    }

    startTimepicker = () => {
        this.setState({
            startShow: true,
        });
    }

    endTimepicker = () => {
        this.setState({
            endShow: true,
        });
    }
    
    sendTime(){
       const{endDate,startDate}=this.state;
        this.validate()
    }

    validate() {
       const{endDate,startDate}=this.state;
        if(moment(startDate).isSameOrAfter(endDate)) {
            Alert.alert(
                'Invalid!',
                'Start time should be same or before the end time',
                [
                    { text: 'Ok' },
                ],
            );
        } 
        // else if(moment().isAfter(startDate)) {
        //     Alert.alert(
        //         'Invalid!',
        //         'Start time should be same or after the current time',
        //         [
        //             { text: 'Ok' },
        //         ],
        //     );
        // }
        else {
            //const st=startDate
            //console.log("jagcjahca"+st)
            const tmp2=startDate.toISOString().slice(0,19)
            const tmp=endDate.toISOString().slice(0,19)
            console.log("start time is "+tmp2);
            console.log("end time is "+tmp);
            this.props.navigation.navigate('MapScreen',{val1:tmp,val2:tmp2});
        }
    }

    render() {
        const { startDate, startShow, endDate, endShow } = this.state;

        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={backgound} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.mainContainerColor}>
                <View style={styles.buttonContainer}>
                    <View style={styles.item}>
                   
                        <View style={styles.mainContainerColor2}>
                        <Text style={styles.btnText}>Select Start Time</Text>
                        <Text style={styles.time}>{moment(startDate).format('LTS')}</Text>
                        {/* <Text>{startDate.toISOString()}</Text> */}
                        <TouchableOpacity style={styles.btn} onPress={this.startTimepicker}>
                        <View ><Image source={clock4}/></View>
                        </TouchableOpacity>
                        </View>
                       
                    </View>
                    <View style={styles.item}>
                    
                    <View style={styles.mainContainerColor2}>
                    <Text style={styles.btnText}>Select end Time</Text>
                        <Text style={styles.time}>{moment(endDate).format('LTS')}</Text>
                        {/* <Text>{endDate.toISOString()}</Text> */}
                        <TouchableOpacity style={styles.btn} onPress={this.endTimepicker}>
                        <View ><Image source={clock4}/></View>
                        </TouchableOpacity>
                        </View>
                      
                    </View>
                </View>
                {startShow && <DateTimePicker
                    value={startDate}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={this.setStartTime}
                />
                }
                {endShow && <DateTimePicker
                    value={endDate}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={this.setEndTime}
                />
                }

                  <Text style={{marginLeft:20}}>To select the place from where you wish to get dining partners</Text>
                <TouchableOpacity style={[styles.btn, {width: 150,height:60, marginVertical: 15,marginRight:15,alignSelf:'flex-end'}]} onPress={() => this.sendTime()}><Text style={{color:'#fff',fontWeight:'bold'}}>Next</Text></TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        height: '200rem',
        width: entireScreenWidth,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop:'10%'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'#ffffff',
        width:'200rem',
        height:'200rem',
        borderRadius:10,
        elevation:10

    },
    mainContainerColor:{
        flex:1,
        backgroundColor: "rgba(255,255,255,0.7)",
        width:'100%',
        height:'100%',
    },
    mainContainerColor2:{
        flex:1,
        backgroundColor: "rgba(255,255,255,0.9)",
        width:'100%',
        height:'100%',
    },
    btn: {
        backgroundColor: '#c97b63',
        width: '60rem',
        height: '60rem',
        borderRadius: '15rem',
        elevation: 3,
        textAlign: "center",
        marginTop: '10rem',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '8rem',
        alignSelf:"center",
        marginTop:50
    },
    btnText: { 
        color: '#c97b63', 
        fontSize: 20,
        alignSelf:'center',
        marginTop:10

    },
    time: {
        fontSize: '18rem',
        color: '#000',
        alignSelf:"center",
        marginTop:10
    }
});

export default connect(null, actions)(TimePickerScreen);