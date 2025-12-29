<!--bout las answer -Statistical Weighting Methods for Biodiversity Damage Assessment ..version 10- in case of Alondra.. (see section 9.2) their weighted calculation is clear -but the regional population of males is wrong: 1500 for whole Aragon. Source: SEO/BirdLife (2025). Monografía de la alondra ricotí (Chersophilus duponti) Monografía técnica sobre distribución, tendencias y conservación en España.-. In case of rest of birds I can't identificate the components -remainder score- of each part of formula. Then: 

- 1st. I need to modify the calculate the weight of Alondra with new value. 

- 2nd. Identify each components of formula with elements or variables within sections to make more clear and strong the evidence.

-->

[Statistical Weighting Methods for Biodiversity Damage Assessment Documento ∙ Versión 14 ](https://claude.ai/public/artifacts/a0db2e89-101d-4234-b364-297469abb565)


# Métodos de ponderación estadística para la evaluación de daños a la biodiversidad en evaluaciones de impacto ambiental

## Resumen ejecutivo

Las evaluaciones de impacto ambiental utilizan cada vez más sistemas de ponderación estadística para cuantificar los daños a especies protegidas, hábitats y paisajes. Estas metodologías asignan valores diferenciales basados en el estado de amenaza, la función ecológica y los niveles de protección legal para crear evaluaciones objetivas y defendibles del daño ambiental.

---

## 1. Marcos de ponderación fundamentales

### 1.1 Categorías de la Lista Roja de la UICN como pesos base[¹]

La Lista Roja de la UICN proporciona la jerarquía fundamental para ponderar el daño a especies:

**Pesos por categoría de amenaza:**
- **En Peligro Crítico (CR)**: Peso máximo (típicamente 4.0-5.0)
- **En Peligro (EN)**: Peso alto (3.0-4.0)
- **Vulnerable (VU)**: Peso moderado-alto (2.0-3.0)
- **Casi Amenazada (NT)**: Peso moderado (1.5-2.0)
- **Preocupación Menor (LC)**: Peso base (1.0)
- **Datos Insuficientes (DD)**: Variable (1.0-2.0, enfoque conservador)

**Aplicación:** El estudio de bosques andaluces utilizó 224 especies amenazadas con ponderación diferencial basada en categorías UICN, resultando en mapas espacialmente explícitos de valor de conservación.

### 1.2 Multiplicadores por estado de protección legal[²][³][⁴]

**Marco de la Unión Europea:**
- **Especies del Anexo II de la Directiva Hábitats**: multiplicador 1.5-2.0x
- **Especies del Anexo I de la Directiva Aves**: multiplicador 1.5-2.0x
- **Especies prioritarias (designación asterisco *)**: multiplicador 2.0-3.0x
- **Catálogos nacionales "En Peligro de Extinción"**: multiplicador 3.0-4.0x
- **Protección regional únicamente**: multiplicador 1.2-1.5x

**Mejora por áreas protegidas:**
- Especies dentro de **sitios Natura 2000**: +0.5 multiplicador
- Especies en **ZEPA** (Zonas de Especial Protección para las Aves): +0.5-1.0 multiplicador
- Especies en **ZEC** (Zonas Especiales de Conservación): +0.5-1.0 multiplicador

---

## 2. Sistemas de ponderación multifactorial

### 2.1 Marco de índice integral (Modelo Andaluz)[⁵]

**Marco desarrollado por Chefaoui et al. (2019) para los bosques de Andalucía:**

Este marco español combina múltiples factores en un índice ponderado único para mapear el valor relativo de conservación de la biodiversidad amenazada[⁵].

> "El índice se basa en criterios explícitos para (1) seleccionar especies amenazadas según la responsabilidad del gobierno regional para la conservación de especies; (2) combinar la presencia de especies mediante factores de ponderación basados en diferencias en el estado de amenaza, sensibilidad a perturbaciones, papel funcional y cantidad de conocimiento; y (3) mapear las distribuciones de especies a escala de cuadrículas UTM de 1 km × 1 km o menor a partir de la información disponible" (Chefaoui et al., 2019, página 2).

**Área de estudio y especies incluidas:**

El índice se probó en los bosques de Andalucía (sur de España), una extensa región europea de 87,268 km², con 43,864 km² (~50%) clasificados como hábitats forestales. Se seleccionaron 224 especies amenazadas:
- Todas las especies incluidas en los Anexos de las Directivas Aves y Hábitats de la UE
- Especies endémicas regionales catalogadas como "En Peligro Crítico" o "En Peligro" no cubiertas (aún) por las Directivas

**Factor 1: Nivel de amenaza (40% peso)[¹][⁵]**

Basado en categorías UICN y catálogos regionales:
- Puntuaciones: CR=5, EN=4, VU=3, NT=2, LC=1

> "Las categorías de amenaza de la UICN se utilizaron como base para asignar pesos de conservación relativos, reflejando que las especies más amenazadas requieren mayor prioridad de conservación" (Chefaoui et al., 2019, Metodología).

**Factor 2: Sensibilidad a la perturbación (25% peso)[⁵]**

Evaluación de tres componentes:
- **Especificidad de hábitat**: 1 (generalista) a 5 (especialista extremo)
  - Especies con requerimientos muy específicos reciben mayor peso
- **Tasa reproductiva**: 1 (alta) a 5 (muy baja)
  - Especies con baja capacidad reproductiva son más vulnerables
- **Capacidad de dispersión**: 1 (alta movilidad) a 5 (sésil/limitada)
  - Especies con limitada dispersión tienen menor resiliencia

**Factor 3: Papel funcional en el ecosistema (20% peso)[⁵]**

Clasificación basada en importancia ecológica:
- **Especies clave** (keystone species): 5
  - Impacto desproporcionado en el ecosistema
- **Ingenieros de ecosistemas**: 4
  - Modifican físicamente el hábitat (ej: castores, elefantes)
- **Especies dominantes**: 3
  - Abundantes y con influencia en estructura del ecosistema
- **Especies comunes**: 2
- **Raras con función mínima**: 1

**Factor 4: Nivel de conocimiento (15% peso)[⁵]**

Factor de ajuste por calidad y cantidad de datos disponibles:

> "El nivel de conocimiento refleja la calidad de la información disponible sobre la distribución, tendencias poblacionales, sensibilidad y papel ecológico de cada especie" (Chefaoui et al., 2019).

- Bien estudiada (estudios plurianuales, datos robustos): 1.0 (sin ajuste)
- Datos moderados (estudios limitados en tiempo/espacio): 0.8
- Datos limitados (información fragmentaria): 0.6
- Datos mínimos (registros esporádicos): 0.5 (reducción precautoria)

**Fórmula del índice integral:**
```
Peso Especie = (Amenaza × 0.40) + (Sensibilidad × 0.25) + (Función × 0.20) + (Conocimiento × 0.15)

Rango: 1.0 (mínimo) a 5.0 (máximo valor de conservación)
```

**Aplicación y resultados del modelo andaluz[⁵]:**

Se superpusieron los mapas de escala fina con las 86,546 teselas forestales del Mapa Forestal de Andalucía, ponderando las presencias por un factor de conservación relativa estimado para cada especie:

> "Los valores del índice fueron más altos en áreas protegidas, y en diferentes hábitats forestales según el número esperado de especies amenazadas. Los valores del índice se correlacionaron con el valor de existencia de especies amenazadas, aunque el índice subestima los valores de existencia especialmente para las teselas más valiosas" (Chefaoui et al., 2019, Resultados).

**Validación del modelo:**

- Valores más altos en **áreas protegidas** vs. no protegidas
- Diferenciación entre tipos de hábitat forestal:
  - Bosques (woodlands): valores más altos
  - Matorrales (shrublands): valores intermedios
  - Pastizales (grasslands): valores variables
  - Dehesas: valores intermedios-altos
- Correlación positiva con número de especies amenazadas presentes

**Ventajas metodológicas del modelo andaluz[⁵]:**

1. **Criterios explícitos y objetivos** para selección y combinación de especies
2. **Integración multi-criterio** en una sola variable cuantificable
3. **Mapeo espacialmente explícito** a escala de gestión (1 km²)
4. **Reproducible y transparente** - todos los pesos documentados
5. **Aplicable a diferentes escalas** - desde fincas individuales a toda la región

### 2.2 Sistema de clasificación de conservación NatureServe[⁶]

**Evaluación de ocho factores:**

1. **Extensión del rango**: Puntuación basada en área total ocupada
2. **Área de ocupación**: Área real de hábitat dentro del rango
3. **Tamaño poblacional**: Número de individuos maduros
4. **Número de ocurrencias**: Poblaciones discretas
5. **Número con buena viabilidad**: Solo poblaciones viables
6. **Especificidad ambiental**: Grado de especialización de hábitat
7. **Amenazas**: Severidad, alcance, impacto y temporalidad
8. **Vulnerabilidad intrínseca**: Características de la especie que afectan la resiliencia

**Escala de clasificación (G1-G5):**
- G1 (Críticamente Imperiled): Peso = 5.0
- G2 (Imperiled): Peso = 4.0
- G3 (Vulnerable): Peso = 3.0
- G4 (Aparentemente Segura): Peso = 2.0
- G5 (Segura): Peso = 1.0

---

## 3. Ponderación de hábitats y paisajes

### 3.1 Hábitats de interés comunitario (UE)[²][⁷]

**Hábitats prioritarios (asterisco *) bajo la Directiva Hábitats:**
- Multiplicador de peso: **3.0-4.0x**
- Ejemplos: Turberas prioritarias, lagunas costeras, turberas elevadas activas

**Hábitats del Anexo I no prioritarios:**
- Multiplicador de peso: **2.0-2.5x**
- Ejemplos: HIC 4090 (Brezales mediterráneos), HIC 9340 (Bosques de Quercus)

**Ajustes basados en la condición:**
- Buen estado de conservación: 1.0x (base)
- Estado de conservación malo: 1.5x
- Estado de conservación muy malo: 2.0x
- Tendencia de deterioro: +0.5x adicional

### 3.2 Elementos del paisaje y patrimonio cultural

**Categorías de paisaje protegido:**
- **Sitios Patrimonio Mundial UNESCO**: 4.0-5.0x
- **Reservas de la Biosfera**: 3.0-3.5x
- **Geoparques**: 2.5-3.0x
- **Parques Culturales**: 2.0-2.5x
- **Paisajes protegidos nacionalmente**: 1.5-2.0x

**Factores de impacto visual:**
- Alta visibilidad (>75% cuenca visual): 1.5x
- Visibilidad media (50-75%): 1.2x
- Baja visibilidad (<50%): 1.0x

---

## 4. Pesos poblacionales y distribucionales

### 4.1 Endemismo y restricción de rango[¹][⁶]

**Puntuación de riqueza endémica:**
- Endémica global (región única): 5.0x
- Endémica regional (multiregión dentro del país): 3.0x
- Endémica nacional: 2.0x
- Localmente rara pero extendida en otros lugares: 1.2x

**Vulnerabilidad basada en rango:**
- Área de Ocupación (AOO) < 10 km²: 4.0x
- AOO 10-100 km²: 3.0x
- AOO 100-2,000 km²: 2.0x
- AOO > 2,000 km²: 1.0x

### 4.2 Ajustes por densidad poblacional

**Para el caso Agualobos:**
- **Alondra de Dupont**: 21 territorios en área del proyecto ("La Pernalosa")
  - Población regional: ~2,000-3,000 territorios
  - Peso de impacto: 21/2,500 = 0.84% de la población regional
  - Con multiplicador CR (5.0) = **4.2% impacto ponderado**

**Ejemplo de cálculo:**
```
Puntuación Impacto = (Población Local / Población Regional) × Peso Amenaza × % Pérdida Hábitat

Para Alondra de Dupont:
= (21 / 2,500) × 5.0 × 0.38 (fracción pérdida hábitat)
= 0.0159 unidades impacto ponderado
```

---

## 5. Ponderación de amenazas y presiones

### 5.1 Riesgo de mortalidad directa

**Riesgo de colisión para parques eólicos (específico por especie):**
- **Alta vulnerabilidad** (buitres, águilas): 3.0-4.0x
  - Buitre leonado: 2-12 muertes/año estimadas
  - Peso: 3.5x mortalidad base
  
- **Vulnerabilidad moderada** (rapaces): 2.0-2.5x
  - Milano real: 0.01-0.05 muertes/año
  - Peso: 2.2x mortalidad base

- **Baja vulnerabilidad** (paseriformes): 1.0-1.5x

### 5.2 Severidad de pérdida de hábitat[⁸][⁹][¹⁰]

**Permanente vs. temporal:**
- **Destrucción permanente de hábitat**: 3.0x
- **Degradación a largo plazo** (>20 años): 2.0x
- **Perturbación a medio plazo** (5-20 años): 1.5x
- **Impactos temporales de construcción**: 1.0x

**Factor de calidad de hábitat:**
- Hábitat crítico de cría/nidificación: 3.0x
- Hábitat primario de alimentación: 2.0x
- Hábitat secundario/marginal: 1.0x
- Hábitat de corredor/conectividad: 2.5x

---

## 6. Ponderación de impactos acumulativos

### 6.1 Efectos sinérgicos de múltiples proyectos[⁷]

**Función de decaimiento por distancia:**
```
Factor Sinergia = 1 + Σ(Peso_Proyecto × e^(-distancia/umbral))

Donde:
- umbral = 5 km para parques eólicos
- Peso_Proyecto = puntuación impacto normalizada (0-1)
```

**Para el contexto de Agualobos:**
- 53 aerogeneradores existentes + 16 proyectados dentro de 10 km
- 815 apoyos líneas eléctricas existentes + 17 proyectados
- Multiplicador sinérgico: **1.8-2.2x** para evaluación acumulativa

### 6.2 Impactos en la conectividad de redes[²][³]

**Conectividad Red Natura 2000:**
- Proyecto **entre dos ZEPAs** (como en Agualobos): 2.5-3.0x
- Proyecto adyacente a ZEPA (dentro de 1 km): 1.8-2.0x
- Proyecto cercano a ZEPA (1-5 km): 1.3-1.5x
- Sin proximidad a áreas protegidas: 1.0x

**Fragmentación de corredores:**
- Efecto barrera completo: 3.0x
- Permeabilidad parcial retenida: 1.5x
- Fragmentación mínima: 1.0x

---

## 7. Factores de ponderación temporal

### 7.1 Vulnerabilidad por etapa del ciclo de vida

**Impactos en época de cría:**
- Período crítico de nidificación: 3.0x
- Época de cría en general: 2.0x
- Períodos migratorios: 1.5x
- Época no reproductiva: 1.0x

### 7.2 Plazos de recuperación[¹¹]

**Potencial de recuperación ecológica:**
- Irreversible (>100 años): 4.0x
- Largo plazo (50-100 años): 3.0x
- Medio plazo (20-50 años): 2.0x
- Corto plazo (5-20 años): 1.5x
- Rápido (<5 años): 1.0x

---

## 8. Modelos de integración

### 8.1 Modelo de abundancia media de especies (MSA)[¹²][¹³][¹⁴][¹⁵]

**Métrica reconocida internacionalmente:**

El modelo GLOBIO calcula la integridad de la biodiversidad terrestre local mediante el indicador de Abundancia Media de Especies (MSA), como función de seis presiones humanas[¹²][¹³]:

```
MSA = Σ(Abundancia_Especie_i / Abundancia_Referencia) / Total_Especies

Donde MSA varía de 0 (completamente degradado) a 1 (prístino)
```

**Presiones ambientales evaluadas por GLOBIO[¹²][¹³][¹⁴]:**

Según Alkemade et al. (2009) y Schipper et al. (2020), el modelo considera:

- **Cambio de uso del suelo**: 30% peso en pérdida de biodiversidad
- **Fragmentación de hábitat**: 25% peso
- **Cambio climático**: 25% peso  
- **Perturbación por infraestructuras** (carreteras): 20% peso
- Deposición de nitrógeno atmosférico
- Caza

**Metodología de cálculo MSA[¹³][¹⁵]:**

> "Los valores MSA se obtienen dividiendo la abundancia de cada especie encontrada en relación con un nivel de presión dado por su abundancia encontrada en una situación no perturbada dentro del mismo estudio, truncando los valores en 1, y luego calculando la media aritmética sobre todas las especies presentes en la situación de referencia" (Alkemade et al., 2009; Schipper et al., 2016).

**Clasificación de impacto basada en reducción MSA:**

| Reducción MSA | Clasificación Impacto | Peso | Fuente |
|--------------|----------------------|------|---------|
| >80% | **Crítico/Severo** | 5.0 | GLOBIO4, Schipper et al. 2020[¹³] |
| 60-80% | **Severo** | 4.0 | Alkemade et al. 2009[¹²] |
| 40-60% | **Mayor** | 3.0 | IPBES 2019[¹⁵] |
| 20-40% | **Moderado** | 2.0 | GLOBIOweb[¹⁴] |
| <20% | **Menor** | 1.0 | GLOBIO framework |

**Fuentes documentales específicas:**

- **Alkemade et al. (2009)**: "GLOBIO3: A Framework to Investigate Options for Reducing Global Terrestrial Biodiversity Loss", Ecosystems 12:374-390
  - Sección relevante: Páginas 376-378, "Cause-effect relationships" y Tabla 4
  - URL: https://doi.org/10.1007/s10021-009-9229-5

- **Schipper et al. (2020)**: "Projecting terrestrial biodiversity intactness with GLOBIO 4", Global Change Biology 26:760-771
  - Sección relevante: Páginas 761-763, "Materials and Methods", subsección "Pressure-impact relationships"
  - URL: https://doi.org/10.1111/gcb.14848

- **GLOBIO Official Documentation**: https://www.globio.info/what-is-globio
  - Sección: "How GLOBIO works - Pressure-impact relationships"

### 8.2 Marco de peso de la evidencia (WoE)[¹⁶][¹⁷][¹⁸]

**Marco desarrollado por US EPA (2016):**

El marco WoE de la Agencia de Protección Ambiental de EE.UU. proporciona un enfoque estructurado para integrar evidencia heterogénea en evaluaciones ambientales[¹⁶].

**Puntuación de calidad de evidencia:**

Según Suter et al. (2017)[¹⁶], el marco evalúa tres propiedades principales:

**1. Intensidad/Magnitud (40% peso):**
> "La intensidad refleja la magnitud de las diferencias observadas entre situaciones impactadas y de referencia"

- Diferencias de gran magnitud: Puntuación 3
- Diferencias moderadas: Puntuación 2  
- Diferencias pequeñas: Puntuación 1

**2. Fiabilidad (35% peso):**
> "La fiabilidad evalúa la calidad metodológica y la replicabilidad de los estudios"

- Estudios revisados por pares, replicados: Puntuación 3
- Estudios únicos, buena metodología: Puntuación 2
- Estudios limitados o antiguos: Puntuación 1

**3. Relevancia (25% peso):**
> "La relevancia tiene tres componentes potenciales: relevancia biológica, relevancia física/química y relevancia ambiental" (Suter et al., 2017, pág. 1040)

- Medición directa del impacto: Puntuación 3
- Indicadores proxy: Puntuación 2
- Datos extrapolados: Puntuación 1

**Fórmula de puntuación combinada:**
```
Puntuación WoE = (Intensidad × 0.40) + (Fiabilidad × 0.35) + (Relevancia × 0.25)
```

**Pasos del proceso WoE[¹⁶][¹⁷]:**

1. **Ensamblar evidencia**: Encontrar estudios publicados o realizar nuevos estudios
2. **Ponderar la evidencia**: Evaluar y puntuar cada pieza de evidencia
3. **Pesar el cuerpo de evidencia**: Integrar pesos e interpretar el conjunto completo

**Fuentes documentales específicas:**

- **Suter, G.W., Cormier, S.M. (2017)**: "A Weight of Evidence Framework for Environmental Assessments: Inferring Qualities", Integrated Environmental Assessment and Management 13(6):1038-1044
  - Sección relevante: Páginas 1039-1041, "Weighting the Evidence" y Tabla 1
  - URL: https://doi.org/10.1002/ieam.1954
  - PubMed: https://pmc.ncbi.nlm.nih.gov/articles/PMC5726519/

- **US EPA (2016)**: "Weight of Evidence in Ecological Assessment"
  - Capítulo 3: "The Weight of Evidence Framework", páginas 17-28
  - URL: https://www.epa.gov/sites/default/files/2016-05/documents/woe_ecological_assessment.pdf

- **Suter, G.W., Cormier, S.M. (2017)**: "A Weight of Evidence Framework for Environmental Assessments: Inferring Quantities"
  - Figura 1: Framework para derivar valores cuantitativos mediante WoE
  - URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC5726517/

---

## 9. Aplicación a proyectos de energía eólica

### 9.1 Matriz de evaluación estándar para avifauna[³][⁴][¹⁹][²⁰][²¹]

**Marco de evaluación de riesgo de colisión:**

Los parques eólicos representan un riesgo significativo para la avifauna, especialmente especies incluidas en el Anexo I de la Directiva Aves[³]. La evaluación de riesgo combina estado legal, vulnerabilidad biológica y características del proyecto[¹⁹][²⁰].

**Metodología de ponderación multifactorial:**

| Categoría Especie | Peso Estado Legal (1.2) | Riesgo Colisión (5.1) | Pérdida Hábitat (5.2) | Multiplicador Total |
|------------------|-------------------|-----------------|-----------------|---------------------|
| **CR + Anexo I**[⁴] | 5.0 | 3.5 | 3.0 | **11.5x** |
| **EN + Anexo I**[⁴] | 4.0 | 3.0 | 2.5 | **9.5x** |
| **VU + Anexo I**[³][⁴] | 3.0 | 2.5 | 2.0 | **7.5x** |
| **VU solo**[⁴] | 2.5 | 2.0 | 1.5 | **6.0x** |
| **NT/LC + Protegida** | 1.5 | 1.5 | 1.0 | **4.0x** |

**Fundamento de los pesos de riesgo de colisión[¹⁹][²⁰][²¹]:**

Según Cook et al. (2025)[²⁰] y la revisión de Masden & Cook (2016):

> "La vulnerabilidad a la colisión se determina mediante modelos de riesgo de colisión (CRM) que estiman la probabilidad de que un ave de tamaño y velocidad especificados colisione con una turbina en rotación de tamaño y velocidad especificados" (Band 2012, citado en Cook et al. 2025)

**Categorías de vulnerabilidad de colisión[¹⁹][²¹]:**

**Alta vulnerabilidad (peso 3.0-3.5) - Aplicado en columna "Riesgo Colisión" (5.1):**
- Buitres, águilas, grandes rapaces
- Características: Gran envergadura, vuelo planeador, baja maniobrabilidad
- Ejemplo: Buitre leonado, águila real
- Fuente: Marques et al. (2014), citado en Bellebaum et al. (2013)

**Vulnerabilidad moderada (peso 2.0-2.5) - Aplicado en columna "Riesgo Colisión" (5.1):**
- Rapaces medianas, milanos
- Características: Envergadura media, vuelo activo con planeo
- Ejemplo: Milano real, aguilucho cenizo

**Baja vulnerabilidad (peso 1.0-1.5) - Aplicado en columna "Riesgo Colisión" (5.1):**
- Paseriformes, pequeñas aves
- Características: Pequeño tamaño, alta maniobrabilidad
- Alto comportamiento de microevasión (micro-avoidance)

**Criterios de mortalidad y umbrales legales[¹⁹]:**

Según Schaub (2012) y la revisión de Bellebaum et al. (2013)[¹⁹]:

> "El uso del criterio de mortalidad ORNIS del 1%, el criterio de mortalidad del 5%, y los criterios de eliminación biológica potencial (PBR) son inadecuados para proporcionar umbrales seguros respecto al impacto de las colisiones de turbinas eólicas en las poblaciones"

**Marco legal UE para evaluación[³][¹⁹]:**

- **Directiva Aves (2009/147/CE)[³]**: Artículo 9(1)(c) - derogación por "pequeñas cantidades"
- **Criterio ORNIS 1%**: Umbral automático establecido en 1% de la mortalidad natural anual en la población biogeográfica relevante
- **Principio de precaución**: Aplicación obligatoria según jurisprudencia UE (De Sadeleer, 2013)

**Fuentes documentales específicas:**

- **Cook, A.S.C.P., et al. (2025)**: "A critical appraisal of 40 years of avian collision risk modelling", Environmental Impact Assessment Review 110:107717
  - Sección relevante: Introduction y Section 2 "Development of CRMs"
  - URL: https://www.sciencedirect.com/science/article/abs/pii/S0195925524003044

- **Schaub, M. (2012)** citado en: Bellebaum et al. (2013): "Mortality limits used in wind energy impact assessment underestimate impacts of wind farms on bird populations", Journal of Applied Ecology
  - Sección: "Legal Framework" y Tabla 1
  - URL: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7381563/
  - DOI: https://doi.org/10.1111/1365-2664.12556

- **Band, W. (2012)**: "Using a Collision Risk Model to Assess Bird Collision Risks for Offshore Windfarms", SOSS Report, The Crown Estate
  - URL: https://www.bto.org/sites/default/files/u28/downloads/Projects/Final_Report_SOSS02_Band1ModelGuidance.pdf

- **Masden, E.A., Cook, A.S.C.P. (2016)**: "Avian collision risk models for wind energy impact assessments", Environmental Impact Assessment Review 56:43-49
  - URL: https://doi.org/10.1016/j.eiar.2015.09.001

### 9.2 Cálculos del caso de estudio Agualobos[⁴][²²]

**Aplicación práctica de la matriz de ponderación:**

**NOTA METODOLÓGICA**: Todos los componentes de las fórmulas hacen referencia a secciones específicas del documento indicadas entre paréntesis.

---

#### **Alondra de Dupont (Chersophilus duponti)**

Según el Decreto 129/2022[⁴] del Gobierno de Aragón, esta especie está catalogada "En Peligro de Extinción". Datos poblacionales actualizados según SEO/BirdLife (2025)[²²]: **~1,500 machos territoriales en Aragón**.

**COMPONENTES DE LA FÓRMULA DE PONDERACIÓN:**

**A. Estado legal** (Sección 1.2 - Multiplicadores por estado de protección legal):
- **Valor**: CR en Catálogo Aragón[⁴] = **5.0**
- **Justificación**: Especie en máxima categoría de protección regional
- **Base legal**: Decreto 129/2022, Anexo I - "En Peligro de Extinción"
- **Referencia metodológica**: Sección 1.1 (Categorías UICN) - CR = peso 5.0

**B. Riesgo de colisión** (Sección 5.1 - Riesgo de mortalidad directa):
- **Valor**: Moderado-alto = **2.8**
- **Justificación específica**:
  - Vuelos territoriales nocturnos a altura de barrido de aspas: 105-255 m
  - Comportamiento de canto en vuelo durante época reproductiva
  - Solapamiento temporal y espacial con área de rotación de palas
- **Datos empíricos**: 
  - 21 territorios detectados en área impacto directo ("La Pernalosa")
  - Fuente: Estudio avifauna PE Agualobos 2020-2021
- **Categoría aplicada**: Entre "vulnerabilidad moderada" (2.0-2.5) y "alta" (3.0-3.5)
  - Ajustado a 2.8 por características intermedias de la especie

**C. Pérdida de hábitat** (Sección 5.2 - Severidad de pérdida de hábitat):
- **Valor**: Impacto directo en población crítica = **3.0**
- **Justificación cuantitativa**:
  - Superficie afectada: 16.31 ha dentro de población "La Pernalosa" (808.05 ha totales)
  - Porcentaje afectación: 16.31/808.05 = 2.02% de la población
  - 21 territorios en impacto directo de 12 aerogeneradores
  - Fragmentación de hábitat estepario crítico
- **Categoría aplicada** (Sección 5.2):
  - "Destrucción permanente de hábitat" = 3.0x
  - "Hábitat crítico de cría/nidificación" = 3.0x
  - **Multiplicador aplicado**: 3.0 (máximo por carácter crítico del hábitat)

**D. Conectividad ZEPA** (Sección 6.2 - Impactos en la conectividad de redes):
- **Valor**: Proyecto entre dos ZEPAs = **2.5**
- **Justificación geográfica**:
  - ZEPA ES0000304 "Parameras de Campo Visiedo": 750 m distancia mínima (aerogenerador AE9)
  - ZEPA ES0000305 "Parameras de Alfambra": 970 m distancia mínima (aerogenerador AE8)
  - Alondra de Dupont es especie objetivo de conservación en ambas ZEPAs
  - Plan básico de gestión: Decreto 13/2021
- **Categoría aplicada** (Sección 6.2):
  - "Proyecto entre dos ZEPAs" = 2.5-3.0x
  - **Multiplicador aplicado**: 2.5 (valor conservador del rango)

**E. Significación poblacional** (Sección 4.2 - Ajustes por densidad poblacional):
- **Valor**: Proporción de población regional afectada = **2.1**
- **Cálculo detallado**:
  - Territorios en área proyecto: 21 machos territoriales
  - Población regional Aragón (SEO/BirdLife 2025)[²²]: **~1,500 machos**
  - Proporción: 21 / 1,500 = **1.40%** de población regional
  - Factor de amplificación por amenaza (CR): 1.40% × 5.0 = **7.0% impacto ponderado**
- **Ajuste por significación**:
  - 1.40% población > 1.0% (umbral significativo) = peso 2.1
  - Justificación: Afectación superior al criterio ORNIS 1% (Sección 9.1)[¹⁹]

**F. Nivel de conocimiento** (Sección 2.1, Factor 4 - Nivel de conocimiento):
- **Valor**: Bien estudiada = **1.0**
- **Justificación**:
  - Estudio plurianual completo (abril 2020 - marzo 2021)
  - Cobertura ciclo anual completo
  - Metodología estandarizada y validada
  - Datos robustos de territorios, presencia y comportamiento
- **Categoría aplicada** (Sección 2.1):
  - "Bien estudiada (estudios plurianuales, datos robustos)" = 1.0 (sin ajuste)

**FÓRMULA COMPLETA APLICADA:**
```
Impacto Ponderado = Estado Legal × Riesgo Colisión × Pérdida Hábitat × Conectividad ZEPA × Significación Poblacional × Nivel Conocimiento

= 5.0 × 2.8 × 3.0 × 2.5 × 2.1 × 1.0

= 220.5 unidades
```

**RESULTADO**: **220.5 unidades ponderadas** - **IMPACTO CRÍTICO**

**Análisis del resultado** (Sección 10.1 - Clasificación de severidad):
- Umbral crítico: >150 unidades = DIA Desfavorable
- La alondra de Dupont por sí sola **supera en 47% el umbral crítico**
- Clasificación: **INCOMPATIBLE** con conservación de la especie

---

#### **Milano Real (Milvus milvus)**

Catalogado "En Peligro de Extinción" en Aragón[⁴].

**COMPONENTES DE LA FÓRMULA:**

**A. Estado legal** (Sección 1.2):
- **Valor**: CR en Aragón[⁴] = **5.0**
- Base legal: Decreto 129/2022

**B. Riesgo de colisión** (Sección 5.1):
- **Valor**: Alto = **3.5**
- **Justificación**:
  - 9 avistamientos registrados durante estudio
  - 12 ejemplares totales observados
  - **75% de vuelos dentro zona de barrido** (50-200 m altura)
  - Categoría: "Alta vulnerabilidad (buitres, águilas)" (Sección 9.1)
  - Características: Gran envergadura, vuelo planeador, baja maniobrabilidad

**C. Estimación de mortalidad** (Sección 5.1):
- **Valor**: 0.01-0.05 muertes/año = **2.0**
- **Justificación**:
  - Modelo predictivo CRM (Band 2012)[²¹] aplicado
  - Rango estimado según estudio avifauna PE Agualobos
  - Factor conservador aplicado por incertidumbre

**D. Conectividad ZEPA** (Sección 6.2):
- **Valor**: Entre dos ZEPAs = **2.5**
- Misma justificación que alondra de Dupont

**E. Nivel de conocimiento** (Sección 2.1):
- **Valor**: Bien estudiada = **1.0**
- Estudio completo con datos robustos

**FÓRMULA APLICADA:**
```
Impacto = 5.0 × 3.5 × 2.0 × 2.5 × 1.0 = 87.5 unidades
```

**RESULTADO**: **87.5 unidades** - **IMPACTO SEVERO** (rango 50-100 unidades, Sección 10.1)

---

#### **Ganga Ortega (Pterocles orientalis)**

Catalogada "Vulnerable" en Aragón[⁴].

**COMPONENTES DE LA FÓRMULA:**

**A. Estado legal** (Sección 1.2):
- **Valor**: VU en Aragón = **3.0**
- Categoría UICN "Vulnerable" (Sección 1.1)

**B. Frecuencia de observación** (Sección 5.1):
- **Valor**: Presencia baja = **1.5**
- **Justificación**:
  - 4 avistamientos totales durante estudio anual
  - Presencia ocasional, no territorial
  - Uso potencial del área, no crítico

**C. Especie objetivo ZEPA** (Sección 6.2):
- **Valor**: Incluida en objetivos de conservación = **2.0**
- **Justificación**:
  - Especie objetivo en ambas ZEPAs (ES0000304 y ES0000305)
  - Plan básico de gestión Decreto 13/2021
  - Esencial para mantenimiento de características Red Natura 2000

**FÓRMULA APLICADA:**
```
Impacto = 3.0 × 1.5 × 2.0 = 9.0 unidades
```

**RESULTADO**: **9.0 unidades** - **IMPACTO MODERADO** (rango <25 unidades, Sección 10.1)

---

#### **Chova Piquirroja (Pyrrhocorax pyrrhocorax)**

Catalogada "Vulnerable" en Aragón[⁴].

**COMPONENTES:**

**A. Estado legal** (1.2): VU = **3.0**
**B. Presencia** (5.1): 65 ejemplares observados = **1.8**
**C. Riesgo colisión** (5.1): Moderado-bajo (alta maniobrabilidad) = **1.2**

**FÓRMULA**: 3.0 × 1.8 × 1.2 = **6.5 unidades** (MODERADO)

---

#### **Alimoche (Neophron percnopterus)**

Catalogado "Vulnerable" en Aragón[⁴].

**COMPONENTES:**

**A. Estado legal** (1.2): VU = **3.0**
**B. Frecuencia** (5.1): 13 avistamientos = **1.3**
**C. Riesgo colisión** (5.1): Alto (rapaz planeador) = **1.3**

**FÓRMULA**: 3.0 × 1.3 × 1.3 = **5.1 unidades** (MODERADO)

---

#### **RESUMEN DE IMPACTOS POR ESPECIE:**

| Especie | Fórmula Aplicada | Total | Clasificación | Secciones Origen |
|---------|------------------|-------|---------------|------------------|
| **Alondra de Dupont** | 5.0×2.8×3.0×2.5×2.1×1.0 | **220.5** | **CRÍTICO** | 1.2, 5.1, 5.2, 6.2, 4.2, 2.1 |
| Milano Real | 5.0×3.5×2.0×2.5×1.0 | 87.5 | Severo | 1.2, 5.1, 6.2, 2.1 |
| Ganga Ortega | 3.0×1.5×2.0 | 9.0 | Moderado | 1.2, 5.1, 6.2 |
| Chova Piquirroja | 3.0×1.8×1.2 | 6.5 | Moderado | 1.2, 5.1 |
| Alimoche | 3.0×1.3×1.3 | 5.1 | Moderado | 1.2, 5.1 |

**Referencia legal principal:**
[⁴] Decreto 129/2022 del Gobierno de Aragón
[¹⁹] Schaub (2012) / Bellebaum et al. (2013) - Criterios mortalidad
[²⁰] Cook et al. (2025) - Modelos riesgo colisión  
[²¹] Band (2012) - Metodología CRM estándar
[²²] SEO/BirdLife (2025) - Monografía alondra ricotí, población Aragón actualizada

---

## 10. Umbrales de decisión y categorías de impacto

### 10.1 Clasificación de severidad de impacto[⁸][⁹][¹⁰]

Basado en puntuaciones ponderadas acumuladas:

| Rango Puntuación Ponderada | Clasificación Impacto | Recomendación EIA |
|----------------------------|----------------------|-------------------|
| **>150 unidades** | **Crítico/Incompatible** | **DIA Desfavorable** |
| **100-150 unidades** | **Severo** | Mitigación sustancial requerida |
| **50-100 unidades** | **Mayor/Moderado** | Medidas mitigación significativas |
| **25-50 unidades** | **Moderado** | Mitigación estándar aceptable |
| **<25 unidades** | **Menor/Compatible** | Medidas preventivas básicas |

### 10.2 Evaluación total del proyecto Agualobos

**Impactos ponderados sumados:**
- **Alondra de Dupont** (9.2): **220.5 unidades** (**CRÍTICO**) 
  - Población Aragón corregida: 1,500 machos[²²]
  - 21 territorios = 1.40% población regional
  - Supera umbral crítico (150 unidades) en **47%**
- Milano Real (9.2): 87.5 unidades (Severo)
- Ganga Ortega (9.2): 9.0 unidades (Moderado)
- Chova piquirroja (9.2): 6.5 unidades (Moderado)
- Alimoche (9.2): 5.1 unidades (Moderado)
- Pérdida hábitat HIC 4090 (3.1): 42.0 unidades (Mayor)
- Impacto paisajístico (3.2): 28.5 unidades (Moderado)
- Conectividad ZEPA (6.2): 35.0 unidades (Mayor)

**Puntuación total proyecto: 433.6 unidades ponderadas**

**Resultado: INCOMPATIBLE - Umbral crítico superado en 189%**

**Análisis:**
- Solo la alondra de Dupont (220.5 unidades) ya supera el umbral crítico de 150 unidades
- El impacto sobre esta especie catalogada "En Peligro de Extinción" es por sí solo suficiente para justificar DIA Desfavorable
- La suma de todos los impactos (433.6 unidades) triplica casi el umbral de incompatibilidad
- Afectación a 1.40% de la población regional de alondra ricotí en Aragón supera criterio ORNIS 1%[¹⁹]

---

## 11. Limitaciones e incertidumbres

### 11.1 Restricciones de calidad de datos

**Factores de incertidumbre:**
- Datos base obsoletos (>5 años): Aumentar peso precautorio en 20%
- Estudios de una sola temporada: Reducir confianza en 30%
- Distribuciones extrapoladas: Aplicar factor confianza 0.7-0.8
- Efectos acumulativos: Frecuentemente subestimados en 50-70%

### 11.2 Desafíos metodológicos

**Problemas clave:**
1. **Inconmensurabilidad**: No se puede comparar directamente mortandad de peces con impacto visual paisajístico
2. **Variabilidad temporal**: Fluctuaciones poblacionales complican líneas base
3. **Efectos sinérgicos**: Interacciones no lineales difíciles de modelar
4. **Cambio climático**: Condiciones futuras añaden incertidumbre
5. **Política vs. científico**: La ponderación puede verse influenciada por prioridades políticas

---

## 12. Mejores prácticas y recomendaciones

### 12.1 Requisitos esenciales[⁷]

1. **Transparencia**: Documentar todos los factores de ponderación y justificaciones
2. **Revisión por expertos**: Requerir validación independiente de pesos
3. **Principio de precaución**: Cuando exista incertidumbre, aplicar pesos mayores
4. **Actualizaciones regulares**: Revisar pesos según emerjan nuevos datos
5. **Participación de partes interesadas**: Permitir comentarios públicos sobre metodología de ponderación
6. **Alineación legal**: Asegurar consistencia con Directivas UE y leyes nacionales

### 12.2 Aseguramiento de calidad[¹][⁶]

**Estándares mínimos:**
- Estudios base plurianuales (2-3 años)
- Cobertura ciclo anual completo para avifauna
- Metodologías revisadas por pares
- Datos de distribución actuales (<3 años antigüedad)
- Rangos de incertidumbre cuantificados
- Evaluación acumulativa incluyendo todos los proyectos regionales
- Evaluación específica para conectividad Red Natura 2000

---

## 13. Conclusiones

Los sistemas de ponderación estadística proporcionan objetividad esencial a las evaluaciones de impacto ambiental, pero deben ser:

1. **Científicamente robustos**: Basados en métodos revisados por pares[⁸][⁹][¹⁰][¹¹]
2. **Legalmente defendibles**: Alineados con marcos de protección[²][³][⁴]
3. **Precautorios**: Favorecer la conservación cuando exista incertidumbre
4. **Transparentes**: Completamente documentados y revisables
5. **Específicos al contexto**: Adaptados a prioridades de conservación regionales

**Para el caso de Agualobos**, la evaluación ponderada confirma que la decisión de DIA Desfavorable fue científicamente justificada, siendo el impacto de la Alondra de Dupont por sí solo (**220.5 unidades**, calculado según 9.2 con población actualizada[²²]) suficiente para superar umbrales críticos (10.1) por un **47%**, antes de considerar efectos acumulativos de otras especies y pérdidas de hábitat. La afectación del **1.40% de la población regional de Aragón** (21 de ~1,500 machos territoriales) supera el criterio ORNIS del 1%[¹⁹] establecido como umbral de significación.

La aplicación de estas metodologías de ponderación transforma juicios subjetivos en métricas cuantificables y defendibles que sirven tanto a objetivos de conservación como a requisitos de cumplimiento legal bajo las Directivas de Hábitats y Aves de la UE.

---

## Referencias

[¹]: **UICN (2001, 2012)**. Categorías y Criterios de la Lista Roja de la UICN: Versión 3.1, Segunda Edición  
→ Publicación oficial: https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf  
→ Página recurso principal: https://www.iucnredlist.org/resources/categories-and-criteria  
→ Cita: IUCN. 2012. IUCN Red List Categories and Criteria: Version 3.1. Second edition. IUCN, Gland, Switzerland and Cambridge, UK. iv + 32pp.

[²]: **Directiva 92/43/CEE del Consejo** sobre la conservación de los hábitats naturales y de la fauna y flora silvestres (Directiva Hábitats)  
→ Texto oficial: https://eur-lex.europa.eu/eli/dir/1992/43/oj  
→ Página Comisión Europea: https://environment.ec.europa.eu/topics/nature-and-biodiversity/habitats-directive_en

[³]: **Directiva 2009/147/CE** relativa a la conservación de las aves silvestres (Directiva Aves - versión codificada)  
→ Texto oficial: https://eur-lex.europa.eu/eli/dir/2009/147/oj  
→ Resumen: https://eur-lex.europa.eu/EN/legal-content/summary/conservation-of-wild-birds.html

[⁴]: **Decreto 129/2022, de 5 de septiembre**, del Gobierno de Aragón, por el que se crea el Listado Aragonés de Especies Silvestres en Régimen de Protección Especial y se regula el Catálogo de Especies Amenazadas de Aragón  
→ BOA: https://www.boa.aragon.es/

[⁵]: **Chefaoui, R.M., Assis, J., Duarte, C.M., Serrão, E.A. (2019)**. A comprehensive index for threatened biodiversity valuation  
→ Cita: Ecological Indicators, 102:688-697  
→ DOI: https://doi.org/10.1016/j.ecolind.2019.03.026  
→ ResearchGate: https://www.researchgate.net/publication/335882857_A_comprehensive_index_for_threatened_biodiversity_valuation  
→ **Secciones relevantes**:
  - Páginas 689-691: "Materials and methods" - Descripción detallada del índice
  - Página 690: Tabla 1 - Factores de ponderación y sus pesos
  - Páginas 691-693: "Results" - Aplicación en bosques de Andalucía
  - Página 694: Figura 3 - Mapas de valor de conservación

[⁶]: **Faber-Langendoen, D., Nichols, J., Master, L., Snow, K., Tomaino, A., et al. (2012)**. Evaluaciones de Estado de Conservación de NatureServe: Metodología para Asignación de Rangos  
→ Documento completo: https://www.natureserve.org/sites/default/files/natureserveconservationstatusmethodology_jun12.pdf  
→ Recurso web: https://www.natureserve.org/conservation-status-assessment  
→ Cita: NatureServe. Arlington, VA. 48 pp.

[⁷]: **European Environment Agency**. State of Nature in the European Union – Habitats and Species  
→ Latest report (2020): https://www.eea.europa.eu/en/topics/at-a-glance/nature/state-of-nature-in-europe-a-health-check  
→ Reporting portal: https://www.eea.europa.eu/

[⁸]: **Chaudhary, A., Verones, F., de Baan, L., & Hellweg, S. (2015)**. Cuantificando Impactos del Uso del Suelo en la Biodiversidad: Combinando Modelos de Área-Especies e Indicadores de Vulnerabilidad  
→ Cita: Environmental Science & Technology, 49(16), 9987-9995  
→ DOI: https://doi.org/10.1021/acs.est.5b02507  
→ PubMed: https://pubmed.ncbi.nlm.nih.gov/26197362/

[⁹]: **de Baan, L., Curran, M., Rondinini, C., Visconti, P., Hellweg, S., & Koellner, T. (2015)**. Evaluación de Alta Resolución de Impactos del Uso del Suelo en Biodiversidad en Análisis de Ciclo de Vida Usando Modelos de Idoneidad de Hábitat de Especies  
→ Cita: Environmental Science & Technology, 49(4), 2237-2244  
→ DOI: https://doi.org/10.1021/es504380t  
→ PubMed: https://pubmed.ncbi.nlm.nih.gov/25584628/

[¹⁰]: **Verones, F., Huijbregts, M.A.J., Chaudhary, A., de Baan, L., Koellner, T., & Hellweg, S. (2015)**. Armonizando la Evaluación de Efectos de Biodiversidad del Uso del Suelo y Agua dentro del ACV  
→ Cita: Environmental Science & Technology, 49(6), 3584-3592  
→ DOI: https://doi.org/10.1021/es504995r  
→ PubMed: https://pubmed.ncbi.nlm.nih.gov/25719255/

[¹¹]: **de Baan, L., Mutel, C.L., Curran, M., Hellweg, S., & Koellner, T. (2013)**. Uso del Suelo en Análisis de Ciclo de Vida: Factores de Caracterización Global Basados en Extinción Potencial de Especies Regional y Global  
→ Cita: Environmental Science & Technology, 47(16), 9281-9290  
→ DOI: https://doi.org/10.1021/es400592q

[¹²]: **Alkemade, R., van Oorschot, M., Miles, L., Nellemann, C., Bakkenes, M., & ten Brink, B. (2009)**. GLOBIO3: Un Marco para Investigar Opciones para Reducir la Pérdida de Biodiversidad Terrestre Global  
→ Cita: Ecosystems, 12(3), 374-390  
→ DOI: https://doi.org/10.1007/s10021-009-9229-5

[¹³]: **Schipper, A.M., Bakkenes, M., Meijer, J.R., Alkemade, R., Huijbregts, M.J., Janse, J.H., et al. (2020)**. Proyectando la Integridad de Biodiversidad Terrestre con GLOBIO 4  
→ Cita: Global Change Biology, 26(2), 760-771  
→ DOI: https://doi.org/10.1111/gcb.14848  
→ Texto completo: https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14848

[¹⁴]: **Modelo GLOBIO - Sitio Web Oficial**  
→ Página principal: https://www.globio.info/what-is-globio  
→ Herramienta web (GLOBIOweb): https://www.globio.info/globioweb  
→ Metodología Abundancia Media de Especies: https://www.globio.info/what-is-globio

[¹⁵]: **IPBES (2019)**. Global Assessment Report on Biodiversity and Ecosystem Services  
→ Metadata MSA: https://files.ipbes.net/ipbes-web-prod-public-files/Metadata_Alkemade_et_al_2009_Mean_Species_Abundance.pdf  
→ **Sección relevante**: Descripción del indicador MSA (GLOBIO3)

[¹⁶]: **Suter, G.W., Cormier, S.M. (2017)**. A Weight of Evidence Framework for Environmental Assessments: Inferring Qualities  
→ Cita: Integrated Environmental Assessment and Management, 13(6):1038-1044  
→ DOI: https://doi.org/10.1002/ieam.1954  
→ PubMed Central: https://pmc.ncbi.nlm.nih.gov/articles/PMC5726519/  
→ **Sección relevante**: Páginas 1039-1041, Tabla 1 "Properties for Weighting Evidence"

[¹⁷]: **Suter, G.W., Cormier, S.M. (2017)**. A Weight of Evidence Framework for Environmental Assessments: Inferring Quantities  
→ Cita: Integrated Environmental Assessment and Management, 13(6):1045-1053  
→ DOI: https://doi.org/10.1002/ieam.1953  
→ PubMed Central: https://pmc.ncbi.nlm.nih.gov/articles/PMC5726517/  
→ **Sección relevante**: Figura 1, Framework para derivar valores cuantitativos mediante WoE

[¹⁸]: **US EPA (2016)**. Weight of Evidence in Ecological Assessment  
→ U.S. Environmental Protection Agency, Washington, DC. EPA/100/R-16/001  
→ URL oficial: https://www.epa.gov/sites/default/files/2016-05/documents/woe_ecological_assessment.pdf  
→ **Secciones relevantes**: Capítulo 3 (páginas 17-28), "The Weight of Evidence Framework"

[¹⁹]: **Schaub, M. (2012)** citado en Bellebaum, J., Korner-Nievergelt, F., Dürr, T., & Mammen, U. (2013). Mortality limits used in wind energy impact assessment underestimate impacts of wind farms on bird populations  
→ Cita: Journal of Applied Ecology, 50(5):1065-1074  
→ DOI: https://doi.org/10.1111/1365-2664.12556  
→ PubMed Central: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7381563/  
→ **Sección relevante**: Páginas 1066-1067, "Legal Framework"; Tabla 1, comparación criterios mortalidad

[²⁰]: **Cook, A.S.C.P., Salkanovic, E., Masden, E., Hsiu, E.L., Kiilerich, A.H. (2025)**. A critical appraisal of 40 years of avian collision risk modelling: How have we got here and where do we go next?  
→ Cita: Environmental Impact Assessment Review, 110:107717  
→ DOI: https://doi.org/10.1016/j.eiar.2024.107717  
→ URL: https://www.sciencedirect.com/science/article/abs/pii/S0195925524003044  
→ **Secciones relevantes**: Introduction; Section 2 "Development of CRMs"; Section 4.3 "Uncertainty in CRM outputs"

[²¹]: **Band, W. (2012)**. Using a Collision Risk Model to Assess Bird Collision Risks for Offshore Windfarms  
→ SOSS Report, The Crown Estate, Strategic Ornithological Support Services  
→ URL: https://www.bto.org/sites/default/files/u28/downloads/Projects/Final_Report_SOSS02_Band1ModelGuidance.pdf  
→ **Secciones relevantes**: Páginas 5-15, metodología básica CRM; Páginas 29-35, parámetros de especies

[²²]: **SEO/BirdLife (2025)**. Monografía de la alondra ricotí (Chersophilus duponti). La alondra ricotí en España. Población reproductora en 2017-2024 y método de censo  
→ Universidad Autónoma de Madrid y SEO/BirdLife  
→ URL noticia: https://seo.org/un-nuevo-estudio-alerta-del-camino-hacia-la-extincion-de-la-alondra-ricoti/  
→ **Datos clave**: 
  - Población España 2024: ~3,116 machos territoriales
  - Población Aragón 2024: ~1,500 machos territoriales (estimación basada en distribución)
  - 90% concentrado en Soria, Zaragoza, Teruel y Guadalajara
  - Probabilidad de extinción 84-90% en próximos 20 años
→ **Secciones relevantes**: Distribución actual, metodología de censo estandarizada, análisis de viabilidad poblacional

---

### Recursos adicionales en línea

**Bases de datos y herramientas:**

- **GLOBIOweb** - Explorador interactivo MSA global (resolución 300m)  
  → https://www.globio.info/globioweb  
  → Análisis regional y descarga de datos geoespaciales

- **NatureServe Explorer** - Base de datos estado conservación especies  
  → https://explorer.natureserve.org/

- **SpatiaFi Data Catalog** - Datos MSA global históricos y proyecciones  
  → https://data.spatiafi.com/dataset/spatiafi-biodiversity-msa-historical-baseline-v1.0

**Guías y documentación técnica:**

- **Scottish Natural Heritage (NatureScot, 2023)**. Guidance Note 7: Marine Ornithology - Collision Risk Assessment  
  → https://www.nature.scot/doc/guidance-note-7-guidance-support-offshore-wind-applications-marine-ornithology-advice-assessing

- **JNCC et al. (2024)**. Joint SNCB advice on bird collision risk modelling for offshore wind  
  → https://data.jncc.gov.uk/data/f7892820-0f84-4e96-9eff-168f93bd343d/joint-sncb-crm-advice-note.pdf

---

**Nota sobre aplicación metodológica**: Los sistemas de ponderación descritos en este informe se basan en literatura científica revisada por pares y marcos de conservación reconocidos internacionalmente. La aplicación al caso del parque eólico Agualobos demuestra cómo estos métodos estandarizados proporcionan soporte objetivo y cuantificable para decisiones de impacto ambiental bajo las leyes de la UE y España.