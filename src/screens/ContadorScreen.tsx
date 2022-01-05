import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(1)

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text 
                style={{ 
                    textAlign: 'center',
                    fontSize: 40,
                    top: -15,

                }}
            >
                Contador: { contador }
            </Text>
            <Button
                title='Agregar'
                onPress={ () => setContador( contador + 1) }
            />
        </View>
    )
}