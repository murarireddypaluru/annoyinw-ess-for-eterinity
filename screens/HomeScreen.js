import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import db from '../config';
class HomeScreen extends React.Component{
   constructor(){
     super()
     this.state = {
       all_students: [],
       presentPressList: [],
       absentPressList: []
     }
   }
  componentDidMount = async () => {
     var class_ref =await db.ref('/').on('value', data =>{
       var all_students = []
       console.log(all_students)
       var class_a = data.val()
       for(var i in class_a){
         this.all_students.push(class_a[i])
       }
       all_students.sort(function(a, b){
         return a.roll_no - b.roll_no
       })
       this.setState({all_students:all_students})
      console.log(all_students)
     })
  }

  componentDidUpdate (roll_no, status){
    var id = ''
    if(roll_no <= 9){
      id = '0' + roll_no
    }else{
      id = roll_no
    }
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth() + 1

    var yyyy = today.getFullYear()
    if(dd < 10){
      dd = '0' + dd
    }
    if(mm < 10){
      mm = '0' + mm
    }
    today = dd + '-' + mm + '-' + yyyy
    var ref_path = id
    var class_ref = db.ref(ref_path)
    class_ref.update({
      [today]: status,
    })
    
  } 
 
  goToAttendanceScreen = () => {
    this.props.navigation.navigate("AttendanceScreen")
  }

   render(){
     var all_students = this.state.all_students
      if(all_students.length === 0){
        return(
        <View>
        <Text>
        No Students Found
        </Text>
        </View>
        )
      }else{
        return(
        <View>
        {all_students.map((student, index) =>{
          <View key = {index}>
          key = {"name" + index}
          <Text>
          {student.roll_no}
          </Text>
          <Text>
          {student.name}
          </Text>
          <TouchableOpacity style={styles.button1} onPress = {() => {
            var presentPressList = this.state.presentPressList
            presentPressList.push(index)
            this.setState({
              presentPressList:presentPressList
            })
            var roll_no = index + 1
            this.classAttendance(roll_no, 'present')
          }}>
          <Text>
          Present
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress = {() => {
            var absentPressList = this.state.absentPressList
            absentPressList.push(index)
            this.setState({
              absentPressList:absentPressList
            })
            var roll_no = index + 1
            this.classAttendance(roll_no, "absent")
          }}>
          <Text>
          Absent
          </Text>
          </TouchableOpacity>
          </View>
        })}
        </View>
        )
      }
   }
 }
 const styles = StyleSheet.create({
   button1:{
     marginTop: 90,
    marginBottom: 0,
    marginLeft: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    width: 70,
    height: 55,
    backgroundColor: 'green',
   },
   button2:{
     marginTop: -55,
    marginBottom: 200,
    marginLeft: 170,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    width: 70,
    height: 55,
    backgroundColor: 'red',
   }
 })
 export default HomeScreen;