import Layout from "components/layout"
import Image from "next/image"
import Link from "next/link"
import heroImage from 'public/images/manaslu.webp'

const Home = () => {

  const posts = [
    {
      title: 'Skeletal System',
      path: '/551/musculoskeletal-system/skeletal-system'
    },
    {
      title: 'Muscular System',
      path: '/551/musculoskeletal-system/muscular-system'
    },
  ]

  return (
    <Layout>
      <Image src={heroImage} className="bg-red-500 bg-blend-multiply" />
      {posts.map(post => (
        <Link href={post.path} key={post.path}>
          <a>
            {post.title}
          </a>
        </Link>
      ))}
    </Layout>
  )
}

export default Home