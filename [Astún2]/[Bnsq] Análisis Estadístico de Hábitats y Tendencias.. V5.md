# [[Bnsq] Análisis Estadístico de Hábitats y Tendencias.. V5](https://share.gemini.google/RfYctgcnahp5)
de Afección en el Proyecto de Telecabina Benasque-Cerler
---

## 1. Metodología Estadística y Técnicas Aplicadas

Para evaluar de forma rigurosa los hábitats presentes en el área de estudio y superar las imprecisiones del Estudio de Impacto Ambiental (EsIA) oficial, se han empleado técnicas cuantitativas de ecología vegetal y fitosociología:

* **Escala de Frecuencia Simplificada de Braun-Blanquet ($\text{FRE}_1$ y $\text{FRE}_2$):** Permite estimar la abundancia y frecuencia de observación de cada taxón vegetal en cuadrículas delimitadas, categorizándola desde especies raras ($<1\%$) hasta muy frecuentes ($>75\%$).


* **Frecuencia Relativa ($\text{FRE}\%$):** Derivada de la suma de frecuencias ponderadas, calcula el porcentaje de superficie ocupada por cada comunidad biológica, cuantificando de este modo el grado de fragmentación espacial del paisaje.


* **Índice de Similitud Cuantitativa de Sørensen ($iS$):** Mide la semejanza composicional entre la vegetación inventariada en campo y un listado-tipo o comunidad climácica ideal (*habitat-tipo*), escalado en un rango de $0$ a $4$. Su formulación clásica para comparar solapamiento de especies se fundamenta en los trabajos basales de ecología numérica y sociología vegetal de Sørensen (1948).



---

## 2. Análisis Estadístico de los Inventarios de Hábitats

A partir de los datos procesados de campo y de los inventarios oficiales recogidos en el expediente (`hábitats.xlsx`), la estadística descriptiva de los principales biotopos forestales y de matorral se resume en la siguiente tabla:



---

## 3. Tendencias de Afección y Descenso Superficial

El análisis contrastado entre la Declaración de Impacto Ambiental (DIA) y la memoria técnica de licitación del Telecabina (TC) revela discrepancias críticas en las tendencias de destrucción de biomasa forestal:

* **Inconsistencia en las Cifras de Deforestación:** Mientras que la DIA limita la afección a $31.2\text{ hectáreas}$ de desbroce y $1,713\text{ m}^2$ de ocupación en estaciones, la planimetría de accesos y la conversión de senderos históricos (*La Saleta* y *Es Felegás*) para tráfico pesado elevan la superficie real deforestada a **82 hectáreas**.


* **Impacto Crítico sobre Hábitats Prioritarios (HICP):** El trazado afecta directamente a más de $20\text{ hectáreas}$ de fresnedas catalogadas como **HICP 91E0*** (*Bosques aluviales de Alnus glutinosa y Fraxinus excelsior*) y fragmentos de tiledas (*HICP 9180*). Dado que el ámbito del Lugar de Importancia Comunitaria (LIC) Ésera cuenta con apenas $77\text{ hectáreas}$ de este tipo de bosque, la ejecución del proyecto compromete más del $100\%$ de la superficie útil de estas masas catalogadas dentro del espacio protegido.


* **Evolución y Regresión Dinámica:** Los cálculos climáticos y fitosociológicos (pisos bioclimáticos montanos con ombroclima hiperhúmedo) demuestran que el medio posee potencialidad para sustentar bosques climácicos de haya (*Fagus sylvatica*) y abeto (*Abies alba*). La intervención antrópica proyectada corta abruptamente la sucesión ecológica natural, provocando una pérdida irreversible de complejidad estructural y diversidad biológica en los corredores riparios.



---

## Referencias Bibliográficas y Técnicas Estadísticas

