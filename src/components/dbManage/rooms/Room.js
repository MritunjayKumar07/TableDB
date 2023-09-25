import React from 'react'
import Side_bar from '../side_bar/Side_bar'
import css from './Room.module.css'

export default function Room() {
  return (
    <>
      <section id={css.Room}>
        <Side_bar/>
      </section>
    </>
  )
}
