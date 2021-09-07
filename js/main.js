Vue.config.devtools = true;

const app = new Vue ({
    el: '#title',
    data: {
        nome: prompt('inserisci il tuo nome'),
        cognome: prompt('inserisci il tuo cognome'),
        eta: parseInt(prompt('inserisci la tua eta'))
    }
});