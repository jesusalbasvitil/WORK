`Arboretum.md` v10 [Cgll]
[Distribución de especies arbóreas por orientación](https://claude.ai/share/80d739cf-b832-4df3-a923-de121ec0db15)
<!--Finally we have 116 specimens of trees and range (+): stripe 1, 5 (+5); stripe 2, 10 (+7); stripe 3, 25; stripe 4, 33; stripe 5, 24 and stripe 6, 19. Redistribute species with this number of specimens each stripe

Calculate with the maximum range

Sustituye la orientación de cada banda por la proyección de sombra predominante: franja 1 W; f2 NE; f3 S; f4 N; f5, N y f6 N. Además, elimina la longitud

Hay que concentrar las especies del grupo R (rápido) en la franja 1 y 3, el grupo LR (menos rápido) en 4, 5 y 2; y 6 resto

Determinar por especies la altura media de cada una e incorporar a los listados. Después, clasificar en una tabla, por grupos de crecimiento y altura
-->
Primero, voy a determinar la altura media de cada especie basándome en los datos proporcionados:

## Tabla con altura media por especie:

```markdown
| Nombre Común | Nombre Científico | Velocidad de Crecimiento | Altura Media (cm) | Cantidad |
|--------------|-------------------|--------------------------|-------------------|----------|
| Almez | *Celtis australis* | LR (Menos rápido) | 600 | 9 |
| Olmo | *Ulmus minor* | LR (Menos rápido) | 500 | 9 |
| Chopo negro | *Populus nigra* | R (Rápido) | 1000 | 9 |
| Arce de Montpellier | *Acer monspessulanum* | VL (Muy lento) | 600 | 6 |
| Serbal doméstico | *Sorbus domestica* | LR (Menos rápido) | 600 | 9 |
| Pino carrasco | *Pinus halepensis* | R (Rápido) | 300 | 9 |
| Roble peludo | *Quercus pubescens* | VL (Muy lento) | 600 | 7 |
| Quejigo | *Quercus faginea* | L (Lento) | 550 | 6 |
| Aliso | *Alnus glutinosa* | R (Rápido) | 1000 | 9 |
| Nogal | *Juglans regia* | R (Rápido) | 800 | 9 |
| Almendro | *Prunus dulcis* | R (Rápido) | 350 | 9 |
| Manzano | *Malus domestica* | R (Rápido) | 800 | 9 |
| Madroño | *Arbutus unedo* | VL (Muy lento) | 600 | 8 |
| Fresno | *Fraxinus angustifolia* | R (Rápido) | 800 | 9 |
| Morera | *Morus alba* | LR (Menos rápido) | 600 | 9 |
```

## Clasificación por grupos de crecimiento y altura:

```markdown
| Grupo de Crecimiento | Rango de Altura | Especies | Cantidad Total |
|---------------------|-----------------|----------|----------------|
| **VL (Muy lento)** | 600 cm | Arce de Montpellier, Roble peludo, Madroño | 21 |
| **L (Lento)** | 550 cm | Quejigo | 6 |
| **LR (Menos rápido)** | 300-600 cm | Olmo (500), Almez (600), Serbal doméstico (600), Morera (600) | 36 |
| **R (Rápido)** | 300-1000 cm | Pino carrasco (300), Almendro (350), Nogal (800), Manzano (800), Fresno (800), Chopo negro (1000), Aliso (1000) | 63 |
```

## Clasificación detallada por altura:

```markdown
| Categoría de Altura | Altura (cm) | Especies | Grupo de Crecimiento | Cantidad |
|---------------------|-------------|----------|---------------------|----------|
| **Baja** | 300-400 | Pino carrasco (300), Almendro (350) | R | 18 |
| **Media** | 500-600 | Olmo (500), Quejigo (550), Almez (600), Arce de Montpellier (600), Serbal doméstico (600), Roble peludo (600), Madroño (600), Morera (600) | VL, L, LR | 65 |
| **Alta** | 800-1000 | Nogal (800), Manzano (800), Fresno (800), Chopo negro (1000), Aliso (1000) | R | 45 |
```

## Tabla de distribución por franjas CON altura media:

```markdown
| Franja | Proyección de Sombra | Árboles | Distribución de Especies (Altura media cm) |
|--------|---------------------|---------|---------------------------------------------|
| **Franja 1** | W (Oeste) | 10 | Chopo negro-1000 (2), Pino carrasco-300 (1), Aliso-1000 (1), Nogal-800 (1), Almendro-350 (1), Manzano-800 (2), Fresno-800 (2) |
| **Franja 2** | NE (Noreste) | 17 | Almez-600 (5), Olmo-500 (4), Serbal doméstico-600 (4), Morera-600 (4) |
| **Franja 3** | S (Sur) | 25 | Fresno-800 (4), Chopo negro-1000 (4), Nogal-800 (4), Almendro-350 (4), Pino carrasco-300 (5), Aliso-1000 (4) |
| **Franja 4** | N (Norte) | 33 | Almez-600 (4), Olmo-500 (5), Serbal doméstico-600 (5), Morera-600 (5), Chopo negro-1000 (3), Pino carrasco-300 (3), Aliso-1000 (4), Manzano-800 (4) |
| **Franja 5** | N (Norte) | 24 | Fresno-800 (3), Nogal-800 (4), Almendro-350 (4), Manzano-800 (3), Madroño-600 (3), Roble peludo-600 (3), Arce de Montpellier-600 (2), Quejigo-550 (2) |
| **Franja 6** | N (Norte) | 19 | Madroño-600 (5), Roble peludo-600 (4), Arce de Montpellier-600 (4), Quejigo-550 (4), Serbal doméstico-600 (0), Morera-600 (0), Almez-600 (0), Olmo-500 (0) |
| **TOTAL** | | **128** | |
```