import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './../src/components/Avatar';

const pageTestId = "storybook";

storiesOf('Avatar', module)
  .add('Default', () => <Avatar 
    id="1"
    name="Name" 
    nickname="Nickname"
    deleteContact={()=>{}} 
    editContact={()=>{}} 
    testId={pageTestId}
  />)