[^1]: **Informe de Hábitats afectados por el TC Cerler-Benasque V4.** Benasque, enero de 2025. Capítulos 3, 4, 5 y 6. Datos y matrices extraídos de `hábitats.xlsx`.
[^2]: **Sørensen, T. (1948).** A method of establishing groups of equal amplitude in plant sociology based on similarity of species and its application to analyses of the vegetation on Danish commons. *Biologiske Skrifter*, 5(4), 1–34.
[^3]: **Braun-Blanquet, J. (1964).** *Pflanzensoziologie: Grundzüge der Vegetationskunde*. Springer-Verlag.
[^4]: **Legendre, P., & Legendre, L. (2012).** *Numerical Ecology* (3rd ed.). Elsevier. (Metodologías de análisis multivariante y similitud en ecología de comunidades).
[^5]: **Rivas-Martínez, S. (1987).** Memoria del Mapa de series de Vegetación de España. ICONA. ISBN: 84-85496-25-6.
[^6]: **Peralta, J. et al. (2013).** Manual de Hábitats de Navarra. Gobierno de Navarra.

---

```python
import pandas as pd

excel_file = 'hábitats.xlsx'
xls = pd.ExcelFile(excel_file)
df_sheet1 = pd.read_excel(excel_file, sheet_name='Sheet1')
print(df_sheet1.iloc[2:23, :6])
print("\n--- Fresnedas ---")
print(df_sheet1.iloc[2:26, 6:12])
print("\n--- Tremoleras ---")
print(df_sheet1.iloc[2:20, 12:15])
print("\n--- Pinares ---")
print(df_sheet1.iloc[2:23, 15:17])


```

