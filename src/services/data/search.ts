import { languages } from '~/helpers/languages'
import * as gurbaniNow from '~/services/gurbaninow'
import { SearchData } from '~/types/data'

export const search = async ( query: string, page = 0 ): Promise<SearchData[]> => {
  const { shabads } = await gurbaniNow.search( query, page )

  return shabads.map( ( { shabad: {
    id,
    shabadid,
    source,
    writer,
    gurmukhi,
    translation,
    lineno,
    pageno,
  } } ) => ( {
    line: {
      id,
      gurmukhi: gurmukhi.akhar,
      sourceLine: lineno,
      sourcePage: pageno,
      translations: [
        //! Only english translation for now
        {
          translationSourceId: languages.english,
          translation: translation.english.default,
        },
      ],
    },
    shabad: {
      id: shabadid,
      lines: [],
      source: {
        id: source.id,
        length: source.length,
        nameGurmukhi: source.akhar,
        pageNameGurmukhi: source.pageName.akhar,
      },
      writer: {
        id: writer.id,
        nameGurmukhi: writer.akhar,
      },
    },
  } ) )
}
