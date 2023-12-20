const Button = ({
  children,
  className,
  variation,
  onClick,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  variation: string
  onClick?: () => void
}) => {
  return (
    <button
      className={`${className} border-2 rounded-xl shadow-md ${
        variation === 'primary'
          ? 'bg-primary border-transparent text-light-100 hover:text-light-900 hover:bg-transparent hover:border-primary dark:hover:text-light-100'
          : 'bg-transparent border-primary text-light-900 hover:bg-primary hover:text-light-100 dark:text-dark-100'
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
