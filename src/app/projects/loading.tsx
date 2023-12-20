const loading = () => {
  return (
    <>
      <div className="h-full w-full absolute top-0 left-0 bg-white z-[998] dark:bg-dark-900"></div>
      <div className="h-full w-full absolute top-0 left-0 animate-swipeLoad duration-500 bg-yellow-500 z-999"></div>
    </>
  )
}

export default loading