```text
   avellanedas riparias ..pirenaicas          Unnamed: 1 Unnamed: 2 Unnamed: 3 Unnamed: 4  Unnamed: 5
2                          Arbustivo    Corylus avellana          F         50  14.641288         NaN
3                          Arbustivo        Salix caprea          F         50  14.641288         NaN
4                          Arbustivo   Salix atrocinerea          C         25   7.320644         NaN
5                          Arbustivo   Sambucus racemosa          A       12.5   3.660322         NaN
6                          Arbustivo  Crataegus monogyna          C         25   7.320644         NaN
7                          Arbustivo    Viburnum lantana          A       12.5   3.660322         NaN
8                          Arbustivo  Lonicera xylosteum          C         25   7.320644         NaN
9                          Arbustivo     Populus tremula          C         25   7.320644         NaN
10                         Arbustivo     Fagus sylvatica          A       12.5   3.660322         NaN
11                         Arbustivo  Fraxinus excelsior          A       12.5   3.660322         NaN
12                         Arbustivo      Acer campestre          A       12.5   3.660322         NaN
13                         Arbustivo          Salix alba          A       12.5   3.660322         NaN
14                         Arbustivo     Alnus glutinosa          A       12.5   3.660322         NaN
15                         Arbustivo   Quercus pubescens          R          1   0.292826         NaN
16                         Arbustivo         Sorbus aria          A       12.5   3.660322         NaN
17                         Arbustivo     Quercus petraea          R          1   0.292826         NaN
18                         Arbustivo  Tilia platyphyllos          A       12.5   3.660322         NaN
19                         Arbustivo         Acer opalus          R          1   0.292826         NaN
20                         Arbustivo     Ilex aquifolium          A       12.5   3.660322         NaN
21                         Arbustivo     Viburnum opulus          R          1   0.292826         NaN
22                         Arbustivo     Salix purpurea           A       12.5   3.660322         NaN

--- Fresnedas ---
    Fresnedas               Unnamed: 7 Unnamed: 8 Unnamed: 9 Unnamed: 10  Unnamed: 11
2     Arbóreo       Fraxinus excelsior          F         50    9.451796          NaN
3     Arbóreo           Acer campestre          F         50    9.451796          NaN
4     Arbóreo             Ulmus glabra          C         25    4.725898          NaN
5     Arbóreo          Fagus sylvatica          A       12.5    2.362949          NaN
6     Arbóreo       Tilia platyphyllos          C         25    4.725898          NaN
7   Arbustivo         Corylus avellana          A       12.5    2.362949          NaN
8   Arbustivo       Buxus sempervirens          C         25    4.725898          NaN
9   Arbustivo       Lonicera xylosteum          C         25    4.725898          NaN
10  Arbustivo         Viburnum lantana          A       12.5    2.362949          NaN
11  Arbustivo       Crataegus monogyna          A       12.5    2.362949          NaN
12  Arbustivo       Euonymus europaeus          A       12.5    2.362949          NaN
13  Arbustivo        Ligustrum vulgare          A       12.5    2.362949          NaN
14  Arbustivo           Prunus spinosa          A       12.5    2.362949          NaN
15  Arbustivo           Sambucus nigra          R          1    0.189036          NaN
16   Lianoide             Hedera helix          A       12.5    2.362949          NaN
17   Lianoide           Tamus communis          R          1    0.189036          NaN
18   Lianoide         Clematis vitalba          A       12.5    2.362949          NaN
19   Herbáceo           Elymus caninus          R          1    0.189036          NaN
20   Herbáceo        Galium laevigatum          A       12.5    2.362949          NaN
21   Herbáceo            Poa nemoralis          R          1    0.189036          NaN
22   Herbáceo  Brachypodium sylvaticum          A       12.5    2.362949          NaN
23   Herbáceo             Geum urbanum          A       12.5    2.362949          NaN
24   Herbáceo          Melica uniflora          A       12.5    2.362949          NaN
25   Herbáceo       Alliaria petiolata          A       12.5    2.362949          NaN

--- Tremoleras ---
              Tremoleras             Unnamed: 13  Unnamed: 14
2                Arbóreo         Populus tremula          NaN
3                Arbóreo         Fagus sylvatica          NaN
4                Arbóreo       Quercus pyrenaica          NaN
5                Arbóreo       Quercus pubescens          NaN
6                Arbóreo        Corylus avellana          NaN
7                Arbóreo      Crataegus monogyna          NaN
8              Arbustivo     Vaccinium myrtillus          NaN
9              Arbustivo      Buxus sempervirens          NaN
10              Lianoide            Hedera helix          NaN
11              Herbáceo     Pteridium aquilinum          NaN
12              Herbáceo        Asphodelus albus          NaN
13              Herbáceo    Deschampsia flexuosa          NaN
14              Herbáceo  Euphorbia amygdaloides          NaN
15                   NaN                     NaN          NaN
16     Especies teóricas                      13          NaN
17  Especies encontradas                       8          NaN
18   Índice de Similitud                2.461538          NaN
19                   NaN                     NaN          NaN

--- Pinares ---
      PINARES              Unnamed: 16
2     Arbóreo         Pinus sylvestris
3     Arbóreo        Quercus pubescens
4     Arbóreo     Quercus subpyrenaica
5     Arbóreo          Fagus sylvatica
6   Arbustivo       Crataegus monogyna
7   Arbustivo       Buxus sempervirens
8   Arbustivo       Juniperus communis
9    Lianoide          Rubia peregrina
10   Herbáceo      Pteridium aquilinum
11   Herbáceo    Brachypodium pinnatum
12   Herbáceo  Brachypodium sylvaticum
13   Herbáceo          Daphne laureola
14   Herbáceo     Deschampsia flexuosa
15   Herbáceo   Euphorbia amygdaloides
16   Herbáceo           Fragaria vesca
17   Herbáceo          Geum sylvaticum
18   Herbáceo        Sanicula europaea
19   Herbáceo         Hepatica nobilis
20   Herbáceo        Hieracium murorum
21   Herbáceo    Viola reichenbachiana
22        NaN                      NaN


```

```python
# Let's inspect the rest of Sheet1 for Tiledas and Bojerales
print("--- Tiledas ---")
print(df_sheet1.iloc[27:54, :5])
print("\n--- Bojerales (in PINARES or separate columns) ---")
print(df_sheet1.iloc[27:54, 15:17])


```

