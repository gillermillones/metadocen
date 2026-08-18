'use client';

import { lusitana } from '@/app/ui/fonts';
import GetDesc from '@/app/lib/paragraphs';
import { colors } from '@/app/lib/utils';
import { useState } from 'react';
    
export default function UneStandard() {
    const [show, setShow] = useState<number | null>(null);
    const changeShow = (n : number) => {setShow(show == n ? null : n)}

    return(
        <div className="flex flex-col w-full items-start justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Informacion</h1>
            <h2 className={`${lusitana.className} text-xl`}>Norma 71362:2020</h2>
            <p>
                La Norma 71362:2020 de “Calidad de los materiales educativos digitales” elaborada por UNE responde a la necesidad 
                de proporcionar un documento de referencia sobre la calidad de los materiales educativos digitales (MED) y una herramienta para su medición.
                Los objetivos de esta norma se resumen en los siguientes objetivos específicos:
            </p>
            <p className="ml-2">
                - Guiar la creación de un recurso educativo digital de calidad.
            </p>
            <p className="ml-2">
                - Valorar estos recursos de forma precisa y objetiva.
            </p>
            <p className="ml-2">
                - Facilitar a los usuarios la elección del mejor MED.
            </p>
            <p>
                La calidad de los Recursos Educativos Digitales se puede valorar a partir de 15 criterios establecidos en dicha norma. 
                Cada criterio contiene diferentes indicadores de calidad que especifican las características que debe reunir un recurso para tener una alta 
                valoración en dicho criterio.
            </p>
            <p>
                Esta norma, como hemos mencionado antes, proporciona una herramienta con forma de rúbrica para puntuar cada uno de los criterios. 
                La suma de las puntuaciones obtenidas en todos ellos arroja una calificación total del recurso educativo digital. De esta manera, 
                los docentes tendrán una información precisa acerca de la calidad de un recurso educativo de interés.
            </p>
            <h2 className="text-l">Criterios para evaluar recursos educativos:</h2>
            <ul>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[0]}-100`}>
                        <button type="button" onClick={() => changeShow(0)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 1.</strong> Descripción didáctica</h3>
                            <p className="ml-2">
                                El recurso define perfectamente los objetivos didácticos, los receptores a los que va dirigido, las competencias que desarrolla e 
                                incluye indicaciones para su uso. Esta descripción del recurso aporta valor y coherencia didáctica al mismo.
                            </p>
                            <p>
                                Tag &lt;description&gt;
                            </p>
                            {show === 0 && (
                                <div>
                                    <GetDesc rule={1} section={1}/>
                                    <GetDesc rule={1} section={2}/>
                                    <GetDesc rule={1} section={3}/>
                                    <GetDesc rule={1} section={4}/>
                                    <GetDesc rule={1} section={5}/>
                                    <GetDesc rule={1} section={6}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[1]}-100`}>
                        <button type="button" onClick={() => changeShow(1)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 2.</strong> Calidad de los contenidos</h3>
                            <p className="ml-2">
                                La presentación es clara, los objetivos se relacionan coherentemente, se respetan los derechos de autor, el nivel es 
                                adecuado para el alumno, la información es veraz y objetiva y está actualizada.
                            </p>
                            <p>
                                Tag &lt;quality&gt;
                            </p>
                            {show === 1 && (
                                <div>
                                    <GetDesc rule={2} section={1}/>
                                    <GetDesc rule={2} section={2}/>
                                    <GetDesc rule={2} section={3}/>
                                    <GetDesc rule={2} section={4}/>
                                    <GetDesc rule={2} section={5}/>
                                    <GetDesc rule={2} section={6}/>
                                    <GetDesc rule={2} section={7}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[2]}-100`}>
                        <button type="button" onClick={() => changeShow(2)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 3.</strong> Capacidad para generar aprendizaje</h3>
                            <p className="ml-2">
                                El recurso educativo digital promueve el aprendizaje significativo, promueve la creatividad e innovación, y estimula el 
                                espíritu crítico y la reflexión.
                            </p>
                            <p>
                                Tag &lt;capacity&gt;
                            </p>
                            {show === 2 && (
                                <div>
                                    <GetDesc rule={3} section={1}/>
                                    <GetDesc rule={3} section={2}/>
                                    <GetDesc rule={3} section={3}/>
                                    <GetDesc rule={3} section={4}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[3]}-100`}>
                        <button type="button" onClick={() => changeShow(3)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 4.</strong> Adaptabilidad</h3>
                            <p className="ml-2">
                                El recurso es adecuado para diferentes tipos de alumnos, se ajusta a su nivel y estilos de aprendizaje, y explota diferentes 
                                caminos para alcanzar los objetivos didácticos.
                            </p>
                            <p>
                                Tag &lt;adaptable&gt;
                            </p>
                            {show === 3 && (
                                <div>
                                    <GetDesc rule={4} section={1}/>
                                    <GetDesc rule={4} section={2}/>
                                    <GetDesc rule={4} section={3}/>
                                    <GetDesc rule={4} section={4}/>
                                    <GetDesc rule={4} section={5}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[4]}-100`}>
                        <button type="button" onClick={() => changeShow(4)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 5.</strong> Interactividad</h3>
                            <p className="ml-2">
                                Se asegura la interacción del alumno con el recurso, contiene actividades diversas, el aprendizaje es dirigido y se registra 
                                el progreso en dichas actividades.
                            </p>
                            <p>
                                Tag &lt;interaction&gt;
                            </p>
                            {show === 4 && (
                                <div>
                                    <GetDesc rule={5} section={1}/>
                                    <GetDesc rule={5} section={2}/>
                                    <GetDesc rule={5} section={3}/>
                                    <GetDesc rule={5} section={4}/>
                                    <GetDesc rule={5} section={5}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[5]}-100`}>
                        <button type="button" onClick={() => changeShow(5)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 6.</strong> Motivación</h3>
                            <p className="ml-2">
                                El recurso está vinculado a las experiencias vitales del estudiante, desarrolla su autonomía, se adecúa al ritmo de 
                                aprendizaje y presenta los contenidos de manera atractiva e innovadora, incrementando la competencia social del alumno.
                            </p>
                            <p>
                                Tag &lt;motivation&gt;
                            </p>
                            {show === 5 && (
                                <div>
                                    <GetDesc rule={6} section={1}/>
                                    <GetDesc rule={6} section={2}/>
                                    <GetDesc rule={6} section={3}/>
                                    <GetDesc rule={6} section={4}/>
                                    <GetDesc rule={6} section={5}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[6]}-100`}>
                        <button type="button" onClick={() => changeShow(6)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 7.</strong> Formato y diseño</h3>
                            <p className="ml-2">
                                El medio educativo presenta una clara organización, es intuitivo. Presenta medios audiovisuales de calidad que facilitan 
                                el aprendizaje y añaden dinamismo. Contiene múltiples formatos (texto, imagen, audio o vídeo). La información e instrucciones 
                                que detalla son precisas. El medio es también personalizable.
                            </p>
                            <p>
                                Tag &lt;design&gt;
                            </p>
                            {show === 6 && (
                                <div>
                                    <GetDesc rule={7} section={1}/>
                                    <GetDesc rule={7} section={2}/>
                                    <GetDesc rule={7} section={3}/>
                                    <GetDesc rule={7} section={4}/>
                                    <GetDesc rule={7} section={5}/>
                                    <GetDesc rule={7} section={6}/>
                                    <GetDesc rule={7} section={7}/>
                                    <GetDesc rule={7} section={8}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[7]}-100`}>
                        <button type="button" onClick={() => changeShow(7)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 8.</strong> Reusabilidad</h3>
                            <p className="ml-2">
                                El recurso tiene módulos lo que le confiere la posibilidad de organizarlos para crear nuevos recursos. Estos módulos pueden 
                                utilizarse en diferentes materias y en distintas agrupaciones de alumnos.
                            </p>
                            <p>
                                Tag &lt;reusable&gt;
                            </p>
                            {show === 7 && (
                                <div>
                                    <GetDesc rule={8} section={1}/>
                                    <GetDesc rule={8} section={2}/>
                                    <GetDesc rule={8} section={3}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[8]}-100`}>
                        <button type="button" onClick={() => changeShow(8)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 9.</strong> Portabilidad</h3>
                            <p className="ml-2">
                                El recurso tiene un formato estándar y puede ser utilizado de manera mayoritaria. Si no fuera el caso, se facilitará el 
                                software para que los usuarios puedan hacer uso del recurso. Además, el medio educativo digital puede ser utilizado con 
                                distintos dispositivos, con o sin conexión a internet. El recurso está catalogado siguiendo los estándares educativos vigentes. 
                                El recurso puede ser exportado a distintas plataformas dado que su empaquetamiento es estándar.
                            </p>
                            <p>
                                Tag &lt;portable&gt;
                            </p>
                            {show === 8 && (
                                <div>
                                    <GetDesc rule={9} section={1}/>
                                    <GetDesc rule={9} section={2}/>
                                    <GetDesc rule={9} section={3}/>
                                    <GetDesc rule={9} section={4}/>
                                    <GetDesc rule={9} section={5}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[9]}-100`}>
                        <button type="button" onClick={() => changeShow(9)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 10.</strong> Robustez; estabilidad técnica</h3>
                            <p className="ml-2">
                                El recurso puede ejecutarse sin fallos y con rapidez. Reproduce audio y video cuando el usuario interactúa. Proporciona ayuda 
                                y soluciones ante problemas comunes.
                            </p>
                            <p>
                                Tag &lt;toughness&gt;
                            </p>
                            {show === 9 && (
                                <div>
                                    <GetDesc rule={10} section={1}/>
                                    <GetDesc rule={10} section={2}/>
                                    <GetDesc rule={10} section={3}/>
                                    <GetDesc rule={10} section={4}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[10]}-100`}>
                        <button type="button" onClick={() => changeShow(10)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 11.</strong> Estructura del escenario de aprendizaje</h3>
                            <p className="ml-2">
                                Los títulos describen el objetivo del recurso. La información de estos escenarios es coherente y significativa, lo que le 
                                confiere una mayor accesibilidad al recurso. Existe la movilidad y ajuste entre los diferentes escenarios de aprendizaje, 
                                pudiendo avanzar o retroceder cuando lo determine el usuario; se puede cambiar el tamaño, abrir y cerrar ventanas, etc.
                            </p>
                            <p>
                                Tag &lt;structure&gt;
                            </p>
                            {show === 10 && (
                                <div>
                                    <GetDesc rule={11} section={1}/>
                                    <GetDesc rule={11} section={2}/>
                                    <GetDesc rule={11} section={3}/>
                                    <GetDesc rule={11} section={4}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[11]}-100`}>
                        <button type="button" onClick={() => changeShow(11)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 12.</strong> Navegación</h3>
                            <p className="ml-2">
                                Los enlaces del recurso aportan información relevante y diferente al resto de enlaces. Éstos funcionan correctamente y 
                                utilizan siempre el mismo texto descriptivo. El medio aporta distintas rutas para llegar al mismo escenario de aprendizaje. 
                                Existes indicaciones de dónde se encuentra el usuario dentro del recurso e identifica el progreso que lleva. El recurso ofrece 
                                tiempo suficiente para leer y utilizar el contenido. Si se reinicia, los ajustes vuelven a su configuración inicial. El medio 
                                informa al usuario de su estado y le permite salir del mismo en cualquier momento.
                            </p>
                            <p>
                                Tag &lt;navigation&gt;
                            </p>
                            {show === 11 && (
                                <div>
                                    <GetDesc rule={12} section={1}/>
                                    <GetDesc rule={12} section={2}/>
                                    <GetDesc rule={12} section={3}/>
                                    <GetDesc rule={12} section={4}/>
                                    <GetDesc rule={12} section={5}/>
                                    <GetDesc rule={12} section={6}/>
                                    <GetDesc rule={12} section={7}/>
                                    <GetDesc rule={12} section={8}/>
                                    <GetDesc rule={12} section={9}/>
                                    <GetDesc rule={12} section={10}/>
                                    <GetDesc rule={12} section={11}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[12]}-100`}>
                        <button type="button" onClick={() => changeShow(12)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 13.</strong> Operabilidad</h3>
                            <p className="ml-2">
                                El recurso puede ser utilizado con distintos periféricos (ratón, teclado…), de una forma intuitiva, clara y rápida. Presenta 
                                atajos y/o teclas de acceso rápido. El medio se comporta de manera predecible y lógica.
                            </p>
                            <p>
                                Tag &lt;operable&gt;
                            </p>
                            {show === 12 && (
                                <div>
                                    <GetDesc rule={13} section={1}/>
                                    <GetDesc rule={13} section={2}/>
                                    <GetDesc rule={13} section={3}/>
                                    <GetDesc rule={13} section={4}/>
                                    <GetDesc rule={13} section={5}/>
                                    <GetDesc rule={13} section={6}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[13]}-100`}>
                        <button type="button" onClick={() => changeShow(13)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 14.</strong> Accesibilidad del contenido audiovisual</h3>
                            <p className="ml-2">
                                El contraste es adecuado, la imagen acompaña una descripción textual (excepto en imágenes decorativas). Existen alternativas a 
                                los audiovisuales (en general son textos). El usuario tiene el control de la reproducción de todos los contenidos. Se evitan los 
                                destellos intensos.
                            </p>
                            <p>
                                Tag &lt;av_accessible&gt;
                            </p>
                            {show === 13 && (
                                <div>
                                    <GetDesc rule={14} section={1}/>
                                    <GetDesc rule={14} section={2}/>
                                    <GetDesc rule={14} section={3}/>
                                    <GetDesc rule={14} section={4}/>
                                    <GetDesc rule={14} section={5}/>
                                    <GetDesc rule={14} section={6}/>
                                    <GetDesc rule={14} section={7}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
                <li className="ml-4 mt-2">
                    <div className={`rounded-xl bg-${colors[14]}-100`}>
                        <button type="button" onClick={() => changeShow(14)} className="rounded-md bg-white hover:bg-gray-200">
                            <h3><strong>Criterio 15.</strong> Accesibilidad del contenido textual</h3>
                            <p className="ml-2">
                                Puede ajustarse el tamaño del texto. El contraste es adecuado. La información se proporciona en distintos medios. Los formularios 
                                son coherentes, presentan autocorrección. Las tablas y listas deben ser leídas por los productos de apoyo (son sencillas, con 
                                estructura clara).
                            </p>
                            <p>
                                Tag &lt;text_accessible&gt;
                            </p>
                            {show === 14 && (
                                <div>
                                    <GetDesc rule={15} section={1}/>
                                    <GetDesc rule={15} section={2}/>
                                    <GetDesc rule={15} section={3}/>
                                    <GetDesc rule={15} section={4}/>
                                    <GetDesc rule={15} section={5}/>
                                    <GetDesc rule={15} section={6}/>
                                    <GetDesc rule={15} section={7}/>
                                </div>
                            )}
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}