import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Linking, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';
import { HTML, SEED } from './web';

const KEY = 'touchline.data.v1';

export default function App() {
  const [boot, setBoot] = useState(null);
  const web = useRef(null);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .catch(() => null)
      .then((saved) => setBoot(`window.__TL_DATA=${saved || 'null'};window.__TL_SEED=${JSON.stringify(SEED)};true;`));
  }, []);

  if (!boot) return <View style={styles.center}><ActivityIndicator /></View>;

  return (
    <View style={styles.fill}>
      <StatusBar style="auto" />
      <WebView
        ref={web}
        style={styles.fill}
        originWhitelist={['*']}
        source={{ html: HTML, baseUrl: 'https://touchline.local/' }}
        injectedJavaScriptBeforeContentLoaded={boot}
        contentInsetAdjustmentBehavior="never"
        automaticallyAdjustContentInsets={false}
        bounces={false}
        domStorageEnabled
        onMessage={(e) => {
          try {
            const m = JSON.parse(e.nativeEvent.data);
            if (m.type === 'save' && typeof m.data === 'string') AsyncStorage.setItem(KEY, m.data);
          } catch {}
        }}
        onShouldStartLoadWithRequest={(req) => {
          // Keep the app itself inside the view; open YouTube, TikTok and Instagram links in their own apps.
          if (req.url.startsWith('https://touchline.local') || req.url.startsWith('about:')) return true;
          if (/^https?:\/\//.test(req.url) && req.navigationType === 'click') { Linking.openURL(req.url); return false; }
          return true;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1, backgroundColor: '#f5f5f7' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f7' },
});