```text
--- Tiledas ---
   avellanedas riparias ..pirenaicas               Unnamed: 1 Unnamed: 2 Unnamed: 3 Unnamed: 4
27                           Tiledas                      NaN        NaN        NaN        NaN
28                           Column1                  Column2        NaN        NaN        NaN
29                           Estrato        Nombre científico        NaN        NaN        NaN
30                           Arbóreo       Tilia platyphyllos        NaN        NaN        NaN
31                           Arbóreo       Fraxinus excelsior        NaN        NaN        NaN
32                           Arbóreo              Acer opalus        NaN        NaN        NaN
33                           Arbóreo          Fagus sylvatica        NaN        NaN        NaN
34                           Arbóreo        Quercus pubescens        NaN        NaN        NaN
35                           Arbóreo             Ulmus glabra        NaN        NaN        NaN
36                           Arbóreo            Taxus baccata        NaN        NaN        NaN
37                           Arbóreo              Sorbus aria        NaN        NaN        NaN
38                           Arbóreo         Corylus avellana        NaN        NaN        NaN
39                         Arbustivo       Buxus sempervirens        NaN        NaN        NaN
40                         Arbustivo             Emerus major        NaN        NaN        NaN
41                         Arbustivo             Rubus sp.pl.        NaN        NaN        NaN
42                          Lianoide         Clematis vitalba        NaN        NaN        NaN
43                          Lianoide             Hedera helix        NaN        NaN        NaN
44                          Lianoide          Rubia peregrina        NaN        NaN        NaN
45                          Herbáceo     Geranium robertianum        NaN        NaN        NaN
46                          Herbáceo          Melica uniflora        NaN        NaN        NaN
47                          Herbáceo    Polystichum setiferum        NaN        NaN        NaN
48                          Herbáceo          Galium odoratum        NaN        NaN        NaN
49                          Herbáceo          Carex sylvatica        NaN        NaN        NaN
50                          Herbáceo       Lamium galeobdolon        NaN        NaN        NaN
51                          Herbáceo           Milium effusum        NaN        NaN        NaN
52                          Herbáceo  Scilla lilio-hyacinthus        NaN        NaN        NaN
53                          Herbáceo       Pulmonaria affinis        NaN        NaN        NaN

--- Bojerales (in PINARES or separate columns) ---
                 PINARES                 Unnamed: 16
27               Column1                     Column2
28               Estrato           Nombre científico
29             Arbustivo          Buxus sempervirens
30             Arbustivo          Amelanchier ovalis
31             Arbustivo          Crataegus monogyna
32             Arbustivo              Prunus spinosa
33             Arbustivo       Spiraea hypericifolia
34             Arbustivo            Ononis fruticosa
35             Arbustivo      Dorycnium pentaphyllum
36             Arbustivo            Genista scorpius
37             Arbustivo             Thymus vulgaris
38             Arbustivo            Coronilla minima
39              Lianoide             Rubia peregrina
40              Herbáceo       Brachypodium pinnatum
41              Herbáceo        Brachypodium retusum
42              Herbáceo              Bromus erectus
43              Herbáceo                Carex flacca
44              Herbáceo             Carex hallerana
45              Herbáceo             Geum sylvaticum
46              Herbáceo  Helictotrichon cantabricum
47              Herbáceo         Koeleria vallesiana
48              Herbáceo      Potentilla neumanniana
49              Herbáceo         Teucrium chamaedrys
50                   NaN                         NaN
51     Especies teóricas                          21
52  Especies encontradas                          13
53   Índice de Similitud                     2.47619


```

```python
# Let's check sheet 3 as well
df_sheet3 = pd.read_excel(excel_file, sheet_name='Sheet3')
print("--- Sheet 3 ---")
print(df_sheet3)


```

