import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';

const CreatorDashboard = () => {
    const [isOnline, setIsOnline] = useState(false);
    const [rate, setRate] = useState(2.00);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Creator Dashboard</Text>
                <Text style={styles.extension}>Your Code: <Text style={styles.gold}>#8855</Text></Text>
            </View>

            <View style={styles.statusCard}>
                <Text style={styles.label}>Accepting Calls</Text>
                <Switch
                    value={isOnline}
                    onValueChange={setIsOnline}
                    trackColor={{ false: "#333", true: "#00ff88" }}
                    thumbColor={isOnline ? "#fff" : "#888"}
                />
            </View>

            <View style={isOnline ? styles.liveIndicator : styles.darkIndicator}>
                <Text style={styles.indicatorText}>{isOnline ? "YOU ARE LIVE" : "YOU ARE DARK"}</Text>
            </View>

            <View style={styles.settingsSection}>
                <Text style={styles.sectionTitle}>Call Rate</Text>
                <View style={styles.rateRow}>
                    <Text style={styles.rateValue}>${rate.toFixed(2)} / min</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <Text style={styles.editBtnText}>EDIT</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.statsSection}>
                <Text style={styles.sectionTitle}>Today's Earnings</Text>
                <Text style={styles.earnings}>$145.20</Text>
                <Text style={styles.statLabel}>24 Minutes Billed</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#050505', padding: 20, paddingTop: 60 },
    header: { marginBottom: 40 },
    title: { color: 'white', fontSize: 32, fontWeight: 'bold' },
    extension: { color: '#888', fontSize: 18, marginTop: 5 },
    gold: { color: '#ffd700', fontWeight: 'bold' },
    statusCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#111',
        padding: 25,
        borderRadius: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#222'
    },
    label: { color: 'white', fontSize: 20, fontWeight: '600' },
    liveIndicator: { backgroundColor: '#00ff8822', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 40 },
    darkIndicator: { backgroundColor: '#ff336622', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 40 },
    indicatorText: { fontWeight: 'bold', letterSpacing: 1, color: 'white' },
    settingsSection: { marginBottom: 40 },
    sectionTitle: { color: '#555', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 15 },
    rateRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    rateValue: { color: 'white', fontSize: 24, fontWeight: 'bold' },
    editBtn: { backgroundColor: '#333', padding: 10, paddingHorizontal: 20, borderRadius: 8 },
    editBtnText: { color: 'white', fontWeight: 'bold' },
    statsSection: { backgroundColor: '#111', padding: 25, borderRadius: 20, borderLeftWidth: 4, borderLeftColor: '#00ff88' },
    earnings: { color: 'white', fontSize: 48, fontWeight: 'bold' },
    statLabel: { color: '#888', marginTop: 5 }
});

export default CreatorDashboard;
