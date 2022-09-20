import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: 'http://github.com/fsampson30.png'}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Flavio Sampson</Text>
                    <Text style={styles.subject}>Matemáica</Text>
                </View>
            </View>
            <Text style={styles.bio}>Teste de biografia com conteúdo altamente interessante. {'\n'}
            Eu quebrei uma linha aqui.
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00{'   '}</Text>
                </Text>                
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorite]}>
                        {/*<Image source={heartOutlineIcon}/>*/}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>                    
                </View>
            </View>
        </View>
    )

}

export default TeacherItem;