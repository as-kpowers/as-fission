import { Tree } from '@nx/devkit';
import { Linter } from '@nx/eslint';
import { libraryGenerator as reactLibraryGenerator } from '@nx/react';
import { LibraryGeneratorSchema } from './schema';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  const callbackAfterFilesUpdated = await reactLibraryGenerator(tree, {
    ...options,
    projectNameAndRootFormat: 'as-provided',
    linter: Linter.EsLint,
    style: 'css',
    unitTestRunner: 'vitest',
  });

  return callbackAfterFilesUpdated;
}

export default libraryGenerator;
