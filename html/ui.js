const config = {
    locale: 'en',
    i18n: {
        en: {
            loading: 'Loading...',
            init: 'Initializing...'
        },
        de: {
            loading: 'Lade...',
            init: 'Initialisieren...'
        },
        es: {
            loading: 'Cargando...',
            init: 'Inicializando...'
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('loading').innerText = config.i18n[config.locale].loading;
    document.getElementById('loading').innerText = config.i18n[config.locale].loading;
});

window.addEventListener('message', function (e) {
    switch (e.data.eventName) {
        case 'startInitFunctionOrder':
            document.getElementById('loading-details').innerText = 'Start ' + e.data.type + '...';
            break;
        case 'initFunctionInvoking':
            document.getElementById('loading-details').innerText = 'Init ' + e.data.idx + "/" + e.data.count + "...";
            break;
        case 'onLogLine':
            document.getElementById('loading-details').innerText = e.data.message;
            break;
        default:
            console.log('[DEBUG] Unhandled event: "' + e.data.eventName + '"!')
            break;
    }
});
