import type { ComponentType } from 'react';
import TarjetasDeProductoPage from '../exercises/01-tarjetas-de-producto/TarjetasDeProductoPage';
import ContadorConLimitesPage from '../exercises/02-contador-con-limites/ContadorConLimitesPage';
import MostrarYOcultarPage from '../exercises/03-mostrar-y-ocultar/MostrarYOcultarPage';
import ConversorDeTemperaturaPage from '../exercises/04-conversor-de-temperatura/ConversorDeTemperaturaPage';
import ListaDeComprasPage from '../exercises/05-lista-de-compras/ListaDeComprasPage';
import BuscadorPage from '../exercises/06-buscador/BuscadorPage';
import TiparConTypeScript from '../exercises/07-tipar-con-typescript/TiparConTypeScript';

export interface Exercise {
  /** Id estable de la pestaña. */
  id: string;
  /** Número del ejercicio tal como aparece en el PDF. */
  number: number;
  title: string;
  /** Etiqueta del tema (Props, useState, ...). */
  tag: string;
  /** Enunciado completo citado verbatim del PDF. Los backticks marcan código inline. */
  consigna: string;
  /** Texto de la pista, oculta por defecto. Los backticks marcan código inline. */
  hint: string;
  /** Captura servida desde ./img (dir público de vite). */
  image: string;
  /** Leyenda debajo de la captura. */
  caption: string;
  /** Componente de implementación por pestaña (una carpeta por ejercicio). */
  Component: ComponentType;
}

export const EXERCISES: Exercise[] = [
  {
    id: 'tarjetas-de-producto',
    number: 1,
    title: 'Tarjetas de producto',
    tag: 'Props',
    consigna:
      'Creá un componente `Producto` que reciba `nombre`, `precio` y `stock`, y mostrálo tres veces con datos distintos. Si el stock es 0, en lugar de la cantidad tiene que decir "Sin stock".',
    hint: 'Desestructurá las props en la firma: `function Producto({ nombre, precio, stock })`. Para el stock usá un ternario: `stock === 0 ? "…" : "…"`.',
    image: '/ej_01.png',
    caption: 'Las tres tarjetas, una de ellas sin stock.',
    Component: TarjetasDeProductoPage,
  },
  {
    id: 'contador-con-limites',
    number: 2,
    title: 'Contador con límites',
    tag: 'useState',
    consigna:
      'Un contador que va de 0 a 10, con botones para restar, sumar y reiniciar. Nunca puede salirse del rango. Extra: deshabilitá cada botón cuando se llega al límite.',
    hint: 'Los botones aceptan la prop `disabled`: `<button disabled={valor === 10}>`. Y antes de sumar podés chequear `if (valor < 10)`.',
    image: '/ej_02.png',
    caption: 'Al llegar a 10: el botón + queda deshabilitado.',
    Component: ContadorConLimitesPage,
  },
  {
    id: 'mostrar-y-ocultar',
    number: 3,
    title: 'Mostrar y ocultar',
    tag: 'Condicionales',
    consigna:
      'Armá una tarjeta de pregunta y respuesta. La respuesta arranca oculta y un botón la muestra u oculta. El texto del botón cambia entre "Mostrar respuesta" y "Ocultar respuesta".',
    hint: 'Un estado booleano alcanza: `const [visible, setVisible] = useState(false)`. Para alternar: `setVisible(!visible)`.',
    image: '/ej_03.png',
    caption: 'Con la respuesta visible.',
    Component: MostrarYOcultarPage,
  },
  {
    id: 'conversor-de-temperatura',
    number: 4,
    title: 'Conversor de temperatura',
    tag: 'Inputs controlados',
    consigna:
      'Un input donde se escriben grados Celsius y, debajo, el equivalente en Fahrenheit que se actualiza mientras se escribe. Fórmula: `F = C · 9/5 + 32`. Extra: si la temperatura supera los 30 °C, mostrá "Hace calor".',
    hint: 'El valor del input es texto. Convertilo con `Number(celsius)` antes de calcular. Fahrenheit no necesita estado propio: se calcula a partir de Celsius en cada renderizado.',
    image: '/ej_04.png',
    caption: 'Con 35 °C ingresados.',
    Component: ConversorDeTemperaturaPage,
  },
  {
    id: 'lista-de-compras',
    number: 5,
    title: 'Lista de compras',
    tag: 'Listas y estado',
    consigna:
      'Un input y un botón "Agregar" que suma el texto a una lista. Cada ítem tiene un botón para eliminarlo. No se pueden agregar ítems vacíos y, si la lista está vacía, se muestra "No hay nada para comprar".',
    hint: 'Nunca modifiques el array del estado con `push`. Creá uno nuevo: para agregar, `[...items, nuevo]`; para eliminar, `items.filter(i => i.id !== id)`. Como id podés usar `Date.now()`.',
    image: '/ej_05.png',
    caption: 'Después de agregar tres ítems.',
    Component: ListaDeComprasPage,
  },
  {
    id: 'buscador',
    number: 6,
    title: 'Buscador',
    tag: 'Filtrado',
    consigna:
      'Dada una lista de lenguajes de programación, mostrá un input de búsqueda que filtre la lista mientras se escribe, sin distinguir mayúsculas de minúsculas. Mostrá también cuántos resultados hay.',
    hint: 'Pasá ambos textos a minúsculas y usá `includes`: `l.toLowerCase().includes(busqueda.toLowerCase())`.',
    image: '/ej_06.png',
    caption: 'Buscando "ja".',
    Component: BuscadorPage,
  },
  {
    id: 'tipar-con-typescript',
    number: 7,
    title: 'Tipar con TypeScript',
    tag: 'TypeScript',
    consigna:
      'Pasá el componente Producto del ejercicio 1 a TypeScript: definí una interface `ProductoProps` y usala en la firma. Agregá una prop opcional `oferta` de tipo booleano que, si es verdadera, muestre "¡Oferta!".',
    hint: 'Una prop opcional se declara con signo de pregunta: `oferta?: boolean`. Recordá que en la página de la clase los tipos no se verifican; copiá tu solución a un proyecto Vite para ver los errores reales en VS Code.',
    image: '/ej_07.png',
    caption: 'Con la prop oferta activada en el teclado.',
    Component: TiparConTypeScript,
  },
];
