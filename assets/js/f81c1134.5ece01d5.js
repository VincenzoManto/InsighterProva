"use strict";(self.webpackChunkinsighter=self.webpackChunkinsighter||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"Release note 2014-10-18","metadata":{"permalink":"/blog/Release note 2014-10-18","editUrl":"https://insightest.app/apps/gitten/#/pages/VincenzoManto/InsighterProva/blog/2024-10-18-first-blog-post.md","source":"@site/blog/2024-10-18-first-blog-post.md","title":"Release note 2.6.507.2442.1.0.1745.0","description":"4Seasons Next","date":"2024-10-18T00:00:00.000Z","tags":[{"inline":false,"label":"4SNE","permalink":"/blog/tags/4sne","description":"Release"}],"readingTime":2.74,"hasTruncateMarker":true,"authors":[{"name":"4SNE","title":"4SNE @ SYS-DAT","url":"https://www.sys-datgroup.com/","page":{"permalink":"/blog/authors/4-sne"},"socials":{"x":"https://www.sys-datgroup.com/","github":"https://www.sys-datgroup.com/"},"imageURL":"https://media.licdn.com/dms/image/v2/C4D0BAQEeTMGFYZBoqw/company-logo_200_200/company-logo_200_200/0/1662625438626/sys_dat_spa_logo?e=2147483647&v=beta&t=jaYXLv6GIepKEApmqQgfduEq5qMb7HAaRfgPpez1xbs","key":"4sne"}],"frontMatter":{"slug":"Release note 2014-10-18","title":"Release note 2.6.507.2442.1.0.1745.0","authors":["4sne"],"tags":["4sne"]},"unlisted":false,"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"### 4Seasons Next\\n\\n&nbsp;\\n\\nLa seguente versione **2.6.507.2442.1.0.1745.0** del 16\\\\/10\\\\/2024 riporta i seguenti aggiornamenti\\n\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n&nbsp;\\n\\nAggiornamenti\\\\:\\n\\n# 12\\n\\nLa versione di aggiornamento dati include adattamenti nei decimali per la gestione costi\\\\, il recupero automatico del tipo documento di spedizione in Ordine Cliente\\\\, la configurazione dei totali di pagina per i campi numerici\\\\, miglioramenti nella funzione listini in valuta e recupero prezzi\\\\, possibilit di cancellare righe materiali da documenti fornitori non definitivi\\\\, e correzioni riguardanti i prezzi a 0 sulle righe materiali. Altre modifiche riguardano il filtro stagioni di vendita\\\\, l\\\\\'aggiunta di riferimenti articolo nei risultati\\\\, correzione di bug legati alla selezione dei risultati\\\\, aggiunta di filtro sui colori\\\\, modali di collegamento per le prime 4 tendine sui documenti fornitori\\\\, e miglioramenti nella velocit di caricamento delle Abilitazioni Clienti Crm.\\n\\n&nbsp;\\n\\n##### Release notes\\n\\n1. In gestione costi di distinta base\\\\, il numero massimo di decimali  stato adattato allo standard di 2\\n\\n2. Il lancio manuale del semilavorato articolo \\\\(modello SEMILAVORATO\\\\) propone ora una qta decimale e non la grid delle taglie\\n\\n3. Ordine Cliente\\\\: recuperato in automatico il tipo documento di spedizione dal cliente \\\\(prioritario\\\\) o dal tipo ordine\\\\, sia in fase di creazione dell\\\\\'ordine sia in modifica con apposito alert di sovrascrittura.\\n\\n4. Ora  possibile configurare e visualizzare i totali di pagina per i campi numerici in tutte le griglie dell\\\\\'applicativo. I totali scorrono automaticamente seguendo l\\\\\'allineamento del campo totalizzato \\\\(pinned\\\\). L\\\\\'operazione supportata ad oggi  la somma aritmetica.\\n\\n5. La funzione listini in valuta recupera ora solo i listini di partenza.\\n\\n6. Il calcolo del listino nuovo prima funzionava solo con incrementi \\\\% ora abbiamo sistemato anche il valore fisso e valore in aggiunta.\\n\\n7. Recupero Prezzi in creazione OdA da Fabbisogno da ArticoliListini \\\\(nuova gestione listini Articoli\\\\).\\n\\n8. In base al tipo ordine fornitore selezionato recupera il prezzo prod. o campionario.\\n\\n9. Aggiunta possibilit di cancellare le righe materiali da un documento fornitore non definitivo\\n\\n10. In documenti cliente\\\\, il tipo magazzino in entrata ed uscita vengono presentati a vuoto di default\\n\\n11. Sistemata la verifica dei prezzi a 0 sulle righe materiale\\\\, solo se  il flaga Righe A Zero del Tipo documento  valorizzato.\\n\\n12. Modifica che verifica sia in FE con un allert  in visuale quando si va in documenti da preparare e non permette la selezione\\n\\n13. Sia BE se per qualsiasi motivo in controllo FE non va in porto c\\\\\' quello BE che non permette la creazione di documenti con righe materiali e prezzo 0\\n\\n14. fix filtro stagioni di vendita\\n\\n15. aggiunti riferimento articolo \\\\(codice e descrizione\\\\) nei risultati\\n\\n16. trovati alcuni bug legati alla selezione dei risultati\\\\, il fix quindi riguarda il modo in cui i dati vengono passati dal front\\\\-end. Tutte le funzioni massive sono affette da questa modifica. Una volta spostati nella pagina delle funzioni non  pi possibile selezionare o deselezionare i record\\\\, per farlo occorre tornare nella pagina dei filtri. Una volta completata l\\\\\'operazione \\\\(esito ok\\\\) la pagina viene ricaricata.\\n\\n17. Aggiunto filtro sulle select nuovo colore in modo che vengano visualizzati solo i colori appartenenti alla cartella selezionata.\\n\\n18. Aggiunti i modali di collegamento per le prime 4 tendine sui documenti fornitori\\n\\n19. Sistemazione velocita di caricamento delle Abilitazione Clienti Crm e sistemaizone della duplica cosi da riportarsi il vari flag sul nuovo duplicato"},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://insightest.app/apps/gitten/#/pages/VincenzoManto/InsighterProva/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"4SNE","permalink":"/blog/tags/4sne","description":"Release"}],"readingTime":0.235,"hasTruncateMarker":true,"authors":[{"name":"4SNE","title":"4SNE @ SYS-DAT","url":"https://www.sys-datgroup.com/","page":{"permalink":"/blog/authors/4-sne"},"socials":{"x":"https://www.sys-datgroup.com/","github":"https://www.sys-datgroup.com/"},"imageURL":"https://media.licdn.com/dms/image/v2/C4D0BAQEeTMGFYZBoqw/company-logo_200_200/company-logo_200_200/0/1662625438626/sys_dat_spa_logo?e=2147483647&v=beta&t=jaYXLv6GIepKEApmqQgfduEq5qMb7HAaRfgPpez1xbs","key":"4sne"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["4sne"],"tags":["4sne"]},"unlisted":false,"prevItem":{"title":"Release note 2.6.507.2442.1.0.1745.0","permalink":"/blog/Release note 2014-10-18"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n:::\\n\\n{/* truncate */}\\n\\nFor example, use JSX to create an interactive button:\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://insightest.app/apps/gitten/#/pages/VincenzoManto/InsighterProva/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"inline":false,"label":"4SNE","permalink":"/blog/tags/4sne","description":"Release"}],"readingTime":2.06,"hasTruncateMarker":true,"authors":[{"name":"4SNE","title":"4SNE @ SYS-DAT","url":"https://www.sys-datgroup.com/","page":{"permalink":"/blog/authors/4-sne"},"socials":{"x":"https://www.sys-datgroup.com/","github":"https://www.sys-datgroup.com/"},"imageURL":"https://media.licdn.com/dms/image/v2/C4D0BAQEeTMGFYZBoqw/company-logo_200_200/company-logo_200_200/0/1662625438626/sys_dat_spa_logo?e=2147483647&v=beta&t=jaYXLv6GIepKEApmqQgfduEq5qMb7HAaRfgPpez1xbs","key":"4sne"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":["4sne"],"tags":["4sne"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!-- truncate --\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);