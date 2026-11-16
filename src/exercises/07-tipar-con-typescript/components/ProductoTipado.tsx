import './producto-tipado.css';

/**
 * Contrato del ejercicio 7: el tipaje del componente Producto.
 * `oferta` es opcional — declarada con signo de pregunta.
 */
export interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
  oferta?: boolean;
}

/** Componente Producto con contract completo: interface + prop opcional. */
export function ProductoTipado({ nombre, precio, stock, oferta }: ProductoProps) {
  return (
    <article className="tarjeta-producto-tipado">
      <h3 className="tarjeta-producto-tipado-nombre">{nombre}</h3>
      {oferta && <p className="tarjeta-producto-tipado-oferta">¡Oferta!</p>}
      <p className="tarjeta-producto-tipado-precio">${precio}</p>
      <p
        className={`tarjeta-producto-tipado-stock${stock === 0 ? ' tarjeta-producto-tipado-stock--agotado' : ''}`}
      >
        {stock === 0 ? 'Sin stock' : `Stock: ${stock}`}
      </p>
    </article>
  );
}
