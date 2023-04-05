import {View, Text} from 'react-native';  /* baseado em componentes */

import {NavigationContainer} from '@react-navigation/native' /* o Routes precisa de um navigationContainer em volta dele */
import {Routes} from '../src/routes';

export default function App() {
  return(
    <NavigationContainer>
      <Routes/> 
    </NavigationContainer>  
  );

  
}