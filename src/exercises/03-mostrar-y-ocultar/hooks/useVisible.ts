import { useState } from 'react';

/**
 * Lógica del ejercicio 3: visibilidad de una respuesta, arranca oculta.
 */
export function useVisible() {
  const [visible, setVisible] = useState(false);

  function alternar() {
    setVisible(!visible);
  }

  return { visible, alternar };
}
