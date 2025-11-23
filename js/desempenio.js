const botonesDeCantHoras = document.querySelectorAll('.cantHoras-button');

botonesDeCantHoras.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesDeCantHoras.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
    })
})

const graficoHoras = document.getElementById("cantHoras-grafico").getContext("2d");
const dias = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const horas = [3, 5, 1, 2, 4, 6, 5];
const maximo = Math.max(...horas);
const colores = horas.map(v =>
    v === maximo ? '#004074' : '#82CFEB');

new Chart(graficoHoras, {
    type: 'bar',
    data:{
        labels: dias,
        datasets: [{
            label: 'Horas',
            data: horas,
            backgroundColor: colores,
            borderRadius: 5
            }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: { display: false }},
        scales:{
            x:{
                ticks: {
                        color: '#646D79', // texto eje X
                        font:{
                            weight: 'bold',
                            size: '14px' }
                        },
                    grid: {
                        color: '#ffffffff' // líneas verticales
                    }
            },
            y:{
                title: {
                        display: true,
                        text: 'Horas', // nombre del eje
                        font:{
                            size: '14px'
                        } 
                    },
                ticks: {
                        color: '#646D79', // números eje Y
                        font:{
                            weight: 'bold',
                            size: '14px'}
                    },
                grid: {
                        color: '#b5bbc498' // líneas horizontales
                    },
                border:{
                    display: true,
                    color: '#b5bbc498'
                }    
            }
        },
    },
});

const graficoTiposDeSolicitud = document.getElementById("solicitudesAceptadas-grafico").getContext("2d");
const tiposDeSolicitud = ['Traslado al médico', 'Trámites', 'Tareas del hogar', 'Compras', 'Caminata', 'Pasear al perro', 'Ayuda tecnológica', 'Compañía'];
const cantidadDeSolicitudesAceptadasPorTipo = [10, 4, 2, 5, 7, 2, 10, 4];
const coloresTiposDeSolicitud = ['#84E1EB', '#D55EED', '#FFA979', '#EB7575', '#ACEB75', '#EC75B3', '#C998F7', '#F3D353']

new Chart (graficoTiposDeSolicitud, {
    type: 'doughnut',
    data:{
        labels: tiposDeSolicitud,
        datasets:[{
            label: 'Aceptadas',
            data: cantidadDeSolicitudesAceptadasPorTipo,
            backgroundColor: coloresTiposDeSolicitud
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display: false,
            },
        },
    },
});


const fondoGris = {
    id: 'fondoGris',
    beforeDatasetsDraw(chart, args, opts) {
        const {
            ctx,
            chartArea: { top, bottom },
            scales: { x, y }
        } = chart;

        ctx.save();
        chart.data.labels.forEach((label, i) => {
            const yCenter = y.getPixelForValue(i);
            const barHeight = 25;
            const barTop = yCenter - barHeight / 2;
            const barBottom = yCenter + barHeight / 2;

            const xStart = x.getPixelForValue(0);
            const xEnd = x.getPixelForValue(3);

            const radius = 20;

            // Fondo gris completamente redondeado
            ctx.fillStyle = "#e0e0e0ce";
            drawRoundedRect(ctx, xStart, barTop, xEnd - xStart, barHeight, radius);
            ctx.fill();
        });
        ctx.restore();
    }
};

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
};


const graficoValoracionGeneral = document.getElementById("valoracion-grafico").getContext("2d");
const caracteristicas = ['Puntualidad', 'Responsabilidad', 'Calidad del servicio', 'Frecuencia de participación', 'Variedad de tareas'];
const valores = [2, 3, 3, 1, 3];
const niveles = {3:'Alta', 2:'Media', 1:'Baja'};


new Chart(graficoValoracionGeneral,{
    type: 'bar',
    plugins: [fondoGris],
    data:{
        labels: caracteristicas,
        datasets: [{
                data: valores,
                backgroundColor: '#82CFEB',
                borderRadius: 20,
                borderSkipped: false,
                barThickness: 25,
                categoryPercentage: 1.0,
            }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: 'y',
        plugins:{
            legend: {
            display: false},
            tooltip: {
                callbacks: {
                    label: function(context){
                        return niveles[ context.raw ];
                    }
                }
            }
        },
        scales:{
            x:{
                stacked: true,
                min:0,
                max:3,
                ticks: {
                        stepSize: 1,
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                border:{
                    display: false,
                }       
            },
            y:{
                ticks: {
                      display: false, 
                    },
                grid: {
                        display: false,
                    },
                border:{
                    display: false,
                }    
            }
        }
    }
});

const botonAceptadas = document.getElementById('aceptadas-button');
const botonRechazadas = document.getElementById('rechazadas-button');

botonAceptadas.addEventListener('click', () => {
    botonAceptadas.classList.add('activoAceptadas');
    botonRechazadas.classList.remove('activoRechazadas');
});

botonRechazadas.addEventListener('click', () => {
    botonRechazadas.classList.add('activoRechazadas');
    botonAceptadas.classList.remove('activoAceptadas');
});