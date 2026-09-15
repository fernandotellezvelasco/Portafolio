# Subir la v2 a Netlify — pasos

Ejecuta esto en la Terminal, en la carpeta `~/Portafolio`.
Copia y pega **el bloque completo** de cada paso.

---

## Paso 1 — Commitear y subir la rama v2

```bash
cd ~/Portafolio

# Quito un archivo de bloqueo que quedó suelto (es normal, pesa 0 bytes)
rm -f .git/index.lock

# Dejo de versionar los .DS_Store de macOS
git rm -r --cached --ignore-unmatch '*.DS_Store' -q

# Reviso qué va a entrar antes de confirmar
git status --short
```

Si la lista se ve bien, continúa:

```bash
git add -A
git commit -m "v2: transición al abrir proyecto e imágenes optimizadas a WebP

- Transición estrella + esfera de partículas al entrar a un caso de estudio
- 157 imágenes convertidas a WebP (build de 208 MB a 17 MB)
- Carga inicial de 4.75 MB a 0.33 MB; cada caso de estudio de 24.7 MB a 1.8 MB
- Aliases de vite.config.ts repuntados a los .webp, sin tocar componentes"

git push -u origin v2
git push origin v1        # el tag que congela la versión anterior
```

---

## Paso 2 — Ver la v2 sin tocar producción

Abre un Pull Request de `v2` hacia `main`:

<https://github.com/fernandotellezvelasco/Portafolio/compare/main...v2>

Netlify construye un **Deploy Preview** automáticamente y deja la URL como
comentario en el PR (algo como `deploy-preview-1--endearing-cobbler-0b9a00.netlify.app`).

Mientras tanto `endearing-cobbler-0b9a00.netlify.app` sigue mostrando la v1.
Tu link de LinkedIn no se entera de nada.

---

## Paso 3 — Publicar (cuando la hayas revisado)

Le das **Merge** al PR en GitHub. Netlify reconstruye `main` y, unos 30 segundos
después, **la misma URL de siempre** muestra la v2.

Para volver atrás: en Netlify, *Deploys* → buscas el deploy anterior →
**Publish deploy**. Vuelve la v1 al instante.

---

## Opcional, para después

La carpeta `build/` está versionada (115 archivos del build viejo). Netlify la
regenera en cada deploy, así que no hace falta guardarla. Una vez que el deploy
de la v2 esté en verde:

```bash
cd ~/Portafolio
git rm -r --cached build -q
echo "build" >> .gitignore
git commit -m "Deja de versionar la carpeta build"
git push
```

Hazlo **después** de confirmar que el deploy funciona, no antes.
