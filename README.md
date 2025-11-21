APP PERSONALIZADA DE FRASES – Italiano para Carmen García

Este repositorio contiene una aplicación web muy sencilla para practicar frases personalizadas en distintos idiomas.
En este caso, la app está configurada para Carmen García, estudiante española que quiere aprender italiano para comunicarse con otros alumnos de su clase.

La app funciona en cualquier navegador y se despliega automáticamente con GitHub Pages.

✔ Funcionalidades principales

La aplicación permite:

✅ 1. Cargar bloques de frases personalizadas

Los bloques se almacenan en la carpeta /data.

Cada bloque sigue el formato JSON y contiene 25 frases.

Ejemplo:
data/frases_garcia_carmen_B01.json

✅ 2. Modo Lista

Muestra todas las frases con:

Italiano

Pronunciación

Traducción al español

Notas

Cada frase incluye un botón Escuchar que reproduce audio en italiano.

✅ 3. Modo Tarjetas (Flashcards)

Presenta una frase en italiano.

Permite mostrar/ocultar la traducción.

Reproduce audio en italiano.

Botones Anterior / Siguiente para pasar tarjetas.

✅ 4. Modo Test

Muestra la frase en español.

El usuario intenta escribirla en italiano.

La app indica si la respuesta es correcta e incluye la solución.

Permite oír la frase en italiano.

📂 Estructura del repositorio
/ (carpeta raíz)
   index.html              → Aplicación principal
   /data
        frases_garcia_carmen_B01.json  → Bloque de frases B01
        (otros bloques B02, B03… si se añaden)
   README.md                → Este archivo

🛠 Cómo añadir nuevos bloques de frases

Cada bloque debe tener este nombre:

frases_garcia_carmen_BXX.json


Donde:

B01 = bloque 1

B02 = bloque 2

etc.

Todos estos archivos van dentro de la carpeta /data.

En index.html, basta con añadir una línea más en el selector de bloques, por ejemplo:

<option value="B02">Bloque B02</option>


La aplicación detectará el nuevo archivo automáticamente.

🌐 Cómo funciona la aplicación

index.html carga el archivo JSON mediante fetch() y construye la interfaz:

Lista completa

Tarjetas

Test interactivo

Botones con síntesis de voz (speechSynthesis) en italiano (it-IT)

No requiere servidores, bases de datos ni instalar nada.
Funciona solo con HTML + JavaScript.

🚀 Cómo desplegar en GitHub Pages

Ir a Settings → Pages.

En “Source” elegir:

Branch: main

Folder: / (root)

Guardar.

GitHub generará una URL como:

https://TU-USUARIO.github.io/TU-REPOSITORIO/


La aplicación estará disponible ahí automáticamente.

📞 Contacto

Si quieres adaptar esta app para otras personas —por ejemplo, estudiantes de otras nacionalidades o idiomas— basta con generar un nuevo bloque de frases siguiendo el mismo formato.
