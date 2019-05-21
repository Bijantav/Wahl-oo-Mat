var arrayThesen = ['Es sollen EU-weite verbindliche Bürgerentscheide eingeführt werden.','Die EU soll sich höhere Ziele zur Reduzierung des CO2-Ausstoßes setzen.','Die EU-Mitgliedsstaaten sollen eine gemeinsame Armee aufbauen.','Die Europäische Union soll vorrangig Bio-Landwirtschaft fördern.','Deutschland soll an Stelle des Euro wieder eine nationale Währung einführen.','Die EU soll private Seenotrettungsinitiativen im Mittelmeer unterstützen.','Auf den Handel mit Finanzprodukten (z.B. Aktien) soll eine Steuer erhoben werden.','Der Anbau von gentechnisch veränderten Pflanzen soll in der EU erlaubt sein.','EU-Bürgerinnen und -Bürger, die in ein anderes EU-Land ziehen, sollen dort nur eingeschränkt Sozialleistungen erhalten.','EU-Bürgerinnen und -Bürger sollen bei der Europawahl ihre Stimme auch für Parteien aus anderen Mitgliedsstaaten abgeben dürfen.','Die EU soll mehr Geld für die Entwicklungshilfe bereitstellen.','Die EU-Mitgliedsstaaten sollen weiterhin Daten von Fluggästen speichern müssen.','Die EU soll sich für die Einführung eines nationalen Mindestlohns in allen Mitgliedsstaaten einsetzen.','Die EU soll am Flüchtlingsabkommen mit der Türkei festhalten.','In der EU soll es für Aufsichtsräte von Unternehmen eine verbindliche Frauenquote geben.','Deutschland soll aus der Europäischen Union austreten.','In anderen EU-Staaten sollen weiterhin Atomkraftwerke betrieben werden dürfen.','Die Europäische Union soll Zuwanderung von Fachkräften aus Nicht-EU-Ländern fördern.','Die EU soll Mitgliedsstaaten finanziell bestrafen, die die Presse- und Medienfreiheit verletzen.','Die finanziellen Hilfen für wirtschaftlich schwächere Regionen in der EU sollen reduziert werden.','In der medizinischen Forschung sollen Tierversuche weiterhin erlaubt sein.','Die europäische Polizeibehörde Europol soll weitere Kompetenzen erhalten.','Für die Besteuerung von Unternehmen soll es einen EU-weiten Mindestsatz geben.','Die EU soll sich dafür einsetzen, dass alle Mitgliedsstaaten die gleichgeschlechtliche Ehe einführen.','Mitgliedsstaaten, die die EU-Regeln zur Begrenzung der Staatsverschuldung verletzen, sollen konsequent bestraft werden.','In allen Mitgliedsstaaten soll eine Lkw-Maut auf Fernstraßen eingeführt werden.','Die Europäische Union soll sich als christliche Wertegemeinschaft verstehen.','Alle Banken sollen verstaatlicht werden.','Alle Asylsuchenden, die versuchen über das Mittelmeer in die EU zu gelangen, sollen in ihre Heimatländer zurückgeführt werden.','Abbau der Russland-SanktioneDie EU soll ihre Sanktionen gegen Russland abbauen.','In allen EU-Mitgliedsstaaten sollen Plastikverpackungen besteuert werden.','In der EU sollen Initiativen gegen Antisemitismus finanziell unterstützt werden.','Bei außenpolitischen Entscheidungen der EU soll häufiger mit Mehrheit statt einstimmig entschieden werden können.','Asylsuchende sollen in der EU proportional auf die Mitgliedsstaaten verteilt werden.','Die Fangmengen für die europäische Fischerei sollen stärker begrenzt werden.','Es sollen wieder dauerhafte Grenzkontrollen zwischen den Mitgliedsstaaten der EU stattfinden.','Die EU soll sich langfristig zu einem europäischen Bundesstaat entwickeln.','Jugendliche sollen ab 16 Jahren bei der Europawahl wählen dürfen.'];


var arrayTitel = ['EU-weite Bürgerentscheide','CO2-Ausstoß','Europäische Armee','Landwirtschaftsförderung','Nationale Währung','Seenotrettung im Mittelmeer','Finanztransaktionssteuer','Gentechnisch veränderte Pflanzen','Sozialleistungen in der EU','Stimmabgabe bei der Europawahl','Europäische Entwicklungshilfe','Fluggastdaten','Mindestlohn','Flüchtlingsabkommen mit der Türkei','Frauenquote','Austritt aus der EU','Atomkraftwerke','Zuwanderung von Fachkräften','Presse- und Medienfreiheit','Reduzierung der Regionalförderung','Tierversuche','Europol','Mindestsatz für Besteuerung','Gleichgeschlechtliche Ehe','EU-Regeln zur Staatsverschuldung','Lkw-Maut auf Fernstraßen','Christliche Wertegemeinschaft','Verstaatlichung der Banken','Migration über das Mittelmeer','Abbau der Russland-Sanktionen','Steuer auf Plastikverpackungen','Initiativen gegen Antisemitismus','Außenpolitische Entscheidungen','Verteilung von Asylsuchenden','Fischfangmenge','Grenzkontrollen innerhalb der EU','Europäischer Bundesstaat','Wählen ab 16'];


