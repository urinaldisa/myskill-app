import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Div, ScrollDiv } from 'react-native-magnus'
import BottomTab from '../../src/components/bottomTab'
import CycleList from '../../src/components/CycleList'
import StackHeader from '../../src/components/header/stackHeader'
import IEData from '../../src/components/IEData'
import useStorageState from '../../src/providers/useStorageState'

const IEinput2step = () => {
  const [localData, setLocalData] = useStorageState<any>("timeData", [])
  const sumTime = localData.reduce((accumulator: any, currentValue: { time: any }) => {
    return accumulator + currentValue.time;
  }, 0);
  return (
    <Div flex={1} bg='white'>
      <StackHeader label="IE Input" />
      <ScrollDiv bounces={false} flex={1}>
        <IEData average={sumTime / (localData.length)} result={sumTime}/>
        <CycleList value={localData} setValue={setLocalData}/>
      </ScrollDiv>
      <BottomTab sumData={sumTime}  value={localData} setValue={setLocalData} />
    </Div>
  )
}

export default IEinput2step