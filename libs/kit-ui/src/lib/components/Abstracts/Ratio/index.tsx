import React, { CSSProperties, ForwardedRef, forwardRef } from 'react'

export type RatioProps = {
  className?: string
  preset?: string
  styleContainer?: CSSProperties
  style?: CSSProperties
  ratio?: string
  children?: JSX.Element | ((style: CSSProperties) => JSX.Element)
}

/**
 * Ratio component to keep a proportion
 * @param props
 * @param ref
 * @returns Component
 */

function RatioForwarded(
  { ratio, className, style = {}, styleContainer = {}, children }: RatioProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const componentStyle: CSSProperties = {
    position: 'relative',
  }

  const containerStyle: CSSProperties = {
    width: '100%',
  }

  const childrenStyle: CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...componentStyle, ...style }}>
      <div className={ratio} style={{ ...containerStyle, ...styleContainer }}>
        {typeof children === 'function' ? children?.(childrenStyle) : children}
      </div>
    </div>
  )
}

export const Ratio = forwardRef<HTMLDivElement, RatioProps>(RatioForwarded)
