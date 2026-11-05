import { ProductoTipado } from './components/ProductoTipado';
import './tipar-con-typescript.css';

/** Datos de ejemplo con la prop opcional oferta en el teclado. */
const PRODUCTOS = [
  { nombre: 'Teclado', precio: 45000, stock: 12, oferta: true },
  { nombre: 'Mouse', precio: 18000, stock: 0, oferta: false },
  { nombre: 'Monitor', precio: 320000, stock: 3 },
];

/**
 * Página del ejercicio 7: instancia el Producto tipado, con y sin oferta.
 */
export default function TiparConTypeScriptPage() {
  return (
    <section className="tipar-con-typescript">
      {PRODUCTOS.map(({ nombre, precio, stock, oferta }) => (
        <ProductoTipado
          key={nombre}
          nombre={nombre}
          precio={precio}
          stock={stock}
          oferta={oferta}
        />
      ))}
    </section>
  );
}
