'use client';
import { DictionaryContext } from '@/context/DictionaryContext';
import type { Dictionary } from '@/get-dictionary';

export function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}
