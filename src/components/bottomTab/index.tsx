import React, { useState } from 'react'
import { Button, Div, Icon, Modal, Text } from 'react-native-magnus'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native';
import Stopwatch from '../stopwatch';

const BottomTab = ({value,setValue}:any) => {
    const [visible, setVisible] = useState(false);
    
    return (
        <>
        <Div bg='white' p={20} row justifyContent='space-around' minH={heightPercentageToDP(10)}>
        <TouchableOpacity onPress={() => setValue([])}>
            <Div alignItems='center' >
                <Icon
                    rounded="circle"
                    name="loop"
                    fontSize={20}
                    fontFamily="MaterialIcons"
                />
                <Text>Reset</Text>
            </Div>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Div>
                <Icon
                    color='green'
                    rounded="circle"
                    name="play"
                    fontSize={30}
                    fontFamily="AntDesign"
                />
                </Div>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setValue([...value, 2029])}>
            <Div alignItems='center' >
                <Icon
                    rounded="circle"
                    name="save"
                    fontSize={20}
                    fontFamily="FontAwesome"
                />
                <Text>Save</Text>
            </Div>
            </TouchableOpacity>
        </Div>
        <Modal isVisible={visible}>
          <Button
            bg="gray400"
            h={35}
            w={35}
            position="absolute"
            top={50}
            right={15}
            rounded="circle"
            onPress={() => {
              setVisible(false);
            }}
          >
            <Icon color="black900" name="close" />
          </Button>
          <Stopwatch setVisible={setVisible} value={value} setValue={setValue}/>
        </Modal>
        </>
    )
}

export default BottomTab