//DOM API
document.addEventListener('DOMContentLoaded', event => {
    console.log('DOM Ready!');

    async function fetchProvincias(text) {
        const dataRequest = await fetch('json/data.json');
        const dataJson = await dataRequest.json();
        const provincias = dataJson.provincias;

        provincias.forEach(p => {
            if (p.id == text) {}

        });

    };

});

async function fetchProvincias(text) {
    const dataRequest = await fetch('json/data.json');
    const dataJson = await dataRequest.json();
    const provincias = dataJson.provincias;

    provincias.forEach(p => {
        if (p.id == text) {
            let nombre = p.nombre;
            tooltip.innerHTML = nombre;
            tooltip.innerHTML += `<br/><small>Cantones:${p.cantones}</small>`;
            tooltip.innerHTML += `<br/><small>Distritos:${p.distritos}</small>`;
            tooltip.innerHTML += `<br/><small>Población:${p.poblacion}</small>`;
        }

    });

};

function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX + 10 + 'px';
    tooltip.style.top = evt.pageY + 10 + 'px';
    fetchProvincias(text);

};

function showTooltip1(evt, text) {
    let tooltip = document.getElementById(text);
    tooltip.style.left = evt.pageX - 220 + 'px';
    tooltip.style.top = evt.pageY + 100 + 'px';
    tooltip.style.display = "block";
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
    tooltip = document.getElementById("prov1");
    tooltip.style.display = "none";
    tooltip = document.getElementById("prov2");
    tooltip.style.display = "none";
    tooltip = document.getElementById("prov3");
    tooltip.style.display = "none";
    tooltip = document.getElementById("prov4");
    tooltip.style.display = "none";
    tooltip = document.getElementById("prov5");
    tooltip.style.display = "none";
    tooltip = document.getElementById("prov6");
    tooltip.style.display = "none";
    tooltip = document.getElementById("prov7");
    tooltip.style.display = "none";
}

function cambiarClase() {
    let siteNav = document.getElementById('site-nav');
    siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open');

}