import type { ComponentType } from 'react';
import TarjetasDeProductoPage from '../exercises/01-tarjetas-de-producto/TarjetasDeProductoPage';
import ContadorConLimitesPage from '../exercises/02-contador-con-limites/ContadorConLimitesPage';
import MostrarYOcultarPage from '../exercises/03-mostrar-y-ocultar/MostrarYOcultarPage';
import ConversorDeTemperaturaPage from '../exercises/04-conversor-de-temperatura/ConversorDeTemperaturaPage';
import ListaDeComprasPage from '../exercises/05-lista-de-compras/ListaDeComprasPage';
import BuscadorPage from '../exercises/06-buscador/BuscadorPage';
import TiparConTypeScriptPage from '../exercises/07-tipar-con-typescript/TiparConTypeScriptPage';

/**
 * Base pÃºblica de la app: '/' en dev y el subpath del sitio en producciÃ³n.
 * Las capturas viven en el dir pÃºblico (./img), servidas bajo este prefijo.
 */
const PUBLIC_BASE = import.meta.env.BASE_URL;

export interface Exercise {
  /** Id estable de la pestaÃ±a. */
  id: string;
  /** NÃºmero del ejercicio tal como aparece en el PDF. */
  number: number;
  title: string;
  /** Etiqueta del tema (Props, useState, ...). */
  tag: string;
  /** Enunciado completo citado verbatim del PDF. Los backticks marcan cÃ³digo inline. */
  consigna: string;
  /** Texto de la pista, oculta por defecto. Los backticks marcan cÃ³digo inline. */
  hint: string;
  /** Captura servida desde ./img (dir pÃºblico de vite). */
  image: string;
  /** Leyenda debajo de la captura. */
  caption: string;
  /** Componente de implementaciÃ³n por pestaÃ±a (una carpeta por ejercicio). */
  Component: ComponentType;
}

export const EXERCISES: Exercise[] = [
  {
    id: 'tarjetas-de-producto',
    number: 1,
    title: 'Tarjetas de producto',
    tag: 'Props',
    consigna:
      'CreÃ¡ un componente `Producto` que reciba `nombre`, `precio` y `stock`, y mostrÃ¡lo tres veces con datos distintos. Si el stock es 0, en lugar de la cantidad tiene que decir "Sin stock".',
    hint: 'DesestructurÃ¡ las props en la firma: `function Producto({ nombre, precio, stock })`. Para el stock usÃ¡ un ternario: `stock === 0 ? "â€¦" : "â€¦"`.',
    image: PUBLIC_BASE + 'ej_01.png',
    caption: 'Las tres tarjetas, una de ellas sin stock.',
    Component: TarjetasDeProductoPage,
  },
  {
    id: 'contador-con-limites',
    number: 2,
    title: 'Contador con lÃ­mites',
    tag: 'useState',
    consigna:
      'Un contador que va de 0 a 10, con botones para restar, sumar y reiniciar. Nunca puede salirse del rango. Extra: deshabilitÃ¡ cada botÃ³n cuando se llega al lÃ­mite.',
    hint: 'Los botones aceptan la prop `disabled`: `<button disabled={valor === 10}>`. Y antes de sumar podÃ©s chequear `if (valor < 10)`.',
    image: PUBLIC_BASE + 'ej_02.png',
    caption: 'Al llegar a 10: el botÃ³n + queda deshabilitado.',
    Component: ContadorConLimitesPage,
  },
  {
    id: 'mostrar-y-ocultar',
    number: 3,
    title: 'Mostrar y ocultar',
    tag: 'Condicionales',
    consigna:
      'ArmÃ¡ una tarjeta de pregunta y respuesta. La respuesta arranca oculta y un botÃ³n la muestra u oculta. El texto del botÃ³n cambia entre "Mostrar respuesta" y "Ocultar respuesta".',
    hint: 'Un estado booleano alcanza: `const [visible, setVisible] = useState(false)`. Para alternar: `setVisible(!visible)`.',
    image: PUBLIC_BASE + 'ej_03.png',
    caption: 'Con la respuesta visible.',
    Component: MostrarYOcultarPage,
  },
  {
    id: 'conversor-de-temperatura',
    number: 4,
    title: 'Conversor de temperatura',
    tag: 'Inputs controlados',
    consigna:
      'Un input donde se escriben grados Celsius y, debajo, el equivalente en Fahrenheit que se actualiza mientras se escribe. FÃ³rmula: `F = C Â· 9/5 + 32`. Extra: si la temperatura supera los 30 Â°C, mostrÃ¡ "Hace calor".',
    hint: 'El valor del input es texto. Convertilo con `Number(celsius)` antes de calcular. Fahrenheit no necesita estado propio: se calcula a partir de Celsius en cada renderizado.',
    image: PUBLIC_BASE + 'ej_04.png',
    caption: 'Con 35 Â°C ingresados.',
    Component: ConversorDeTemperaturaPage,
  },
  {
    id: 'lista-de-compras',
    number: 5,
    title: 'Lista de compras',
    tag: 'Listas y estado',
    consigna:
      'Un input y un botÃ³n "Agregar" que suma el texto a una lista. Cada Ã­tem tiene un botÃ³n para eliminarlo. No se pueden agregar Ã­tems vacÃ­os y, si la lista estÃ¡ vacÃ­a, se muestra "No hay nada para comprar".',
    hint: 'Nunca modifiques el array del estado con `push`. CreÃ¡ uno nuevo: para agregar, `[...items, nuevo]`; para eliminar, `items.filter(i => i.id !== id)`. Como id podÃ©s usar `Date.now()`.',
    image: PUBLIC_BASE + 'ej_05.png',
    caption: 'DespuÃ©s de agregar tres Ã­tems.',
    Component: ListaDeComprasPage,
  },
  {
    id: 'buscador',
    number: 6,
    title: 'Buscador',
    tag: 'Filtrado',
    consigna:
      'Dada una lista de lenguajes de programaciÃ³n, mostrÃ¡ un input de bÃºsqueda que filtre la lista mientras se escribe, sin distinguir mayÃºsculas de minÃºsculas. MostrÃ¡ tambiÃ©n cuÃ¡ntos resultados hay.',
    hint: 'PasÃ¡ ambos textos a minÃºsculas y usÃ¡ `includes`: `l.toLowerCase().includes(busqueda.toLowerCase())`.',
    image: PUBLIC_BASE + 'ej_06.png',
    caption: 'Buscando "ja".',
    Component: BuscadorPage,
  },
  {
    id: 'tipar-con-typescript',
    number: 7,
    title: 'Tipar con TypeScript',
    tag: 'TypeScript',
    consigna:
      'PasÃ¡ el componente Producto del ejercicio 1 a TypeScript: definÃ­ una interface `ProductoProps` y usala en la firma. AgregÃ¡ una prop opcional `oferta` de tipo booleano que, si es verdadera, muestre "Â¡Oferta!".',
    hint: 'Una prop opcional se declara con signo de pregunta: `oferta?: boolean`. RecordÃ¡ que en la pÃ¡gina de la clase los tipos no se verifican; copiÃ¡ tu soluciÃ³n a un proyecto Vite para ver los errores reales en VS Code.',
    image: PUBLIC_BASE + 'ej_07.png',
    caption: 'Con la prop oferta activada en el teclado.',
    Component: TiparConTypeScriptPage,
  },
];
