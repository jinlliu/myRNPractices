import 'react-native';
import React from 'react';
import RTCWebView from '../../src/RTCWebViewPractice';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <RTCWebView />
  );
});