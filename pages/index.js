import HomeLayout from "components/homeLayout"
import Image from "next/image"
import Link from "next/link"

const Home = () => {

  const subjects = [
    {
      id: 551,
      title: 'Human Anatomy and Physiology'
    },
    {
      id: 554,
      title: 'Microbial Systematics'
    }
  ];
  const posts = [
    {
      subjectCode: 551,
      title: 'Skeletal System',
      path: '/551/musculoskeletal-system/skeletal-system'
    },
    {
      subjectCode: 551,
      title: 'Muscular System',
      path: '/551/musculoskeletal-system/muscular-system'
    },
    {
      subjectCode: 554,
      title: 'Haemophilus',
      path: '/554/bacteriology/haemophilus'
    }
  ]

  return (
    <HomeLayout>
      {subjects.map(subject => (
        <div className="mb-8" key={subject.id}>
          <h1 className="text-lg mb-4">{subject.title}</h1>
          {posts
            .filter(post => post.subjectCode === subject.id)
            .map(post => (
              <Link href={post.path} key={post.path}>
                <a className="block">
                  {post.title}
                </a>
              </Link>
            ))
          }
        </div>
      ))}
    </HomeLayout>
  )
}

export default Home