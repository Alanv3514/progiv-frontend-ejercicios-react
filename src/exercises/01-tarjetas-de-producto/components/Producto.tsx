import './producto.css';

export interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
}

/** Componente visual del ejercicio 1: una tarjeta de producto. */
export function Producto({ nombre, precio, stock }: ProductoProps) {
  return (
    <article className="tarjeta-producto">
      <h3 className="tarjeta-producto-nombre">{nombre}</h3>
      <p className="tarjeta-producto-precio">${precio}</p>
      <p className="tarjeta-producto-stock">
        {stock === 0 ? 'Sin stock' : `Stock: ${stock} unidades`}
      </p>
    </article>
  );
}