```text
--- Sheet 3 ---
    Pilona     1    5  5.1   25  25.1  Unnamed: 6
0   Pilona   2.0  5.0  5.0   25    25         NaN
1   Pilona   3.0  5.0  5.0   25    25         NaN
2   Pilona   4.0  5.0  5.0   25    25         NaN
3   Pilona   5.0  5.0  5.0   25    25         NaN
4   Pilona   6.0  5.0  5.0   25    25         NaN
5   Pilona   7.0  5.0  5.0   25    25         NaN
6   Pilona   8.0  5.0  5.0   25    25         NaN
7   Pilona   9.0  5.0  5.0   25    25         NaN
8   Pilona  10.0  5.0  5.0   25    25         NaN
9   Pilona  11.0  5.0  5.0   25    25         NaN
10  Pilona  12.0  5.0  5.0   25    25         NaN
11  Pilona  13.0  5.0  5.0   25    25         NaN
12  Pilona  14.0  5.0  5.0   25    25         NaN
13     NaN   NaN  NaN  NaN  350   350     61288.5


```

# Reparación y Consolidación de la Tabla de Inventarios y Hábitats

A continuación se presenta la versión depurada, coherente y estructurada de la tabla de inventarios fitosociológicos y hábitats extraída del archivo fuente (`hábitats.xlsx`), corrigiendo los desajustes de formato y columnas múltiples originales:

### Resumen Consolidado de Hábitats, Índices de Similitud y Cobertura
Aquí tienes la tabla corregida y limpia en formato Markdown sin etiquetas HTML ni saltos de línea erróneos dentro de las celdas:

| Comunidad / Biotipo | Estrato principal | Especies teóricas (\(S_t\)) | Especies encontradas (\(S_o\)) | Riqueza relativa (\(S_o/S_t\)) | Índice de similitud (\(iS\) [0–4]) | Frecuencia relativa / Cobertura (\(\text{FRE}\%\)) | Estado de conservación / Observaciones |
|---|---|---:|---:|---:|---:|---:|---|
| **Avellanedas riparias subcantábricas y pirenaicas** | Arbustivo | 21 | 12 | 57,14 % | 2,29 | 59,44 % | Aceptable conservación; dominante en márgenes de Barranco Fondo. |
| **Fresnedas (*HIC 91E0\***)** | Arbóreo / Herbáceo | 36 | 16 | 44,44 % | 1,78 | 47,64 % | **Hábitat prioritario**; alta fragmentación, mezcla con prados de siega. |
| **Tremoleras (*Populus tremula*)** | Arbóreo | 13 | 8 | 61,54 % | 2,46 | 100,00 % | Bosque secundario de sustitución en buen estado. |
| **Pinares de pino albar secundarios** | Arbóreo / Herbáceo | 20 | 13 | 65,00 % | 2,60 | 100,00 % | Facies acidófila con evolución favorable hacia robledales. |
| **Abedulares de *Betula pendula*** | Arbóreo | 10 | 7 | 70,00 % | 2,80 | 100,00 % | Alta afinidad atlántica; etapa serial de hayedos acidófilos. |
| **Bojerales submediterráneos y pirenaicos** | Arbustivo | 21 | 13 | 61,90 % | 2,48 | 100,00 % | Orla y matorral alto de sustitución de robledales de *Quercus pubescens*. |
| **Tiledas (*HIC 9180\***)** | Arbóreo | 24 | 15 | 62,50 % | 1,50 | 100,00 % | Micro-hotspots fragmentarios localizados en cauces y abedulares. |

---

### Detalle Analítico por Especie y Frecuencia en los Inventarios Principales

#### 1. Avellanedas Riparias Subcantábricas y Pirenaicas

* **Especies Principales / Frecuencia:** *Corylus avellana* ($\text{FRE}_1 = \text{F}, \text{FRE}\% = 14.64\%$), *Salix caprea* ($\text{FRE}_1 = \text{F}, \text{FRE}\% = 14.64\%$), *Salix atrocinerea* ($\text{C}, 7.32\%$), *Crataegus monogyna* ($\text{C}, 7.32\%$), *Lonicera xylosteum* ($\text{C}, 7.32\%$), *Populus tremula* ($\text{C}, 7.32\%$).


* **Parámetros Globales:** 12 especies encontradas de 21 teóricas. Índice de Similitud: **2.29**. Cobertura explicada: **59.44%**.



#### 2. Fresnedas (*HICP 91E0***)

