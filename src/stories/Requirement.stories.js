import React from 'react'
import { storiesOf } from '@storybook/react'

import { Requirements } from '../components/Requirments'

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (
        <Requirements />
    )
})