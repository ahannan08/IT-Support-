import theme from './content/theme.json'

export function applyTheme() {
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([name, value]) => {
    root.style.setProperty(`--color-${name}`, value)
  })
}
