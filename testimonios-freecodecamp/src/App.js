import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='1'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          parte1='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software.'
          fraseDestacada=' freeCodeCamp cambió mi vida'
          parte2='' />
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='2'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          parte1=''
          fraseDestacada='freeCodeCamp fue la puerta de entrada a mi carrera '
          parte2='como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='3'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          parte1='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en '
          fraseDestacada='freeCodeCamp me dio las habilidades'
          parte2=' y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      </div>

    </div>
  );
}

export default App;
