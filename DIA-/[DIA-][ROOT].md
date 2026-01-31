
<!-- Search about assign stadistical weight of damage of species of flora,faun and legal protected landscapes and habitats
-->
# [Métodos de Ponderación Estadística para la Evaluación de Daños a la Biodiversidad en Evaluaciones de Impacto Ambiental](https://claude.ai/public/artifacts/046b2d99-e02c-459a-986e-d055a6d68f33)

## Resumen Ejecutivo

Las evaluaciones de impacto ambiental utilizan cada vez más sistemas de ponderación estadística para cuantificar los daños a especies protegidas, hábitats y paisajes. Estas metodologías asignan valores diferenciales basados en el estado de amenaza, la función ecológica y los niveles de protección legal para crear evaluaciones objetivas y defendibles del daño ambiental.

---

## 1. Marcos de Ponderación Fundamentales

### 1.1 Categorías de la Lista Roja de la UICN como Pesos Base[⁴]

La Lista Roja de la UICN proporciona la jerarquía fundamental para ponderar el daño a especies:

**Pesos por Categoría de Amenaza:**
- **En Peligro Crítico (CR)**: Peso máximo (típicamente 4.0-5.0)
- **En Peligro (EN)**: Peso alto (3.0-4.0)
- **Vulnerable (VU)**: Peso moderado-alto (2.0-3.0)
- **Casi Amenazada (NT)**: Peso moderado (1.5-2.0)
- **Preocupación Menor (LC)**: Peso base (1.0)
- **Datos Insuficientes (DD)**: Variable (1.0-2.0, enfoque conservador)

**Aplicación:** El estudio de bosques andaluces utilizó 224 especies amenazadas con ponderación diferencial basada en categorías UICN, resultando en mapas espacialmente explícitos de valor de conservación.

### 1.2 Multiplicadores por Estado de Protección Legal[¹][²][³]

**Marco de la Unión Europea:**
- **Especies del Anexo II de la Directiva Hábitats**: multiplicador 1.5-2.0x
- **Especies del Anexo I de la Directiva Aves**: multiplicador 1.5-2.0x
- **Especies prioritarias (designación asterisco *)**: multiplicador 2.0-3.0x
- **Catálogos nacionales "En Peligro de Extinción"**: multiplicador 3.0-4.0x
- **Protección regional únicamente**: multiplicador 1.2-1.5x

**Mejora por Áreas Protegidas:**
- Especies dentro de **sitios Natura 2000**: +0.5 multiplicador
- Especies en **ZEPA** (Zonas de Especial Protección para las Aves): +0.5-1.0 multiplicador
- Especies en **ZEC** (Zonas Especiales de Conservación): +0.5-1.0 multiplicador

---

## 2. Sistemas de Ponderación Multifactorial

### 2.1 Marco de Índice Integral (Modelo Andaluz)

Este marco español combina múltiples factores en un índice ponderado único:

**Factor 1: Nivel de Amenaza (40% peso)**
- Basado en categorías UICN
- Puntuaciones: CR=5, EN=4, VU=3, NT=2, LC=1

**Factor 2: Sensibilidad a la Perturbación (25% peso)**
- Especificidad de hábitat: 1 (generalista) a 5 (especialista extremo)
- Tasa reproductiva: 1 (alta) a 5 (muy baja)
- Capacidad de dispersión: 1 (alta movilidad) a 5 (sésil/limitada)

**Factor 3: Papel Funcional (20% peso)**
- Especies clave: 5
- Ingenieros de ecosistemas: 4
- Especies dominantes: 3
- Especies comunes: 2
- Raras con función mínima: 1

**Factor 4: Nivel de Conocimiento (15% peso)**
- Factor de ajuste por calidad de datos
- Bien estudiada: 1.0 (sin ajuste)
- Datos moderados: 0.8
- Datos limitados: 0.6
- Datos mínimos: 0.5 (reducción precautoria)

**Fórmula:**
```
Peso Especie = (Amenaza × 0.40) + (Sensibilidad × 0.25) + (Función × 0.20) + (Conocimiento × 0.15)
```

### 2.2 Sistema de Clasificación de Conservación NatureServe[⁵]

**Evaluación de Ocho Factores:**

1. **Extensión del Rango**: Puntuación basada en área total ocupada
2. **Área de Ocupación**: Área real de hábitat dentro del rango
3. **Tamaño Poblacional**: Número de individuos maduros
4. **Número de Ocurrencias**: Poblaciones discretas
5. **Número con Buena Viabilidad**: Solo poblaciones viables
6. **Especificidad Ambiental**: Grado de especialización de hábitat
7. **Amenazas**: Severidad, alcance, impacto y temporalidad
8. **Vulnerabilidad Intrínseca**: Características de la especie que afectan la resiliencia

**Escala de Clasificación (G1-G5):**
- G1 (Críticamente Imperiled): Peso = 5.0
- G2 (Imperiled): Peso = 4.0
- G3 (Vulnerable): Peso = 3.0
- G4 (Aparentemente Segura): Peso = 2.0
- G5 (Segura): Peso = 1.0

---

## 3. Ponderación de Hábitats y Paisajes

### 3.1 Hábitats de Interés Comunitario (UE)[¹][¹⁴]

**Hábitats Prioritarios (asterisco *) bajo la Directiva Hábitats:**
- Multiplicador de peso: **3.0-4.0x**
- Ejemplos: Turberas prioritarias, lagunas costeras, turberas elevadas activas

**Hábitats del Anexo I No Prioritarios:**
- Multiplicador de peso: **2.0-2.5x**
- Ejemplos: HIC 4090 (Brezales mediterráneos), HIC 9340 (Bosques de Quercus)

**Ajustes Basados en la Condición:**
- Buen estado de conservación: 1.0x (base)
- Estado de conservación malo: 1.5x
- Estado de conservación muy malo: 2.0x
- Tendencia de deterioro: +0.5x adicional

### 3.2 Elementos del Paisaje y Patrimonio Cultural

**Categorías de Paisaje Protegido:**
- **Sitios Patrimonio Mundial UNESCO**: 4.0-5.0x
- **Reservas de la Biosfera**: 3.0-3.5x
- **Geoparques**: 2.5-3.0x
- **Parques Culturales**: 2.0-2.5x
- **Paisajes protegidos nacionalmente**: 1.5-2.0x

**Factores de Impacto Visual:**
- Alta visibilidad (>75% cuenca visual): 1.5x
- Visibilidad media (50-75%): 1.2x
- Baja visibilidad (<50%): 1.0x

---

## 4. Pesos Poblacionales y Distribucionales

### 4.1 Endemismo y Restricción de Rango[^4][^5]

**Puntuación de Riqueza Endémica:**
- Endémica global (región única): 5.0x
- Endémica regional (multiregión dentro del país): 3.0x
- Endémica nacional: 2.0x
- Localmente rara pero extendida en otros lugares: 1.2x

