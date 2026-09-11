export const config = {
  instagramUrl: 'INSTAGRAM_URL',
  mapsUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd72f7175aabb7eb:0x9b9f29c3358dc8e6?sa=X&ved=1t:8290&ictx=111',
  phone: 'PHONE',
  address: 'Pl. Moreno Villa, 2',
  area: 'Carretera de Cádiz, 29002 Málaga',
  hours: 'MARTES Y MIÉRCOLES 18:00–00:00 · JUEVES 18:00–00:00 · VIERNES Y SÁBADO 18:00–02:00 · DOMINGO 18:00–00:00',
  openingStatus: 'PRÓXIMA APERTURA · 5 NOVIEMBRE (POR CONFIRMAR)',
  openingDate: '5 NOVIEMBRE · FECHA POR CONFIRMAR',
  saturdayNoon: 'SÁBADOS AL MEDIODÍA · POSIBLE APERTURA ESPECIAL',
}

export type MenuItem = { name: string; description: string; price: string; image?: string }

export const gildas: MenuItem[] = [
  { name: 'Clásica', description: 'aceituna · piparra · anchoa', price: '2 €', image: '/images/gildas/gilda clasica.png' },
  { name: 'Boquerona', description: 'aceituna · piparra · boquerón', price: '2,20 €', image: '/images/gildas/gilda boquerona.png' },
  { name: 'Atún', description: 'atún · queso', price: '3 €', image: '/images/gildas/gilda atun.png' },
  { name: 'Tomate', description: 'tomate seco · queso crema', price: '2,50 €', image: '/images/gildas/gilda tomate.png' },
  { name: 'Hot', description: 'aceituna + queso · jalapeño', price: '2,50 €', image: '/images/gildas/gilda hot.png' },
  { name: 'Pimiento', description: 'pimiento relleno queso · aceituna · piparra', price: '3 €', image: '/images/gildas/gilda pimiento.png' },
  { name: 'Vera', description: '½ aceituna · boquerón · anchoa · ½ aceituna', price: '3 €', image: '/images/gildas/gilda vera.png' },
  { name: 'Deconstruída', description: 'regañá · queso crema · anchoa', price: '3 €', image: '/images/gildas/gilda descontruida.png' },
  { name: 'Musa', description: 'cherry · perla de mozzarella · pesto', price: '3 €', image: '/images/gildas/gilda musa.png' },
]

const vermutMenu: MenuItem[] = [
  { name: 'Vermut de grifo', description: 'de barra', price: '4 €', image: '/images/vermut/vermut de grifo.png' },
  { name: 'Vermut blanco', description: 'blanco', price: '3 €' },
  { name: 'Beermouth', description: 'vermut rojo · cerveza · naranja · aceituna', price: '4 €' },
  { name: 'Vera', description: 'vermut rojo · ginebra · naranja · soda · aceituna', price: '5 €' },
  { name: 'Vera Rosé', description: 'vermut rosado · frutos rojos · cítricos · soda', price: '4 €' },
  { name: 'La Butch', description: 'vermut rojo · whisky · naranja · bitterkas', price: '4 €' },
  { name: 'La Femme', description: 'vermut rosado · cava · fresa · cítrico', price: '4 €' },
  { name: 'La Sáfica', description: 'vermut blanco · aceituna · limón · tónica', price: '5 €' },
  { name: 'La Ex', description: 'vermut rojo · amaro · naranja · soda', price: '5 €' },
]

