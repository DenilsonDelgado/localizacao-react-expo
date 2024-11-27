# Projeto de Rastreamento de Localização

Este projeto é um aplicativo de rastreamento de localização utilizando **React Native** e **Expo**. Ele permite que o usuário visualize sua localização atual em um mapa interativo, utilizando o serviço de geolocalização do dispositivo.

## Tecnologias Usadas

- **React Native**: Framework para construção de aplicativos móveis.
- **Expo**: Plataforma que facilita o desenvolvimento de aplicativos React Native, fornecendo uma série de ferramentas e bibliotecas.
- **expo-location**: Biblioteca para acessar a localização do dispositivo.
- **react-native-maps**: Biblioteca para renderizar mapas no aplicativo.

## Funcionalidade

*O aplicativo pede permissão ao usuário para acessar a localização do dispositivo.* Quando a permissão é concedida, a localização atual do usuário é exibida em um mapa interativo.

- O aplicativo utiliza a biblioteca `expo-location` para obter a localização do usuário.
- A localização é exibida em tempo real no mapa com a ajuda da biblioteca `react-native-maps`.
- O aplicativo atualiza a localização a cada segundo para mostrar a posição atual do usuário em tempo real.


