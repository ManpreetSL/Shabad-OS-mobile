import { CollectionItem } from '~/types/data'

// https://api.gurbaninow.com/v2/banis
const banis = {
  japjiSahib: { id: '1', nameGurmukhi: 'jpu jI swihb', type: 'bani' },
  jaapSahib: { id: '2', nameGurmukhi: 'jwpu swihb', type: 'bani' },
  tavPrasadSravag: { id: '3', nameGurmukhi: 'qÍ pRswid svXy (sRwvg suD)', type: 'bani' },
  bentiChaupai: { id: '4', nameGurmukhi: 'bynqI cOpeI swihb', type: 'bani' },
  anandSahib: { id: '5', nameGurmukhi: 'Anµdu swihb', type: 'bani' },
  anandSahibShort: { id: '6', nameGurmukhi: 'Anµdu swihb (6 pauVIAW Aqy sloku)', type: 'bani' },
  rehrasSahibS: { id: '7', nameGurmukhi: 'rhrwis swihb (s:)', type: 'bani' },
  rehrasSahibT: { id: '8', nameGurmukhi: 'rhrwis swihb (t:)', type: 'bani' },
  aarti: { id: '9', nameGurmukhi: 'AwrqI', type: 'bani' },
  aartiLong: { id: '10', nameGurmukhi: 'v`fI AwrqI', type: 'bani' },
  sohilaSahib: { id: '11', nameGurmukhi: 'soihlw swihb', type: 'bani' },
  sukhmaniSahib: { id: '12', nameGurmukhi: 'suKmnI swihb', type: 'bani' },
  asaKiVaar: { id: '13', nameGurmukhi: 'Awsw kI vwr', type: 'bani' },
  ardaas: { id: '14', nameGurmukhi: 'Ardws', type: 'bani' },
  salokMahla9: { id: '15', nameGurmukhi: 'slok mhlw 9', type: 'bani' },
  shabadHazare: { id: '16', nameGurmukhi: 'Sbd hzwry', type: 'bani' },
  shabadHazare10: { id: '17', nameGurmukhi: 'Sbd hzwry pwiqSwhI 10', type: 'bani' },
  tavPrasadDeenan: { id: '18', nameGurmukhi: 'qÍ pRswid sÍXy (dInn kI)', type: 'bani' },
  akalUstat: { id: '19', nameGurmukhi: 'Akwl ausqq', type: 'bani' },
  bavanAkhri: { id: '20', nameGurmukhi: 'bwvn AKrI', type: 'bani' },
  sidhGosht: { id: '21', nameGurmukhi: 'isD gosit', type: 'bani' },
  oankaar: { id: '22', nameGurmukhi: 'EAMkwru', type: 'bani' },
  baraMaha: { id: '23', nameGurmukhi: 'bwrh mwhw', type: 'bani' },
  chandiDiVaar: { id: '24', nameGurmukhi: 'cMfI dI vwr', type: 'bani' },
  lavan: { id: '25', nameGurmukhi: 'lwvW (Anµd kwrj)', type: 'bani' },
  bhogMundavani: { id: '26', nameGurmukhi: 'sRI gurU gRMQ swihb dy pwT dw Bog (muMdwvxI)', type: 'bani' },
  bhogRaagmala: { id: '27', nameGurmukhi: 'sRI gurU gRMQ swihb dy pwT dw Bog (rwgmwlw)', type: 'bani' },
  ramkaliSadh: { id: '28', nameGurmukhi: 'rwmklI sdu', type: 'bani' },
  alahnia: { id: '29', nameGurmukhi: 'AlwhxIAw (sog dw gIq)', type: 'bani' },
} as const

const defaultCollections: CollectionItem[] = [
  {
    id: 'nitnem',
    nameGurmukhi: 'inqnym',
    type: 'folder',
    origin: 'preset',
    items: [
      banis.japjiSahib,
      banis.jaapSahib,
      banis.tavPrasadSravag,
      banis.bentiChaupai,
      banis.anandSahib,
      banis.rehrasSahibS,
      banis.rehrasSahibT,
      banis.ardaas,
      banis.sohilaSahib,
    ],
  },
  {
    id: 'sundarGutka',
    nameGurmukhi: 'suMdr gutkw',
    type: 'folder',
    origin: 'preset',
    items: [
      banis.japjiSahib,
      banis.jaapSahib,
      banis.tavPrasadSravag,
      banis.bentiChaupai,
      banis.anandSahib,
      banis.anandSahibShort,
      banis.shabadHazare,
      banis.baraMaha,
      banis.shabadHazare10,
      banis.tavPrasadDeenan,
      banis.rehrasSahibS,
      banis.rehrasSahibT,
      banis.ardaas,
      banis.aarti,
      banis.aartiLong,
      banis.sohilaSahib,
      banis.sukhmaniSahib,
      banis.asaKiVaar,
      banis.oankaar,
      banis.sidhGosht,
      banis.bavanAkhri,
      banis.baraMaha,
    ],
  },
  {
    id: 'gutka',
    nameGurmukhi: 'gutkw',
    type: 'folder',
    origin: 'preset',
    items: Object.values( banis ),
  },
]

export default () => defaultCollections