**Vulnerabilidad Basada en Rango:**
- Área de Ocupación (AOO) < 10 km²: 4.0x
- AOO 10-100 km²: 3.0x
- AOO 100-2,000 km²: 2.0x
- AOO > 2,000 km²: 1.0x

### 4.2 Ajustes por Densidad Poblacional

**Para el Caso Agualobos:**
- **Alondra de Dupont**: 21 territorios en área del proyecto ("La Pernalosa")
  - `Población regional: ~2,000-3,000 territorios`
  - Peso de impacto: 21/2,500 = 0.84% de la población regional
  - Con multiplicador CR (5.0) = **4.2% impacto ponderado**

**Ejemplo de Cálculo:**
```
Puntuación Impacto = (Población Local / Población Regional) × Peso Amenaza × % Pérdida Hábitat

Para Alondra de Dupont:
= (21 / 2,500) × 5.0 × 0.38 (fracción pérdida hábitat)
= 0.0159 unidades impacto ponderado
```

---

## 5. Ponderación de Amenazas y Presiones

### 5.1 Riesgo de Mortalidad Directa

**Riesgo de Colisión para Parques Eólicos (específico por especie):**
- **Alta vulnerabilidad** (buitres, águilas): 3.0-4.0x
  - Buitre leonado: 2-12 muertes/año estimadas
  - Peso: 3.5x mortalidad base
  
- **Vulnerabilidad moderada** (rapaces): 2.0-2.5x
  - Milano real: 0.01-0.05 muertes/año
  - Peso: 2.2x mortalidad base

- **Baja vulnerabilidad** (paseriformes): 1.0-1.5x

### 5.2 Severidad de Pérdida de Hábitat[⁹][¹⁰][¹¹]

**Permanente vs. Temporal:**
- **Destrucción permanente de hábitat**: 3.0x
- **Degradación a largo plazo** (>20 años): 2.0x
- **Perturbación a medio plazo** (5-20 años): 1.5x
- **Impactos temporales de construcción**: 1.0x

**Factor de Calidad de Hábitat:**
- Hábitat crítico de cría/nidificación: 3.0x
- Hábitat primario de alimentación: 2.0x
- Hábitat secundario/marginal: 1.0x
- Hábitat de corredor/conectividad: 2.5x

---

## 6. Ponderación de Impactos Acumulativos

### 6.1 Efectos Sinérgicos de Múltiples Proyectos[¹⁴]

**Función de Decaimiento por Distancia:**
```
Factor Sinergia = 1 + Σ(Peso_Proyecto × e^(-distancia/umbral))

Donde:
- umbral = 5 km para parques eólicos
- Peso_Proyecto = puntuación impacto normalizada (0-1)
```

**Para el Contexto de Agualobos:**
- 53 aerogeneradores existentes + 16 proyectados dentro de 10 km
- 815 apoyos líneas eléctricas existentes + 17 proyectados
- Multiplicador sinérgico: **1.8-2.2x** para evaluación acumulativa

### 6.2 Impactos en la Conectividad de Redes[¹][²]

**Conectividad Red Natura 2000:**
- Proyecto **entre dos ZEPAs** (como en Agualobos): 2.5-3.0x
- Proyecto adyacente a ZEPA (dentro de 1 km): 1.8-2.0x
- Proyecto cercano a ZEPA (1-5 km): 1.3-1.5x
- Sin proximidad a áreas protegidas: 1.0x

**Fragmentación de Corredores:**
- Efecto barrera completo: 3.0x
- Permeabilidad parcial retenida: 1.5x
- Fragmentación mínima: 1.0x

---

## 7. Factores de Ponderación Temporal

### 7.1 Vulnerabilidad por Etapa del Ciclo de Vida

**Impactos en Época de Cría:**
- Período crítico de nidificación: 3.0x
- Época de cría en general: 2.0x
- Períodos migratorios: 1.5x
- Época no reproductiva: 1.0x

### 7.2 Plazos de Recuperación[¹²]

**Potencial de Recuperación Ecológica:**
- Irreversible (>100 años): 4.0x
- Largo plazo (50-100 años): 3.0x
- Medio plazo (20-50 años): 2.0x
- Corto plazo (5-20 años): 1.5x
- Rápido (<5 años): 1.0x

---

## 8. Modelos de Integración

### 8.1 Modelo de Abundancia Media de Especies (MSA)[⁶][⁷][⁸]

**Métrica Reconocida Internacionalmente:**
```
MSA = Σ(Abundancia_Especie_i / Abundancia_Referencia) / Total_Especies

Factores considerados:
- Cambio uso del suelo: 30% peso
- Fragmentación: 25% peso
- Cambio climático: 25% peso
- Perturbación infraestructuras: 20% peso
```

**Clasificación de Impacto:**
- Reducción MSA >80%: **Impacto crítico** (peso 5.0)
- Reducción MSA 60-80%: **Impacto severo** (peso 4.0)
- Reducción MSA 40-60%: **Impacto mayor** (peso 3.0)
- Reducción MSA 20-40%: **Impacto moderado** (peso 2.0)
- Reducción MSA <20%: **Impacto menor** (peso 1.0)

### 8.2 Marco de Peso de la Evidencia (WoE)

**Puntuación de Calidad de Evidencia:**

**Intensidad (40% peso):**
- Diferencias de gran magnitud: Puntuación 3
- Diferencias moderadas: Puntuación 2
- Diferencias pequeñas: Puntuación 1

**Fiabilidad (35% peso):**
- Estudios revisados por pares, replicados: Puntuación 3
- Estudios únicos, buena metodología: Puntuación 2
- Estudios limitados o antiguos: Puntuación 1

**Relevancia (25% peso):**
- Medición directa del impacto: Puntuación 3
- Indicadores proxy: Puntuación 2
- Datos extrapolados: Puntuación 1

**Puntuación Combinada = (Intensidad × 0.40) + (Fiabilidad × 0.35) + (Relevancia × 0.25)**

---

## 9. Aplicación a Proyectos de Energía Eólica

### 9.1 Matriz de Evaluación Estándar para Avifauna[²][³]

| Categoría Especie | Peso Estado Legal | Riesgo Colisión | Pérdida Hábitat | Multiplicador Total |
|------------------|-------------------|-----------------|-----------------|---------------------|
| **CR + Anexo I** | 5.0 | 3.5 | 3.0 | **11.5x** |
| **EN + Anexo I** | 4.0 | 3.0 | 2.5 | **9.5x** |
| **VU + Anexo I** | 3.0 | 2.5 | 2.0 | **7.5x** |
| **VU solo** | 2.5 | 2.0 | 1.5 | **6.0x** |
| **NT/LC + Protegida** | 1.5 | 1.5 | 1.0 | **4.0x** |

### 9.2 Cálculos del Caso de Estudio Agualobos[³]

