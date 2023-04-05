import { View,Text, StyleSheet} from 'react-native';

export function Logo() {
    return(
        <View style = {styles.logoArea}>
            <Text style = {styles.logo}> Teste </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: "#4CBE6C",
        alignSelf: "flex-start",     /* pega só o tamanho do texto */
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },

    logo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    }
})