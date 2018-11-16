import {Platform, StyleSheet} from 'react-native';

const Styles = StyleSheet.create ({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
        height: 100,
        //marginTop: Platform.OS === "ios" ? 0 : 0
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    }
});

export default Styles;