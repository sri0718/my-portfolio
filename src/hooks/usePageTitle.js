import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} — Sri Varshini`
      : 'Sri Varshini — Between Code, Canvas & Camera | AI & ML Student, Artist & Photographer'
  }, [title])
}
