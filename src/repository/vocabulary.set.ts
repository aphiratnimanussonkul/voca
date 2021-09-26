import { IVocabularySet } from "@/interfaces/vocabulary";
import { collection, getDocs, getDoc, doc } from "firebase/firestore/lite";
import { firestore } from "../services/firebase";

class VocabularySetRepository {
  private collection = collection(firestore, "vocabulary-set");
  getAllVocabularySet = async (): Promise<IVocabularySet[]> => {
    return (await getDocs(this.collection)).docs.map((doc) => {
      return {
        id: doc.id,
        cover: doc.data().cover ?? "",
        name: doc.data().name ?? "",
        vocabularies: doc.data().vocabularies ?? [],
      };
    });
  };

  getById = async (id: string): Promise<IVocabularySet> => {
    const vocab = (await getDoc(doc(firestore, `vocabulary-set/${id}`))).data();
    return {
      id: id,
      cover: vocab?.cover ?? "",
      name: vocab?.name ?? "",
      vocabularies: vocab?.vocabularies.map(
        (v: { vocab: string; means: string }) => {
          return { vocab: v.vocab, means: v.means };
        }
      ),
    };
  };
}

export default VocabularySetRepository;
