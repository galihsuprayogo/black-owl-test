'use client'

import { HTMLProps, ReactNode } from 'react'
import { Nav } from '..'

const Layout = (props: {
  children: ReactNode
  className?: HTMLProps<HTMLElement>['className']
}) => <Nav className={props.className}>{props.children}</Nav>

export default Layout
