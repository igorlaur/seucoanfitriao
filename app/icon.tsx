import fs from 'fs'
import path from 'path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/x-icon'

export default function Icon() {
  const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico')
  const faviconBuffer = fs.readFileSync(faviconPath)
  
  return new Response(faviconBuffer, {
    headers: {
      'Content-Type': 'image/x-icon',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
