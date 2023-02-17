import React from 'react'
import styles from '../assets/main.module.css'
import { connect } from 'react-redux'
import { WriteMyName, AddMyNameToStore } from '../redux/actions'//1.burda import edirik actionlarimizi

const Home = (props) => {
    const {name, WriteMyName, AddMyNameToStore} = props; //3. burda yaziriq actionlari
  return (
    <div className='Home'>
                                      <h1>{name}</h1>
     
      <button className={styles.btn1} onClick={() => {AddMyNameToStore("Tommy Hilfiger")}}>Add My Brand</button>
      <button className={styles.btn2} onClick={() => {WriteMyName("Polo")}}>Write My Brand</button>
    </div>
  )
}

const mapStateToProps = ({name}) => {
 return {
    name
 }
}
//2. burda connect edirik actionlari
export default connect(mapStateToProps, {WriteMyName, AddMyNameToStore})(Home)
