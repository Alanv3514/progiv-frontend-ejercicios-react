import { useState } from 'react';

interface Item {
  id: number;
  texto: string;
}

/** Estado del ejercicio 5: lista de compras con agregar y eliminar. */
export function useListaDeCompras() {
  const [items, setItems] = useState<Item[]>([]);

  /** Agrega el texto como nuevo ítem; ignora vacíos. */
  function agregar(texto: string) {
    const limpio = texto.trim();
    if (limpio === '') return;
    setItems([...items, { id: Date.now(), texto: limpio }]);
  }

  function eliminar(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  return { items, agregar, eliminar };
}
