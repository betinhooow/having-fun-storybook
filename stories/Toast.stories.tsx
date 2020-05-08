import React from 'react';
import { storiesOf } from '@storybook/react';

import { ToastProvider, useToast } from '../src/hooks/toast';
import ToastContainer from '../src/components/ToastContainer';

storiesOf('Toast', module)
  .add('Success', () => (
    <ToastProvider>
      <ToastContainer
        messages={[{
          id: '1',
          type: 'success',
          title: "Ohh yeah!",
          description: "We send you an email with the instructions ;)"
        }]} 
      />
    </ToastProvider>
  ))
  .add('Error', () => (
    <ToastProvider>
      <ToastContainer
        messages={[{
          id: '1',
          type: 'error',
          title: "Ops, something's wrong!",
          description: "Check the form and try again"
        }]} 
      />
    </ToastProvider>
  ))
  .add('Info', () => (
    <ToastProvider>
      <ToastContainer
        messages={[{
          id: '1',
          type: 'info',
          title: "Don't forget!",
          description: "Your password will expire in 3 days."
        }]} 
      />
    </ToastProvider>
  ))