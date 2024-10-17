---
slug: 2\.6\.507\.2442\.1\.0\.1745\.0
title: Release note 2\.6\.507\.2442\.1\.0\.1745\.0
authors: 4sne
tags: [4sne]
---
# Release note 2\.6\.507\.2442\.1\.0\.1745\.0

### 4Seasons Next

&nbsp;

La seguente versione **2\.6\.507\.2442\.1\.0\.1745\.0** del 16\/10\/2024 riporta i seguenti aggiornamenti

```html
<!-- truncate -->
```

&nbsp;

Aggiornamenti\:

# 12

La versione di aggiornamento dati include adattamenti nei decimali per la gestione costi\, il recupero automatico del tipo documento di spedizione in Ordine Cliente\, la configurazione dei totali di pagina per i campi numerici\, miglioramenti nella funzione listini in valuta e recupero prezzi\, possibilit di cancellare righe materiali da documenti fornitori non definitivi\, e correzioni riguardanti i prezzi a 0 sulle righe materiali\. Altre modifiche riguardano il filtro stagioni di vendita\, l\'aggiunta di riferimenti articolo nei risultati\, correzione di bug legati alla selezione dei risultati\, aggiunta di filtro sui colori\, modali di collegamento per le prime 4 tendine sui documenti fornitori\, e miglioramenti nella velocit di caricamento delle Abilitazioni Clienti Crm\.

&nbsp;

##### Release notes

1. In gestione costi di distinta base\, il numero massimo di decimali  stato adattato allo standard di 2

2. Il lancio manuale del semilavorato articolo \(modello SEMILAVORATO\) propone ora una qta decimale e non la grid delle taglie

3. Ordine Cliente\: recuperato in automatico il tipo documento di spedizione dal cliente \(prioritario\) o dal tipo ordine\, sia in fase di creazione dell\'ordine sia in modifica con apposito alert di sovrascrittura\.

4. Ora  possibile configurare e visualizzare i totali di pagina per i campi numerici in tutte le griglie dell\'applicativo\. I totali scorrono automaticamente seguendo l\'allineamento del campo totalizzato \(pinned\)\. L\'operazione supportata ad oggi  la somma aritmetica\.

5. La funzione listini in valuta recupera ora solo i listini di partenza\.

6. Il calcolo del listino nuovo prima funzionava solo con incrementi \% ora abbiamo sistemato anche il valore fisso e valore in aggiunta\.

7. Recupero Prezzi in creazione OdA da Fabbisogno da ArticoliListini \(nuova gestione listini Articoli\)\.

8. In base al tipo ordine fornitore selezionato recupera il prezzo prod\. o campionario\.

9. Aggiunta possibilit di cancellare le righe materiali da un documento fornitore non definitivo

10. In documenti cliente\, il tipo magazzino in entrata ed uscita vengono presentati a vuoto di default

11. Sistemata la verifica dei prezzi a 0 sulle righe materiale\, solo se  il flaga Righe A Zero del Tipo documento  valorizzato\.

12. Modifica che verifica sia in FE con un allert  in visuale quando si va in documenti da preparare e non permette la selezione

13. Sia BE se per qualsiasi motivo in controllo FE non va in porto c\' quello BE che non permette la creazione di documenti con righe materiali e prezzo 0

14. fix filtro stagioni di vendita

15. aggiunti riferimento articolo \(codice e descrizione\) nei risultati

16. trovati alcuni bug legati alla selezione dei risultati\, il fix quindi riguarda il modo in cui i dati vengono passati dal front\-end\. Tutte le funzioni massive sono affette da questa modifica\. Una volta spostati nella pagina delle funzioni non  pi possibile selezionare o deselezionare i record\, per farlo occorre tornare nella pagina dei filtri\. Una volta completata l\'operazione \(esito ok\) la pagina viene ricaricata\.

17. Aggiunto filtro sulle select nuovo colore in modo che vengano visualizzati solo i colori appartenenti alla cartella selezionata\.

18. Aggiunti i modali di collegamento per le prime 4 tendine sui documenti fornitori

19. Sistemazione velocita di caricamento delle Abilitazione Clienti Crm e sistemaizone della duplica cosi da riportarsi il vari flag sul nuovo duplicato
