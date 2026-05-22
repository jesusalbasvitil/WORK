const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageNumber, Footer, Header
} = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

const cellMargins = { top: 100, bottom: 100, left: 140, right: 140 };

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text, bold: true, size: 28, font: "Arial", color: "1F3864" })]
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, bold: true, size: 24, font: "Arial", color: "2E5F9E" })]
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    alignment: opts.justify ? AlignmentType.JUSTIFIED : AlignmentType.LEFT,
    children: [new TextRun({ text, size: 22, font: "Arial", ...opts })]
  });
}

function bodyJustified(runs) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    alignment: AlignmentType.JUSTIFIED,
    children: runs
  });
}

function run(text, opts = {}) {
  return new TextRun({ text, size: 22, font: "Arial", ...opts });
}

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, size: 22, font: "Arial" })]
  });
}

function emptyLine() {
  return new Paragraph({ children: [new TextRun("")], spacing: { before: 60, after: 60 } });
}

function separator() {
  return new Paragraph({
    spacing: { before: 160, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E5F9E", space: 1 } },
    children: [new TextRun("")]
  });
}

function fichaRow(label, value, highlight = false) {
  const fillColor = highlight ? "FFF2CC" : "F5F8FC";
  return new TableRow({
    children: [
      new TableCell({
        borders,
        width: { size: 3200, type: WidthType.DXA },
        shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, size: 20, font: "Arial" })] })]
      }),
      new TableCell({
        borders,
        width: { size: 5826, type: WidthType.DXA },
        shading: { fill: fillColor, type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text: value, size: 20, font: "Arial" })] })]
      })
    ]
  });
}

