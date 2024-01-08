import React, { useState } from 'react'
import { FlatList, Pressable } from 'react-native'
import { Div, Icon, Input, Text } from 'react-native-magnus'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { useRecoilState } from 'recoil'
import BottomTab from '../../src/components/bottomTab'
import StackHeader from '../../src/components/header/stackHeader'
import IEData from '../../src/components/IEData'
import formatDuration from '../../src/helper/timeFormatter'
import LoadActivity from '../../src/providers/atoms/activityLoad'

const IEinput2step = () => {
  const [visible, setVisible] = useState(false);
  const [activityLoad, setActivityLoad] = useRecoilState(LoadActivity)

  const sumTime = activityLoad.reduce((accumulator: any, currentValue: { time: any }) => {
    return accumulator + currentValue.time;
  }, 0);
  const renderItem = ({ item, index }: any) => {
    const { formattedDuration } = formatDuration(item?.time);
    const handleDelete = () => {
      setActivityLoad(activityLoad.filter((e: number) => e !== item))
    }
    const handleQtyChange = (event: any, index: any) => {
      const newQty = parseInt(event);
      setActivityLoad((prevItems: any) => {
        const updatedDiscounts = [...prevItems];
        updatedDiscounts[index] = { ...updatedDiscounts[index], qty: newQty };
        return updatedDiscounts;
      });
    };

    return (
      <Div p={20} bg='#F4FAFF'>
        <Div row justifyContent='space-between' borderBottomWidth={0.5} borderColor='#c4c4c4' >

          <Div mb={10}>
            <Text mb={5}>TIMER</Text>
            <Text fontWeight='600'>{formattedDuration}</Text>
          </Div>
          <Div row mb={10}>
            <Input value={item?.qty} defaultValue={item?.qty?.toString()} onChangeText={(e) => handleQtyChange(e, index)} keyboardType='numeric' prefix={(
              <Div pr={5} borderColor='#c4c4c4' borderRightWidth={1}>
                <Text>Qty</Text>
              </Div>
            )} minW={widthPercentageToDP(30)} />
            <Pressable onPress={() => handleDelete()}>
              <Icon
                rounded="circle"
                bg="primary"
                p={10}
                name="trash-2"
                color="red"
                fontSize={20}
                fontFamily="Feather"
              />
            </Pressable>
          </Div>
        </Div>
      </Div>
    )
  }

  return (
    <>
      <StackHeader label="IE Input" />
   
          <FlatList data={activityLoad} ListHeaderComponent={(<IEData average={sumTime / (activityLoad.length)} result={sumTime} />
          )} renderItem={renderItem} />
      
   
      <BottomTab sumData={sumTime} value={activityLoad} setValue={setActivityLoad} visible={visible} setVisible={setVisible} />

    </>
  )
}

export default IEinput2step