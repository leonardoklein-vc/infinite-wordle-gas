/**
 * Dito Infinito - Backend Modular
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🕹️ Jogos')
    .addItem('Jogar Dito', 'abrirModalDito')
    .addToUi();
}

function abrirModalDito() {
  // ATENÇÃO: Usamos createTemplateFromFile para permitir o uso de <?!= include ?>
  const template = HtmlService.createTemplateFromFile('Index');
  const html = template.evaluate()
    .setWidth(500)
    .setHeight(720);
    
  SpreadsheetApp.getUi().showModalDialog(html, 'Dito Infinito');
}

// --- FUNÇÃO DE INCLUSÃO (O Segredo da separação) ---
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// --- LÓGICA DO JOGO ---

function sortearNovaPalavra() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("BD_Palavras");
    
    if (!sheet) return null; 
    const totalLinhas = sheet.getLastRow();
    if (totalLinhas < 1) return null;

    // Busca otimizada: Apenas 1 célula
    const linhaSorteada = Math.floor(Math.random() * totalLinhas) + 1;
    const palavra = sheet.getRange(linhaSorteada, 1).getValue();

    if (!palavra || typeof palavra !== 'string' || palavra.length !== 5) {
      return sortearNovaPalavra(); 
    }
    return palavra.trim().toUpperCase();

  } catch (e) {
    console.error("Erro BD: " + e.toString());
    throw new Error("Erro ao ler banco.");
  }
}

function validarPalavraExistente(palavra) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("BD_Palavras");
  if (!sheet) return false;

  const encontrado = sheet.getRange("A:A")
    .createTextFinder(palavra)
    .matchEntireCell(true)
    .matchCase(false)
    .findNext();

  return encontrado !== null;
}

function importarPalavrasSugeridas() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("BD_Palavras");
    
    if (!sheet) {
      sheet = ss.insertSheet("BD_Palavras");
      sheet.hideSheet();
    }
    
    const url = "https://raw.githubusercontent.com/pythonprobr/palavras/master/palavras.txt";
    const response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    
    if (response.getResponseCode() !== 200) throw new Error("HTTP " + response.getResponseCode());

    const texto = response.getContentText();
    const palavras = texto.split('\n')
      .map(p => p.trim().toUpperCase())
      .filter(p => p.length === 5 && /^[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]+$/.test(p));
    
    const unicas = [...new Set(palavras)].map(p => [p]);

    if (unicas.length === 0) throw new Error("Lista vazia.");

    sheet.clear();
    sheet.getRange(1, 1, unicas.length, 1).setValues(unicas);
    return { success: true, count: unicas.length };

  } catch (e) {
    return { success: false, error: e.toString() };
  }
}
