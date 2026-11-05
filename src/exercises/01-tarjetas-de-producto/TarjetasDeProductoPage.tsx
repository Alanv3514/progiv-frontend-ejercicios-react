import { Producto } from './components/Producto';
import './tarjetas-de-producto.css';

/** Datos de ejemplo para instanciar el componente tres veces. */
const PRODUCTOS = [
  { nombre: 'Teclado', precio: 45000, stock: 12 },
  { nombre: 'Mouse', precio: 18000, stock: 0 },
  { nombre: 'Monitor', precio: 320000, stock: 3 },
];

/**
 * Página del ejercicio 1: instancia <Producto /> tres veces con datos
 * distintos. Solo compone; cada tarjeta se dibuja sola.
 */
export default function TarjetasDeProductoPage() {
  return (
    <section className="tarjetas-de-producto">
      {PRODUCTOS.map(({ nombre, precio, stock }) => (
        <Producto key={nombre} nombre={nombre} precio={precio} stock={stock} />
      ))}
    </section>
  );
}
