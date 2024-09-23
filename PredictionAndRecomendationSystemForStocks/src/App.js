import React, { useState } from 'react';
import OriginalChart from './OriginalChart';
import LSTMChart from './LSTMChart';


//import ablImage from './abl.jpg';
//import akblImage from './akbl.jpg';
//import baflImage from './bafl.jpg';
//import bahlImage from './bahl.jpg';
import biplImage from './bipl.jpg';
//import bokImage from './bok.jpg';
//import fablImage from './fabl.jpg';
//import hblImage from './hbl.jpg';
//import jsblImage from './JS.jpg';
import mcbImage from './mcb.jpg';
import biplsma from './sma1.jpg'
import biplrsi from './rsi1.jpg'
import biplmacd from './macd1.jpg'
import mcbsma from './sma_mcb.jpg'
import MCBrsi from './mcb_rsi.jpg'
import MCBmacd from './mcbMacd.jpg'
import MCBoverall from './mcbOverAllTrend.jpg'
import ablsma from './ABLsma.jpg'
import ablrsi from './ABLrsi.jpg'
import ablmacd from './ABLmacd.jpg'
import ablImage from './ABLoveralltrend.jpg'
import baflsma from './BAFLsma.jpg'
import baflrsi from './BAFLrsi.jpg'
import baflmacd from './BAFLmacd.jpg'
import baflImage from './BAFLoveralltrend.jpg'
import akblsma from './AKBLsma.jpg'
import akblrsi from './AKBLrsi.jpg'
import akblmacd from './AKBLmacd.jpg'
import akblImage from './akblOverall.jpg'
import boksma from './BOKsma.jpg'
import bokrsi from './BOKrsi.jpg'
import bokmacd from './BOKMacd.jpg'
import bokImage from './bokOverAllImage.jpg'
import jsblsma from './JSBLsma.jpg'
import jsblrsi from './JSBLrsi.jpg'
import jsblmacd from './JSBLmacd.jpg'
import jsblImage from './JSBLOverall.jpg'
import bahlsma from './BAHLsma.jpg'
import bahlrsi from './RSIbahl.jpg'
import bahlmacd from './MACDbahl.jpg'
import bahlImage from './bahlOverall.jpg'
import fablsma from './FABLsma.jpg'
import fablrsi from './FABLrsi.jpg'
import fablmacd from './fablMacd.jpg'
import fablImage from './fablOverall.jpg'
import hblsma from './HBLsma.jpg'
import hblrsi from './HBLrsi.jpg'
import hblmacd from './HBLmacd.jpg'
import hblImage from './hbl.jpg'





