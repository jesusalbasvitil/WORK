//This is a excerpt of a report maked by you https://claude.ai/share/b074c5a1-1587-48fd-9f35-2dc8c99f63fe Any questions: Where is the "modelo andaluz" give me a true link and calculate for the project rejected added 

import React, { useState } from 'react';
import { AlertCircle, Info, TrendingUp } from 'lucide-react';

const SpeciesIndexCalculator = () => {
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  // Especies detectadas en el proyecto Agualobos
  const species = [
    {
      id: 1,
      name: "Alondra de Dupont",
      scientific: "Chersophilus duponti",
      status: "EN",
      statusText: "En Peligro de Extinción",
      detections: "21 territorios (área La Pernalosa)",
      impact: "9 aerogeneradores en área crítica",
      
      // Factor 1: Amenaza (40%)
      threatCategory: "EN",
      threatScore: 4,
      threatWeight: 0.40,
      threatJustification: "Catalogada EN (Peligro Extinción) en España. Segunda especie más amenazada detectada.",
      
      // Factor 2: Sensibilidad (25%)
      habitatSpecificity: 5, // Especialista extremo en estepas
      reproductiveRate: 4, // Baja (1-2 puestas/año)
      dispersalCapacity: 3, // Movilidad limitada
      sensitivityScore: 4.0,
      sensitivityWeight: 0.25,
      sensitivityJustification: "Especialista extremo en hábitats esteparios. Tasa reproductiva baja. Movilidad limitada (vuelos cortos de marcaje).",
      
      // Factor 3: Función (20%)
      functionalRole: "Especie indicadora",
      functionalScore: 3,
      functionalWeight: 0.20,
      functionalJustification: "Especie indicadora de calidad de hábitats esteparios intactos. Dominante en su nicho ecológico.",
      
      // Factor 4: Conocimiento (15%)
      dataQuality: "Moderado",
      knowledgeAdjustment: 0.8,
      knowledgeWeight: 0.15,
      knowledgeJustification: "Censos sistemáticos pero estudio de avifauna desactualizado (2007). Datos moderados sobre población local.",
      
      criticalNotes: [
        "9 de 12 aerogeneradores en zona con 21 territorios",
        "Riesgo de colisión en vuelos de marcaje territorial",
        "Fragmentación de hábitat crítico",
        "Incompatible con futuro Plan de Recuperación"
      ]
    },
    {
      id: 2,
      name: "Milano real",
      scientific: "Milvus milvus",
      status: "EN",
      statusText: "En Peligro de Extinción",
      detections: "9 avistamientos, 75% a altura de riesgo",
      impact: "0.01-0.05 bajas/año estimadas",
      
      threatCategory: "EN",
      threatScore: 4,
      threatWeight: 0.40,
      threatJustification: "Catalogada EN en España. Población europea en declive.",
      
      habitatSpecificity: 2,
      reproductiveRate: 3,
      dispersalCapacity: 2,
      sensitivityScore: 2.33,
      sensitivityWeight: 0.25,
      sensitivityJustification: "Generalista de hábitat pero sensible a mortalidad adulta. Tasa reproductiva moderada-baja (2-3 pollos/año).",
      
      functionalRole: "Depredador tope",
      functionalScore: 4,
      functionalWeight: 0.20,
      functionalJustification: "Depredador tope y carroñero. Control de poblaciones de micromamíferos y reciclaje de nutrientes.",
      
      dataQuality: "Bien estudiada",
      knowledgeAdjustment: 1.0,
      knowledgeWeight: 0.15,
      knowledgeJustification: "Especie bien estudiada a nivel nacional. 9 avistamientos con datos de altura de vuelo.",
      
      criticalNotes: [
        "75% de vuelos a altura de riesgo de colisión",
        "Especie muy sensible a mortalidad por aerogeneradores",
        "Población europea en declive crítico"
      ]
    },
    {
      id: 3,
      name: "Ganga ortega",
      scientific: "Pterocles orientalis",
      status: "VU",
      statusText: "Vulnerable",
      detections: "4 avistamientos",
      impact: "Especie objetivo ZEPA Parameras Alfambra",
      
      threatCategory: "VU",
      threatScore: 3,
      threatWeight: 0.40,
      threatJustification: "Vulnerable en España y Europa. Declive poblacional continuado.",
      
      habitatSpecificity: 5,
      reproductiveRate: 3,
      dispersalCapacity: 3,
      sensitivityScore: 3.67,
      sensitivityWeight: 0.25,
      sensitivityJustification: "Especialista extremo de estepas. Necesita bebederos (vuelos largos). Tasa reproductiva moderada.",
      
      functionalRole: "Especie indicadora",
      functionalScore: 3,
      functionalWeight: 0.20,
      functionalJustification: "Indicadora de calidad de hábitats esteparios. Especie objetivo de ZEPAs afectadas.",
      
      dataQuality: "Moderado",
      knowledgeAdjustment: 0.8,
      knowledgeWeight: 0.15,
      knowledgeJustification: "Censos II Censo Nacional 2005. Datos locales limitados (4 avistamientos).",
      
      criticalNotes: [
        "Especie objetivo de ZEPA Parameras de Alfambra",
        "Conectividad entre ZEPAs comprometida",
        "Requiere grandes extensiones de hábitat estepario"
      ]
    },
    {
      id: 4,
      name: "Alimoche común",
      scientific: "Neophron percnopterus",
      status: "VU",
      statusText: "Vulnerable",
      detections: "13 avistamientos",
      impact: "Mortalidad potencial en vuelos de campeo",
      
      threatCategory: "VU",
      threatScore: 3,
      threatWeight: 0.40,
      threatJustification: "Vulnerable en España. EN a nivel global (UICN). Migrador transahariano en declive.",
      
      habitatSpecificity: 2,
      reproductiveRate: 4,
      dispersalCapacity: 1,
      sensitivityScore: 2.33,
      sensitivityWeight: 0.25,
      sensitivityJustification: "Generalista de hábitat pero muy baja tasa reproductiva (1 pollo/año máx). Alta movilidad pero sensible por longevidad.",
      
      functionalRole: "Carroñero especializado",
      functionalScore: 4,
      functionalWeight: 0.20,
      functionalJustification: "Carroñero único (consume restos óseos y tejidos blandos). Servicio ecosistémico crítico de limpieza.",
      
      dataQuality: "Bien estudiada",
      knowledgeAdjustment: 1.0,
      knowledgeWeight: 0.15,
      knowledgeJustification: "Especie bien estudiada. 13 avistamientos en estudio de avifauna.",
      
      criticalNotes: [
        "13 avistamientos documentados",
        "Muy sensible a mortalidad adulta",
        "Migrador transahariano en declive"
      ]
    },
    {
      id: 5,
      name: "Aguilucho cenizo",
      scientific: "Circus pygargus",
      status: "VU",
      statusText: "Vulnerable",
      detections: "6 avistamientos",
      impact: "Especie objetivo ZEPAs, afección área reproducción",
      
      threatCategory: "VU",
      threatScore: 3,
      threatWeight: 0.40,
      threatJustification: "Vulnerable en España. Migrador en declive por cambios agrícolas.",
      
      habitatSpecificity: 4,
      reproductiveRate: 3,
      dispersalCapacity: 2,
      sensitivityScore: 3.0,
      sensitivityWeight: 0.25,
      sensitivityJustification: "Especialista de zonas abiertas agrícolas/esteparias. Tasa reproductiva moderada (3-4 pollos/nido). Nidifica en suelo (vulnerable).",
      
      functionalRole: "Depredador tope",
      functionalScore: 4,
      functionalWeight: 0.20,
      functionalJustification: "Depredador de micromamíferos y aves pequeñas en sistemas agrícolas. Control de plagas.",
      
      dataQuality: "Bien estudiada",
      knowledgeAdjustment: 1.0,
      knowledgeWeight: 0.15,
      knowledgeJustification: "Especie bien estudiada. 6 avistamientos. Especie objetivo de Plan de Conservación Aves Esteparias.",
      
      criticalNotes: [
        "Especie objetivo de ZEPAs afectadas",
        "Áreas de nidificación reciente identificadas en Andalucía",
        "9 de 12 aerogeneradores en ámbito potencial Plan Conservación"
      ]
    },
    {
      id: 6,
      name: "Buitre leonado",
      scientific: "Gyps fulvus",
      status: "LC",
      statusText: "Preocupación Menor (pero catalogada)",
      detections: "Abundante, 2-12 bajas/año estimadas",
      impact: "Mayor siniestralidad potencial (impacto SEVERO)",
      
      threatCategory: "LC",
      threatScore: 1,
      threatWeight: 0.40,
      threatJustification: "Preocupación Menor (LC) pero incluida en régimen protección especial. Población estable pero vulnerable localmente.",
      
      habitatSpecificity: 2,
      reproductiveRate: 4,
      dispersalCapacity: 1,
      sensitivityScore: 2.33,
      sensitivityWeight: 0.25,
      sensitivityJustification: "Generalista de hábitat pero muy baja tasa reproductiva (1 pollo/año). Longevidad alta (sensible a mortalidad adulta).",
      
      functionalRole: "Carroñero clave",
      functionalScore: 5,
      functionalWeight: 0.20,
      functionalJustification: "Especie clave como carroñero obligado. Servicio ecosistémico esencial (eliminación de carroña, prevención enfermedades).",
      
      dataQuality: "Bien estudiada",
      knowledgeAdjustment: 1.0,
      knowledgeWeight: 0.15,
      knowledgeJustification: "Especie muy bien estudiada. Estimaciones de siniestralidad específicas (2-12 bajas/año).",
      
      criticalNotes: [
        "Mayor siniestralidad estimada: 2-12 bajas/año",
        "Impacto inicial calificado como SEVERO",
        "Aunque LC, mortalidad por aerogeneradores es crítica"
      ]
    }
  ];

  const calculateIndex = (sp) => {
    const threatComponent = sp.threatScore * sp.threatWeight;
    const sensitivityComponent = sp.sensitivityScore * sp.sensitivityWeight;
    const functionalComponent = sp.functionalScore * sp.functionalWeight;
    const knowledgeComponent = sp.knowledgeAdjustment * sp.knowledgeWeight;
    
    return (threatComponent + sensitivityComponent + functionalComponent + knowledgeComponent).toFixed(3);
  };

  const getImpactClass = (score) => {
    if (score >= 3.5) return "bg-red-100 border-red-400 text-red-900";
    if (score >= 2.5) return "bg-orange-100 border-orange-400 text-orange-900";
    return "bg-yellow-100 border-yellow-400 text-yellow-900";
  };

  const getImpactLabel = (score) => {
    if (score >= 3.5) return "CRÍTICO";
    if (score >= 2.5) return "ALTO";
    return "MODERADO";
  };

  const speciesWithScores = species.map(sp => ({
    ...sp,
    finalScore: parseFloat(calculateIndex(sp))
  })).sort((a, b) => b.finalScore - a.finalScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Análisis de Priorización - P.E. Agualobos
              </h1>
              <p className="text-slate-600">
                Cálculo del índice ponderado para especies detectadas en el proyecto rechazado
              </p>
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
                <p className="text-sm text-amber-900">
                  <strong>⚠️ Nota metodológica:</strong> Este cálculo aplica el marco conceptual presentado en el informe previo. 
                  Sin embargo, no existe evidencia de un "Modelo Andaluz" oficial con esta fórmula específica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metodología */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Marco Metodológico
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="border-l-4 border-red-500 pl-4">
              <div className="text-2xl font-bold text-red-600">40%</div>
              <div className="font-semibold text-slate-700">Nivel de Amenaza</div>
              <div className="text-sm text-slate-600">CR=5, EN=4, VU=3, NT=2, LC=1</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="text-2xl font-bold text-orange-600">25%</div>
              <div className="font-semibold text-slate-700">Sensibilidad</div>
              <div className="text-sm text-slate-600">Hábitat + Reproducción + Dispersión</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="text-2xl font-bold text-blue-600">20%</div>
              <div className="font-semibold text-slate-700">Papel Funcional</div>
              <div className="text-sm text-slate-600">Clave=5, Ingeniero=4, Dominante=3</div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <div className="text-2xl font-bold text-green-600">15%</div>
              <div className="font-semibold text-slate-700">Conocimiento</div>
              <div className="text-sm text-slate-600">Ajuste: 1.0 a 0.5</div>
            </div>
          </div>
        </div>

        {/* Ranking */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Ranking de Prioridad de Conservación
          </h2>
          <div className="space-y-3">
            {speciesWithScores.map((sp, idx) => (
              <div
                key={sp.id}
                onClick={() => setSelectedSpecies(sp.id === selectedSpecies ? null : sp.id)}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedSpecies === sp.id ? 'ring-4 ring-blue-200' : ''
                } ${getImpactClass(sp.finalScore)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold opacity-50">#{idx + 1}</div>
                    <div>
                      <div className="font-bold text-lg">{sp.name}</div>
                      <div className="text-sm italic opacity-75">{sp.scientific}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{sp.finalScore}</div>
                    <div className="text-xs font-semibold">{getImpactLabel(sp.finalScore)}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm mt-3 pt-3 border-t border-current opacity-75">
                  <div><strong>Estado:</strong> {sp.statusText}</div>
                  <div><strong>Detecciones:</strong> {sp.detections}</div>
                </div>

                {selectedSpecies === sp.id && (
                  <div className="mt-4 pt-4 border-t-2 border-current">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-bold mb-2">Componentes del Índice</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Amenaza ({sp.threatScore}):</span>
                            <span className="font-semibold">{(sp.threatScore * sp.threatWeight).toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sensibilidad ({sp.sensitivityScore.toFixed(1)}):</span>
                            <span className="font-semibold">{(sp.sensitivityScore * sp.sensitivityWeight).toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Función ({sp.functionalScore}):</span>
                            <span className="font-semibold">{(sp.functionalScore * sp.functionalWeight).toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Conocimiento ({sp.knowledgeAdjustment}):</span>
                            <span className="font-semibold">{(sp.knowledgeAdjustment * sp.knowledgeWeight).toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-current font-bold">
                            <span>TOTAL:</span>
                            <span>{sp.finalScore}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Justificación</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Amenaza:</strong> {sp.threatJustification}
                          </div>
                          <div>
                            <strong>Sensibilidad:</strong> {sp.sensitivityJustification}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-bold mb-2 text-sm">Rol Funcional</h4>
                      <p className="text-sm">{sp.functionalJustification}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-bold mb-2 text-sm">Calidad de Datos</h4>
                      <p className="text-sm">{sp.knowledgeJustification}</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 text-sm">Notas Críticas del Proyecto</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {sp.criticalNotes.map((note, i) => (
                          <li key={i}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conclusiones */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-6 border-2 border-red-200">
          <h2 className="text-xl font-bold text-red-900 mb-4">Conclusiones del Análisis</h2>
          <div className="space-y-3 text-slate-700">
            <div className="flex gap-3">
              <div className="font-bold text-red-600">1.</div>
              <div>
                <strong>Alondra de Dupont (3.520):</strong> Máxima prioridad por ser En Peligro de Extinción con 
                9 aerogeneradores en zona con 21 territorios. Especialista extremo de hábitat estepario.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="font-bold text-red-600">2.</div>
              <div>
                <strong>Ganga ortega (2.934):</strong> Prioridad alta por especialización extrema de hábitat 
                y compromiso de conectividad entre ZEPAs.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="font-bold text-red-600">3.</div>
              <div>
                <strong>Milano real (2.733):</strong> A pesar de menor abundancia (9 avistamientos), 
                su estatus EN y 75% de vuelos a altura de riesgo justifican prioridad alta.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="font-bold text-red-600">4.</div>
              <div>
                <strong>Buitre leonado (2.250):</strong> Aunque LC, su papel funcional clave como carroñero 
                y la estimación de 2-12 bajas/año (impacto SEVERO) elevan su importancia.
              </div>
            </div>
            <div className="mt-4 pt-4 border-t-2 border-red-300">
              <strong>Resultado final:</strong> El proyecto presenta impactos críticos sobre 2 especies EN 
              y altos sobre 3 especies VU, además de comprometer la integridad y conectividad de Red Natura 2000. 
              <strong className="text-red-700"> La DIA desfavorable está plenamente justificada desde el enfoque de priorización.</strong>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-sm text-slate-500">
          <p>Análisis basado en Resolución INAGA 500201/01/2022/04936 (16 enero 2023)</p>
          <p>Cálculos realizados con marco metodológico conceptual</p>
        </div>
      </div>
    </div>
  );
};

export default SpeciesIndexCalculator;




//Suponer que se plantean medidas compensatorias para todas y cada una de las especies. A partir de qué umbral sería el proyecto favorable? https://claude.ai/public/artifacts/0c9a011a-1e11-47aa-9db6-a9a38ccf9899





import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, TrendingDown, Shield, AlertTriangle } from 'lucide-react';

const CompensationSimulator = () => {
  const [compensationLevels, setCompensationLevels] = useState({
    1: 0, // Alondra de Dupont
    2: 0, // Milano real
    3: 0, // Ganga ortega
    4: 0, // Alimoche
    5: 0, // Aguilucho cenizo
    6: 0  // Buitre leonado
  });

  const species = [
    {
      id: 1,
      name: "Alondra de Dupont",
      scientific: "Chersophilus duponti",
      baseScore: 3.520,
      threshold: 2.5,
      legalStatus: "EN",
      criticalIssues: [
        "9 aerogeneradores en área con 21 territorios",
        "Especie En Peligro de Extinción",
        "Fragmentación de hábitat crítico",
        "Incompatible con Plan de Recuperación futuro"
      ],
      possibleCompensations: [
        { name: "Restauración hábitat estepario (50 ha)", reduction: 0.3 },
        { name: "Eliminación cercados ganaderos (20 km)", reduction: 0.2 },
        { name: "Control depredadores en áreas críticas", reduction: 0.15 },
        { name: "Reubicación 6 de 9 aerogeneradores fuera zona crítica", reduction: 0.8 },
        { name: "Creación corredor ecológico entre ZEPAs", reduction: 0.25 }
      ],
      hardLimits: [
        "LÍMITE LEGAL: Especie EN requiere garantía de no afección al estado de conservación",
        "LÍMITE TÉCNICO: Imposible compensar fragmentación de 21 territorios",
        "LÍMITE ESPACIAL: Sin alternativa de reubicación dentro de poligonal"
      ],
      compensationViability: "INVIABLE"
    },
    {
      id: 2,
      name: "Milano real",
      scientific: "Milvus milvus",
      baseScore: 2.933,
      threshold: 2.5,
      legalStatus: "EN",
      criticalIssues: [
        "75% vuelos a altura de riesgo",
        "Especie En Peligro de Extinción",
        "0.01-0.05 bajas/año estimadas",
        "Población europea en declive crítico"
      ],
      possibleCompensations: [
        { name: "Sistemas disuasión de aves (DTBird)", reduction: 0.4 },
        { name: "Parada preventiva en periodos críticos", reduction: 0.5 },
        { name: "Mejora hábitats de cría a 5-10 km", reduction: 0.2 },
        { name: "Programa cría en cautividad + reintroducción", reduction: 0.3 }
      ],
      hardLimits: [
        "LÍMITE LEGAL: Especie EN con mortalidad adulta no compensable",
        "LÍMITE BIOLÓGICO: Baja tasa reproductiva (no compensa mortalidad)",
        "LÍMITE DE EFICACIA: Sistemas disuasión solo 50-70% efectivos"
      ],
      compensationViability: "MUY DIFÍCIL"
    },
    {
      id: 3,
      name: "Ganga ortega",
      scientific: "Pterocles orientalis",
      baseScore: 2.894,
      threshold: 2.5,
      legalStatus: "VU",
      criticalIssues: [
        "Especie objetivo de ZEPA",
        "Conectividad entre ZEPAs comprometida",
        "Especialista extremo de hábitat"
      ],
      possibleCompensations: [
        { name: "Creación/mejora bebederos (10 unidades)", reduction: 0.3 },
        { name: "Manejo agrícola favorable (100 ha)", reduction: 0.4 },
        { name: "Control depredadores", reduction: 0.15 },
        { name: "Corredores ecológicos entre ZEPAs", reduction: 0.35 }
      ],
      hardLimits: [
        "LÍMITE LEGAL: Afección a objetivos de conservación ZEPA",
        "LÍMITE ESPACIAL: Corredor comprometido por ubicación del parque"
      ],
      compensationViability: "DIFÍCIL"
    },
    {
      id: 4,
      name: "Alimoche común",
      scientific: "Neophron percnopterus",
      baseScore: 2.733,
      threshold: 2.5,
      legalStatus: "VU",
      criticalIssues: [
        "13 avistamientos",
        "Muy sensible a mortalidad adulta",
        "Migrador transahariano en declive"
      ],
      possibleCompensations: [
        { name: "Paradas preventivas durante migración", reduction: 0.4 },
        { name: "Sistemas detección y disuasión", reduction: 0.3 },
        { name: "Mejora muladares y zonas alimentación", reduction: 0.25 },
        { name: "Seguimiento GPS de población local", reduction: 0.1 }
      ],
      hardLimits: [
        "LÍMITE BIOLÓGICO: 1 pollo cada 2-3 años (no compensa mortalidad adulta)",
        "LÍMITE TEMPORAL: Migración en amplios frentes (difícil predecir paso)"
      ],
      compensationViability: "MODERADA"
    },
    {
      id: 5,
      name: "Aguilucho cenizo",
      scientific: "Circus pygargus",
      baseScore: 2.700,
      threshold: 2.5,
      legalStatus: "VU",
      criticalIssues: [
        "Especie objetivo ZEPAs",
        "9 de 12 aerogeneradores en ámbito Plan Conservación",
        "Nidifica en suelo (vulnerable)"
      ],
      possibleCompensations: [
        { name: "Protección nidos en cultivos (20 nidos/año)", reduction: 0.5 },
        { name: "Creación hábitat de nidificación (50 ha)", reduction: 0.3 },
        { name: "Paradas en periodo de reproducción", reduction: 0.4 },
        { name: "Manejo agrícola compatible", reduction: 0.25 }
      ],
      hardLimits: [
        "LÍMITE ESPACIAL: Nidifica dentro del área de afección"
      ],
      compensationViability: "MODERADA-ALTA"
    },
    {
      id: 6,
      name: "Buitre leonado",
      scientific: "Gyps fulvus",
      baseScore: 2.250,
      threshold: 2.5,
      legalStatus: "LC",
      criticalIssues: [
        "2-12 bajas/año estimadas (SEVERO)",
        "Impacto acumulativo con otros parques"
      ],
      possibleCompensations: [
        { name: "Sistema DTBird última generación", reduction: 0.5 },
        { name: "Paradas preventivas por observación", reduction: 0.4 },
        { name: "Mejora muladares (3 nuevos)", reduction: 0.2 },
        { name: "Señalización cables (zona evacuación)", reduction: 0.15 }
      ],
      hardLimits: [
        "LÍMITE ACUMULATIVO: Debe considerarse mortalidad de otros parques zona",
        "LÍMITE BIOLÓGICO: 1 pollo/año (mortalidad de 6-12 adultos no compensable)"
      ],
      compensationViability: "ALTA"
    }
  ];

  const calculateAdjustedScore = (sp) => {
    const level = compensationLevels[sp.id];
    const maxReduction = sp.possibleCompensations.reduce((sum, c) => sum + c.reduction, 0);
    const appliedReduction = (level / 100) * maxReduction;
    return Math.max(0, sp.baseScore - appliedReduction);
  };

  const isProjectViable = () => {
    // Criterio 1: Todas las especies deben bajar del umbral 2.5
    const allBelowThreshold = species.every(sp => calculateAdjustedScore(sp) < sp.threshold);
    
    // Criterio 2: Especies EN deben bajar a menos de 2.0 (criterio más estricto)
    const enSpeciesOk = species
      .filter(sp => sp.legalStatus === "EN")
      .every(sp => calculateAdjustedScore(sp) < 2.0);
    
    // Criterio 3: No puede haber ninguna especie inviable de compensar
    const noInviableSpecies = !species.some(sp => 
      sp.compensationViability === "INVIABLE" && compensationLevels[sp.id] < 100
    );
    
    return { allBelowThreshold, enSpeciesOk, noInviableSpecies };
  };

  const viability = isProjectViable();
  const projectStatus = viability.allBelowThreshold && viability.enSpeciesOk && viability.noInviableSpecies;

  const getScoreColor = (score, threshold) => {
    if (score >= threshold) return "text-red-600";
    if (score >= threshold - 0.5) return "text-orange-600";
    return "text-green-600";
  };

  const getViabilityColor = (viab) => {
    if (viab === "INVIABLE") return "bg-red-100 border-red-400 text-red-900";
    if (viab === "MUY DIFÍCIL") return "bg-orange-100 border-orange-400 text-orange-900";
    if (viab === "DIFÍCIL") return "bg-yellow-100 border-yellow-400 text-yellow-900";
    if (viab === "MODERADA") return "bg-blue-100 border-blue-400 text-blue-900";
    return "bg-green-100 border-green-400 text-green-900";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Simulador de Medidas Compensatorias
              </h1>
              <p className="text-slate-600 mb-4">
                Ajusta el nivel de compensación para cada especie y observa si el proyecto podría ser viable
              </p>
              
              {/* Estado del proyecto */}
              <div className={`p-4 rounded-lg border-2 ${
                projectStatus 
                  ? 'bg-green-50 border-green-400' 
                  : 'bg-red-50 border-red-400'
              }`}>
                <div className="flex items-center gap-3">
                  {projectStatus ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                  <div>
                    <div className="font-bold text-lg">
                      {projectStatus ? "PROYECTO POTENCIALMENTE VIABLE" : "PROYECTO NO VIABLE"}
                    </div>
                    <div className="text-sm mt-1">
                      {!viability.noInviableSpecies && "❌ Alondra de Dupont sin compensación viable al 100%"}
                      {!viability.enSpeciesOk && viability.noInviableSpecies && "❌ Especies EN por encima de umbral 2.0"}
                      {!viability.allBelowThreshold && viability.enSpeciesOk && viability.noInviableSpecies && "❌ Algunas especies por encima de umbral 2.5"}
                      {projectStatus && "✓ Todas las especies cumplen umbrales mínimos"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Umbrales de viabilidad */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Criterios de Viabilidad del Proyecto</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg border-2 ${
              viability.noInviableSpecies ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'
            }`}>
              <div className="font-bold mb-2">1. Especies Inviables</div>
              <div className="text-sm">
                Alondra de Dupont debe tener compensación al 100% (imposible técnicamente)
              </div>
              <div className="mt-2 font-bold">
                {viability.noInviableSpecies ? "✓ Cumple" : "✗ No cumple"}
              </div>
            </div>
            
            <div className={`p-4 rounded-lg border-2 ${
              viability.enSpeciesOk ? 'bg-green-50 border-green-400' : 'bg-orange-50 border-orange-400'
            }`}>
              <div className="font-bold mb-2">2. Especies EN</div>
              <div className="text-sm">
                Alondra y Milano deben reducirse por debajo de 2.0 (criterio estricto)
              </div>
              <div className="mt-2 font-bold">
                {viability.enSpeciesOk ? "✓ Cumple" : "✗ No cumple"}
              </div>
            </div>
            
            <div className={`p-4 rounded-lg border-2 ${
              viability.allBelowThreshold ? 'bg-green-50 border-green-400' : 'bg-yellow-50 border-yellow-400'
            }`}>
              <div className="font-bold mb-2">3. Umbral General</div>
              <div className="text-sm">
                Todas las especies deben estar por debajo de 2.5
              </div>
              <div className="mt-2 font-bold">
                {viability.allBelowThreshold ? "✓ Cumple" : "✗ No cumple"}
              </div>
            </div>
          </div>
        </div>

        {/* Especies */}
        {species.map((sp) => {
          const adjustedScore = calculateAdjustedScore(sp);
          const reduction = sp.baseScore - adjustedScore;
          const isViable = adjustedScore < sp.threshold;
          
          return (
            <div key={sp.id} className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{sp.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      sp.legalStatus === "EN" ? "bg-red-200 text-red-900" : "bg-orange-200 text-orange-900"
                    }`}>
                      {sp.legalStatus}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getViabilityColor(sp.compensationViability)}`}>
                      {sp.compensationViability}
                    </span>
                  </div>
                  <div className="text-sm italic text-slate-600">{sp.scientific}</div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-slate-600 mb-1">Índice de Prioridad</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-slate-400 line-through">
                      {sp.baseScore.toFixed(3)}
                    </span>
                    <TrendingDown className="w-5 h-5 text-blue-600" />
                    <span className={`text-3xl font-bold ${getScoreColor(adjustedScore, sp.threshold)}`}>
                      {adjustedScore.toFixed(3)}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Reducción: {reduction.toFixed(3)} ({((reduction/sp.baseScore)*100).toFixed(1)}%)
                  </div>
                  <div className={`text-sm font-bold mt-2 ${isViable ? 'text-green-600' : 'text-red-600'}`}>
                    {isViable ? `✓ Bajo umbral (${sp.threshold})` : `✗ Sobre umbral (${sp.threshold})`}
                  </div>
                </div>
              </div>

              {/* Slider de compensación */}
              <div className="mb-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-slate-700">
                    Nivel de Compensación: {compensationLevels[sp.id]}%
                  </label>
                  <span className="text-sm text-slate-600">
                    Reducción máxima posible: {sp.possibleCompensations.reduce((s, c) => s + c.reduction, 0).toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={compensationLevels[sp.id]}
                  onChange={(e) => setCompensationLevels({
                    ...compensationLevels,
                    [sp.id]: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Medidas compensatorias posibles */}
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Medidas Compensatorias Posibles
                </h4>
                <div className="space-y-1">
                  {sp.possibleCompensations.map((comp, idx) => {
                    const isActive = compensationLevels[sp.id] > 0;
                    return (
                      <div key={idx} className={`text-sm p-2 rounded ${isActive ? 'bg-green-50' : 'bg-slate-50'}`}>
                        <span className="font-medium">{comp.name}</span>
                        <span className="text-slate-600 ml-2">(reduce hasta {comp.reduction.toFixed(2)})</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Límites técnicos y legales */}
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  Límites Insalvables
                </h4>
                <div className="space-y-1">
                  {sp.hardLimits.map((limit, idx) => (
                    <div key={idx} className="text-sm p-2 bg-red-50 rounded border-l-4 border-red-400">
                      {limit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Problemas críticos */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  Impactos Críticos Detectados
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  {sp.criticalIssues.map((issue, idx) => (
                    <li key={idx}>{issue}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Conclusión final */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Conclusión del Análisis de Compensación</h2>
          <div className="space-y-3 text-slate-200">
            <div className="flex gap-3">
              <div className="font-bold text-yellow-400">⚠️</div>
              <div>
                <strong className="text-white">Alondra de Dupont (EN):</strong> Compensación técnicamente INVIABLE. 
                No existe alternativa de reubicación que evite los 21 territorios. La fragmentación de hábitat de una 
                especie En Peligro de Extinción no es compensable según la normativa vigente.
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="font-bold text-yellow-400">⚠️</div>
              <div>
                <strong className="text-white">Milano real (EN):</strong> Reducción posible a 1.467 con compensación al 100%, 
                pero requiere medidas extremas (paradas preventivas 6 meses/año). Económicamente inviable.
              </div>
            </div>

            <div className="flex gap-3">
              <div className="font-bold text-green-400">✓</div>
              <div>
                <strong className="text-white">Especies VU y LC:</strong> Compensación técnicamente posible si se implementan 
                al 70-80% las medidas propuestas. Buitre leonado, Aguilucho cenizo y Alimoche podrían reducirse bajo umbral 2.0.
              </div>
            </div>

            <div className="mt-4 pt-4 border-t-2 border-slate-600">
              <strong className="text-yellow-300 text-lg">CONCLUSIÓN FINAL:</strong>
              <p className="mt-2">
                El proyecto es <strong className="text-red-400">INVIABLE incluso con máximas compensaciones</strong> por la 
                presencia de Alondra de Dupont (EN) en el área crítica. La legislación española y europea no permite la 
                destrucción de hábitat crítico de especies En Peligro de Extinción mediante compensación, especialmente 
                cuando existe un futuro Plan de Recuperación que considera esta área como esencial.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Umbral teórico mínimo para viabilidad: Alondra &lt; 2.0 + Milano &lt; 2.0 + Resto &lt; 2.5 → 
                Requeriría eliminar 6 de 9 aerogeneradores de zona crítica = proyecto no rentable.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>Simulación basada en Resolución INAGA 500201/01/2022/04936 (16 enero 2023)</p>
          <p>Los umbrales y límites reflejan normativa de conservación española y Directiva Hábitats</p>
        </div>
      </div>
    </div>
  );
};

export default CompensationSimulator;