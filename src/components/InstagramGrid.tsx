import { ExternalLink } from './ExternalLink'

export type InstagramPost = {
  image: string
  alt: string
  label: string
}

type InstagramGridProps = {
  posts: readonly InstagramPost[]
  instagramUrl: string
}

const placeholders = ['VERA', '◉', '✹', '+']

export function InstagramGrid({ posts, instagramUrl }: InstagramGridProps) {
  const placeholdersToShow = placeholders.slice(posts.length, 4)

  return (
    <div className="insta-grid">
      {posts.slice(0, 4).map(post => (
        <ExternalLink className="insta-tile insta-manual-post" href={instagramUrl} key={post.image}>
          <img src={post.image} alt={post.alt} loading="lazy" decoding="async" />
          <small>{post.label}</small>
        </ExternalLink>
      ))}
      {placeholdersToShow.map((placeholder, index) => (
        <div className={`insta-tile tile-${index + posts.length}`} key={placeholder}>
          {placeholder}
          <small>FOTO PRÓXIMAMENTE</small>
        </div>
      ))}
    </div>
  )
}
