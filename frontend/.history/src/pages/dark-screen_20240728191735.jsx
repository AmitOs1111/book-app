export function DarkScreen() {
  let isDarkScreen = useSelector((state) => state.bookModule.isDarkScreen)

  return (
    <section
      className={isDarkScreen ? 'dark-screen open' : 'dark-screen'}
    ></section>
  )
}
