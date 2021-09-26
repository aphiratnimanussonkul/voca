export interface IVocabularySet {
  id: string;
  cover: string;
  name: string;
  vocabularies: IVocabulary[];
}

export interface IVocabulary {
  vocab: string;
  means: string;
}