**Alondra de Dupont (Chersophilus duponti):**
- **Estado legal**: CR en Catálogo Aragón = 5.0
- **Riesgo colisión**: Moderado-alto (vuelos de cría) = 2.8
- **Pérdida hábitat**: 21 territorios en impacto directo = 3.0
- **Conectividad ZEPA**: Entre dos ZEPAs = 2.5
- **Significación poblacional**: 0.84% de regional = 1.8
- **Nivel conocimiento**: Bien estudiada = 1.0

**Puntuación Total Impacto Ponderado: 5.0 × 2.8 × 3.0 × 2.5 × 1.8 × 1.0 = 189.0 unidades**

**Milano Real (Milvus milvus):**
- **Estado legal**: CR en Aragón = 5.0
- **Riesgo colisión**: Alto (75% vuelos a altura riesgo) = 3.5
- **Estimación mortalidad**: 0.01-0.05 muertes/año = 2.0
- **Conectividad ZEPA**: Entre dos ZEPAs = 2.5
- **Nivel conocimiento**: Bien estudiada = 1.0

**Puntuación Total Impacto Ponderado: 5.0 × 3.5 × 2.0 × 2.5 × 1.0 = 87.5 unidades**

**Ganga Ortega (Pterocles orientalis) - Vulnerable:**
- Estado legal: VU = 3.0
- Avistamientos: 4 observaciones (presencia baja) = 1.5
- Especie objetivo ZEPA = 2.0
- Total: **3.0 × 1.5 × 2.0 = 9.0 unidades**

---

## 10. Umbrales de Decisión y Categorías de Impacto

### 10.1 Clasificación de Severidad de Impacto[⁹][¹⁰][¹¹]

Basado en puntuaciones ponderadas acumuladas:

| Rango Puntuación Ponderada | Clasificación Impacto | Recomendación EIA |
|----------------------------|----------------------|-------------------|
| **>150 unidades** | **Crítico/Incompatible** | **DIA Desfavorable** |
| **100-150 unidades** | **Severo** | Mitigación sustancial requerida |
| **50-100 unidades** | **Mayor/Moderado** | Medidas mitigación significativas |
| **25-50 unidades** | **Moderado** | Mitigación estándar aceptable |
| **<25 unidades** | **Menor/Compatible** | Medidas preventivas básicas |

### 10.2 Evaluación Total del Proyecto Agualobos

**Impactos Ponderados Sumados:**
- Alondra de Dupont: 189.0 unidades (**CRÍTICO**)
- Milano Real: 87.5 unidades (Severo)
- Ganga Ortega: 9.0 unidades (Moderado)
- Chova piquirroja: 6.5 unidades (Moderado)
- Alimoche: 5.2 unidades (Moderado)
- Pérdida hábitat (HIC 4090): 42.0 unidades (Mayor)
- Impacto paisajístico: 28.5 unidades (Moderado)
- Conectividad ZEPA: 35.0 unidades (Mayor)

**Puntuación Total Proyecto: 402.7 unidades ponderadas**

**Resultado: INCOMPATIBLE - Umbral crítico superado**

---

## 11. Limitaciones e Incertidumbres

### 11.1 Restricciones de Calidad de Datos

**Factores de Incertidumbre:**
- Datos base obsoletos (>5 años): Aumentar peso precautorio en 20%
- Estudios de una sola temporada: Reducir confianza en 30%
- Distribuciones extrapoladas: Aplicar factor confianza 0.7-0.8
- Efectos acumulativos: Frecuentemente subestimados en 50-70%

### 11.2 Desafíos Metodológicos

**Problemas Clave:**
1. **Inconmensurabilidad**: No se puede comparar directamente mortandad de peces con impacto visual paisajístico
2. **Variabilidad temporal**: Fluctuaciones poblacionales complican líneas base
3. **Efectos sinérgicos**: Interacciones no lineales difíciles de modelar
4. **Cambio climático**: Condiciones futuras añaden incertidumbre
5. **Política vs. científico**: La ponderación puede verse influenciada por prioridades políticas

---

## 12. Mejores Prácticas y Recomendaciones

### 12.1 Requisitos Esenciales[¹⁴]

1. **Transparencia**: Documentar todos los factores de ponderación y justificaciones
2. **Revisión por expertos**: Requerir validación independiente de pesos
3. **Principio de precaución**: Cuando exista incertidumbre, aplicar pesos mayores
4. **Actualizaciones regulares**: Revisar pesos según emerjan nuevos datos
5. **Participación de partes interesadas**: Permitir comentarios públicos sobre metodología de ponderación
6. **Alineación legal**: Asegurar consistencia con Directivas UE y leyes nacionales

### 12.2 Aseguramiento de Calidad[⁴][⁵]

**Estándares Mínimos:**
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

1. **Científicamente robustos**: Basados en métodos revisados por pares[⁹][¹⁰][¹¹][¹²]
2. **Legalmente defendibles**: Alineados con marcos de protección[¹][²][³]
3. **Precautorios**: Favorecer la conservación cuando exista incertidumbre
4. **Transparentes**: Completamente documentados y revisables
5. **Específicos al contexto**: Adaptados a prioridades de conservación regionales

**Para el caso de Agualobos**, la evaluación ponderada confirma que la decisión de DIA Desfavorable fue científicamente justificada, siendo el impacto de la Alondra de Dupont por sí solo (189.0 unidades) suficiente para superar umbrales críticos, antes de considerar efectos acumulativos de otras especies y pérdidas de hábitat.

La aplicación de estas metodologías de ponderación transforma juicios subjetivos en métricas cuantificables y defendibles que sirven tanto a objetivos de conservación como a requisitos de cumplimiento legal bajo las Directivas de Hábitats y Aves de la UE.

---

## Referencias

[¹]: **Directiva 92/43/CEE del Consejo** sobre la conservación de los hábitats naturales y de la fauna y flora silvestres (Directiva Hábitats)  
→ Texto oficial: https://eur-lex.europa.eu/eli/dir/1992/43/oj  
→ Página Comisión Europea: https://environment.ec.europa.eu/topics/nature-and-biodiversity/habitats-directive_en

[²]: **Directiva 2009/147/CE** relativa a la conservación de las aves silvestres (Directiva Aves - versión codificada)  
→ Texto oficial: https://eur-lex.europa.eu/eli/dir/2009/147/oj  
→ Resumen: https://eur-lex.europa.eu/EN/legal-content/summary/conservation-of-wild-birds.html

[³]: **Decreto 129/2022, de 5 de septiembre**, del Gobierno de Aragón, por el que se crea el Listado Aragonés de Especies Silvestres en Régimen de Protección Especial y se regula el Catálogo de Especies Amenazadas de Aragón  
→ BOA: https://www.boa.aragon.es/

[⁴]: **UICN (2001, 2012)**. Categorías y Criterios de la Lista Roja de la UICN: Versión 3.1, Segunda Edición  
→ Publicación oficial: https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf  
→ Página recurso principal: https://www.iucnredlist.org/resources/categories-and-criteria  
→ Cita: IUCN. 2012. IUCN Red List Categories and Criteria: Version 3.1. Second edition. IUCN, Gland, Switzerland and Cambridge, UK. iv + 32pp.

