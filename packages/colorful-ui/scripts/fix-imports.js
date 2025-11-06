import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

/**
 * Fix import statements in .vue and .ts files within the specified directory.
 * Replaces occurrences of '#shared/' with '@/'
 * @param {string} dir - The directory to process.
 */
async function fixImports(dir) {
    const files = await readdir(dir, { withFileTypes: true, recursive: true })

    /**
     * Process each file in the directory.
     */
    for (const file of files) {
        if (file.isFile() && (file.name.endsWith('.vue') || file.name.endsWith('.ts'))) {
            const filePath = join(file.path, file.name)
            let content = await readFile(filePath, 'utf-8')

            /**
             * Replace '#shared/' with '@/'
             */
            content = content.replace(/#shared\//g, '@/')

            /**
             * Replace '~/' with '@/'
             */
            content = content.replace(/~\//g, '@/')

            await writeFile(filePath, content)
            console.log(`✓ Fixed imports in ${filePath}`)
        }
    }
}

/**
 * Start fixing imports in the 'src' directory.
 */
fixImports('./src')
