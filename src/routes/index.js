import { createBottomTabNavigator } from '@react-navigation/botton-tabs';

/* importar as páginas que vão estar na tabBar (barra lá embaixo) */
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites'

/* importar os ícones */
import { Ionicons } from '@expo/vector-icons';

/* criando a tab */
const tab = createBottomTabNavigator();

/* execução e renderização */
export function Routes() {  
    return(
        <Tab.Navigator  
            screenOption = {{
                headerShown: false,
                tabBarHideOnKeyboard: true,          /* quando abrir o teclado para escrever algo ela se esconde */
                tabBarShowLabel: false,             /*  deixa só o ícone */
                tabBarActiveTintColor: "#121212",  /* quando estiver ativo vai ficar essa cor */

                tabBarStyle: {
                    backgroundColor: "#FFF",
                    borderTopWidth: 0
                }
            }}
        >    

            <Tab.Screen name = "HomeTab" component = {Home} 
                options = {{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {  /* se estiver com foco nessa tela */
                           return <Ionicons name = "home" color = "#000" size = {size} /> /* {size} = size padrão */
                        }
                        return <Ionicons name = "home-outline" color = {color} size = {size} />
                    }   
                }}
            
            />

            <Tab.Screen name = "FavoritesTab" component = {Favorites} 
                options = {{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <Ionicons name = "heart" color = "#FF4141" size = {size} />
                        }
                        return <Ionicons name = "heart-outline" color = {color} size = {size} />
                    }
                }}
            
            />
        </Tab.Navigator>
    );
}