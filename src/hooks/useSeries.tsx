import {
  collection,
  onSnapshot,
  query,
  orderBy,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

interface Serie {
  _id: string;
  thumbnailPath: string;
  videoUrl: string;
}

export const useSeries = (): [
  Serie[],
  React.Dispatch<React.SetStateAction<Serie[]>>
] => {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'series'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setSeries(
          snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
            _id: doc.id,
            ...doc.data(),
          })) as Serie[]
        );
      }
    );
  }, []);
  return [series, setSeries];
};
