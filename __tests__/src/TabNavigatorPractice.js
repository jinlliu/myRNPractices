import 'react-native';
import React from 'react';
import TabNavigator from '../../src/TabNavigatorPractice';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <TabNavigator />
  );
});