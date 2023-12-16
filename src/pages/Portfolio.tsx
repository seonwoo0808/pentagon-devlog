import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  TrophyIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/20/solid';

const Portfolio = () => {
  const awardAndCertificates = [
    {
      id: 5,
      date: '2023.12.02',
      host: '과학기술정보통신부',
      award: '2023 데이터 크리에이터 캠프',
      grade: '대상(과학기술정보통신부 장관상)',
      icon: <TrophyIcon className="mr-1 h-5 w-5" fill="#eec400" />,
      description: '',
    },
    {
      id: 4,
      date: '2023.12.01',
      host: '과학기술정보통신부',
      award: '2023 공개SW개발자대회',
      grade: '특별상(공개SW개발자대회 조직위원장상)',
      icon: <TrophyIcon className="mr-1 h-5 w-5" fill="#64645a" />,
      description: 'VOAH 출품',
    },
    {
      id: 3,
      date: '2023.10.10',
      host: '한국정보통신자격협회',
      award: '네트워크관리사',
      grade: '2급',
      icon: (
        <ClipboardDocumentCheckIcon className="mr-1 h-5 w-5" fill="#64645a" />
      ),
      description: '국가공인 민간자격',
    },
    {
      id: 2,
      date: '2022.12.30',
      host: '한국정보통신진흥협회',
      award: '리눅스마스터',
      grade: '2급',
      icon: (
        <ClipboardDocumentCheckIcon className="mr-1 h-5 w-5" fill="#64645a" />
      ),
      description: '국가공인 민간자격',
    },
    {
      id: 1,
      date: '2022.11.29',
      host: '과학기술정보통신부',
      award: '2022 공개SW개발자대회',
      grade: '특별상(공개SW개발자대회 조직위원장상)',
      icon: <TrophyIcon className="mr-1 h-5 w-5" fill="#64645a" />,
      description: '잇는 출품',
    },
    {
      id: 0,
      date: '2022.10.29',
      host: '중소벤처기업부/SK Planet',
      award: '2022 Smarteen App+ Challenge',
      grade: '대상(중소벤쳐기업부 장관상)',
      icon: <TrophyIcon className="mr-1 h-5 w-5" fill="#eec400" />,
      description: 'ASD 출품',
    },
  ];
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      thumbnail: {
        url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply',
        alt: '',
      },
    },
    // More posts...
  ];
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Activity
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              제가 해온 활동들을 소개합니다
            </p>
          </div>
          <div className="sm:pt-13 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <img
                  src={post.thumbnail.url}
                  alt={post.thumbnail.alt}
                  className="mb-10 mt-5 h-full w-full rounded-lg object-cover"
                />
                <div className="col-1 items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* Award Table */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Awards and Certificates
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              저의 수상경력과 자격증들을 소개합니다
            </p>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Host
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Award or Certificate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Grade
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {awardAndCertificates.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {item.date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {item.host}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {item.award}
                  </td>
                  {/* grade with icon */}
                  <td className="flex items-center whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {item.icon}
                    <span className="ml-1">{item.grade}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