var stimmverhalten = new Array(38);
function zurAuswertung(){
  console.log('jetztwirdausgewertet');
}
function neuladen() {
let womprev = '';
let leerepunkte = '<li class="" aria-hidden="true"><span>&nbsp;</span></li>';
for (j = 0; j <= i; j++) {

  if (j < i) {
 womprev = womprev +'<li class="wom_previous_point"><a class="thesenavi_a" href="#" aria-describedby="thesenavi5" title="Zur These '+(j+1)+': &quot;'+arrayTitel[j]+'&quot;">&nbsp;</a><span class="thesenavi_tooltip" id="thesenavi5" role="tooltip" aria-hidden="true">Zur These 6: "'+arrayTitel[j]+'"</span></li>';
}
 
  else {
    womprev= womprev + '<li class="wom_active_point"><a class="thesenavi_a" href="#" aria-describedby="thesenavi0" title="Angezeigte These '+(j+1)+': &quot;'+arrayTitel[j]+'&quot;"></a> <span class="wom_arrow_left">&nbsp;</span><span class="thesenavi_tooltip" id="thesenavi0" role="tooltip" aria-hidden="true">Angezeigte These 1: "'+arrayTitel[j]+'"</span></li>'+(leerepunkte.repeat(38-(j+1)))
    //console.log(womprev);
    
  }
}

document.getElementsByClassName('wom_points')[0].innerHTML= womprev;
 
};











//var theseEu = document.getElementById(bnthese);
//theseEu.p.innerHTML = '123';
//var thesentext = document.getElementsByClassName('wom_these_text')[0].innerHTML= '123242';
//thesentext[0].innerHTML = '123';

//document.getElementsByClassName('wom_phone-thesenzahl')[0].innerHTML='These <span>2</span> von 38';

 
i = 0;
//document.getElementsByClassName('wom_phone-whitebox')[0].innerHTML='<h1><span>'+(i+1)+'</span><span class="wom_thesenanzahl">/38</span>'+' '+arrayTitel[i]+'</h1>      <p class="wom_these_text">'+arrayThesen[i]+'</p>    						    <div style="clear:both"></div>';

var ja = document.getElementsByClassName('wom_yes')[0];
var nein = document.getElementsByClassName('wom_no')[0];
var enthaltung = document.getElementsByClassName('wom_neutral')[0];
var springen = document.getElementsByClassName('wom_skipper')[0];


ja.onclick = function() { 
 if (i<37){
  stimmverhalten[i]='y';
  i++; document.getElementsByClassName('wom_phone-whitebox')[0].innerHTML='<h1><span>'+(i+1)+'</span><span class="wom_thesenanzahl">/38</span>'+' '+arrayTitel[i]+'</h1>      <p class="wom_these_text">'+arrayThesen[i]+'</p>    						    <div style="clear:both"></div>';
 neuladen();}
  else {
    zurAuswertung();
  }
};

nein.onclick = function() { 
 if (i<37){
  stimmverhalten[i]='n';
  i++; document.getElementsByClassName('wom_phone-whitebox')[0].innerHTML='<h1><span>'+(i+1)+'</span><span class="wom_thesenanzahl">/38</span>'+' '+arrayTitel[i]+'</h1>      <p class="wom_these_text">'+arrayThesen[i]+'</p>    						    <div style="clear:both"></div>';
 neuladen();}
   else {
    zurAuswertung();
  }
};

enthaltung.onclick = function() { 
  if (i<37){
 stimmverhalten[i]='e';
console.log(stimmverhalten);
  i++; document.getElementsByClassName('wom_phone-whitebox')[0].innerHTML='<h1><span>'+(i+1)+'</span><span class="wom_thesenanzahl">/38</span>'+' '+arrayTitel[i]+'</h1>      <p class="wom_these_text">'+arrayThesen[i]+'</p>    						    <div style="clear:both"></div>';
neuladen();
}
 else {
    zurAuswertung();
  }
};

springen.onclick = function() { 
  if (i<37){
 //stimmverhalten[i]='e';
//console.log(stimmverhalten);
  i++; document.getElementsByClassName('wom_phone-whitebox')[0].innerHTML='<h1><span>'+(i+1)+'</span><span class="wom_thesenanzahl">/38</span>'+' '+arrayTitel[i]+'</h1>      <p class="wom_these_text">'+arrayThesen[i]+'</p>    						    <div style="clear:both"></div>';
  neuladen();}
 else {
    zurAuswertung();
  }
};



