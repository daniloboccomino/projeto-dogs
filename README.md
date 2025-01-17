# Dogs

Projeto de Rede social para cachorros. Curso de React da [Origamid](https://www.origamid.com/curso/react-completo/)

## Configuração inicial

- Criação do ambiente de desenvolvimento: [Vite](https://vite.dev/)
- Gerenciamento de rotas: [React Router](https://reactrouter.com/)
- Validação de tipos de dados: [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- Gerenciamento de SVGs: [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
```

```js
// eslint.config.js
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unsafe-finally': 'off',
    'no-unused-vars': 'off',
    'react/jsx-key': 'off',
  },
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      name="description"
      content="Dogs - Rede social para cachorros."
    />
    <title>Dogs</title>
  </head>

  <body>
    <div id="root"></div>
    <script
      type="module"
      src="/src/main.jsx"
    ></script>
  </body>
</html>
```

```jsx
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

```jsx
// App.jsx
import React from 'react'

const App = () => {
  return <></>
}

export default App
```