[⁵]: **Faber-Langendoen, D., Nichols, J., Master, L., Snow, K., Tomaino, A., et al. (2012)**. Evaluaciones de Estado de Conservación de NatureServe: Metodología para Asignación de Rangos  
→ Documento completo: https://www.natureserve.org/sites/default/files/natureserveconservationstatusmethodology_jun12.pdf  
→ Recurso web: https://www.natureserve.org/conservation-status-assessment  
→ Cita: NatureServe. Arlington, VA. 48 pp.

[⁶]: **Alkemade, R., van Oorschot, M., Miles, L., Nellemann, C., Bakkenes, M., & ten Brink, B. (2009)**. GLOBIO3: Un Marco para Investigar Opciones para Reducir la Pérdida de Biodiversidad Terrestre Global  
→ Cita: Ecosystems, 12(3), 374-390  
→ DOI: https://doi.org/10.1007/s10021-009-9229-5

[⁷]: **Schipper, A.M., Bakkenes, M., Meijer, J.R., Alkemade, R., Huijbregts, M.J., Janse, J.H., et al. (2020)**. Proyectando la Integridad de Biodiversidad Terrestre con GLOBIO 4  
→ Cita: Global Change Biology, 26(2), 760-771  
→ DOI: https://doi.org/10.1111/gcb.14848  
→ Texto completo: https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14848

[⁸]: **Modelo GLOBIO - Sitio Web Oficial**  
→ Página principal: https://www.globio.info/what-is-globio  
→ Herramienta web (GLOBIOweb): https://www.globio.info/globioweb  
→ Metodología Abundancia Media de Especies: https://www.globio.info/what-is-globio

[⁹]: **Chaudhary, A., Verones, F., de Baan, L., & Hellweg, S. (2015)**. Cuantificando Impactos del Uso del Suelo en la Biodiversidad: Combinando Modelos de Área-Especies e Indicadores de Vulnerabilidad  
→ Cita: Environmental Science & Technology, 49(16), 9987-9995  
→ DOI: https://doi.org/10.1021/acs.est.5b02507  
→ PubMed: https://pubmed.ncbi.nlm.nih.gov/26197362/

[¹⁰]: **de Baan, L., Curran, M., Rondinini, C., Visconti, P., Hellweg, S., & Koellner, T. (2015)**. Evaluación de Alta Resolución de Impactos del Uso del Suelo en Biodiversidad en Análisis de Ciclo de Vida Usando Modelos de Idoneidad de Hábitat de Especies  
→ Cita: Environmental Science & Technology, 49(4), 2237-2244  
→ DOI: https://doi.org/10.1021/es504380t  
→ PubMed: https://pubmed.ncbi.nlm.nih.gov/25584628/

[¹¹]: **Verones, F., Huijbregts, M.A.J., Chaudhary, A., de Baan, L., Koellner, T., & Hellweg, S. (2015)**. Armonizando la Evaluación de Efectos de Biodiversidad del Uso del Suelo y Agua dentro del ACV  
→ Cita: Environmental Science & Technology, 49(6), 3584-3592  
→ DOI: https://doi.org/10.1021/es504995r  
→ PubMed: https://pubmed.ncbi.nlm.nih.gov/25719255/

[¹²]: **de Baan, L., Mutel, C.L., Curran, M., Hellweg, S., & Koellner, T. (2013)**. Uso del Suelo en Análisis de Ciclo de Vida: Factores de Caracterización Global Basados en Extinción Potencial de Especies Regional y Global  
→ Cita: Environmental Science & Technology, 47(16), 9281
---

