import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, PanResponder, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SwipeScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const position = new Animated.ValueXY();

    const creators = [
        { id: 1, name: "Sarah", age: 24, rate: "$4.99/min", bio: "Fitness & Nutrition Coach", image: "https://via.placeholder.com/400x600" },
        { id: 2, name: "Albert", age: 30, rate: "$2.00/min", bio: "Looksmaxxing Expert", image: "https://via.placeholder.com/400x600" },
    ];

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx > 120) {
                // Swipe Right (Favorite)
                Animated.timing(position, {
                    toValue: { x: width + 100, y: gestureState.dy },
                    duration: 200,
                    useNativeDriver: false
                }).start(() => {
                    setCurrentIndex(currentIndex + 1);
                    position.setValue({ x: 0, y: 0 });
                });
            } else if (gestureState.dx < -120) {
                // Swipe Left (Skip)
                Animated.timing(position, {
                    toValue: { x: -width - 100, y: gestureState.dy },
                    duration: 200,
                    useNativeDriver: false
                }).start(() => {
                    setCurrentIndex(currentIndex + 1);
                    position.setValue({ x: 0, y: 0 });
                });
            } else {
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    friction: 4,
                    useNativeDriver: false
                }).start();
            }
        }
    });

    const rotate = position.x.interpolate({
        inputRange: [-width / 2, 0, width / 2],
        outputRange: ['-10deg', '0deg', '10deg'],
        extrapolate: 'clamp'
    });

    const currentCreator = creators[currentIndex];

    if (!currentCreator) return <View style={styles.container}><Text style={styles.text}>No more creators!</Text></View>;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>BUZZERCODE</Text>
            </View>

            <Animated.View
                {...panResponder.panHandlers}
                style={[styles.card, { transform: [{ translateX: position.x }, { translateY: position.y }, { rotate }] }]}
            >
                <Image source={{ uri: currentCreator.image }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>{currentCreator.name}, {currentCreator.age}</Text>
                    <Text style={styles.rate}>{currentCreator.rate}</Text>
                    <Text style={styles.bio}>{currentCreator.bio}</Text>
                </View>
            </Animated.View>

            <View style={styles.bottomBar}>
                <TouchableOpacity style={[styles.circleBtn, styles.skipBtn]}>
                    <Text style={styles.btnText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callBtn}>
                    <Text style={styles.callBtnText}>CALL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.circleBtn, styles.faveBtn]}>
                    <Text style={styles.btnText}>❤️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#050505', paddingTop: 50 },
    header: { alignItems: 'center', marginBottom: 20 },
    logo: { color: '#00ff88', fontSize: 24, fontWeight: 'bold', letterSpacing: 2 },
    card: {
        width: width - 40,
        height: height * 0.6,
        alignSelf: 'center',
        backgroundColor: '#111',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#333'
    },
    image: { width: '100%', height: '100%' },
    info: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: 'rgba(0,0,0,0.6)' },
    name: { color: 'white', fontSize: 28, fontWeight: 'bold' },
    rate: { color: '#00ff88', fontSize: 20, fontWeight: '700' },
    bio: { color: '#888', marginTop: 5 },
    bottomBar: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40, gap: 20 },
    circleBtn: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', borderWidth: 1 },
    skipBtn: { borderColor: '#ff3366' },
    faveBtn: { borderColor: '#ffd700' },
    callBtn: {
        backgroundColor: '#00ff88',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 50,
        elevation: 10,
        shadowColor: '#00ff88',
        shadowOpacity: 0.5,
        shadowRadius: 20
    },
    callBtnText: { color: 'black', fontSize: 22, fontWeight: '900' },
    btnText: { fontSize: 24 },
    text: { color: 'white' }
});

export default SwipeScreen;
