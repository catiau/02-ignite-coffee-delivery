import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from './context/CartContext';
import { GlobalStyle } from './styles/global'
import { Router } from "./Router";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