[Statistical Weighting Methods for Biodiversity Damage Assessment in Environmental Impact Evaluations](https://claude.ai/public/artifacts/9091ab34-992f-4335-a79c-2e4c8c2db744)

# Statistical Weighting Methods for Biodiversity Damage Assessment in Environmental Impact Evaluations

## Executive Summary

Environmental impact assessments increasingly utilize statistical weighting systems to quantify damage to protected species, habitats, and landscapes. These methodologies assign differential values based on threat status, ecological function, and legal protection levels to create objective, defensible assessments of environmental harm.

---

## 1. Core Weighting Frameworks

### 1.1 IUCN Red List Categories as Baseline Weights

The IUCN Red List provides the foundational hierarchy for weighting species damage:

**Threat Category Weights:**
- **Critically Endangered (CR)**: Highest weight (typically 4.0-5.0)
- **Endangered (EN)**: High weight (3.0-4.0)
- **Vulnerable (VU)**: Moderate-high weight (2.0-3.0)
- **Near Threatened (NT)**: Moderate weight (1.5-2.0)
- **Least Concern (LC)**: Baseline weight (1.0)
- **Data Deficient (DD)**: Variable (1.0-2.0, conservative approach)

**Application:** The Andalusian forests study (Spain) used 224 threatened species with differential weighting based on IUCN categories, resulting in spatially explicit conservation value maps.

### 1.2 Legal Protection Status Multipliers

**European Union Framework:**
- **Habitats Directive Annex II species**: 1.5-2.0x multiplier
- **Birds Directive Annex I species**: 1.5-2.0x multiplier
- **Priority species (*asterisk designation)**: 2.0-3.0x multiplier
- **National catalogues "En Peligro de Extinción"**: 3.0-4.0x multiplier
- **Regional protection only**: 1.2-1.5x multiplier

**Protected Areas Enhancement:**
- Species within **Natura 2000 sites**: +0.5 multiplier
- Species in **ZEPA/SPA** (Special Protection Areas): +0.5-1.0 multiplier
- Species in **SAC** (Special Areas of Conservation): +0.5-1.0 multiplier

---

## 2. Multi-Factor Weighting Systems

### 2.1 Comprehensive Index Framework (Andalusia Model)

This Spanish framework combines multiple factors into a single weighted index:

**Factor 1: Threat Level (40% weight)**
- Based on IUCN categories
- Scores: CR=5, EN=4, VU=3, NT=2, LC=1

**Factor 2: Sensitivity to Disturbance (25% weight)**
- Habitat specificity: 1 (generalist) to 5 (extreme specialist)
- Reproductive rate: 1 (high) to 5 (very low)
- Dispersal capacity: 1 (high mobility) to 5 (sessile/limited)

**Factor 3: Functional Role (20% weight)**
- Keystone species: 5
- Ecosystem engineers: 4
- Dominant species: 3
- Common species: 2
- Rare with minimal function: 1

**Factor 4: Knowledge Level (15% weight)**
- Data quality adjustment factor
- Well-studied: 1.0 (no adjustment)
- Moderate data: 0.8
- Limited data: 0.6
- Minimal data: 0.5 (precautionary reduction)

**Formula:**
```
Species Weight = (Threat × 0.40) + (Sensitivity × 0.25) + (Function × 0.20) + (Knowledge × 0.15)
```

### 2.2 NatureServe Conservation Ranking System

**Eight-Factor Assessment:**

1. **Range Extent**: Score based on total area occupied
2. **Area of Occupancy**: Actual habitat area within range
3. **Population Size**: Number of mature individuals
4. **Number of Occurrences**: Discrete populations
5. **Number with Good Viability**: Viable populations only
6. **Environmental Specificity**: Habitat specialization degree
7. **Threats**: Severity, scope, impact, and timing
8. **Intrinsic Vulnerability**: Species characteristics affecting resilience

**Rank Scale (G1-G5):**
- G1 (Critically Imperiled): Weight = 5.0
- G2 (Imperiled): Weight = 4.0
- G3 (Vulnerable): Weight = 3.0
- G4 (Apparently Secure): Weight = 2.0
- G5 (Secure): Weight = 1.0

---

## 3. Habitat and Landscape Weighting

### 3.1 Habitats of Community Interest (EU)

**Priority Habitats (asterisk *) under Habitats Directive:**
- Weight multiplier: **3.0-4.0x**
- Examples: Priority peatlands, coastal lagoons, active raised bogs

**Non-Priority Annex I Habitats:**
- Weight multiplier: **2.0-2.5x**
- Examples: HIC 4090 (Mediterranean heaths), HIC 9340 (Quercus forests)

**Condition-Based Adjustments:**
- Good conservation status: 1.0x (baseline)
- Poor conservation status: 1.5x
- Bad conservation status: 2.0x
- Deteriorating trend: +0.5x additional

### 3.2 Landscape Features and Cultural Heritage

**Protected Landscape Categories:**
- **UNESCO World Heritage Sites**: 4.0-5.0x
- **Biosphere Reserves**: 3.0-3.5x
- **Geoparks**: 2.5-3.0x
- **Cultural Parks** (Parques Culturales): 2.0-2.5x
- **Nationally protected landscapes**: 1.5-2.0x

**Visual Impact Factors:**
- High visibility (>75% viewshed): 1.5x
- Medium visibility (50-75%): 1.2x
- Low visibility (<50%): 1.0x

---

## 4. Population and Distributional Weights

### 4.1 Endemism and Range Restriction

**Endemic Richness Score:**
- Global endemic (single region): 5.0x
- Regional endemic (multi-region within country): 3.0x
- National endemic: 2.0x
- Locally rare but widespread elsewhere: 1.2x

**Range-Based Vulnerability:**
- Area of Occupancy (AOO) < 10 km²: 4.0x
- AOO 10-100 km²: 3.0x
- AOO 100-2,000 km²: 2.0x
- AOO > 2,000 km²: 1.0x

### 4.2 Population Density Adjustments

**For the Agualobos Case:**
- **Alondra de Dupont**: 21 territories in project area ("La Pernalosa")
  - Regional population: ~2,000-3,000 territories
  - Impact weight: 21/2,500 = 0.84% of regional population
  - With CR multiplier (5.0) = **4.2% weighted impact**

**Calculation Example:**
```
Impact Score = (Local Population / Regional Population) × Threat Weight × Habitat Loss %

For Alondra de Dupont:
= (21 / 2,500) × 5.0 × 0.38 (habitat loss fraction)
= 0.0159 weighted impact units
```

---

## 5. Threat and Pressure Weighting

### 5.1 Direct Mortality Risk

**Collision Risk for Wind Farms (species-specific):**
- **High vulnerability** (vultures, eagles): 3.0-4.0x
  - Buitre leonado: 2-12 deaths/year estimated
  - Weight: 3.5x base mortality
  
- **Moderate vulnerability** (raptors): 2.0-2.5x
  - Milano real: 0.01-0.05 deaths/year
  - Weight: 2.2x base mortality

- **Low vulnerability** (passerines): 1.0-1.5x

### 5.2 Habitat Loss Severity

**Permanent vs. Temporary:**
- **Permanent habitat destruction**: 3.0x
- **Long-term degradation** (>20 years): 2.0x
- **Medium-term disturbance** (5-20 years): 1.5x
- **Temporary construction impacts**: 1.0x

**Habitat Quality Factor:**
- Critical breeding/nesting habitat: 3.0x
- Primary foraging habitat: 2.0x
- Secondary/marginal habitat: 1.0x
- Corridor/connectivity habitat: 2.5x

---

## 6. Cumulative Impact Weighting

### 6.1 Multi-Project Synergistic Effects

**Distance-Decay Function:**
```
Synergy Factor = 1 + Σ(Project_Weight × e^(-distance/threshold))

Where:
- threshold = 5 km for wind farms
- Project_Weight = normalized impact score (0-1)
```

**For Agualobos Context:**
- 53 existing + 16 projected aerogeneradores within 10 km
- 815 existing + 17 projected power line supports
- Synergistic multiplier: **1.8-2.2x** for cumulative assessment

### 6.2 Network Connectivity Impacts

**Red Natura 2000 Connectivity:**
- Project **between two ZEPAs** (as in Agualobos): 2.5-3.0x
- Project adjacent to ZEPA (within 1 km): 1.8-2.0x
- Project near ZEPA (1-5 km): 1.3-1.5x
- No proximity to protected areas: 1.0x

**Corridor Fragmentation:**
- Complete barrier effect: 3.0x
- Partial permeability retained: 1.5x
- Minimal fragmentation: 1.0x

---

## 7. Temporal Weighting Factors

### 7.1 Life Cycle Stage Vulnerability

**Breeding Season Impacts:**
- Critical nesting period: 3.0x
- Breeding season general: 2.0x
- Migration periods: 1.5x
- Non-breeding season: 1.0x

### 7.2 Recovery Timeframes

**Ecological Recovery Potential:**
- Irreversible (>100 years): 4.0x
- Long-term (50-100 years): 3.0x
- Medium-term (20-50 years): 2.0x
- Short-term (5-20 years): 1.5x
- Rapid (<5 years): 1.0x

---

## 8. Integration Models

### 8.1 Mean Species Abundance (MSA) Model

**Internationally Recognized Metric:**
```
MSA = Σ(Species_i Abundance / Reference_Abundance) / Total_Species

Drivers considered:
- Land use change: 30% weight
- Fragmentation: 25% weight
- Climate change: 25% weight
- Infrastructure disturbance: 20% weight
```

**Impact Classification:**
- MSA reduction >80%: **Critical impact** (weight 5.0)
- MSA reduction 60-80%: **Severe impact** (weight 4.0)
- MSA reduction 40-60%: **Major impact** (weight 3.0)
- MSA reduction 20-40%: **Moderate impact** (weight 2.0)
- MSA reduction <20%: **Minor impact** (weight 1.0)

### 8.2 Weight of Evidence (WoE) Framework

**Evidence Quality Scoring:**

**Strength (40% weight):**
- Large magnitude differences: Score 3
- Moderate differences: Score 2
- Small differences: Score 1

**Reliability (35% weight):**
- Peer-reviewed, replicated studies: Score 3
- Single studies, good methodology: Score 2
- Limited or dated studies: Score 1

**Relevance (25% weight):**
- Direct measurement of impact: Score 3
- Proxy indicators: Score 2
- Extrapolated data: Score 1

**Combined Score = (Strength × 0.40) + (Reliability × 0.35) + (Relevance × 0.25)**

---

## 9. Application to Wind Energy Projects

### 9.1 Standard Assessment Matrix for Avifauna

| Species Category | Legal Status Weight | Collision Risk | Habitat Loss | Total Multiplier |
|-----------------|---------------------|----------------|--------------|------------------|
| **CR + Annex I** | 5.0 | 3.5 | 3.0 | **11.5x** |
| **EN + Annex I** | 4.0 | 3.0 | 2.5 | **9.5x** |
| **VU + Annex I** | 3.0 | 2.5 | 2.0 | **7.5x** |
| **VU only** | 2.5 | 2.0 | 1.5 | **6.0x** |
| **NT/LC + Protected** | 1.5 | 1.5 | 1.0 | **4.0x** |

---
<!-- About this frame of the last answer: "## 8. Integration Models
### 8.1 Mean Species Abundance (MSA) Model
**Internationally Recognized Metric:**-->

---

### 9.2 Agualobos Case Study Calculations

**Alondra de Dupont (Chersophilus duponti):**
- **Legal status**: CR in Aragón Catalogue = 5.0
- **Collision risk**: Moderate-high (breeding flights) = 2.8
- **Habitat loss**: 21 territories in direct impact = 3.0
- **ZEPA connectivity**: Between two ZEPAs = 2.5
- **Population significance**: 0.84% of regional = 1.8
- **Knowledge level**: Well-studied = 1.0

**Total Weighted Impact Score: 5.0 × 2.8 × 3.0 × 2.5 × 1.8 × 1.0 = 189.0 units**

**Milano Real (Milvus milvus):**
- **Legal status**: CR in Aragón = 5.0
- **Collision risk**: High (75% flights at risk height) = 3.5
- **Mortality estimate**: 0.01-0.05 deaths/year = 2.0
- **ZEPA connectivity**: Between two ZEPAs = 2.5
- **Knowledge level**: Well-studied = 1.0

**Total Weighted Impact Score: 5.0 × 3.5 × 2.0 × 2.5 × 1.0 = 87.5 units**

**Ganga Ortega (Pterocles orientalis) - Vulnerable:**
- Legal status: VU = 3.0
- Avistamientos: 4 observations (low presence) = 1.5
- ZEPA objective species = 2.0
- Total: **3.0 × 1.5 × 2.0 = 9.0 units**

---

## 10. Decision Thresholds and Impact Categories

### 10.1 Impact Severity Classification

Based on accumulated weighted scores:

| Weighted Score Range | Impact Classification | EIA Recommendation |
|---------------------|----------------------|-------------------|
| **>150 units** | **Critical/Incompatible** | **DIA Desfavorable** |
| **100-150 units** | **Severe** | Substantial mitigation required |
| **50-100 units** | **Major/Moderate** | Significant mitigation measures |
| **25-50 units** | **Moderate** | Standard mitigation acceptable |
| **<25 units** | **Minor/Compatible** | Basic preventive measures |

### 10.2 Agualobos Project Total Assessment

**Summed Weighted Impacts:**
- Alondra de Dupont: 189.0 units (**CRITICAL**)
- Milano Real: 87.5 units (Severe)
- Ganga Ortega: 9.0 units (Moderate)
- Chova piquirroja: 6.5 units (Moderate)
- Alimoche: 5.2 units (Moderate)
- Habitat loss (HIC 4090): 42.0 units (Major)
- Landscape impact: 28.5 units (Moderate)
- ZEPA connectivity: 35.0 units (Major)

**Total Project Score: 402.7 weighted units**

**Result: INCOMPATIBLE - Critical threshold exceeded**

---

## 11. Limitations and Uncertainties

### 11.1 Data Quality Constraints

**Uncertainty Factors:**
- Outdated baseline data (>5 years): Increase precautionary weight by 20%
- Single-season surveys: Reduce confidence by 30%
- Extrapolated distributions: Apply 0.7-0.8 confidence factor
- Cumulative effects: Often underestimated by 50-70%

### 11.2 Methodological Challenges

**Key Issues:**
1. **Incommensurability**: Cannot directly compare fish kills to landscape visual impact
2. **Temporal variability**: Population fluctuations complicate baselines
3. **Synergistic effects**: Non-linear interactions difficult to model
4. **Climate change**: Future conditions add uncertainty
5. **Political vs. scientific**: Weighting can be influenced by policy priorities

---

## 12. Best Practices and Recommendations

### 12.1 Essential Requirements

1. **Transparency**: Document all weighting factors and rationales
2. **Expert Review**: Require independent validation of weights
3. **Precautionary Principle**: When uncertain, apply higher weights
4. **Regular Updates**: Revise weights as new data emerges
5. **Stakeholder Input**: Allow public comment on weighting methodology
6. **Legal Alignment**: Ensure consistency with EU Directives and national laws

### 12.2 Quality Assurance

**Minimum Standards:**
- Multi-year baseline studies (2-3 years)
- Full annual cycle coverage for avifauna
- Peer-reviewed methodologies
- Current distribution data (<3 years old)
- Quantified uncertainty ranges
- Cumulative assessment including all regional projects
- Specific evaluation for Red Natura 2000 connectivity

---

## 13. Conclusions

Statistical weighting systems provide essential objectivity to environmental impact assessments, but they must be:

1. **Scientifically robust**: Based on peer-reviewed methods
2. **Legally defensible**: Aligned with protection frameworks
3. **Precautionary**: Favor conservation when uncertain
4. **Transparent**: Fully documented and reviewable
5. **Context-specific**: Adapted to regional conservation priorities

**For the Agualobos case**, the weighted assessment confirms the DIA Desfavorable decision was scientifically justified, with the Alondra de Dupont impact alone (189.0 units) exceeding critical thresholds, before considering cumulative effects from other species and habitat losses.

The application of these weighting methodologies transforms subjective judgments into quantifiable, defensible metrics that serve both conservation objectives and legal compliance requirements under the EU Habitats and Birds Directives.

---

## References

### Primary Legal and Policy Documents

1. **Council Directive 92/43/EEC** on the conservation of natural habitats and of wild fauna and flora (Habitats Directive)
   - Official text: https://eur-lex.europa.eu/eli/dir/1992/43/oj
   - European Commission page: https://environment.ec.europa.eu/topics/nature-and-biodiversity/habitats-directive_en

2. **Directive 2009/147/EC** on the conservation of wild birds (Birds Directive - codified version)
   - Official text: https://eur-lex.europa.eu/eli/dir/2009/147/oj
   - Summary: https://eur-lex.europa.eu/EN/legal-content/summary/conservation-of-wild-birds.html

3. **Decreto 129/2022, de 5 de septiembre**, del Gobierno de Aragón, por el que se crea el Listado Aragonés de Especies Silvestres en Régimen de Protección Especial y se regula el Catálogo de Especies Amenazadas de Aragón
   - BOA: https://www.boa.aragon.es/

### Conservation Status Assessment Frameworks

4. **IUCN (2001, 2012)**. IUCN Red List Categories and Criteria: Version 3.1, Second Edition
   - Official publication: https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf
   - Main resource page: https://www.iucnredlist.org/resources/categories-and-criteria
   - Citation: IUCN. 2012. IUCN Red List Categories and Criteria: Version 3.1. Second edition. IUCN, Gland, Switzerland and Cambridge, UK. iv + 32pp.

5. **Faber-Langendoen, D., Nichols, J., Master, L., Snow, K., Tomaino, A., et al. (2012)**. NatureServe Conservation Status Assessments: Methodology for Assigning Ranks
   - Full document: https://www.natureserve.org/sites/default/files/natureserveconservationstatusmethodology_jun12.pdf
   - Web resource: https://www.natureserve.org/conservation-status-assessment
   - Citation: NatureServe. Arlington, VA. 48 pp.

### Biodiversity Impact Assessment Models

6. **Alkemade, R., van Oorschot, M., Miles, L., Nellemann, C., Bakkenes, M., & ten Brink, B. (2009)**. GLOBIO3: A Framework to Investigate Options for Reducing Global Terrestrial Biodiversity Loss
   - Citation: Ecosystems, 12(3), 374-390
   - DOI: https://doi.org/10.1007/s10021-009-9229-5

7. **Schipper, A.M., Bakkenes, M., Meijer, J.R., Alkemade, R., Huijbregts, M.J., Janse, J.H., et al. (2020)**. Projecting terrestrial biodiversity intactness with GLOBIO 4
   - Citation: Global Change Biology, 26(2), 760-771
   - DOI: https://doi.org/10.1111/gcb.14848
   - Full text: https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14848

8. **GLOBIO Model - Official Website**
   - Homepage: https://www.globio.info/what-is-globio
   - Web tool (GLOBIOweb): https://www.globio.info/globioweb
   - Mean Species Abundance methodology: https://www.globio.info/what-is-globio

### Land Use Impact Assessment - Life Cycle Assessment

9. **Chaudhary, A., Verones, F., de Baan, L., & Hellweg, S. (2015)**. Quantifying Land Use Impacts on Biodiversity: Combining Species–Area Models and Vulnerability Indicators
   - Citation: Environmental Science & Technology, 49(16), 9987-9995
   - DOI: https://doi.org/10.1021/acs.est.5b02507
   - PubMed: https://pubmed.ncbi.nlm.nih.gov/26197362/

10. **de Baan, L., Curran, M., Rondinini, C., Visconti, P., Hellweg, S., & Koellner, T. (2015)**. High-Resolution Assessment of Land Use Impacts on Biodiversity in Life Cycle Assessment Using Species Habitat Suitability Models
    - Citation: Environmental Science & Technology, 49(4), 2237-2244
    - DOI: https://doi.org/10.1021/es504380t
    - PubMed: https://pubmed.ncbi.nlm.nih.gov/25584628/

11. **Verones, F., Huijbregts, M.A.J., Chaudhary, A., de Baan, L., Koellner, T., & Hellweg, S. (2015)**. Harmonizing the Assessment of Biodiversity Effects from Land and Water Use within LCA
    - Citation: Environmental Science & Technology, 49(6), 3584-3592
    - DOI: https://doi.org/10.1021/es504995r
    - PubMed: https://pubmed.ncbi.nlm.nih.gov/25719255/

12. **de Baan, L., Mutel, C.L., Curran, M., Hellweg, S., & Koellner, T. (2013)**. Land Use in Life Cycle Assessment: Global Characterization Factors Based on Regional and Global Potential Species Extinction
    - Citation: Environmental Science & Technology, 47(16), 9281-9290
    - DOI: https://doi.org/10.1021/es400592q

### Additional Technical Resources

13. **European Environment Agency**. State of Nature in the European Union – Habitats and Species
    - Latest report (2020): https://www.eea.europa.eu/en/topics/at-a-glance/nature/state-of-nature-in-europe-a-health-check
    - Reporting portal: https://www.eea.europa.eu/

14. **European Commission (2016)**. Fitness Check of the EU Nature Legislation (Birds and Habitats Directives)
    - Summary: https://environment.ec.europa.eu/topics/nature-and-biodiversity/habitats-directive_en

15. **ETH Zurich - Ecological Systems Design Group**. Environmental Assessment of Land-Use Related Biodiversity Loss
    - Research page: https://esd.ifu.ethz.ch/research/research-projects/research-and-theses/land-use-impacts-on-biodiversity-lca.html

### Data and Tools

16. **NatureServe Explorer** - Conservation Status Data for Species and Ecosystems
    - Database: https://www.natureserve.org/
    - Data portal: https://explorer.natureserve.org/

17. **SpatiaFi Data Catalog** - Mean Species Abundance Global Data
    - MSA Historical Baseline: https://data.spatiafi.com/dataset/spatiafi-biodiversity-msa-historical-baseline-v1.0
    - MSA Projections: https://data.spatiafi.com/dataset/spatiafi-biodiversity-msa-projections-v1.0

18. **IPBES (Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services)**
    - MSA metadata: https://files.ipbes.net/ipbes-web-prod-public-files/Metadata_Alkemade_et_al_2009_Mean_Species_Abundance.pdf

### Spanish Environmental Assessment Context

19. **BOA (Boletín Oficial de Aragón)** - Official gazette for regional legislation
    - Website: https://www.boa.aragon.es/

20. **INAGA (Instituto Aragonés de Gestión Ambiental)** - Regional environmental management authority
    - Responsible for Environmental Impact Assessments in Aragón

---

**Note on Methodology Application**: The weighting systems described in this report are based on peer-reviewed scientific literature and internationally recognized conservation frameworks. The application to the Agualobos wind farm case study demonstrates how these standardized methods provide objective, quantifiable support for environmental impact decisions under EU and Spanish law.

# Análisis de la Resolución - Parque Eólico "Agualobos"

## Elementos Clave que Fundamentan el Rechazo

### 1. **Descripción del Proyecto**

**Características técnicas:**
- 12 aerogeneradores Vestas V150 (4.0-4.2 MW)
- Altura de buje: 105 m, diámetro rotor: 150 m
- Línea subterránea MT: 9.863 m
- Viales: 12.149 m (4.101 m nuevos)
- Subestación transformadora 220/20 kV
- Superficie ocupada: 19,42 ha
- Excavación: 115.730 m³

**Ubicación crítica:**
- Entre dos ZEPAs (Parameras de Campo Visiedo y Parameras de Alfambra)
- Parque Cultural del Maestrazgo
- Parque Cultural del Chopo Cabecero
- Parque Paleontológico de Galve

---

### 2. **Tramitación - Consultas y Alegaciones**

**Organismos consultados con respuestas significativas:**
- **Dirección General de Ordenación del Territorio**: Solicitó valoración de efectos acumulativos y actualización del estudio de avifauna (datado en 2007)
- **Consejo de Ordenación del Territorio**: Preocupación por efectos sobre paisaje y necesidad de actualizar estudios
- **CHJ**: Requerimientos sobre protección de cauces
- **INAGA**: Afección a vías pecuarias y monte consorciado
- **Cellnex**: Oposición por afectación a servicios de TDT (584 habitantes afectados)

**Alegaciones recibidas:**
- Ecologistas en Acción Otus: Fraccionamiento de proyectos, sinergias no evaluadas
- SECEMU: Carencias en estudio de quirópteros
- Asociación Teruel Existe: Estudios obsoletos y deficientes
- Plataforma Paisajes de Teruel: Impactos críticos sobre paisaje

---

### 3. **Alternativas Estudiadas**

**Alternativa 0 (No ejecución):**
- No se generarían impactos ambientales
- Se perdería aprovechamiento de energías renovables

**Alternativa I:**
- 12 aerogeneradores en cabecera de barrancos
- Distancia mínima ZEPA: 1 km
- Afección a HIC 4090 (5 aerogeneradores) y HIC 9340 (6 aerogeneradores)

**Alternativa II (Seleccionada):**
- 12 aerogeneradores
- Distancia mínima ZEPA: 818 m (Parameras Campo Visiedo) y 1 km (Parameras Alfambra)
- Menor afección a HIC: 4090 (2 aerogeneradores) y HIC 9340 (1 aerogenerador)
- **Problema crítico**: 10 aerogeneradores dentro del ámbito del plan de conservación de Al-Arba

---

### 4. **Impactos sobre Espacios Protegidos y Red Natura 2000**

#### **Afección directa a ZEPA:**

- **ZEPA ES0000304 "Parameras de Campo Visiedo"**: Apertura de 135 m nuevo acceso + 1.098 m mejora camino
- **ZEPA ES0000305 "Parameras de Alfambra"**: Aerogeneradores a 750-970 m

#### **Especies objetivo de las ZEPAs afectadas:**

- **Alondra de Dupont** (*Chersophilus duponti*) - **EN PELIGRO DE EXTINCIÓN**
- Ganga ortega (*Pterocles orientalis*) - Vulnerable
- Terrera común (*Calandrella brachydactyla*)
- Aguilucho cenizo (*Circus pygargus*)
- Sisón común (*Tetrax tetrax*)

#### **Afección crítica a población de Alondra de Dupont:**

- **21 territorios detectados** en área "La Pernalosa"
- **9 aerogeneradores proyectados** en esta área crítica
- Segunda área crítica ("La Iranza") a solo 780 m
- Riesgo de colisión en vuelos de marcaje territorial
- Fragmentación del hábitat de especie catalogada "En Peligro de Extinción"

#### **Otras especies catalogadas detectadas:**

**En Peligro de Extinción:**
- Milano real (*Milvus milvus*): 9 avistamientos, 75% vuelos a altura de riesgo

**Vulnerables:**
- Aguilucho cenizo (*Circus pygargus*): 6 avistamientos
- Alimoche (*Neophron percnopterus*): 13 avistamientos
- Chova piquirroja (*Pyrrhocorax pyrrhocorax*): 65 ejemplares
- Ganga ortega (*Pterocles orientalis*): 4 avistamientos
- Quirópteros: *Rhinolophus ferrumequinum*, *R. hipposideros*, *Myotis myotis*, *Miniopterus schreibersii*

**Estimación siniestralidad:**
- Buitre leonado: 2-12 bajas/año
- Milano real: 0,01-0,05 bajas/año
- Impacto inicial por colisión: **SEVERO**

#### **Afección a Hábitats de Interés Comunitario:**

- **HIC 4090** "Brezales oromediterráneos endémicos con aliaga": 8,31 ha afectadas
- **HIC 9340** "Bosques de *Quercus ilex* y *Q. rotundifolia*": afección puntual
- **Problema**: La restauración prevista (hidrosiembra + aliaga/tomillo) no corresponde con especies características de estos HIC

#### **Planes de protección afectados:**

- Plan de Recuperación del cangrejo de río (*Austropotamobius pallipes*): 100% instalaciones
- Plan de Conservación de Al-Arba (*Krascheninnikovia ceratoides*): 10 de 12 aerogeneradores
- Ámbito potencial Plan de Recuperación especies esteparias: distancia mínima 1.130 m
- Ámbito potencial Plan de Conservación alondra ricotí: 9 de 12 aerogeneradores

#### **Compromiso de conectividad Red Natura 2000:**

La resolución establece que el parque **compromete la conectividad ecológica** entre las dos ZEPAs, actuando como barrera para especies compartidas (alondra de Dupont, ganga ortega, terrera común) y poniendo en riesgo **la integridad de la Red Natura 2000**.

---

## Motivos Principales del Rechazo

### 1. **Incompatibilidad con conservación de alondra de Dupont**

- Especie "En Peligro de Extinción"
- 9 aerogeneradores en área con 21 territorios
- Riesgo de colisión + fragmentación de hábitat
- Incompatible con objetivos del futuro Plan de Recuperación

### 2. **Impacto significativo sobre avifauna y quirópteros catalogados**

- Múltiples especies En Peligro y Vulnerables
- Estimación de mortalidad severa
- Degradación de hábitats esteparios

### 3. **Afección a objetivos de conservación de Red Natura 2000**

- Compromiso de conectividad entre ZEPAs
- Afección a especies objetivo esenciales
- Riesgo para integridad de la Red

### 4. **Impacto paisajístico crítico**

- Visibilidad desde 75,78% del área en radio 10 km
- Zona poco antropizada con valores culturales
- Afección a 2 Parques Culturales
- Calidad paisajística media-alta a alta

### 5. **Ausencia de alternativas viables**

- No se contemplan alternativas que minimicen impactos
- Reubicación dentro de poligonal considerada improbable

---

## Aplicación del Principio de Cautela

La resolución concluye que las medidas correctoras propuestas **no pueden asegurar la compatibilidad** del proyecto con la conservación de los valores naturales, aplicando el principio de cautela ante:

- Especies catalogadas En Peligro de Extinción
- Integridad de espacios Red Natura 2000
- Conectividad ecológica
- Valores paisajísticos y culturales singulares

**Resultado: Declaración de Impacto Ambiental DESFAVORABLE e INCOMPATIBLE**