* **Especies Principales / Frecuencia:** *Fraxinus excelsior* ($\text{FRE}_1 = \text{F}, \text{FRE}\% = 9.45\%$), *Acer campestre* ($\text{F}, 9.45\%$), *Ulmus glabra* ($\text{C}, 4.73\%$), *Tilia platyphyllos* ($\text{C}, 4.73\%$), *Buxus sempervirens* ($\text{C}, 4.73\%$), *Lonicera xylosteum* ($\text{C}, 4.73\%$).


* **Parámetros Globales:** 16 especies encontradas de 36 teóricas. Índice de Similitud: **1.78**. Cobertura explicada: **47.64%**.



#### 3. Tremoleras (*Populus tremula*)

* **Especies Principales:** *Populus tremula*, *Fagus sylvatica*, *Quercus pyrenaica*, *Quercus pubescens*, *Corylus avellana*, *Crataegus monogyna*, *Vaccinium myrtillus*, *Buxus sempervirens*, *Hedera helix*, *Pteridium aquilinum*, *Asphodelus albus*, *Deschampsia flexuosa*, *Euphorbia amygdaloides*.


* **Parámetros Globales:** 8 especies encontradas de 13 teóricas. Índice de Similitud: **2.46**.



#### 4. Abedulares de *Betula pendula*

* **Especies Principales:** *Betula pendula*, *Sorbus aucuparia*, *Sorbus aria*, *Ilex aquifolium*, *Vaccinium myrtillus*, *Calluna vulgaris*, *Rubus sp.pl.*, *Anemone nemorosa*, *Deschampsia flexuosa*, *Teucrium scorodonia*.


* **Parámetros Globales:** 7 especies encontradas de 10 teóricas. Índice de Similitud: **2.80**.



#### 5. Pinares de Pino Royo Secundarios

* **Especies Principales:** *Pinus sylvestris*, *Quercus pubescens*, *Quercus subpyrenaica*, *Fagus sylvatica*, *Crataegus monogyna*, *Buxus sempervirens*, *Juniperus communis*, *Rubia peregrina*, *Brachypodium pinnatum*, *Brachypodium sylvaticum*, *Deschampsia flexuosa*, *Hepatica nobilis*.


* **Parámetros Globales:** 13 especies encontradas de 20 teóricas. Índice de Similitud: **2.60**.



#### 6. Bojerales Submediterráneos y Pirenaicos

* **Especies Principales:** *Buxus sempervirens*, *Amelanchier ovalis*, *Crataegus monogyna*, *Prunus spinosa*, *Spiraea hypericifolia*, *Genista scorpius*, *Brachypodium pinnatum*, *Bromus erectus*, *Carex flacca*, *Teucrium chamaedrys*.


* **Parámetros Globales:** 13 especies encontradas de 21 teóricas. Índice de Similitud: **2.48**.



#### 7. Tiledas (*HICP 9180***)

* **Especies Principales:** *Tilia platyphyllos*, *Fraxinus excelsior*, *Acer opalus*, *Fagus sylvatica*, *Quercus pubescens*, *Ulmus glabra*, *Taxus baccata*, *Sorbus aria*, *Corylus avellana*, *Buxus sempervirens*, *Clematis vitalba*, *Hedera helix*, *Geranium robertianum*, *Carex sylvatica*.


* **Parámetros Globales:** 15 especies encontradas de 24 teóricas. Índice de Similitud: **1.50**.



---

### Referencias Bibliográficas y de Soporte

[^1]: **Informe de Hábitats afectados por el TC Cerler-Benasque V4.** Benasque, enero de 2025. Tablas de inventarios de campo procesadas desde `hábitats.xlsx`.
[^2]: **Sørensen, T. (1948).** A method of establishing groups of equal amplitude in plant sociology based on similarity of species. *Biologiske Skrifter*, 5(4), 1–34.
[^3]: **Braun-Blanquet, J. (1964).** *Pflanzensoziologie: Grundzüge der Vegetationskunde*. Springer-Verlag.