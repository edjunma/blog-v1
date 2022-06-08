import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'GearLayout'

export async function getStaticProps() {
  const gearDetails = await getFileBySlug('gear', ['gear'])
  return { props: { gearDetails } }
}

export default function Gear({ gearDetails }) {
  const { mdxSource, frontMatter } = gearDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
