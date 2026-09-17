export const config = {
  instagramUrl: 'https://www.instagram.com/veralesbianbar/',
  allergensPdfUrl: '',
  openingDate: '2026-11-05T18:00:00+01:00',
  openingDateConfirmed: false,
  mapsUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd72f7175aabb7eb:0x9b9f29c3358dc8e6?sa=X&ved=1t:8290&ictx=111',
  phone: 'PHONE',
  whatsappPhone: '',
  address: 'Pl. Moreno Villa, 2',
  area: 'Carretera de Cádiz, 29002 Málaga',
  hours: 'MARTES Y MIÉRCOLES 18:00–00:00 · JUEVES 18:00–00:00 · VIERNES Y SÁBADO 18:00–02:00 · DOMINGO 18:00–00:00',
  openingStatus: 'PRÓXIMA APERTURA · 5 NOVIEMBRE (POR CONFIRMAR)',
  openingDateLabel: '5 NOVIEMBRE · FECHA POR CONFIRMAR',
  saturdayNoon: 'SÁBADOS AL MEDIODÍA · POSIBLE APERTURA ESPECIAL',
}

// Keep replaceable visual assets in one place so the temporary artwork can be
// swapped for the bar's own photography without changing the layout.
export const visualAssets = {
  hero: '',
  vermut: '',
  gildas: '',
  copas: '',
} as const

export const instagramPosts = [
  {
    image: '/images/instagram/Primer posteo.png',
    alt: 'Primera publicación de VERA en Instagram',
    label: 'VER EN INSTAGRAM ↗',
  },
] as const

export const experienceCards = [
  {
    id: 'vermut',
    title: 'Vermut',
    description: 'De barra o de la casa, para empezar la tarde sin prisa.',
    image: visualAssets.vermut,
    label: 'VERMUT',
  },
  {
    id: 'gildas',
    title: 'Gildas',
    description: 'Clásicas, hot y de autor. Una para abrir boca, otra para quedarse.',
    image: visualAssets.gildas,
    label: 'GILDAS',
  },
  {
    id: 'copas',
    title: 'Tardeo',
    description: 'Copas, música y otra ronda cuando cae la tarde.',
    image: visualAssets.copas,
    label: 'TARDEO',
  },
] as const

export type MenuItem = { name: string; description: string; price: string; image?: string }

export const gildas: MenuItem[] = [
  { name: 'Clásica', description: 'aceituna · piparra · anchoa', price: '2 €' },
  { name: 'Boquerona', description: 'aceituna · piparra · boquerón', price: '2,20 €' },
  { name: 'Atún', description: 'atún · queso', price: '3 €' },
  { name: 'Tomate', description: 'tomate seco · queso crema', price: '2,50 €' },
  { name: 'Hot', description: 'aceituna + queso · jalapeño', price: '2,50 €' },
  { name: 'Pimiento', description: 'pimiento relleno queso · aceituna · piparra', price: '3 €' },
  { name: 'Vera', description: '½ aceituna · boquerón · anchoa · ½ aceituna', price: '3 €' },
  { name: 'Deconstruída', description: 'regañá · queso crema · anchoa', price: '3 €' },
  { name: 'Musa', description: 'cherry · perla de mozzarella · pesto', price: '3 €' },
]

const vermutMenu: MenuItem[] = [
  { name: 'Vermut de grifo', description: 'de barra', price: '4 €' },
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

export const events: { date: string; time: string; status: string; title: string; description: string; category: string; image: string; cta: string }[] = [
  { date: 'FECHA POR CONFIRMAR', time: 'DESDE LAS 18H', status: 'PRÓXIMAMENTE', title: 'TARDEO DE TATUAJES', description: 'Tatuajes profesionales por mi artista favorita. Diseños personalizados y únicos. Amplia selección de estilos. Ambiente seguro y esterilizado. 40 € por tatuaje.', category: 'TARDEO · TATUAJES', image: '/images/eventos/evento tattoo.jpg', cta: 'VEN A VERA' },
  { date: 'FECHA POR CONFIRMAR', time: 'HORA POR CONFIRMAR', status: 'PRÓXIMAMENTE', title: 'CREA TU GILDA', description: 'Diseña tu propia gilda de autor, participa en la votación popular y haz que la ganadora se quede en carta un mes. Inscripciones en barra o por DM.', category: 'EVENTO · CONCURSO', image: '/images/eventos/Evento gilda.jpg', cta: 'VEN A VERA' },
  { date: 'FECHA POR CONFIRMAR', time: 'HORA POR CONFIRMAR', status: 'PRÓXIMAMENTE', title: 'TAROT EN VERA', description: 'Una tarde de cartas, intuición y conversación en el bar.', category: 'PRÓXIMO · TAROT', image: '/images/eventos/Evento tarot.jpg', cta: 'VEN A VERA' },
  { date: 'FECHA POR CONFIRMAR', time: 'HORA POR CONFIRMAR', status: 'PRÓXIMAMENTE', title: 'BINGO EN VERA', description: 'Bingo, premios y una excusa más para alargar la tarde.', category: 'PRÓXIMO · BINGO', image: '/images/eventos/Evento bingo.jpg', cta: 'VEN A VERA' },
]
