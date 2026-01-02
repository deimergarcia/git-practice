# 📘 SESIÓN 3: Git Fundamentos

## Objetivos Completados
- [x] Entender qué es Git y por qué es indispensable
- [x] Configurar Git (user.name y user.email)
- [x] Entender Working Directory → Staging → Repository
- [x] Dominar git init, add, commit, status, log
- [x] Crear .gitignore profesional

---

## 🧠 Conceptos Clave

### ¿Qué es Git?
Sistema de control de versiones que guarda el historial completo de tu código, permitiendo volver atrás, trabajar en equipo y mantener un registro de todos los cambios.

### Git vs GitHub
- **Git** = Software local en tu computadora
- **GitHub** = Plataforma en la nube para almacenar repositorios

### Los 3 Estados de Git
```
WORKING DIRECTORY  →  STAGING AREA  →  REPOSITORY
   (git add)           (git commit)     (historial)
```

---

## 💻 Comandos Aprendidos

```bash
# Configuración inicial (solo una vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Inicializar repositorio
git init

# Cambiar nombre de rama a main
git branch -m main

# Ver estado del repositorio
git status

# Agregar archivos al staging
git add archivo.js      # Un archivo
git add .               # Todos los archivos

# Guardar cambios (commit)
git commit -m "Mensaje descriptivo"

# Ver historial
git log                 # Detallado
git log --oneline       # Compacto

# Ver diferencias
git diff                # Cambios no staged
git diff --staged       # Cambios en staging
```

---

## 📁 Estructura de esta sesión

```
sesion-03-git/
├── .git/               ← Carpeta oculta de Git (NO tocar)
├── .gitignore          ← Archivos ignorados por Git
├── app.js              ← Archivo principal
├── package.json        ← Configuración del proyecto
└── README.md           ← Documentación
```

---

## 📝 .gitignore Profesional

```gitignore
# Dependencias
node_modules/

# Variables de entorno
.env
.env.local

# Logs
*.log

# Sistema operativo
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

---

## ✏️ Buenas Prácticas para Commits

### Formato del mensaje
```
<Verbo> <descripción corta>

Ejemplos:
Add user authentication
Fix login validation bug
Update README with API docs
Remove unused dependencies
Refactor database connection
```

### Verbos comunes
| Verbo | Uso |
|-------|-----|
| Add | Agregar funcionalidad |
| Fix | Corregir bug |
| Update | Actualizar existente |
| Remove | Eliminar |
| Refactor | Reorganizar código |

---

## 📊 Flujo de Trabajo Básico

```
1. Hacer cambios en archivos
         │
         ▼
2. git status (ver qué cambió)
         │
         ▼
3. git add . (preparar cambios)
         │
         ▼
4. git status (verificar staging)
         │
         ▼
5. git commit -m "mensaje"
         │
         ▼
6. git log --oneline (verificar)
```

---

## ❓ Preguntas de Entrevista - Sesión 3

**P: ¿Qué es Git?**
R: Es un sistema de control de versiones distribuido que permite rastrear cambios en el código, colaborar en equipo y mantener un historial completo del proyecto.

**P: ¿Cuál es la diferencia entre Git y GitHub?**
R: Git es el software de control de versiones que corre localmente. GitHub es una plataforma en la nube que hospeda repositorios Git y facilita la colaboración.

**P: ¿Qué es un commit?**
R: Es una "fotografía" del estado de tu código en un momento específico. Guarda los cambios de forma permanente en el historial con un mensaje descriptivo.

**P: ¿Para qué sirve el staging area?**
R: Es un área intermedia donde preparas los cambios antes de hacer commit. Te permite seleccionar qué archivos incluir en cada commit.

**P: ¿Qué es el .gitignore?**
R: Es un archivo que lista patrones de archivos y carpetas que Git debe ignorar y no rastrear, como node_modules, variables de entorno, etc.

**P: ¿Cómo ves el historial de commits?**
R: Con `git log` para ver detalles completos, o `git log --oneline` para una vista compacta con hash y mensaje.

---

## ✅ Checklist antes de la siguiente sesión

- [ ] Configuré Git con mi nombre y email
- [ ] Creé un repositorio con git init
- [ ] Entiendo los 3 estados: Working → Staging → Repository
- [ ] Hice varios commits con mensajes descriptivos
- [ ] Sé usar git status y git log
- [ ] Creé un .gitignore

---

## 🚀 Siguiente Sesión

**Sesión 4: GitHub y Repositorios Remotos**
- Crear cuenta y repositorio en GitHub
- Conectar repositorio local con remoto
- git remote, git push, git pull
- git clone
- Ver tu código en la nube

---

*Cuando estés listo, escribe: "Comenzar Sesión 4"*