const App = () => {
  const [selectedFile, setSelectedFile] = useState('mcb.csv');

  const handleFileChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFile(selectedValue);



    // Update image path based on the selected bank
  };

  const recommendationData = {
    'abl.csv': `
      50-day SMA: 82.90506972612879
      200-day SMA: 84.14623723168023
      50-day SMA <= 200-day SMA, so SMA predicts Bearish trend.
      14-day RSI: 49.51806121965001
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.1756679827534865
      MACD Histogram < 0, so MACD predicts Bearish trend.
      Signal Line: -0.17544200246575975
      MACD Histogram: -0.00022598028772672632
      Overall Trend: Bearish
    `,
    // Add similar data for other CSV files
    'akbl.csv': `
      50-day SMA: 19.80811982896846
      200-day SMA: 19.824738989845002
      50-day SMA <= 200-day SMA, so SMA predicts Bearish trend.
      14-day RSI: 49.92801522011715
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.020706504897587907
      MACD Histogram > 0, so MACD predicts Bullish trend.
      Signal Line: -0.02100886418283636
      MACD Histogram: 0.00030235928524846226
      Overall Trend: Bullish
    `,
    'bahl.csv': `
      50-day SMA: 43.571878936521024
      200-day SMA: 44.25965258656224
      50-day SMA <= 200-day SMA, so SMA predicts Bearish trend.
      14-day RSI: 47.451262182189964
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.08254781187254877
      MACD Histogram < 0, so MACD predicts Bearish trend.
      Signal Line: -0.08220769382171511
      MACD Histogram: -0.0003401180508336522
      Overall Trend: Bearish
    `,
     'bafl.csv': `
      50-day SMA: 32.88291141117289
      200-day SMA: 32.7672588562351
      50-day SMA > 200-day SMA, so SMA predicts Bullish trend.
      14-day RSI: 49.02736068238252
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: 0.0005047973077387281
      MACD Histogram > 0, so MACD predicts Bullish trend.
      Signal Line: -0.001091158860151803
      MACD Histogram: 0.0015959561678905146
      Overall Trend: Bullish
    `,
    'bipl.csv': `
      50-day SMA: 9.59050233271946
      200-day SMA: 9.541010313075505
      50-day SMA > 200-day SMA, so SMA predicts Bullish trend.
      14-day RSI: 50.991445298812415
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: 0.007228328086799559
      MACD Histogram > 0, so MACD predicts Bullish trend.
      Signal Line: 0.005553059177435714
      MACD Histogram: 0.001675268909363841
      Overall Trend: Bullish
   `,
  'bok.csv': `
      50-day SMA: 8.697651588212782
      200-day SMA: 8.971301913509377
      50-day SMA <= 200-day SMA, so SMA predicts Bearish trend.
      14-day RSI: 49.52793349604419
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.021485765967512446
      MACD Histogram > 0, so MACD predicts Bullish trend.
      Signal Line: -0.022570566967693533
      MACD Histogram: 0.0010848010001810915
      Overall Trend: Neutral
  `,
  'fabl.csv': `
      50-day SMA: 22.219852754982416
      200-day SMA: 21.97537186400938
      50-day SMA > 200-day SMA, so SMA predicts Bullish trend.
      14-day RSI: 50.33925540866993
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.05054503630583326
      MACD Histogram < 0, so MACD predicts Bearish trend.
      Signal Line: -0.04904150015421324
      MACD Histogram: -0.0015035361516200613
      Overall Trend: Neutral
    `,
    'hbl.csv': `
      50-day SMA: 22.219852754982416
      200-day SMA: 21.97537186400938
      50-day SMA > 200-day SMA, so SMA predicts Bullish trend.
      14-day RSI: 50.33925540866993
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.05054503630583326
      MACD Histogram < 0, so MACD predicts Bearish trend.
      Signal Line: -0.04904150015421324
      MACD Histogram: -0.0015035361516200613
      Overall Trend: Bullish
    `,
     'jsbl.csv': `
      50-day SMA: 5.631094226887363
      200-day SMA: 5.589400262414211
      50-day SMA > 200-day SMA, so SMA predicts Bullish trend.
      14-day RSI: 51.420154774376776
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.0028979479952203073
      MACD Histogram < 0, so MACD predicts Bearish trend.
      Signal Line: -0.0024979403173463572
      MACD Histogram: -0.00040000767787395355
      Overall Trend: Bullish
  `,
     'mcb.csv': `
      50-day SMA: 216.4273129955947
      200-day SMA: 216.98783852790012
      50-day SMA <= 200-day SMA, so SMA predicts Bearish trend.
      14-day RSI: 49.41230733066684
      30 <= RSI <= 70, so RSI predicts Neutral trend.
      MACD Line: -0.2642138975877071
      MACD Histogram < 0, so MACD predicts Bearish trend.
      Signal Line: -0.2626401796330139
      MACD Histogram: -0.0015737179546930291
      Overall Trend: Bearish
  `,
    // Add more recommendation data as needed
  };

  const imageSources = {
    'abl.csv': ablImage,
    'akbl.csv': akblImage,
    'bafl.csv': baflImage,
    'bahl.csv': bahlImage,
    'bipl.csv': [biplImage,biplsma,biplrsi,biplmacd],
    'bok.csv': bokImage,
    'fabl.csv': fablImage,
    'hbl.csv': hblImage,
    'jsbl.csv': jsblImage,
    'mcb.csv': mcbImage,
  };


  
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="csv-select">Select CSV file: </label>
        <select id="csv-select" value={selectedFile} onChange={handleFileChange}>
          <option value="mcb.csv">Muslim Commercial Bank</option>
          <option value="abl.csv">Allied Bank Limited</option>
          <option value="bafl.csv">Bank Al-Fallah Limited</option>
          <option value="akbl.csv">Askri Bank Limited</option>
          <option value="hbl.csv">Habib Bank Limited</option>
          <option value="bok.csv">Bank Of Khyber</option>
          <option value="jsbl.csv">JS Bank Limited</option>
          <option value="bahl.csv">Bank Al-Habib Limited</option>
          <option value="fabl.csv">Faysal Bank Limited</option>
          <option value="bipl.csv">Bank Islami Pakistan Limited</option>
        </select>
      </div>
  
      <div style={{ marginBottom: '20px' }}>
        <h1>Recommendation System</h1>
  
        {selectedFile === 'bipl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 9.59050233271946
        200-day SMA: 9.541010313075505
        50-day SMA > 200-day SMA, so SMA predicts Bullish trend.`}
    </pre>
    <img
      src={biplsma}
      alt="SMA Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 50.991445298812415
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={biplrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: 0.001675268909363841
        MACD Histogram > 0, so MACD predicts Bullish trend.
        MACD Line: 0.007228328086799559
        Signal Line: 0.005553059177435714
        MACD Line > Signal Line, so MACD predicts Bullish trend.`}
    </pre>
    <img
      src={biplmacd}
      alt="MACD Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Bullish`}
    </pre>
    <img
      src={biplImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'mcb.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 10.234
        200-day SMA: 9.987
        50-day SMA > 200-day SMA, so SMA predicts Bullish trend.`}
    </pre>
    <img
      src={mcbsma}
      alt="SMA Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 48.76
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={MCBrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: 0.004444
        MACD Histogram > 0, so MACD predicts Bullish trend.
        MACD Line: 0.009876
        Signal Line: 0.005432
        MACD Line > Signal Line, so MACD predicts Bullish trend.`}
    </pre>
    <img
      src={MCBmacd}
      alt="MACD Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Bullish`}
    </pre>
    <img
      src={MCBoverall}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'abl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 82.90506972612879
        200-day SMA: 84.14623723168023
        50-day SMA < 200-day SMA, so SMA predicts Bearish trend.`}
    </pre>
    <img
      src={ablsma}
      alt="SMA Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 49.51806121965001
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={ablrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: -0.00022598028772672632
        MACD Histogram < 0, so MACD predicts Bearish trend.
        MACD Line: -0.1756679827534865
        Signal Line: -0.17544200246575975
        MACD Line < Signal Line, so MACD predicts Bearish trend.`}
    </pre>
    <img
      src={ablmacd}
      alt="MACD Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Bearish`}
    </pre>
    <img
      src={ablImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'bafl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 32.88291141117289
        200-day SMA: 32.7672588562351
        50-day SMA > 200-day SMA, so SMA predicts Bullish trend.`}
    </pre>
    <img
      src={baflsma}
      alt="SMA Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 49.02736068238252
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={baflrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: 0.0015959561678905146
        MACD Histogram > 0, so MACD predicts Bullish trend.
        MACD Line: 0.0005047973077387281
        Signal Line: -0.001091158860151803
        MACD Line > Signal Line, so MACD predicts Bullish trend.`}
    </pre>
    <img
      src={baflmacd}
      alt="MACD Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Bullish`}
    </pre>
    <img
      src={baflImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'akbl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 19.80811982896846
        200-day SMA: 19.824738989845002
        50-day SMA < 200-day SMA, so SMA predicts Bearish trend.`}
    </pre>
    <img
      src={akblsma}
      alt="SMA Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 49.92801522011715
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={akblrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: 0.00030235928524846226
        MACD Histogram > 0, so MACD predicts Bullish trend.
        MACD Line: -0.020706504897587907
        Signal Line: -0.02100886418283636
        MACD Line > Signal Line, so MACD predicts Bullish trend.`}
    </pre>
    <img
      src={akblmacd}
      alt="MACD Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Neutral`}
    </pre>
    <img
      src={akblImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'hbl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 12.345
        200-day SMA: 11.789
        50-day SMA > 200-day SMA, so SMA predicts Bullish trend.`}
    </pre>
    <img
      src={hblsma}
      alt="SMA Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 53.76
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={hblrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: 0.01533462040471266
        MACD Histogram > 0, so MACD predicts Bullish trend.
        MACD Line: -0.18404341428150464
        Signal Line: -0.19937803468621734
        MACD Line > Signal Line, so MACD predicts Bullish trend.`}
    </pre>
    <img
      src={hblmacd}
      alt="MACD Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Bullish`}
    </pre>
    <img
      src={hblImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'bok.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 8.697651588212782
        200-day SMA: 8.971301913509377
        50-day SMA < 200-day SMA, so SMA predicts Bearish trend.`}
    </pre>
    <img
      src={boksma}
      alt="SMA Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 49.12
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={bokrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: -0.001123456789101
        MACD Histogram < 0, so MACD predicts Bearish trend.
        MACD Line: -0.021234567890123
        Signal Line: -0.020123456789012
        MACD Line < Signal Line, so MACD predicts Bearish trend.`}
    </pre>
    <img
      src={bokmacd}
      alt="MACD Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Bearish`}
    </pre>
    <img
      src={bokImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'jsbl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 6.6833848267622455
        200-day SMA: 6.702181362007169
        50-day SMA < 200-day SMA, so SMA predicts Bearish trend.`}
    </pre>
    <img
      src={jsblsma}
      alt="SMA Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 51.02
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={jsblrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: 4.8029432602414676e-05
        MACD Histogram > 0, so MACD predicts Bullish trend.
        MACD Line: 0.0006412548379384132
        Signal Line: 0.0005932254053359957
        MACD Line > Signal Line, so MACD predicts Bullish trend.`}
    </pre>
    <img
      src={jsblmacd}
      alt="MACD Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Neutral`}
    </pre>
    <img
      src={jsblImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'bahl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 43.571878936521024
        200-day SMA: 44.25965258656224
        50-day SMA < 200-day SMA, so SMA predicts Bearish trend.`}
    </pre>
    <img
      src={bahlsma}
      alt="SMA Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 47.45
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={bahlrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: -0.0003401180508336522
        MACD Histogram < 0, so MACD predicts Bearish trend.
        MACD Line: -0.08254781187254877
        Signal Line: -0.08220769382171511
        MACD Line < Signal Line, so MACD predicts Bearish trend.`}
    </pre>
    <img
      src={bahlmacd}
      alt="MACD Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Bearish`}
    </pre>
    <img
      src={bahlImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) : selectedFile === 'fabl.csv' ? (
  <div>
    <pre>
      <strong>{`Simple Moving Average (SMA): `}</strong>
      {`
        50-day SMA: 10.123
        200-day SMA: 9.876
        50-day SMA > 200-day SMA, so SMA predicts Bullish trend.`}
    </pre>
    <img
      src={fablsma}
      alt="SMA Bullish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Relative Strength Index (RSI): `}</strong>
      {`
        14-day RSI: 48.76
        30 <= RSI <= 70, so RSI predicts Neutral trend.`}
    </pre>
    <img
      src={fablrsi}
      alt="RSI Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Moving Average Convergence Divergence (MACD): `}</strong>
      {`
        MACD Histogram: -0.0015035361516200613
        MACD Histogram < 0, so MACD predicts Bearish trend.
        MACD Line: -0.05054503630583326
        Signal Line: -0.04904150015421324
        MACD Line < Signal Line, so MACD predicts Bearish trend.`}
    </pre>
    <img
      src={fablmacd}
      alt="MACD Bearish Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
    <pre>
      <strong>{`Overall Recommendation: `}</strong>
      {`
        Overall Trend: Neutral`}
    </pre>
    <img
      src={fablImage}
      alt="Overall Trend"
      style={{ maxWidth: '70%', margin: '10px 0' }}
    />
  </div>
) :  (
          <div>
            {/* Default content or loading state */}
          </div>
        )}
      </div>
  
      <div style={{ marginBottom: '40px' }}>
        <h1>Original graph (Approx 10 years)</h1>
        <OriginalChart fileName={selectedFile} />
      </div>
  
      <h1>Predicted Graph (2 Months)</h1>
      <LSTMChart fileName={selectedFile} />
    </div>
  );
  
  
  
  }
  
  

export default App;
