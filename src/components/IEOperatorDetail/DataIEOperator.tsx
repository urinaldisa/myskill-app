import React from 'react'
import { Div, Text } from 'react-native-magnus'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { COLOR_PRIMARY } from '../../helper/theme'

const DataIEOperator = ({ data }: any) => {
    console.log(data, 'ehe')
    return (
        <Div p={20}>
            <Div row>
            <Div mr={10} w={40} h={40} rounded={20} bg='#c4c4c4' />

                <Div>
                    <Text mb={10} fontSize={14} fontWeight='500'>{data?.operator?.name}  </Text>
                    <Text mb={10} fontSize={14} color='#929292'>{data?.operator?.work_place} </Text>
                </Div>
            </Div>

            <Div row justifyContent='space-between'>
                <Div w={widthPercentageToDP(40)}>
                    <Text mb={10} fontSize={14} fontWeight='500'>Style </Text>
                    <Text mb={10} fontSize={14} color='#929292'>{data?.style?.name}</Text>
                </Div>
                <Div w={widthPercentageToDP(40)}>
                    <Text mb={10} fontSize={14} fontWeight='500'>Process </Text>
                    <Text mb={10} fontSize={14} color='#929292'>{data?.process?.name}</Text>
                </Div>
            </Div>

            <Div row justifyContent='space-between'>
                <Div w={widthPercentageToDP(40)}>
                    <Text mb={10} fontSize={14} fontWeight='500'>IE Rating </Text>
                    <Text mb={10} fontSize={14} color='#929292'>{data?.ie_rating}</Text>
                </Div>
                <Div w={widthPercentageToDP(40)}>
                    <Text mb={10} fontSize={14} fontWeight='500'>Allowance(%) </Text>
                    <Text mb={10} fontSize={14} color='#929292'>{data?.allowance}</Text>
                </Div>
            </Div>

            <Div row justifyContent='space-between'>
                <Div w={widthPercentageToDP(40)}>
                    <Text mb={10} fontSize={14} fontWeight='500'>Average </Text>
                    <Text mb={10} fontSize={26} fontWeight='700' color={COLOR_PRIMARY}>{data?.avg}</Text>
                </Div>
                <Div w={widthPercentageToDP(40)}>
                    <Text mb={10} fontSize={14} fontWeight='500'>Time Result</Text>
                    <Text mb={10} fontSize={26} fontWeight='700' color={COLOR_PRIMARY}>{data?.allowance}</Text>
                </Div>
            </Div>
        </Div>
    )
}

export default DataIEOperator