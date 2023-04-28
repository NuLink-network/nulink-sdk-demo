import './styles/ovalButton.scss'

const OvalButton = (props: any) => {
  const { title, className, disabled, onClick } = props

  return (
    <div
      className={`oval-button ${className} ${disabled && 'disabled-btn'}`}
      onClick={!disabled ? onClick : null}
    >
      {title}
    </div>
  )
}

export default OvalButton
