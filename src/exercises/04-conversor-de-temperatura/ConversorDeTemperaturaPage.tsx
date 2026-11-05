import { ConversorView } from './components/ConversorView';
import { useConversor } from './hooks/useConversor';

/**
 * Página del ejercicio 4: conecta el estado + derivados (useConversor)
 * con el input visual. No conoce la fórmula ni el guardado de estado.
 */
export default function ConversorDeTemperaturaPage() {
  const { celsius, fahrenheit, haceCalor, escribirCelsius } = useConversor();

  return (
    <ConversorView
      celsius={celsius}
      fahrenheit={fahrenheit}
      haceCalor={haceCalor}
      onEscribirCelsius={escribirCelsius}
    />
  );
}
