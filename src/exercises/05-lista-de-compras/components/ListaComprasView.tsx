import './lista-compras.css';

interface ItemCompras {
  id: number;
  texto: string;
}

interface ListaComprasViewProps {
  items: ItemCompras[];
  onAgregar: (texto: string) => void;
  onEliminar: (id: number) => void;
}

/** Visual del ejercicio 5: input + botón agregar y lista con eliminar. */
export function ListaComprasView({
  items,
  onAgregar,
  onEliminar,
}: ListaComprasViewProps) {
  function manejarSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const campo = evento.currentTarget.elements.namedItem('item') as HTMLInputElement;
    onAgregar(campo.value);
    evento.currentTarget.reset();
  }

  return (
    <section className="lista-compras">
      <form className="lista-compras-form" onSubmit={manejarSubmit}>
        <input
          className="lista-compras-input"
          name="item"
          type="text"
          placeholder="¿Qué hay para comprar?"
          aria-label="Nuevo ítem"
        />
        <button type="submit" className="lista-compras-boton">
          Agregar
        </button>
      </form>

      {items.length === 0 ? (
        <p className="lista-compras-vacio">No hay nada para comprar</p>
      ) : (
        <ul className="lista-compras-items">
          {items.map(({ id, texto }) => (
            <li className="lista-compras-item" key={id}>
              <span>{texto}</span>
              <button
                type="button"
                className="lista-compras-eliminar"
                aria-label={`Eliminar ${texto}`}
                onClick={() => onEliminar(id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
