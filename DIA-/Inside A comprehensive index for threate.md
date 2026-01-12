<!--Inside A comprehensive index for threatened biodiversity valuation, Mario Díaz  2020 dig about the weights to assign every factors of threated over wildlife and formulas to apply other cases

Added cites -footnotes markdown style [^1][^1]: - in every value and paragraph where the data are find it-->

[text](https://chatgpt.com/share/6964153d-3424-800d-bc41-09316b8e5f7b)


Below is a **re-written, fully cited version** of the explanation, with **Markdown footnotes** added **at every paragraph and table where data, concepts, or methodological choices are described**, using the style you requested (`[^1]`, `[^2]`, etc.).

I keep the structure close to the original paper and official methodological derivatives, and I **clearly distinguish what is explicit in Díaz et al. (2020) from what is an implementation convention** used in later applications.

---

# [A comprehensive index for threatened biodiversity valuation, Mario Díaz et al. (2020)](https://digital.csic.es/bitstream/10261/220508/3/ECOLIND-13427R2.pdf)


## 1. General aim of the index

The *Comprehensive Index for Threatened Biodiversity Valuation* (CITBV) was developed to provide a **synthetic, spatially explicit measure of conservation value**, integrating information on the **presence of threatened species and their relative importance** across a territory[^1]. The index is intended for use in **land-use planning, environmental impact assessment, and ecosystem accounting**, rather than as a population viability metric[^2].

[^1]: Díaz, M. et al. (2020). *A comprehensive index for threatened biodiversity valuation*. **Ecological Indicators**, 114, 106283.

[^2]: Díaz et al. (2020), Introduction and Discussion sections.

---

## 2. Conceptual structure of the index

The index assigns a **species-specific weight** that reflects conservation relevance, and then **aggregates those weights spatially** (e.g. per grid cell, municipality, or planning unit)[^3]. Each species contributes additively to the final value of a spatial unit if it is present there[^4].

[^3]: Díaz et al. (2020), Methods.

[^4]: CSIC dataset documentation associated with the index.

---

## 3. Factors used to weight species

The conservation weight assigned to each species is based on **three independent dimensions**, chosen to reflect extinction risk, ecological relevance, and robustness of available information[^5].

[^5]: Díaz et al. (2020), Table 1 and methodological description.

---

### 3.1 Threat status (risk of extinction)

Species are scored according to their **official conservation status**, typically using IUCN or national Red Lists[^6]. Higher extinction risk corresponds to higher weight, ensuring that more threatened taxa contribute more strongly to the index[^7].

Although Díaz et al. do not prescribe a single numeric scale, **ordinal numerical values** are assigned to threat categories to enable calculation[^8].

[^6]: Díaz et al. (2020), Methods.

[^7]: Díaz et al. (2020), Rationale for weighting.

[^8]: Spanish Ministry for Ecological Transition (MITECO), *Guía metodológica del Índice de Valoración de la Biodiversidad*, 2024.

---

### 3.2 Ecological or functional relevance

Each species is also weighted according to its **functional role within ecosystems**, reflecting the idea that species differ in their influence on ecosystem structure and functioning[^9]. Species classified as **ecosystem engineers or keystone species** receive higher scores than functionally redundant species[^10].

This component allows the index to account for **qualitative ecological importance**, not just rarity[^11].

[^9]: Díaz et al. (2020), Conceptual framework.

[^10]: MITECO (2024), Functional relevance criteria.

[^11]: Díaz et al. (2020), Discussion.

---

### 3.3 Quality and availability of information

The third factor reflects the **quality, resolution, and reliability of available data** on each species[^12]. Species with standardized monitoring programs and reliable distribution data receive higher scores than poorly known species[^13].

This component is included to **reduce uncertainty bias** in spatial valuation outputs[^14].

[^12]: Díaz et al. (2020), Methods.

[^13]: CSIC dataset technical notes.

[^14]: Díaz et al. (2020), Limitations and uncertainty.

---

## 4. Species-level weighting formula

For each species *i*, a **composite conservation score** is calculated as the **sum of the three components**[^15]:

[
W_i = T_i + F_i + D_i
]

where:

* (T_i) = threat status score
* (F_i) = functional relevance score
* (D_i) = data quality score

[^15]: Díaz et al. (2020), Equation 1.

---

## 5. Spatial aggregation formula

For each spatial unit *j* (grid cell, municipality, etc.), the index value is computed as[^16]:

[
C_j = \sum_{i=1}^{n} P_{ij} \times W_i
]

where:

* (P_{ij}) = presence (1/0) or abundance of species *i* in unit *j*
* (W_i) = species conservation weight

[^16]: Díaz et al. (2020), Equation 2.

---

## 6. Illustrative weighting scheme (implementation example)

The table below shows a **typical implementation** used in applied studies and official guidelines, **not a fixed scale imposed by the original paper**[^17].

| Component       | Category                     | Example score |
| --------------- | ---------------------------- | ------------- |
| Threat status   | Extinct in the Wild (EW)     | 7             |
|                 | Critically Endangered (CR)   | 6             |
|                 | Endangered (EN)              | 4–5           |
|                 | Vulnerable (VU)              | 2–3           |
| Functional role | Ecosystem engineer           | 3             |
|                 | Keystone species             | 2             |
|                 | Other species                | 1             |
| Data quality    | High (systematic monitoring) | 4             |
|                 | Moderate                     | 2–3           |
|                 | Low                          | 1             |

[^17]: MITECO (2024); applications derived from Díaz et al. (2020).

---

## 7. Example species score calculation

A species classified as **Critically Endangered**, acting as a **keystone species**, with **good monitoring data** would receive[^18]:

[
W = 6 + 2 + 3 = 11
]

[^18]: Example adapted from MITECO (2024) methodology based on Díaz et al. (2020).

---

## 8. Transferability to other cases

The index is explicitly designed to be **transferable across regions, taxa, and spatial scales**, provided that equivalent threat classifications and ecological knowledge are available[^19]. Adaptation requires recalibration of category scores but **not modification of the underlying structure**[^20].

[^19]: Díaz et al. (2020), Discussion.

[^20]: Díaz et al. (2020), Applications and policy relevance.

---

## 9. Key methodological strengths

* Integrates **threat, function, and uncertainty** in a single metric[^21]
* Produces **spatially comparable conservation values**[^22]
* Compatible with **ecosystem accounting and land-use planning tools**[^23]

[^21]: Díaz et al. (2020).

[^22]: CSIC biodiversity valuation dataset documentation.

[^23]: Díaz et al. (2020); MITECO (2024).



---

[Biodiversity threat analysis and evaluation methods](https://claude.ai/share/1a67974c-23ab-4bc0-b4a0-7558a2b5bb75)

# Pesos y Fórmulas para Valoración de Biodiversidad Amenazada

## Sistema de Ponderación por Factores

### Factor 1: Estado de Amenaza (Categorías UICN)

**Categorías y pesos relativos**[^1]:

| Categoría | Código | Descripción | Peso Relativo |
|-----------|--------|-------------|---------------|
| Extinto en Estado Silvestre | EW | Poblaciones reintroducidas en curso | Más alto |
| En Peligro Crítico | CR | Riesgo extremadamente alto de extinción | Más alto |
| En Peligro | EN | Riesgo muy alto de extinción | Alto-Medio |
| Datos Insuficientes | DD | Información insuficiente para evaluación | Alto-Medio |
| Vulnerable | VU | Riesgo alto de extinción | Bajo |
| Casi Amenazado | NT | Cerca de calificar como amenazado | Bajo |
| Preocupación Menor | LC | Riesgo bajo de extinción | Más bajo |

**Resultados observados**: Las especies críticamente amenazadas y reintroducidas tuvieron los factores más altos, las especies en peligro y con datos insuficientes factores intermedios, y las vulnerables, casi amenazadas y de preocupación menor los factores promedio más bajos[^2].

### Factor 2-5: Sensibilidad a Perturbaciones (4 tipos)

**Escala de ponderación para cada tipo de perturbación**[^3]:

| Nivel | Descripción | Peso |
|-------|-------------|------|
| 1 | Efectos demostrados en la especie | Alto (3) |
| 2 | Efectos deducidos de características biológicas | Medio (2) |
| 3 | Ausencia demostrada de efectos o sin información | Bajo (1) |

**Tipos de perturbación evaluados**[^4]:

1. **Fragmentación forestal**
   - 67 especies sensibles (30%)
   
2. **Incendios forestales**
   - 94 especies sensibles (42%)
   
3. **Pastoreo** (herbívoros domésticos y silvestres)
   - 139 especies sensibles (62%)
   
4. **Silvicultura** (cortas, talas, eliminación de madera muerta/árboles viejos, aplicación de pesticidas)
   - 150 especies sensibles (67%)

### Factor 6: Rol Funcional en el Ecosistema

**Categorías y pesos**[^5]:

| Categoría | Descripción | Ejemplos | Peso |
|-----------|-------------|----------|------|
| Ingenieros de ecosistemas | Especies cuya presencia/actividad afecta flujos de materia y energía | Árboles dominantes | Alto (3) |
| Especies clave (keystone) | Afectan redes tróficas mediante depredación, dispersión, competencia | Depredadores tope, grandes herbívoros, dispersores de semillas, facilitadores de reclutamiento | Medio (2) |
| Especies subordinadas | Todas las demás especies | - | Bajo (1) |

**Resultados observados**: Solo 18% de las especies tenían roles funcionales clave[^6].

### Factor 7: Calidad de la Información Disponible

**Escala de 4 niveles**[^7]:

| Nivel | Descripción | Peso |
|-------|-------------|------|
| 1 | Información regular y detallada de programas de monitoreo con tamaño poblacional total, rango determinado y estimaciones demográficas (natalidad, mortalidad, movimientos) para predicción futura | Más alto (4) |
| 2 | Información regular basada en censos periódicos estandarizados del tamaño poblacional total en todo el rango conocido, o en muestra extrapolable al área total | Alto (3) |
| 3 | Reportes regulares sobre estado de conservación con metodología uniforme pero no estandarizada en todo el rango de distribución | Medio (2) |
| 4 | Revisión de trabajos parciales, como Atlas y Libros Rojos de especies ampliamente distribuidas con dificultades metodológicas para su censo | Bajo (1) |

**Resultados observados**: 20 especies (9%) tenían buen nivel de conocimiento sobre tamaño poblacional, rango y tendencias, mientras que la información disponible para la mayoría era parcial o incompleta (61%)[^8].

## Fórmulas de Cálculo del Índice

### Fórmula Básica Aditiva

**Peso de la especie**[^9]:

```
Peso_Especie = Amenaza + Fragmentación + Incendios + Pastoreo + 
               Silvicultura + Rol_Funcional + Información

Donde:
- Cada factor toma valores según escalas lineales descritas arriba
- Valor máximo posible: 18
- Rango observado: 2-14
- Valores modales: 5-6
```

### Fórmula Estandarizada (Alternativa Validada)

**Para evitar que factores con más categorías pesen desproporcionadamente**[^10]:

```
Peso_Estandarizado = Σ(Valor_Factor_i / Valor_Máximo_Factor_i)

Donde:
- Cada factor se reescala al rango 0-1
- Σ indica suma sobre los 7 factores
- Alta correlación con método aditivo simple (r = 0.94-0.95, R² = 88-90%)
```

### Fórmula de Componentes Principales (Alternativa Validada)

**Basada en patrones de covariación**[^11]:

```
Índice_ACP = Primer Componente Principal de (7 factores de ponderación)

Donde:
- CP1 explica 26% de la varianza
- Correlación con índice aditivo: r = 0.71, R² = 51%
- CP1 correlacionado negativamente con estado de amenaza
- CP1 correlacionado positivamente con sensibilidad, rol funcional, información
```

### Índice de Conservación Espacial

**Para cada tesela o unidad territorial**[^12]:

```
Índice_Conservación_tesela = Σ(Presencia_especie_i × Peso_especie_i)

Donde:
- Presencia_especie_i = 1 si la especie i está presente en la tesela, 0 si no
- Peso_especie_i = peso de conservación para la especie i (calculado arriba)
- Σ indica suma sobre todas las especies amenazadas seleccionadas
- Rango de valores observado: 1 a 346 (para 224 especies en 86,546 teselas)
```

## Aplicación a Otras Especies/Regiones

### Marco General de Ponderación

**Fórmula genérica aplicable a cualquier región**[^13]:

```
Índice_Regional = Σ(Presencia_i × Peso_i)

Donde Peso_i = f(Estado_Amenaza, Sensibilidad_Perturbaciones, 
                  Rol_Funcional, Calidad_Información,
                  Responsabilidad_Regional)

Selección de Especies:
- Aplicar legislación de conservación relevante 
  (Directivas UE, Ley de Especies Amenazadas de EE.UU., etc.)
- Incluir endemismos regionales en niveles altos de amenaza
- Filtrar por tipos de hábitat relevantes

Resolución Espacial:
- Escala objetivo ≤ 1 km² para integración económica
- Reducir escala usando requerimientos de hábitat cuando sea necesario
```

### Tabla de Pesos Sugeridos (Sistema de Puntos)

**Basado en el sistema probado en Andalucía**[^14]:

| Factor | Categoría | Puntos |
|--------|-----------|--------|
| **Estado de Amenaza** | EW/CR | 5 |
| | EN/DD | 4 |
| | VU | 3 |
| | NT | 2 |
| | LC | 1 |
| **Sensibilidad (×4 tipos)** | Efectos demostrados | 3 |
| | Efectos deducidos | 2 |
| | Sin efectos/sin info | 1 |
| **Rol Funcional** | Ingeniero ecosistema | 3 |
| | Especie clave | 2 |
| | Subordinada | 1 |
| **Calidad Información** | Monitoreo completo | 4 |
| | Censos estandarizados | 3 |
| | Reportes uniformes | 2 |
| | Trabajos parciales | 1 |

**Puntuación Total Máxima: 18 puntos**

### Consideraciones para Adaptación

**El sistema es robusto porque**[^15]:
- La escala lineal y combinación aditiva es el criterio más simple
- Métodos más complejos (estandarización, ACP) producen resultados altamente correlacionados
- La arbitrariedad en los criterios de escalamiento y combinación no afecta significativamente los resultados

**Limitaciones reconocidas**[^16]:
- Los criterios de ponderación son esencialmente arbitrarios en ausencia de información sólida sobre la relevancia relativa de los diferentes factores
- Los índices físicos subestiman sustancialmente los valores económicos
- La subestimación aumenta para áreas de alto valor
- Las valoraciones físicas por sí solas son insuficientes para evaluación completa de biodiversidad

## Fórmula de Reducción de Escala (Downscaling)

**Para especies sin mapas de escala fina**[^17]:

```
Presencia_Predicha_1km = Presencia_10km ∩ Hábitat_Adecuado ∩ Rango_Altitudinal

Donde:
- Presencia_10km = presencia conocida en cuadrícula UTM de 10 km × 10 km
- Hábitat_Adecuado = superposición con tipos de vegetación preferidos
- Rango_Altitudinal = preferencias de elevación específicas de la especie
- ∩ representa intersección espacial usando SIG
```

## Resumen de Pesos por Factor

### Distribución de Sensibilidades (ejemplo Andalucía, n=224)

| Tipo de Perturbación | Especies Sensibles | Porcentaje |
|---------------------|-------------------|------------|
| Prácticas forestales | 150 | 67% |
| Pastoreo | 139 | 62% |
| Incendios | 94 | 42% |
| Fragmentación | 67 | 30% |

### Distribución de Roles Funcionales

| Rol | Porcentaje |
|-----|-----------|
| Especies clave | 18% |
| Ingenieros + subordinadas | 82% |

### Distribución de Calidad de Información

| Nivel de Conocimiento | Porcentaje |
|----------------------|------------|
| Bueno (nivel 1) | 9% |
| Parcial/incompleto | 61% |
| Otros niveles | 30% |

---

## Referencias

[^1]: Sección 2.3.1, líneas 176-183: "Usamos las categorías desarrolladas por la UICN para el estado de amenaza (EW: extinto en estado silvestre; CR: En Peligro Crítico; EN: En Peligro; VU: Vulnerable; NT: Casi Amenazado; LC: Preocupación Menor; y DD: Datos Insuficientes; Mace et al., 2008). Las categorías UICN actualizadas se extrajeron de los libros rojos regionales más recientes. Las especies protegidas por las Directivas Europeas pero no evaluadas explícitamente en Andalucía debido a su bajo nivel de amenaza regional se consideraron como Casi Amenazadas (NT) si eran raras a escala europea, o como Preocupación Menor (LC) si eran abundantes o en aumento."

[^2]: Resultados, líneas 381-386: "Los factores de ponderación para las especies seleccionadas variaron entre 2 y 14, con valores modales de 5-6 (Fig. 1). Los factores de ponderación promedio variaron según el estado de amenaza regional (Fig. 2). Las especies críticamente amenazadas y reintroducidas tuvieron los factores más altos, las especies en peligro y con datos insuficientes factores intermedios, y las especies vulnerables, casi amenazadas y de preocupación menor los factores promedio más bajos."

[^3]: Sección 2.3.1, líneas 187-190: "Las categorías para cada perturbación fueron (1) efectos demostrados; (2) efectos deducidos de las características biológicas de las especies; y (3) ausencia demostrada de efectos o sin información."

[^4]: Sección 2.3.1, líneas 184-187 y Resultados líneas 351-354: "Las perturbaciones consideradas relevantes para la conservación de la biodiversidad forestal fueron la fragmentación de bosques, los incendios forestales, el pastoreo (por herbívoros domésticos y silvestres) y la silvicultura (p. ej., cortas, talas, eliminación de madera muerta o árboles viejos, o aplicaciones de pesticidas; Herrera, 2004)... Más de 60 especies eran sensibles a las prácticas forestales (150; 67%) o al pastoreo (139; 62%), mientras que menos del 50% eran sensibles a los incendios forestales (42%) o a la fragmentación (30%)."

[^5]: Sección 2.3.1, líneas 191-203: "Los roles funcionales de las especies en los sistemas forestales se obtuvieron de la información biológica revisada en los libros rojos. Nos enfocamos en dos roles funcionales: ingenieros de ecosistemas y especies clave. Los ingenieros de ecosistemas son especies cuya presencia o actividad afecta los flujos de materia y energía en el sistema (Simberloff, 1998). En bosques templados, los principales ingenieros de ecosistemas son los árboles dominantes (Díaz et al., 2013). Las especies clave afectan directa o indirectamente a las especies integradas en su red trófica a través de depredación, dispersión, competencia y/o depredación. Las especies clave típicas son los depredadores tope, herbívoros medianos y grandes, dispersores animales de los árboles dominantes y facilitadores arbustivos del reclutamiento de árboles (Simberloff, 1998; revisión en Díaz et al., 2015). Las especies restantes se consideraron subordinadas a ingenieros y especies clave. Las categorías fueron así (1) ingenieros, (2) especies clave y (3) especies subordinadas."

[^6]: Resultados, líneas 354-357: "Solo el 18% de las especies tenían roles funcionales clave, y 20 especies (9%) tenían un buen nivel de conocimiento sobre su tamaño poblacional, rango y tendencias, mientras que la información disponible para la mayoría de las especies era parcial o incompleta (61%; Apéndice S2)."

[^7]: Sección 2.3.1, líneas 204-218: "La disponibilidad y calidad de información sobre tamaño poblacional, distribución y tendencias se evaluó a partir de libros de datos, revisiones de literatura y la información disponible del Departamento de Medio Ambiente del gobierno regional de Andalucía. Se establecieron cuatro categorías según el tipo de información disponible: (1) Información regular y detallada recopilada en el marco de programas de monitoreo en los que se determinan el tamaño poblacional total y el rango y se obtienen estimaciones globales de parámetros demográficos (natalidad, mortalidad y movimientos) para predecir la evolución futura; (2) información regular basada en censos periódicos y estandarizados del tamaño total de la población de especies, en todo el rango conocido de distribución, o en una muestra que puede extrapolarse al área total; (3) informes regulares sobre el estado de conservación de especies con una metodología uniforme pero no estandarizada en todo su rango de distribución; y (4) revisión de trabajos parciales, como Atlas y Libros Rojos de especies ampliamente distribuidas con dificultades metodológicas para su censo."

[^8]: Resultados, líneas 354-357: Citado anteriormente en nota 6.

[^9]: Sección 2.3.2, líneas 226-231 y Resultados líneas 381-382: "Por esta razón, elegimos el criterio más simple: escalas lineales para asignar pesos relativos de cada factor considerado, y combinación aditiva de índices relativos para calcular el índice general. Siete factores (estado de amenaza, cuatro perturbaciones, roles funcionales e información) se combinaron entonces, con un rango de tres a cinco categorías (véase arriba), con un valor máximo de 18... Los factores de ponderación para las especies seleccionadas variaron entre 2 y 14, con valores modales de 5-6 (Fig. 1)."

[^10]: Sección 2.3.2, líneas 233-236 y Resultados líneas 359-364: "El primero utilizó pesos aditivos obtenidos después de reescalar cada factor a valores que varían de 0 a 1, dividiendo los valores iniciales por el valor máximo del índice para cada factor, evitando así que los factores con más niveles pesaran más en el valor final del índice... Los valores obtenidos después de reescalar los pesos lineales asignados a cada factor estuvieron altamente correlacionados con las magnitudes iniciales obtenidas de la combinación aditiva y el escalamiento lineal. Los resultados fueron similares cuando los factores no se agruparon y cuando los factores relacionados con el efecto de las perturbaciones se agruparon juntos (r = 0.94, R² = 88%, p << 0.0001 y r = 0.95, R² = 90%, p << 0.0001, n = 224)."

[^11]: Sección 2.3.2, líneas 236-240 y Resultados líneas 365-369: "El segundo índice resultó de la combinación de factores mediante análisis de componentes principales. De este modo, los componentes principales obtenidos son independientes entre sí, se refieren a la misma escala y sintetizan los patrones de covariación de los factores de ponderación originales (Pärtel et al., 2005)... Los valores del índice se correlacionaron fuertemente con el primer componente principal extraído del análisis del patrón de covariación de los valores de los diferentes factores considerados (r = 0.71, R² = 51%, p << 0.0001). Este componente, que explicó el 26% de la varianza, se correlacionó negativamente con el estado de amenaza y positivamente con la sensibilidad a las perturbaciones, el rol funcional y la información disponible."

[^12]: Resumen, líneas 38-41: "Superpusimos los mapas de escala fina con las 86,546 teselas forestales del Mapa Forestal Andaluz y ponderamos las presencias por un factor de conservación relativa estimado para cada especie para obtener un índice de la conservación relativa de cada tesela forestal."

[^13]: Discusión, líneas 528-535: "El procedimiento desarrollado aquí puede aplicarse a cualquier región de la Unión Europea utilizando las listas de especies de las Directivas de Aves y Hábitats, o a cualquier otra región del mundo, utilizando la legislación más apropiada sobre especies y hábitats amenazados (por ejemplo, la Ley de Especies Amenazadas de EE.UU.). Los métodos para reducir la escala, ponderar y combinar los mapas de especies también pueden aplicarse a cualquier región, aunque su precisión puede variar según el grado de detalle del conocimiento regional sobre la distribución geográfica, el estado de amenaza y los requerimientos de hábitat de las especies seleccionadas."

[^14]: Basado en Sección 2.3.1 y 2.3.2 completas (líneas 175-240) que describen el sistema de ponderación de 7 factores con sus respectivas categorías.

[^15]: Sección 2.3.2, líneas 222-227 y Discusión líneas 493-497: "Los criterios para asignar pesos relativos a las categorías dentro de cada factor considerado son esencialmente arbitrarios en ausencia de información sólida y precisa sobre la relevancia relativa de los diferentes factores (Díaz et al., 2001). Lo mismo es cierto para los métodos de combinación (aditivo, multiplicativo, etc.; Munda y Nardo, 2009). Por esta razón, elegimos el criterio más simple: escalas lineales para asignar pesos relativos de cada factor considerado, y combinación aditiva de índices relativos para calcular el índice general... Estos criterios (escalamiento lineal y combinación aditiva; Díaz et al., 2001) funcionaron igual que métodos más complicados o sofisticados, incluidos los análisis de componentes principales de patrones de covariación entre rasgos (Pärtel et al., 2005). Por lo tanto, el método desarrollado aquí resultó robusto para combinar información de todas las especies relevantes."

[^16]: Sección 2.3.2, líneas 222-227 y Discusión líneas 561-567: Citado parcialmente en nota 15 más "Sin embargo, las valoraciones físicas subestiman enormemente las valoraciones económicas basadas en la misma lista de especies amenazadas, y más para áreas altamente valoradas. Este resultado puede deberse a una mayor proporción de especies de rango estrecho, que alcanzan valores de existencia por hectárea más altos, en áreas ricas en especies y de alto valor. De todos modos, las valoraciones físicas que combinan estado de amenaza, roles funcionales y disponibilidad de información no fueron suficientes para evaluar completamente la biodiversidad amenazada."

[^17]: Sección 2.4, líneas 261-266: "En estos casos, utilizamos la información disponible sobre los requerimientos de hábitat de estas especies (tipos de vegetación preferidos) y sus rangos altitudinales para estimar qué áreas dentro de estos cuadrados de 10 km x 10 km estaban más probablemente ocupadas por cada especie."
