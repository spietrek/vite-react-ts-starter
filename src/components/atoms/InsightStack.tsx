import React from 'react'
import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  STACK_DIRECTION_CONFIG,
  STACK_ALIGNMENT_CONFIG,
  STACK_JUSTIFICATION_CONFIG,
} from '../../constants/common/stack'
import type {
  STACK_ALIGNMENT,
  STACK_DIRECTION,
  STACK_JUSTIFICATION,
} from '../../constants/common/stack'

interface IProps {
  children: React.ReactNode
  alignItems?: typeof STACK_ALIGNMENT[number]
  direction?: typeof STACK_DIRECTION[number]
  divider?: boolean
  justifyContent?: typeof STACK_JUSTIFICATION[number]
}

const joinChildren = (
  isRow: boolean,
  isReverse: boolean,
  children: React.ReactNode,
  separator: React.ReactNode,
  marginClass: string,
): JSX.Element => {
  const childrenArray = React.Children.toArray(children).filter(Boolean)

  return (
    <>
      {childrenArray.map((child, index) => {
        if (isReverse && !isRow) {
          return (
            <div
              className={marginClass}
              key={index}
              data-testid="insightStack-child"
            >
              {child}
              {index !== 0 && separator}
            </div>
          )
        }

        return (
          <React.Fragment key={index}>
            {index !== 0 && separator}
            <span className={marginClass} data-testid="insightStack-child">
              {child}
            </span>
          </React.Fragment>
        )
      })}
    </>
  )
}

const InsightStack = ({
  direction = 'column',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  children,
  divider = false,
}: PropsWithChildren<IProps>): JSX.Element => {
  const directionClass = STACK_DIRECTION_CONFIG[direction]
  const alignmentClass = STACK_ALIGNMENT_CONFIG[alignItems]
  const justificationClass = STACK_JUSTIFICATION_CONFIG[justifyContent]
  const containerClasses = clsx(
    'flex',
    directionClass,
    divider ? '' : alignmentClass,
    justificationClass,
  )
  const isReverse =
    direction === 'row-reverse' || direction === 'column-reverse'
  const isRow = direction === 'row' || direction === 'row-reverse'

  const marginClass = clsx(
    isReverse && isRow ? 'ml-4' : '',
    !isReverse && isRow ? 'mr-4' : '',
    isReverse && !isRow ? 'mt-4' : '',
    !isReverse && !isRow ? 'mb-4' : '',
  )

  const hrClasses = clsx(
    'border-gray-100',
    isRow ? 'border-r-[1px]' : 'border-t-[1px]',
    isRow ? 'h-auto' : 'w-auto',
    marginClass,
  )

  const separator = divider ? <hr className={hrClasses} /> : null
  const blockClass = clsx(!isRow ? 'inline-block' : '')

  return (
    <div>
      <div className={blockClass}>
        <div className={containerClasses} data-testid="insightStack">
          {joinChildren(isRow, isReverse, children, separator, marginClass)}
        </div>
      </div>
    </div>
  )
}

export default InsightStack