export const menu: Record<string, MenuItem[]> = {
  Picoteo: [
    { name: 'Mini pica pica', description: 'pepis · queso · aceitunas · fuet', price: '3 €' },
    { name: 'Tomatito', description: 'aliñao', price: '4 €' },
    { name: 'Mix', description: 'de aceitunitas y encurtidos', price: '5 €' },
    { name: 'Papas fritas', description: 'con berberechos / mejillones / boquerones', price: '7 €' },
    { name: 'Lomo / filete de atún', description: 'con pimientos del piquillo', price: '8 €' },
    { name: 'Ventresca', description: 'con tomate', price: '8 €' },
    { name: 'Fuente Vera', description: 'con mix de encurtidos y chacina', price: '10 €' },
    { name: 'Jamón', description: 'ibérico', price: '8 €' },
    { name: 'Caña de lomo', description: 'ibérica', price: '8 €' },
    { name: 'Cecina', description: 'de León IGP', price: '9 €' },
    { name: 'Chicharrones', description: 'laminados de Cádiz', price: '8 €' },
    { name: 'Queso curado', description: 'de oveja', price: '8 €' },
    { name: 'Queso', description: 'suave', price: '8 €' },
    { name: 'Mojama', description: 'de atún con almendra laminada', price: '10 €' },
    { name: 'Tabla Vera', description: 'mixta', price: '14 €' },
  ],
  Gildas: gildas,
  Vermut: vermutMenu,
  Cervezas: [
    { name: 'Victoria', description: 'caña · doble · pinta · ⅓', price: '2 · 3,20 · 5 · 3 €' },
    { name: 'Estrella Galicia', description: '', price: '2 €' },
    { name: 'Alhambra 1925', description: '', price: '2 €' },
    { name: '0,0', description: '', price: '2 €' },
    { name: '0,0 tostada', description: '', price: '2 €' },
    { name: 'IPA', description: '', price: '2 €' },
    { name: 'Vera IPA', description: '', price: '2 €' },
    { name: 'Sin gluten', description: '', price: '2 €' },
    { name: 'Con limón', description: '', price: '2 €' },
  ],
  Vinos: [
    { name: 'Verdejo', description: 'fresco · cítrico', price: '3,50 € copa · 19 € botella' },
    { name: 'Albariño', description: 'aromático · mineral', price: '4,50 € copa · 25 € botella' },
    { name: 'Moscato', description: 'dulce · afrutado · fresquito', price: '15 € botella' },
    { name: 'Cava', description: 'seco · elegante · ligero', price: '22 € botella' },
    { name: 'Rosado', description: '', price: '22 € botella' },
    { name: 'Rioja', description: 'suave · equilibrado', price: '3,50 € copa · 19 € botella' },
    { name: 'Ribera del Duero', description: 'intenso · estructurado', price: '4,50 € copa · 25 € botella' },
  ],
  Copitas: [
    { name: 'Gin', description: 'selección estándar', price: '8 €' },
    { name: 'Gin premium', description: 'selección premium', price: '12 €' },
    { name: 'Vodka', description: 'selección estándar', price: '8 €' },
    { name: 'Vodka premium', description: 'selección premium', price: '12 €' },
    { name: 'Ron', description: 'selección estándar', price: '8 €' },
    { name: 'Ron premium', description: 'selección premium', price: '12 €' },
    { name: 'Whisky', description: 'selección estándar', price: '8 €' },
    { name: 'Whisky premium', description: 'selección premium', price: '12 €' },
  ],
  Combinados: [
    { name: 'Aperol Spritz', description: '', price: '6 €' },
    { name: 'Tinto de verano', description: '', price: '6 €' },
    { name: 'Pisco Sour', description: '', price: '6 €' },
    { name: 'Martini', description: '', price: '6 €' },
    { name: 'Fernet', description: '', price: '6 €' },
    { name: 'Sidra', description: '', price: '6 €' },
  ],
}

export const vermuts = [
  ...vermutMenu.map(item => ({ name: item.name, note: item.description, kind: item.name === 'Vermut de grifo' || item.name === 'Vermut blanco' ? 'base' : 'firma', price: item.price, image: item.image })),
]

export const gildaOfMonth = {
  month: 'PRÓXIMAMENTE',
  name: 'GILDA DEL MES',
  description: 'La próxima razón para volver a VERA. La receta se anuncia en barra.',
  ingredients: ['INGREDIENTES POR CONFIRMAR'],
  price: 'PRECIO EN ACTUALIZACIÓN',
  image: '',
}

export const events: { date: string; time: string; title: string; description: string; category: string; image: string; cta: string }[] = [
  { date: 'FECHA POR CONFIRMAR', time: 'DESDE LAS 18H', title: 'TARDEO DE TATUAJES', description: 'Tatuajes profesionales por mi artista favorita. Diseños personalizados y únicos. Amplia selección de estilos. Ambiente seguro y esterilizado. 40 € por tatuaje.', category: 'TARDEO · TATUAJES', image: '/images/eventos/evento tattoo.png', cta: 'VEN A VERA' },
  { date: 'PRÓXIMO JUEVES', time: 'DESDE LAS 19H', title: 'CREA TU GILDA', description: 'Diseña tu propia gilda de autor, participa en la votación popular y haz que la ganadora se quede en carta un mes. Inscripciones en barra o por DM.', category: 'EVENTO · CONCURSO', image: '/images/eventos/crear tu gilda.jpg', cta: 'VEN A VERA' },
  { date: 'FECHA', time: 'HORA', title: 'TARDE ESPECIAL', description: 'Una tarde con su propio cartel.', category: 'TARDEO', image: '', cta: 'SABER MÁS' },
]
