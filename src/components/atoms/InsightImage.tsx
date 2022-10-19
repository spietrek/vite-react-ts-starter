import type { PropsWithChildren } from 'react'

interface IProps {
  src: string
  alt: string
  height?: number | string
  width?: number | string
}

const InsightImage = ({
  src,
  alt,
  height = 'auto',
  width = 'auto',
}: PropsWithChildren<IProps>): JSX.Element => (
  <img
    src={src}
    srcSet={src}
    height={height}
    width={width}
    alt={alt}
    className="mx-auto block transform transition duration-500"
    loading="lazy"
  />
)

export default InsightImage
