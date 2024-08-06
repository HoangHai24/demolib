/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Video, {
  OnBufferData,
  OnLoadData,
  OnProgressData,
  OnReceiveAdEventData,
  OnSeekData,
  OnVideoErrorData,
  VideoRef,
} from 'react-native-video';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const sourceAdsTest = `<?xml
version="1.0" encoding="UTF-8"?>
<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">
    <vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">
        <vmap:AdSource id="preroll-ad-1" allowMultipleAds="false" followRedirects="true">
            <vmap:AdTagURI templateType="vast3"><![CDATA[https://pubads.g.doubleclick.net/gampad/ads?slotname=/21775744923/external/vmap_ad_samples&sz=640x480&ciu_szs=300x250&cust_params=sample_ar%3Dpremidpost&url=&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&useragent=Mozilla/5.0+(Macintosh%3B+Intel+Mac+OS+X+10_15_7)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/120.0.0.0+Safari/537.36,gzip(gfe)&vad_type=linear&vpos=preroll&pod=1&ppos=1&lip=true&min_ad_duration=0&max_ad_duration=30000&vrid=1264775&cmsid=496&video_doc_id=short_onecue&kfa=0&tfcd=0]]></vmap:AdTagURI>
        </vmap:AdSource>
    </vmap:AdBreak>
    <vmap:AdBreak timeOffset="00:00:15.000" breakType="linear" breakId="midroll-1">
        <vmap:AdSource id="midroll-1-ad-1" allowMultipleAds="false" followRedirects="true">
            <vmap:AdTagURI templateType="vast3"><![CDATA[https://pubads.g.doubleclick.net/gampad/ads?slotname=/21775744923/external/vmap_ad_samples&sz=640x480&ciu_szs=300x250&cust_params=sample_ar%3Dpremidpost&url=&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&cue=15000&useragent=Mozilla/5.0+(Macintosh%3B+Intel+Mac+OS+X+10_15_7)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/120.0.0.0+Safari/537.36,gzip(gfe)&vad_type=linear&vpos=midroll&pod=2&mridx=1&rmridx=1&ppos=1&lip=true&min_ad_duration=0&max_ad_duration=30000&vrid=1264775&cmsid=496&video_doc_id=short_onecue&kfa=0&tfcd=0]]></vmap:AdTagURI>
        </vmap:AdSource>
    </vmap:AdBreak>
    <vmap:AdBreak timeOffset="end" breakType="linear" breakId="postroll">
        <vmap:AdSource id="postroll-ad-1" allowMultipleAds="false" followRedirects="true">
            <vmap:AdTagURI templateType="vast3"><![CDATA[https://pubads.g.doubleclick.net/gampad/ads?slotname=/21775744923/external/vmap_ad_samples&sz=640x480&ciu_szs=300x250&cust_params=sample_ar%3Dpremidpost&url=&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&useragent=Mozilla/5.0+(Macintosh%3B+Intel+Mac+OS+X+10_15_7)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/120.0.0.0+Safari/537.36,gzip(gfe)&vad_type=linear&vpos=postroll&pod=3&ppos=1&lip=true&min_ad_duration=0&max_ad_duration=30000&vrid=1264775&cmsid=496&video_doc_id=short_onecue&kfa=0&tfcd=0]]></vmap:AdTagURI>
        </vmap:AdSource>
    </vmap:AdBreak>
</vmap:VMAP>`;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const videoRef = useRef<VideoRef>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onLoadStart = () => {
    console.log('Demo_lib=>>onLoadStart');
  };
  const onLoad = (data: OnLoadData) => {
    console.log('Demo_lib=>>onLoad', data);
  };
  const onProgress = (data: OnProgressData) => {
    console.log('Demo_lib=>>onProgress', data);
  };
  const onSeek = (data: OnSeekData) => {
    console.log('Demo_lib=>>onSeek', data);
  };
  const onBuffer = (data: OnBufferData) => {
    console.log('Demo_lib=>>onBuffer', data);
  };
  const onEnd = () => {
    console.log('Demo_lib=>>onEnd');
  };
  const onReceiveAdEvent = (data: OnReceiveAdEventData) => {
    console.log('Demo_lib=>>onReceiveAdEvent', data);
  };
  const onError = (error: OnVideoErrorData) => {
    console.log('Demo_lib=>>onError', error);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Video
        // Can be a URL or a local file.
        source={{
          uri: 'https://1011211904.vnns.net/897c7b55dc81eca4a0de32246f416c291723400363/hls/nam2024/showhtv/zjsuwa2i0f/HTV.Me.vang.nha.ba.la.sieu.nhan.mua.3.new.2024.1080p.18.mp4/index.m3u8',
        }}
        // Store reference
        ref={videoRef}
        // Callback when remote video is buffering
        // Callback when video cannot be loaded
        style={{
          flex: 1,
        }}
        controls={true}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        onProgress={onProgress}
        onSeek={onSeek}
        onEnd={onEnd}
        onBuffer={onBuffer}
        onReceiveAdEvent={onReceiveAdEvent}
        progressUpdateInterval={1000}
        adTagUrl={
          'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator='
        }
        onError={onError}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
