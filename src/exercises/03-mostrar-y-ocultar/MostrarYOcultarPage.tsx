import { TarjetaPregunta } from './components/TarjetaPregunta';
import { useVisible } from './hooks/useVisible';

/**
 * Página del ejercicio 3: conecta la visibilidad (useVisible) con la tarjeta
 * visual. Solo pasa datos y callbacks.
 */
export default function MostrarYOcultarPage() {
  const { visible, alternar } = useVisible();

  return (
    <TarjetaPregunta
      pregunta="¿Qué hace un componente de React?"
      respuesta="Renderiza una porción de la UI: recibe props y devuelve elementos reutilizables que React se encarga de pintar en el DOM."
      visible={visible}
      onAlternar={alternar}
    />
  );
}
