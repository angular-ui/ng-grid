-/**
- * Translate from english i18n file by francescotrincia on 04/11/16.
- */
(var it = function () {
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('it', {
        headerCell: {
          aria: {
            defaultFilterLabel: 'Filtro per colonna',
            removeFilter: 'Rimuovi filtro',
            columnMenuButtonLabel: 'Menu colonna'
          },
          priority: 'Priorità:',
          filterLabel: "Filtro per colonna: "
        },
        aggregate: {
          label: 'elementi'
        },
        groupPanel: {
          description: 'Trascina un\'intestazione all\'interno del gruppo della colonna.'
        },
        search: {
          placeholder: 'Ricerca...',
          showingItems: 'Mostra:',
          selectedItems: 'Selezionati:',
          totalItems: 'Totali:',
          size: 'Tot Pagine:',
          first: 'Prima',
          next: 'Prossima',
          previous: 'Precedente',
          last: 'Ultima'
        },
        menu: {
          text: 'Scegli le colonne:'
        },
        sort: {
          ascending: 'Asc.',
          descending: 'Disc.',
          remove: 'Annulla ordinamento'
        },
        column: {
          hide: 'Nascondi'
        },
        aggregation: {
          count: 'righe totali: ',
          sum: 'tot: ',
          avg: 'media: ',
          min: 'minimo: ',
          max: 'massimo: '
        },
        pinning: {
          pinLeft: 'Blocca a sx',
          pinRight: 'Blocca a dx',
          unpin: 'Blocca in alto'
        },
        columnMenu: {
          close: 'Chiudi'
        },
        gridMenu: {
          columns: 'Colonne:',
          importerTitle: 'Importa',
          exporterAllAsCsv: 'Esporta tutti i dati in CSV',
          exporterVisibleAsCsv: 'Esporta i dati visibili in CSV',
          exporterSelectedAsCsv: 'Esporta i dati selezionati in CSV',
          exporterAllAsPdf: 'Esporta tutti i dati in PDF',
          exporterVisibleAsPdf: 'Esporta i dati visibili in PDF',
          exporterSelectedAsPdf: 'Esporta i dati selezionati in PDF',
          clearAllFilters: 'Pulire tutti i filtri'
        },
        importer: {
          noHeaders: 'Impossibile reperire i nomi delle colonne, sicuro che siano indicati all\'interno del file?',
          noObjects: 'Impossibile reperire gli oggetti, sicuro che siano indicati all\'interno del file?',
          invalidCsv: 'Impossibile elaborare il file, sicuro che sia un CSV?',
          invalidJson: 'Impossibile elaborare il file, sicuro che sia un JSON valido?',
          jsonNotArray: 'Errore! Il file JSON da importare deve contenere un array.'
        },
        pagination: {
          aria: {
            pageToFirst: 'Inizio',
            pageBack: 'Indietro',
            pageSelected: 'Pagina Selezionata',
            pageForward: 'Avanti',
            pageToLast: 'Fine'
          },
          sizes: 'elementi per pagina',
          totalItems: 'elementi',
          through: 'per',
          of: 'di'
        },
        grouping: {
          group: 'Raggruppa',
          ungroup: 'Separa',
          aggregate_count: 'Agg: N. Elem.',
          aggregate_sum: 'Agg: Somma',
          aggregate_max: 'Agg: Massimo',
          aggregate_min: 'Agg: Minimo',
          aggregate_avg: 'Agg: Media',
          aggregate_remove: 'Agg: Rimuovi'
        },
        validate: {
          error: 'Errore:',
          minLength: 'Lunghezza minima pari a THRESHOLD caratteri.',
          maxLength: 'Lunghezza massima pari a THRESHOLD caratteri.',
          required: 'Necessario inserire un valore.'
        }
      });
      return $delegate;
    }]);
  }]);
})();
