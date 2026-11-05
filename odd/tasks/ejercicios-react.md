# Ejercicios React — implementación por pestañas

Resolver los 7 ejercicios de `ejercicios-react.pdf`, un ejercicio por pestaña de la SPA ya montada.
Estrategia de entrega: rama `ejercicio/NN-slug` → implementación → PR → merge squash a `main`.
Test runner: no hay (proyecto sin runner de tests); verificación = `npm run build` (tsc strict) por tarea.

## Specs

- **S1** «Creá un componente `Producto` que reciba `nombre`, `precio` y `stock`, y mostrálo tres veces con datos distintos. Si el stock es 0, en lugar de la cantidad tiene que decir "Sin stock".» Pista: «Desestructurá las props en la firma: `function Producto({ nombre, precio, stock })`. Para el stock usá un ternario: `stock === 0 ? "…" : "…".`»
- **S2** «Un contador que va de 0 a 10, con botones para restar, sumar y reiniciar. Nunca puede salirse del rango. Extra: deshabilitá cada botón cuando se llega al límite.» Pista: «Los botones aceptan la prop `disabled`: `<button disabled={valor === 10}>`. Y antes de sumar podés chequear `if (valor < 10)`.»
- **S3** «Armá una tarjeta de pregunta y respuesta. La respuesta arranca oculta y un botón la muestra u oculta. El texto del botón cambia entre "Mostrar respuesta" y "Ocultar respuesta".» Pista: «Un estado booleano alcanza: `const [visible, setVisible] = useState(false)`. Para alternar: `setVisible(!visible)`.»
- **S4** «Un input donde se escriben grados Celsius y, debajo, el equivalente en Fahrenheit que se actualiza mientras se escribe. Fórmula: `F = C · 9/5 + 32`. Extra: si la temperatura supera los 30 °C, mostrá "Hace calor".» Pista: «El valor del input es texto. Convertilo con `Number(celsius)` antes de calcular. Fahrenheit no necesita estado propio: se calcula a partir de Celsius en cada renderizado.»
- **S5** «Un input y un botón "Agregar" que suma el texto a una lista. Cada ítem tiene un botón para eliminarlo. No se pueden agregar ítems vacíos y, si la lista está vacía, se muestra "No hay nada para comprar".» Pista: «Nunca modifiques el array del estado con `push`. Creá uno nuevo: para agregar, `[...items, nuevo]`; para eliminar, `items.filter(i => i.id !== id)`. Como id podés usar `Date.now()`.»
- **S6** «Dada una lista de lenguajes de programación, mostrá un input de búsqueda que filtre la lista mientras se escribe, sin distinguir mayúsculas de minúsculas. Mostrá también cuántos resultados hay.» Pista: «Pasá ambos textos a minúsculas y usá `includes`: `l.toLowerCase().includes(busqueda.toLowerCase())`.»
- **S7** «Pasá el componente Producto del ejercicio 1 a TypeScript: definí una interface `ProductoProps` y usala en la firma. Agregá una prop opcional `oferta` de tipo booleano que, si es verdadera, muestre "¡Oferta!".» Pista: «Una prop opcional se declara con signo de pregunta: `oferta?: boolean`. Recordá que en la página de la clase los tipos no se verifican; copiá tu solución a un proyecto Vite para ver los errores reales en VS Code.»

Convención obligatoria (especificada por el usuario): por ejercicio, estructura page → hooks (lógica) → components (visual/presentacional). La page compone, no conoce la lógica interna; los componentes visuales reciben props y callbacks, no saben de estado.

## Tasks

- **T1** (S1) ejercicio/01-tarjetas-de-producto — inline — ✅ commit 1a55a05 (PR #1, squash) — page `TarjetasDeProductoPage.tsx` + componente `Producto` (sin hook: no hay lógica de estado; props puros).
- **T2** (S2) ejercicio/02-contador-con-limites — inline — ✅ commit 63c1ab9 (PR #2, squash) — `useContador` (guardas de rango) + `ContadorView` visual puro (disabled según límites).
- **T3** (S3) ejercicio/03-mostrar-y-ocultar — inline — `useVisible` hook + `MostrarYOcultarPage` + tarjeta visual.
- **T4** (S4) ejercicio/04-conversor-de-temperatura — inline — `useConversor` hook (estado celsius + derivado fahrenheit) + page + input visual.
- **T5** (S5) ejercicio/05-lista-de-compras — inline — `useListaDeCompras` hook + page + input/lista visual.
- **T6** (S6) ejercicio/06-buscador — inline — `useBuscador` hook (búsqueda + filtro derivado) + page + visual.
- **T7** (S7) ejercicio/07-tipar-con-typescript — inline — componente revisado con `ProductoProps` + `oferta?: boolean`.

## Log

- L1 (2026-11-05) — Solicitud original: «vamos a crear una spa en react con vite, con pestañas , tendra 7 pestañas, vamos a en cada pesaña resolver 1 ejercicio de ./ejercicios-react.pdf por ahora solamente haremos esta interfaz por pestaña, donde tenemos NUMERO DE CONSIGNA, titulo, consigna, la pista (posiblemente nos convenga ocultarla, el "asi deberia quedar", la imagen ej_nn.png se encuentra en ./img y luego la leyenda de cada imagen. usaremos una screaming architecture por pestaña simple para poder tener ordenado el codigo y que sea mas facil para el profesor corregir y revisar cada implementacion» → scaffold hecho (commit fc7d653), TS elegido por el usuario.
- L2 (2026-11-05) — Corrección visual solicitada: pestañas estilo carpeta, inactive muestra solo «EJ N», activa «EJ N TITULO» (commit b02b793, pusheado).
- L3 (2026-11-05) — Solicitud de implementación: «ahora resolveremos los ejercicios. branch a branch hasta llegar a sus pr y sus fusiones con main. se prolijo y siguiendo principio de responsabilidad unica, que me gusta usar hook, componente y page. asi visual no se entera de la logica y la logica no sabe de visual» → flujo rama/PR/merge + convención hook/component/page.
- L4 (2026-11-05) — gh token inválido; el usuario re-autenticó con device code (scopes: repo, workflow). PRs automáticos OK.
