import { ListaComprasView } from './components/ListaComprasView';
import { useListaDeCompras } from './hooks/useListaDeCompras';

/**
 * Página del ejercicio 5: conecta la lista (useListaDeCompras) con la visual.
 * No manipula ítems ni conoce el estado interno.
 */
export default function ListaDeComprasPage() {
  const { items, agregar, eliminar } = useListaDeCompras();

  return (
    <ListaComprasView items={items} onAgregar={agregar} onEliminar={eliminar} />
  );
}
