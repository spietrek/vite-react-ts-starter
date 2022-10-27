import type { PropsWithChildren } from 'react'

interface IProps {
  src: string
  altText: string
  height?: number | string
  width?: number | string
}

const InsightImage = ({
  src,
  altText,
  height = 'auto',
  width = 'auto',
}: PropsWithChildren<IProps>): JSX.Element => (
  <img
    src={src}
    srcSet={src}
    height={height}
    width={width}
    alt={altText}
    className="mx-auto block transform transition duration-500"
    loading="lazy"
  />
)

export default InsightImage
