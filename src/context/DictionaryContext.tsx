'use client';
import { createContext, useContext } from 'react';
import type { Dictionary } from '@/get-dictionary';

export const DictionaryContext = createContext<Dictionary | null>(null);

export function useDictionary() {
  const dictionary = useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return dictionary;
}
