import { ContadorView } from './components/ContadorView';
import { useContador } from './hooks/useContador';

/**
 * Página del ejercicio 2: conecta la lógica (useContador) con lo visual
 * (ContadorView). No conoce detalles de estado ni de estilos.
 */
export default function ContadorConLimitesPage() {
  const { valor, sumar, restar, reiniciar } = useContador();

  return (
    <ContadorView valor={valor} onSumar={sumar} onRestar={restar} onReiniciar={reiniciar} />
  );
}
