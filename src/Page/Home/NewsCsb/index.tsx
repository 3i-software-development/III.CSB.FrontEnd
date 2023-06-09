import React from 'react'
import classNames from 'classnames'

interface contentItemAll {
  contentItem: string
  classItem: string
}
export default function NewsCsb({ contentItem, classItem }: contentItemAll) {
  return (
    <div
      className={classNames(`flex justify-center  items-center h-[100%] text-[#182940] text-xs	font-bold ${classItem}`)}
    >
      {contentItem}
    </div>
  )
}
