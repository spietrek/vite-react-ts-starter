interface IProps {
  src: string
  alt: string
  height?: string
  width?: string
  style?: React.CSSProperties
}

const InsImage = ({
  src,
  alt,
  height = 'auto',
  width = 'auto',
  style,
}: IProps): JSX.Element => {
  return (
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
      style={{ margin: '0 auto', display: 'block', ...style }}
    />
  )
}

export default InsImage
