import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartLine,
} from '@coreui/react-chartjs'
import './Main.css'


const Main = () => {
  const randomTemperature = () => Math.round(Math.random() * 100)
  const randomLighting = () => Math.round(Math.random() * 100)

  const temperature = [randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature()]
  const lighting = [randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting()]
  
  const sumTemperatures = temperature.reduce((acc,curr) => acc + curr);
  const temperatureAverage = sumTemperatures / temperature.length;

  const sumLighting = lighting.reduce((acc,curr) => acc + curr);
  const lightingAverage = sumLighting / lighting.length;
  
  return (
    <main>
        <div className="header">
            <h1>Hydroponics Monitoring System</h1>
        </div>
    <CRow className="chart">
      <CCol xs={6} >
        <CCard className="mb-4">
          <CCardHeader>Daily Data</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                  {
                    label: 'Temperature',
                    backgroundColor: 'rgb(255, 82, 82)',
                    borderColor: 'rgb(255, 82, 82)',
                    pointBackgroundColor: 'rgb(255, 82, 82)',
                    pointBorderColor: '#fff',
                    data: [...temperature],
                  },
                  {
                    label: 'Lighting',
                    backgroundColor: 'yellow',
                    borderColor: 'yellow',
                    pointBackgroundColor: 'yellow',
                    pointBorderColor: '#fff',
                    data: [...lighting],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className="content">
        <CCard className="mb-4">
          <CCardHeader>
          Average in the 7 days of last week
    
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Average'],
                datasets: [
                  {
                    label: 'Temperature',
                    backgroundColor: 'rgb(255, 82, 82)',
                    data: [temperatureAverage],
                  },
                  {
                    label: 'Lighting',
                    backgroundColor: 'Yellow',
                    data: [lightingAverage],
                  },
                ],
              }}
              
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className="content">
        <CCard className="mb-4">
          <CCardHeader>
          Weekly Data
    
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Week-1','Week-2','Week-3','Week-4'],
                datasets: [
                  {
                    label: 'Temperature',
                    backgroundColor: 'rgb(255, 82, 82)',
                    data: [temperature[6],randomTemperature(),randomTemperature(),randomTemperature()],
                  },
                  {
                    label: 'Lighting',
                    backgroundColor: 'Yellow',
                    data: [lighting[6],randomLighting(),randomLighting(),randomLighting(),],
                  },
                ],
              }}
              
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className="content">
        <CCard className="mb-4">
          <CCardHeader>Monthly Data</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
                datasets: [
                  {
                    label: 'Temperature',
                    backgroundColor: 'rgb(255, 82, 82)',
                    borderColor: 'rgb(255, 82, 82)',
                    pointBackgroundColor: 'rgb(255, 82, 82)',
                    pointBorderColor: '#fff',
                    data: [randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature(), randomTemperature()],
                  },
                  {
                    label: 'Lighting',
                    backgroundColor: 'yellow',
                    borderColor: 'yellow',
                    pointBackgroundColor: 'yellow',
                    pointBorderColor: '#fff',
                    data: [randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting(), randomLighting()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </main>
  )
}

export default Main