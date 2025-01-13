# Postulación Ayudantes

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Deploy on Github pages

```sh
npm run deploy
```

---

Si al correr y poner los datos se muestra el mensaje:
```
remote: Support for password authentication was removed on August 13, 2021.
```

Entonces se requiere [crear una token](https://github.com/settings/tokens) para el deploy que se ingrese cuando se pida la contraseña (el usuario se mantiene igual).

---

Si hay problemas con el hot reload en wsl2, ejecutar lo siguiente en la consola:
```sh
export CHOKIDAR_USEPOLLING=true
```