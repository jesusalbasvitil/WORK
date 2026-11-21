import pandas as pd

# Parámetros territoriales de la Reserva Ornitológica El Planerón
SUPERFICIE_HA = 700.0

# 1. Datos empíricos extraídos del Plan de Uso Público (2004-2007)
datos_2004 = {'Feb': 23, 'Mar': 186, 'Abr': 468, 'May': 673, 'Jun': 33, 'Oct': 189, 'Nov': 93}
datos_2007_primavera = {'Mar': 510, 'Abr': 515, 'May': 586}

total_7m_2004 = sum(datos_2004.values())  # 1.665 visitantes
primavera_2004 = datos_2004['Mar'] + datos_2004['Abr'] + datos_2004['May']  # 1.327 visitantes
primavera_2007 = sum(datos_2007_primavera.values())  # 1.611 visitantes

# Anualización de las series incompletas
factor_meses_faltantes = 1.15  # +15% estimado para los 5 meses sin registro
ci_anual_2004 = total_7m_2004 * factor_meses_faltantes

peso_primavera = primavera_2004 / ci_anual_2004  # ~0.693 del año completo
ci_anual_2007 = primavera_2007 / peso_primavera

# Horquilla base 2007 (Banda baja: solo registro CI | Banda alta: +50% techo subregistro directo)
base_2007_min = ci_anual_2007
base_2007_max = ci_anual_2007 * 1.50

# 2. Multiplicadores comparativos (2007 -> 2025/2026)
mult_conservador = 1.45  # Escenario nicho ornitológico
mult_arrastre = 1.75     # Escenario arrastre Belchite / Gallocanta

visitas_2025_min = base_2007_min * mult_conservador
visitas_2025_max = base_2007_max * mult_arrastre

# 3. Proyección futura mediante Tasa de Crecimiento Anual Compuesta (CAGR)
cagr_min = 0.025  # +2.5% anual (crecimiento regulado)
cagr_max = 0.040  # +4.0% anual (expansión tendencial sin cupos)

def proyectar(valor_inicial, tasa, anios):
    return valor_inicial * ((1 + tasa) ** anios)

horizontes = [
    ("2004 (Reconstruido)", 1900, 2500),
    ("2007 (Reconstruido)", round(base_2007_min, -1), round(base_2007_max, -1)),
    ("Actualidad (2025-2026)", round(visitas_2025_min, -1), round(visitas_2025_max, -1)),
    ("Corto-Medio Plazo (2030)", round(proyectar(visitas_2025_min, cagr_min, 4.5), -1), round(proyectar(visitas_2025_max, cagr_max, 4.5), -1)),
    ("Largo Plazo (2035)", round(proyectar(visitas_2025_min, cagr_min, 9.5), -1), round(proyectar(visitas_2025_max, cagr_max, 9.5), -1)),
]

# Construcción de tabla de resultados
filas = []
for periodo, v_min, v_max in horizontes:
    dens_min = round(v_min / SUPERFICIE_HA, 1)
    dens_max = round(v_max / SUPERFICIE_HA, 1)
    filas.append({
        "Horizonte": periodo,
        "Visitas_Min": int(v_min),
        "Visitas_Max": int(v_max),
        "Densidad_Min_ha": dens_min,
        "Densidad_Max_ha": dens_max
    })

df_proyeccion = pd.DataFrame(filas)
print(df_proyeccion.to_string(index=False))
