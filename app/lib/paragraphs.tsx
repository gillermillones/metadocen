export default function GetDesc({
    rule,
    section,
}: {
    rule: number;
    section: number;
}) {
    switch(rule){
        case 1:
            switch(section){
                case 1:
                    return(
                        <p>
                            Los objetivos didácticos se especifican de manera clara y precisa en el recurso, qué voy a enseñar.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Se especifican los destinatarios; los objetivos didácticos son alcanzables 
                            por los destinatarios según el perfil requerido en el propio recurso.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Las competencias y/o destrezas a desarrollar están claramente especificadas; 
                            son coherentes con los objetivos y los destinatarios.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Existen instrucciones o sugerencias sobre los posibles usos didácticos para 
                            el profesor y/o para el estudiante.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            Se indica el tiempo estimado de aprendizaje.
                        </p>
                    );
                case 6:
                    return(
                        <p>
                            Se indican qué conocimientos previos del alumno son requeridos.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 2:
            switch(section){
                case 1:
                    return(
                        <p>
                            El contenido es coherente con los objetivos didácticos, se trabaja cada uno de los objetivos.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            El contenido se presenta de manera clara y comprensible. 
                            Se destacan las ideas clave y se dan instrucciones claras en las actividades.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Las ideas y conceptos se presentan en número adecuado y ordenada y equilibradamente 
                            a lo largo del recurso.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            El contenido es científicamente correcto, no presenta sesgo ideológico, 
                            es objetivo y contiene información veraz.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            El contenido está actualizado o bien no es necesario actualizarlo.
                        </p>
                    );
                case 6:
                    return(
                        <p>
                            El contenido respeta los derechos de propiedad intelectual si utiliza otros materiales.
                        </p>
                    );
                case 7:
                    return(
                        <p>
                            El contenido declara las condiciones de uso del material educativo.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 3:
            switch(section){
                case 1:
                    return(
                        <p>
                            El recurso promueve el aprendizaje significativo del alumno, relaciona los conceptos 
                            nuevos con los que ya conoce.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Se estimula la reflexión.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Se estimula la capacidad crítica.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Se fomenta la creatividad e innovación, que el alumno genere nuevas ideas y formas de aplicarlo.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 4:
            switch(section){
                case 1:
                    return(
                        <p>
                            El contenido se adaptan al conocimiento previo del alumno y a sus necesidades de aprendizaje.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Se puede modificar fácilmente el contenido o actividad del recurso para ajustarlo a 
                            distintos grupos o tipos de alumnos.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Se proponen diferentes contenidos y actividades o diferentes itinerarios de contenidos y 
                            actividades según los niveles de conocimiento, posibilidades y capacidades de aprendizaje.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            El recurso respeta los distintos estilos de aprendizaje.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            Los contenidos pueden usarse independientemente del método de enseñanza y aprendizaje.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 5:
            switch(section){
                case 1:
                    return(
                        <p>
                            El recurso fomenta la participación del alumno durante la lectura, visualización o 
                            interacción con el mismo.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            El recurso contiene actividades interactivas para las ideas clave.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Se facilita que el alumno controle y maneje su aprendizaje.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Se puede obtener el historial de ejecución de la actividad del alumno.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            La tipología de actividades interactivas es variada.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 6:
            switch(section){
                case 1:
                    return(
                        <p>
                            Existe relación entre lo aprendido y el entorno profesional y social del destinatario del recurso.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Se promueve el aprendizaje autónomo del alumno.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            El tiempo de aprendizaje estimado es adecuado para alcanzar los objetivos didácticos y está de 
                            acuerdo con las previsiones y posibilidades de los alumnos.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Los contenidos se presentan de forma atractiva o innovadora.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            Se favorece la comunicación y colaboración.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 7:
            switch(section){
                case 1:
                    return(
                        <p>
                            El diseño del recurso está bien organizado y es claro, conciso e intuitivo.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Las imágenes, audios y vídeos son de calidad.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Los contenidos audiovisuales facilitan o refuerzan el aprendizaje. No son adornos 
                            que entorpecen o ralentizan.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            El recurso incluye formato multimodal: texto, imagen, audio y/o vídeo.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            El manejo de la interfaz es intuitivo, los contenidos se localizan fácilmente y, 
                            si no lo es, existen instrucciones de uso muy claras.
                        </p>
                    );
                case 6:
                    return(
                        <p>
                            La estética es compatible y adecuada al estudio del recurso. No presenta 
                            ruido visual ni sobrecarga informativa innecesaria.
                        </p>
                    );
                case 7:
                    return(
                        <p>
                            Se mantiene la consistencia en la apariencia de los elementos que tienen la misma 
                            funcionalidad en todo el recurso.
                        </p>
                    );
                case 8:
                    return(
                        <p>
                            Existe una opción de "preferencias" que permite personalizar la interfaz y éstas 
                            se mantienen para siguientes sesiones.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 8:
            switch(section){
                case 1:
                    return(
                        <p>
                            El recurso se organiza modularmente de forma que es escalable.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            El recurso o alguno de sus módulos puede utilizarse para crear nuevos recursos.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            El recurso o alguno de sus módulos puede utilizarse en más de una disciplina o grupo de alumnos.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 9:
            switch(section){
                case 1:
                    return(
                        <p>
                            El recurso se ha creado con formatos de uso mayoritario o estándares. Si no está creado con 
                            un formato estándar oficial o de uso mayoritario se describen los requisitos informáticos y 
                            se facilita el software necesario para utilizarlo.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            El alumno puede utilizar el recurso con cualquier dispositivo con o sin conexión a internet.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            El recurso tiene asociado una ficha de metadatos que lo describe.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Los metadatos del recurso están creados conforme a estándares internacionales.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            El recurso se exporta utilizando los estándares internacionales de intercambio de 
                            contenidos educativos.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 10:
            switch(section){
                case 1:
                    return(
                        <p>
                            El recurso no falla durante su funcionamiento.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            El recurso no se ve afectado por errores del usuario.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            El recurso responde con rapidez, de forma visible y audible ante las acciones del usuario.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Se proporciona funciones de ayuda sobre problemas comunes de los usuarios y sus soluciones.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 11:
            switch(section){
                case 1:
                    return(
                        <p>
                            Cada escenario de aprendizaje tiene un título único y significativo, y se puede acceder 
                            por canal visual, de forma directa o por acceso con los productos de apoyo.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            La estructura semántica y las relaciones de la información que contiene un escenario de 
                            aprendizaje se explicitan en la presentación y se puede acceder de forma directa o por acceso 
                            compatible con los productos de apoyo.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Los escenarios de aprendizaje permiten el uso "siempre adelante", mantener simultáneamente 
                            escenarios anteriores en caso de que sea necesario y "volver a escenarios anteriores" en caso 
                            de que no tengan que mantenerse simultáneamente.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Si se permiten escenarios de aprendizaje superpuestos, se pueden minimizar, maximizar, cambiar 
                            tamaño, restaurar y cerrar.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 12:
            switch(section){
                case 1:
                    return(
                        <p>
                            El nombre de cada enlace es descriptivo, claro y diferente del resto de los enlaces. Los enlaces 
                            que llevan al mismo sitio utilizan el mismo texto descriptivo.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Los enlaces funcionan correctamente.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Se proporcionan, al menos, dos mecanismos para localizar cada escenario de aprendizaje de la interfaz.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Se mantiene el orden lógico de navegación y la ubicación de los mecanismos de navegación, a menos que 
                            el usuario los cambie.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            Se proporciona información al usuario acerca de dónde se encuentra dentro del recurso.
                        </p>
                    );
                case 6:
                    return(
                        <p>
                            El alumno conoce su progreso en la ejecución del contenido.
                        </p>
                    );
                case 7:
                    return(
                        <p>
                            La interfaz proporciona tiempo ilimitado o suficiente para leer y usar el contenido. 
                            En cualquier caso, se puede ajustar el tiempo de lectura y uso del contenido.
                        </p>
                    );
                case 8:
                    return(
                        <p>
                            Se evita el paso obligado por elementos de contenido repetitivos.
                        </p>
                    );
                case 9:
                    return(
                        <p>
                            En cada inicio de sesión el contenido vuelve a su configuración inicial.
                        </p>
                    );
                case 10:
                    return(
                        <p>
                            El recurso informa acerca de su estado activo o inactivo al usuario.
                        </p>
                    );
                case 11:
                    return(
                        <p>
                            Es posible salir del material en cualquier punto.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 13:
            switch(section){
                case 1:
                    return(
                        <p>
                            El recurso debe ser operable a través de acceso compatible o directo.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            La operatividad es completa con teclado, ratón y cualquier otro 
                            dispositivo de entrada que se ofrezca.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Se distingue visualmente dónde está el foco del teclado u otro dispositivo 
                            cuando se esté operando con ese dispositivo.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Para realizar las tareas, o bien no existe ninguna limitación temporal o bien 
                            existe un plazo de tiempo limitado establecido en el que el alumno debe ser capaz 
                            de poder adaptarlo a su velocidad y necesidades.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            Se proporcionan atajos de teclado o teclas rápidas para enlaces principales y controles 
                            de formulario importantes.
                        </p>
                    );
                case 6:
                    return(
                        <p>
                            Todos los escenarios de aprendizaje del recurso aparecen y operan de manera predecible. 
                            Si se producen cambios de contexto se advierte previamente al alumno.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 14:
            switch(section){
                case 1:
                    return(
                        <p>
                            Hay contraste suficiente entre el color de las imágenes y el color de fondo para que se vean bien.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Todos los contenidos audiovisuales han de tener una descripción textual alternativa a la que se 
                            pueda acceder de forma directa o a través de productos de apoyo.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            Los contenidos audiovisuales tienen alternativas sincronizadas, como subtitulado, audiodescripción, 
                            transcripción completa o Lenguaje de Signos.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            En los contenidos audiovisuales el alumno tiene el control del manejo de la reproducción y de sus alternativas textuales.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            Si el recurso tiene sonidos inesperados, el alumno ha de poder controlarlo.
                        </p>
                    );
                case 6:
                    return(
                        <p>
                            El contenido no incluye efectos de destello con un umbral que pueda provocar ataques, espasmos o convulsiones.
                        </p>
                    );
                case 7:
                    return(
                        <p>
                            Si hay alertas visuales o sonoras, han de tener sus respectivas alternativas: sonoras para las visuales, visuales 
                            para las sonoras.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        case 15:
            switch(section){
                case 1:
                    return(
                        <p>
                            El texto es legible o puede ajustarse su tamaño.
                        </p>
                    );
                case 2:
                    return(
                        <p>
                            Existe contraste entre el color de texto y el color del fondo para leerlo claramente y sin esfuerzo.
                        </p>
                    );
                case 3:
                    return(
                        <p>
                            No se proporciona información exclusivamente por características sensoriales.
                        </p>
                    );
                case 4:
                    return(
                        <p>
                            Si hay formularios, tienen una estructura clara y coherente con la información que se presenta y 
                            se solicita. Son fáciles de rellenar y se ofrecen las ayudas necesarias tanto para rellenarlos como 
                            para prevenir o corregir los errores que se puedan cometer al cumplimentarlos. Además deben estar 
                            programados de tal forma que permitan el acceso compatible con productos de apoyo.
                        </p>
                    );
                case 5:
                    return(
                        <p>
                            Si hay tablas han de utilizarse correctamente, estar bien estructuradas y descritas, además de estar 
                            programadas de tal forma que permitan el acceso compatible con los productos de apoyo.
                        </p>
                    );
                case 6:
                    return(
                        <p>
                            Si hay tablas son sencillas, evitando en la medida de lo posible las celdas combinadas, divididas 
                            y anidadas. Sólo se utilizan para mostrar u organizar datos, no para maquetar contenido. Deben estar 
                            correctamente programadas para que permitan el acceso compatible con productos de apoyo.
                        </p>
                    );
                case 7:
                    return(
                        <p>
                            Si hay listas se utilizan sólo para mostrar/organizar secuencias de elementos, no para maquetar texto. 
                            Han de estar programadas de tal forma que permitan el acceso compatible con los productos de apoyo.
                        </p>
                    );
                default:
                    return(
                        <p>Descripcion no encontrada</p>
                    );
            }
        default:
            return(
                <p>Descripcion no encontrada</p>
            );
    }
}