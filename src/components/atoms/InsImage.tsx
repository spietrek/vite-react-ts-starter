interface IProps {
  src: string
  alt: string
  height?: string
  width?: string
}

const InsImage = ({
  src,
  alt,
  height = 'auto',
  width = 'auto',
}: IProps): JSX.Element => {
  return (
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
      style={{ margin: '0 auto', display: 'block' }}
    />
  )
}

export default InsImage