function conclusionRow(num, estado, descripcion, articulo) {
  const colorMap = { "NO VÁLIDO": "C00000", "PARCIALMENTE VÁLIDO": "BF8F00", "VÁLIDO": "375623" };
  const bgMap = { "NO VÁLIDO": "FCE4E4", "PARCIALMENTE VÁLIDO": "FFF2CC", "VÁLIDO": "E2EFDA" };
  const color = colorMap[estado] || "000000";
  const bg = bgMap[estado] || "FFFFFF";

  return new TableRow({
    children: [
      new TableCell({
        borders,
        width: { size: 500, type: WidthType.DXA },
        shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: num, bold: true, size: 20, font: "Arial" })] })]
      }),
      new TableCell({
        borders,
        width: { size: 1400, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: estado, bold: true, size: 20, font: "Arial", color })] })]
      }),
      new TableCell({
        borders,
        width: { size: 4326, type: WidthType.DXA },
        shading: { fill: "FAFAFA", type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text: descripcion, size: 20, font: "Arial" })] })]
      }),
      new TableCell({
        borders,
        width: { size: 2800, type: WidthType.DXA },
        shading: { fill: "FAFAFA", type: ShadingType.CLEAR },
        margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text: articulo, size: 20, font: "Arial", italics: true })] })]
      })
    ]
  });
}

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }, {
          level: 1, format: LevelFormat.BULLET, text: "\u2013",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } }
        }]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "1F3864" },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "2E5F9E" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1260, bottom: 1440, left: 1260 }
      }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "2E5F9E", space: 1 } },
            spacing: { after: 100 },
            children: [new TextRun({ text: "Análisis de conformidad · Comunicación APM Villarquemado", size: 18, font: "Arial", color: "666666", italics: true })]
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            border: { top: { style: BorderStyle.SINGLE, size: 4, color: "2E5F9E", space: 1 } },
            spacing: { before: 100 },
            children: [
              new TextRun({ text: "Página ", size: 18, font: "Arial", color: "666666" }),
              new TextRun({ children: [PageNumber.CURRENT], size: 18, font: "Arial", color: "666666" }),
              new TextRun({ text: " de ", size: 18, font: "Arial", color: "666666" }),
              new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18, font: "Arial", color: "666666" }),
              new TextRun({ text: "  ·  UTE Subestaciones Zaragoza-Teruel  ·  20/05/2026", size: 18, font: "Arial", color: "666666" })
            ]
          })
        ]
      })
    },
    children: [

      // PORTADA
      emptyLine(),
      emptyLine(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 80 },
        children: [new TextRun({ text: "INFORME DE ANÁLISIS DE CONFORMIDAD", bold: true, size: 36, font: "Arial", color: "1F3864" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 80 },
        children: [new TextRun({ text: "Comunicación APM Villarquemado (ComAPM_VllqV1)", size: 26, font: "Arial", color: "2E5F9E", italics: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 400 },
        children: [new TextRun({ text: "Orden APM/1007/2017, de 10 de octubre", size: 22, font: "Arial", color: "666666" })]
      }),
      separator(),
      emptyLine(),

      // FICHA
      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [3200, 5826],
        rows: [
          fichaRow("Documento analizado", "ComAPM_VllqV1.docx — Comunicación al Ayuntamiento de Villarquemado"),
          fichaRow("Normativa de referencia", "Orden APM/1007/2017, de 10 de octubre (BOE núm. 254, 21/10/2017)"),
          fichaRow("Obra de origen", "Subestación ATI 212.5 — UTE SSEE Zaragoza-Teruel (Exp. 3.23/06110.0120)"),
          fichaRow("Material afectado", "Tierras de excavación, LER 17 05 04 (~2.300-2.800 m³ estimados)"),
          fichaRow("Destino previsto", "Término Municipal de Villarquemado (Teruel)"),
          fichaRow("Fecha del informe", "20 de mayo de 2026"),
        ]
      }),
      emptyLine(),
      separator(),
      emptyLine(),

      // 1. OBJETO
      heading1("1. Objeto del informe"),
      bodyJustified([
        run("El presente informe analiza la conformidad del borrador de comunicación "),
        run("ComAPM_VllqV1.docx", { bold: true }),
        run(" con los requisitos establecidos en la "),
        run("Orden APM/1007/2017, de 10 de octubre", { italics: true }),
        run(", sobre normas generales de valorización de materiales naturales excavados para su utilización en operaciones de relleno y obras distintas a aquéllas en las que se generaron. El análisis tiene su origen en las observaciones formuladas por la técnico de Gestión Ambiental de Telice en correo de fecha 20/05/2026, y recoge las conclusiones del debate técnico posterior sobre la validez de dichas observaciones.")
      ]),
      emptyLine(),

      // 2. DESCRIPCIÓN
      heading1("2. Descripción de la actuación"),
      bodyJustified([
        run("La UTE SSEE Zaragoza-Teruel, como adjudicataria de las obras de construcción de subestaciones eléctricas de tracción para el tramo Zaragoza-Teruel del Corredor Cantábrico-Mediterráneo, va a proceder a la excavación para la "),
        run("Subestación ATI 212.5", { bold: true }),
        run(" en el término municipal de Villarquemado (Teruel). Dicha excavación generará un excedente estimado de "),
        run("2.300 a 2.800 m³", { bold: true }),
        run(" de materiales naturales excavados (LER 17 05 04) que no pueden acopiarse en el propio recinto de la subestación, por lo que se pretende trasladarlos a un punto dentro del mismo término municipal para su valorización.")
      ]),
      bodyJustified([
        run("La comunicación redactada se dirige al Alcalde del Ayuntamiento de Villarquemado, invocando una Declaración Responsable emitida por dicho Ayuntamiento con fecha de salida de Registro de 4/6/2024 (Código de Verificación EXQPKM6QMRW3FYPL732SMPXXX) como antecedente habilitante, y anuncia la remisión posterior de los Anexos II y III de la Orden una vez finalizadas las operaciones de descarga.")
      ]),
      emptyLine(),

      // 3. MARCO NORMATIVO
      heading1("3. Marco normativo aplicable"),
      bodyJustified([
        run("La Orden APM/1007/2017 regula, al amparo del artículo 28 de la Ley 22/2011, de 28 de julio, de Residuos y Suelos Contaminados, la valorización de materiales naturales excavados no peligrosos (LER 17 05 04) procedentes de obras de construcción, cuando se destinan a operaciones de relleno u obras distintas de las de origen. Su aplicación exime de la obligación de autorización como gestor de residuos, pero sujeta a un procedimiento administrativo específico cuyos hitos principales son:")
      ]),
      bullet("Comunicación previa al órgano ambiental competente de la Comunidad Autónoma, antes del inicio de la actividad (art. 5.1.a y Anexo I)."),
      bullet("Declaración Responsable del productor o poseedor inicial acreditando la naturaleza y aptitud del material (art. 4.5 y Anexo III.A), cuya copia debe adjuntarse a la comunicación previa (Anexo I, apartado c.2)."),
      bullet("Declaración Responsable de almacenamiento temporal, si procede, asegurando que no superará dos años (art. 5.1.c y Anexo III.B)."),
      bullet("Archivo cronológico de recepciones y traslados (art. 5.1.e)."),
      bullet("Resumen de actividad (Anexo II), presentado como máximo un mes después de finalizar las operaciones de valorización (art. 5.1.f)."),
      bullet("Régimen de traslado conforme al Real Decreto 180/2015 (art. 5.2)."),
      emptyLine(),

      // 4. ANÁLISIS
      heading1("4. Análisis de conformidad"),

      heading2("4.1  Error principal: destinatario incorrecto de la comunicación"),
      bodyJustified([
        run("El error más relevante de la comunicación es que está dirigida exclusivamente al "),
        run("Alcalde del Ayuntamiento de Villarquemado", { bold: true }),
        run(", cuando el artículo 5.1.a) de la Orden establece con claridad que la comunicación previa debe presentarse ante el "),
        run("órgano ambiental competente de la Comunidad Autónoma", { bold: true }),
        run(" donde esté ubicado el emplazamiento en el que se llevará a cabo la operación de valorización; en este caso, el Departamento competente en materia de Medio Ambiente del Gobierno de Aragón.")
      ]),
      bodyJustified([
        run("El Ayuntamiento es el propietario del emplazamiento receptor y debe ser identificado como tal en el Anexo I, apartado b.1, pero "),
        run("no es el destinatario administrativo de la comunicación previa", { bold: true }),
        run(" a efectos de la Orden. Comunicar únicamente al Ayuntamiento no activa la exención de autorización prevista en el artículo 1.2, ni incorpora la operación al Registro de producción y gestión de residuos (art. 39 Ley 22/2011), por lo que la operación quedaría sin cobertura legal.")
      ]),
      emptyLine(),

      heading2("4.2  Contenido de la comunicación previa: omisiones respecto al Anexo I"),
      bodyJustified([
        run("Aun cuando la comunicación fuera reorientada al órgano autonómico competente, su contenido actual presenta omisiones respecto al contenido mínimo exigido por el "),
        run("Anexo I", { bold: true }),
        run(" de la Orden:")
      ]),
      bullet("Se identifica al productor/poseedor (UTE/ADIF) y se proporcionan coordenadas UTM del emplazamiento (Anexo I, b.2), así como una estimación de volumen en m³ (Anexo I, b.3). Estos aspectos están correctamente recogidos.", 0),
      bullet("No se incluye la identificación del propietario del emplazamiento con su código CNAE (Anexo I, a.1), ni la descripción de la operación de valorización concreta (Anexo I, a.2) ni el código LER específico con el tipo de material (Anexo I, a.3).", 0),
      bullet("No se adjunta copia de la autorización o licencia de la obra de origen, ni del documento de adjudicación (Anexo I, c.1).", 0),
      bullet("No se adjunta la Declaración Responsable del productor (Anexo III.A), cuya inclusión como documentación complementaria exige el Anexo I, apartado c.2.", 0),
      emptyLine(),

      heading2("4.3  Sobre el momento de presentación del Anexo III.A"),
      bodyJustified([
        run("La comunicación anuncia que los Anexos II y III se remitirán "),
        run("al finalizar las operaciones de descarga", { italics: true }),
        run(". Respecto al "),
        run("Anexo III.A", { bold: true }),
        run(" (Declaración Responsable del productor), cabe precisar lo siguiente:")
      ]),
      bodyJustified([
        run("Su objeto, conforme al artículo 4.5, es acreditar que los materiales cumplen lo establecido en el artículo 2, apartados 1 y 2 de la Orden; esto es, que son materiales naturales excavados, no contaminados y no mezclados. Este es un aspecto "),
        run("cualitativo", { bold: true }),
        run(", no cuantitativo, que puede constar con una estimación de volumen fundamentada en el proyecto, sin necesidad de esperar a los albaranes definitivos.")
      ]),
      bodyJustified([
        run("La cantidad exacta en toneladas, que solo se conoce una vez finalizadas las descargas y acreditada mediante albaranes, corresponde al "),
        run("Anexo II", { bold: true }),
        run(" (resumen de actividad), cuya presentación tardía —hasta un mes después de finalizar las operaciones— sí está expresamente prevista en el artículo 5.1.f) y, por tanto, es correcta.")
      ]),
      bodyJustified([
        run("En conclusión, la posposición del Anexo III.A al momento de la descarga no tiene justificación en la imposibilidad de conocer la cantidad exacta, pero "),
        run("sí es comprensible operativamente", { bold: true }),
        run(". No obstante, dado que el Anexo I c.2 exige adjuntarlo a la comunicación previa, su presentación posterior constituye una irregularidad de procedimiento, aunque de menor calado que el error de destinatario.")
      ]),
      emptyLine(),

      heading2("4.4  Sobre el Anexo III.B (almacenamiento temporal)"),
      bodyJustified([
        run("La comunicación menciona expresamente una zona de acopio delimitada en el término municipal. Si existe almacenamiento previo a la valorización final, el artículo 5.1.c) exige la Declaración Responsable del "),
        run("Anexo III.B", { bold: true }),
        run(" asegurando que dicho almacenamiento no superará los dos años. Esta declaración tampoco figura en la comunicación redactada y debe incluirse si el acopio se produce antes de la extensión definitiva del material.")
      ]),
      emptyLine(),

      heading2("4.5  Sobre el alta del Ayuntamiento como valorizador"),
      bodyJustified([
        run("En el debate previo se planteó si el Ayuntamiento debía estar dado de alta como valorizador. Tras el análisis de la Orden, esta exigencia "),
        run("no tiene base normativa directa", { bold: true }),
        run(" en el texto de la misma. El artículo 5.1.a) atribuye la obligación de comunicación y registro al sujeto que "),
        run("lleva a cabo", { italics: true }),
        run(" la valorización, que en este caso es la UTE/ADIF como productora y ejecutora del depósito. El Ayuntamiento actúa como propietario del emplazamiento receptor, debiendo ser identificado como tal en el Anexo I, b.1, pero sin que la Orden le imponga trámite registral alguno a su cargo. Este punto de la crítica inicial "),
        run("no era correcto", { bold: true }),
        run(" y debe descartarse.")
      ]),
      emptyLine(),

      heading2("4.6  Aspectos que la comunicación sí recoge correctamente"),
      bodyJustified([run("En favor de la comunicación redactada cabe señalar:")]),
      bullet("Identifica el código LER correcto: 17 05 04."),
      bullet("Proporciona coordenadas UTM del emplazamiento, conforme al Anexo I, b.2."),
      bullet("Incluye una estimación de volumen del material (~2.300-2.800 m³), conforme al Anexo I, b.3."),
      bullet("Hace referencia expresa a la Orden APM/1007/2017 como marco normativo."),
      bullet("La posposición del Anexo II al momento posterior a las descargas es conforme al artículo 5.1.f)."),
      bullet("Se remite a la Declaración Responsable del Ayuntamiento de 2024 como antecedente del punto de acopio, lo cual es un elemento de contexto válido aunque no suficiente por sí solo."),
      emptyLine(),
      separator(),
      emptyLine(),

      // 5. CONCLUSIONES
      heading1("5. Conclusiones"),
      body("La siguiente tabla sintetiza el resultado del análisis por aspectos:"),
      emptyLine(),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [500, 1400, 4326, 2800],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 500, type: WidthType.DXA },
                shading: { fill: "1F3864", type: ShadingType.CLEAR },
                margins: cellMargins,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Nº", bold: true, size: 20, font: "Arial", color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                width: { size: 1400, type: WidthType.DXA },
                shading: { fill: "1F3864", type: ShadingType.CLEAR },
                margins: cellMargins,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Resultado", bold: true, size: 20, font: "Arial", color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                width: { size: 4326, type: WidthType.DXA },
                shading: { fill: "1F3864", type: ShadingType.CLEAR },
                margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Aspecto analizado", bold: true, size: 20, font: "Arial", color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                width: { size: 2800, type: WidthType.DXA },
                shading: { fill: "1F3864", type: ShadingType.CLEAR },
                margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Base normativa", bold: true, size: 20, font: "Arial", color: "FFFFFF" })] })]
              })
            ]
          }),
          conclusionRow("1", "NO VÁLIDO", "Destinatario de la comunicación: dirigida al Ayuntamiento en lugar del órgano ambiental de la CCAA", "Art. 5.1.a) y Anexo I"),
          conclusionRow("2", "NO VÁLIDO", "Omisión de documentación complementaria obligatoria: código CNAE, descripción de la operación, autorización de obra", "Anexo I, a.1/a.2/a.3/c.1"),
          conclusionRow("3", "PARCIALMENTE VÁLIDO", "Anexo III.A: debe adjuntarse a la comunicación previa; puede basarse en estimación de proyecto, no requiere cantidad exacta", "Art. 4.5 y Anexo I, c.2"),
          conclusionRow("4", "NO VÁLIDO", "Ausencia de Anexo III.B si existe acopio previo a la valorización final", "Art. 5.1.c)"),
          conclusionRow("5", "VÁLIDO", "Posposición del Anexo II (cantidad exacta + albaranes) al momento posterior a las descargas", "Art. 5.1.f)"),
          conclusionRow("6", "NO VÁLIDO", "Alta del Ayuntamiento como valorizador: exigencia sin base en la Orden (error de la crítica inicial, descartado)", "Art. 5.1.a) — no aplicable"),
          conclusionRow("7", "VÁLIDO", "Código LER 17 05 04, coordenadas UTM y estimación de volumen correctamente incluidos", "Anexo I, b.2 y b.3"),
        ]
      }),
      emptyLine(),

      heading2("Conclusión general"),
      bodyJustified([
        run("La crítica formulada en el correo de Esther Corregidor es "),
        run("sustancialmente válida", { bold: true }),
        run(" en su punto esencial: el procedimiento de traslado de tierras de excavación al amparo de la Orden APM/1007/2017 exige, antes de mover ningún material, la presentación de una comunicación previa ante el "),
        run("órgano ambiental del Gobierno de Aragón", { bold: true }),
        run(", no ante el Ayuntamiento. La comunicación redactada no cumple este requisito ni contiene el conjunto documental mínimo exigido por el Anexo I.")
      ]),
      bodyJustified([
        run("El error del Ayuntamiento como valorizador, incluido en la crítica inicial, "),
        run("no tiene base en la Orden", { bold: true }),
        run(" y debe descartarse. La posposición del Anexo II al momento posterior a las descargas es correcta conforme al artículo 5.1.f).")
      ]),
      bodyJustified([
        run("Para que la operación quede legalmente cubierta, la UTE deberá: (i) elaborar una comunicación previa con el contenido completo del Anexo I, (ii) dirigirla al órgano ambiental autonómico competente antes del inicio de los trabajos, (iii) adjuntar el Anexo III.A con estimación de volumen basada en el proyecto, y (iv) completar el procedimiento con el Anexo II y los albaranes una vez finalizadas las operaciones.")
      ]),
      emptyLine(),
      separator(),
      emptyLine(),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 200, after: 80 },
        children: [new TextRun({ text: "Madrid, 20 de mayo de 2026", size: 20, font: "Arial", italics: true, color: "666666" })]
      }),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "UTE Subestaciones Zaragoza-Teruel", size: 20, font: "Arial", color: "444444" })]
      }),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "Técnico Medio Ambiente", size: 20, font: "Arial", color: "444444" })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/Informe_Conformidad_APM_Villarquemado.docx", buffer);
  console.log("OK");
});