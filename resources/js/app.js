require('./bootstrap')
import React from 'react'
import ReactRenderer from './src/ReactRenderer'

import MySimpleComponent from 'components/MySimpleComponent'
import MySecondComponent from 'components/MySecondComponent'

const components = [
  {
    name: "MySimpleComponent",
    component: <MySimpleComponent />,
  },
  {
    name: "MySecondComponent",
    component: <MySecondComponent />,
  },
]

new ReactRenderer(components).renderAll()
