import React from 'react'
import { Chat } from './Chat'
import { GridGato } from './GridGato'

export const App = () => {
    return (
        <div style={{
            backgroundColor: 'orange',
            alignItems: 'row'
        }}>
            <h1
                style={{
                color: 'red',
                backgroundColor: 'yellow',
                alignContent: 'center',
                boxShadow: 10,
                textAlign: 'center'
            }}
            >Hola amigos, desde el juego de tic tac toc</h1>
                <div style={{
                    color: 'black',
                    backgroundColor: 'blue',
                }}>
                    <GridGato/>
                </div>

                <div>
                
                    <Chat />
                </div>

            </div>
    )
}
