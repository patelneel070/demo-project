export type Variables =
    | 'primary'
    | 'primaryDeep'
    | 'primaryMild'
    | 'primarySubtle'
    | 'neutral'

export type ThemeVariables = Record<'light' | 'dark', Record<Variables, string>>

// Sea Glass teal. `neutral` stays white: it is the text colour used on
// top of primary buttons.
const seaGlass: Record<Variables, string> = {
    primary: '#2a7f7a', //       buttons, links, active states
    primaryDeep: '#1f6662', //   pressed
    primaryMild: '#2f8781', //   hover (keeps white text readable)
    primarySubtle: '#2a7f7a1a', // soft tints: active tab, selected row
    neutral: '#ffffff',
}

// The `dark` key mirrors `light` so existing types keep compiling,
// but nothing in the app can ever render a dark palette.
const defaultTheme: ThemeVariables = {
    light: seaGlass,
    dark: seaGlass,
}

const presetThemeSchemaConfig: Record<string, ThemeVariables> = {
    default: defaultTheme,
}

export default presetThemeSchemaConfig