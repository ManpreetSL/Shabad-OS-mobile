import Screens from '../lib/screens'
import { Folder } from '../components/Bookmarks/types'

import { ContentTypes } from './data'

export type NavigationParams = {
  [Screens.Bookmarks]: { currentFolder?: string, folderData: Folder[] },
  [Screens.Home]: undefined,
  [Screens.Search]: undefined,
  [Screens.Gurbani]: { id: string, type: ContentTypes },
}