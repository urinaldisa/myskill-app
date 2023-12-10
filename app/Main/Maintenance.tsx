import { useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Button, Div, Input, ScrollDiv, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import BreakdownCategoryPicker from '../../src/components/BreakdownCategoryPicker'
import Datepicker from '../../src/components/datepicker'
import StackHeader from '../../src/components/header/stackHeader'
import MachineDowntimePicker from '../../src/components/MachineDowntimePicker'

const Maintenance = () => {
  const [machine, setMachine] = useState("")
  const { id} = useLocalSearchParams();
  console.warn(id)
  return (
    <>
      <Div flex={1} bg='white'>
        <StackHeader label="Maintenance" />
        <ScrollDiv >
          <Div flex={1} mx={15} >
            <MachineDowntimePicker
              value={machine}
              onSelect={(value) => console.log(value)}
            />
            <BreakdownCategoryPicker
              value={machine}
              onSelect={(value) => console.log(value)}
            />

            <Text mt={20} fontWeight='500'>Machine Dawntime</Text>
            <Input
              mt={5}
              placeholder="Input note here"
              placeholderTextColor="grey"
              multiline={true}
              scrollEnabled={false}
              bg="#F5F8FA"
              textAlignVertical="top"
              numberOfLines={5}
              mb={10}
              borderWidth={0.3}
            />
            <Div row justifyContent='space-between'>
              <Div w={widthPercentageToDP(40)}>
                <Text mb={5} fontWeight='500'>Date</Text>
                <Datepicker placeholder='Select Date' onSelect={(e) => console.log(e)} value={''} />
              </Div>
              <Div w={widthPercentageToDP(40)}>
                <Text mb={5} fontWeight='500'>Duration</Text>
                <Datepicker placeholder='Select Date' onSelect={(e) => console.log(e)} value={''} />
              </Div>

            </Div>
          </Div>

        </ScrollDiv>
      </Div>
      <Div bg='white'>
      <Button mb={heightPercentageToDP(5)} bg='#429669' alignSelf='center' w={widthPercentageToDP(90)}>
        Submit
      </Button>
      </Div>
    </>
  )
}

export default Maintenance