import { ChevronRightIcon } from '@heroicons/react/20/solid';

const people = [
  {
    name: 'LAMM:Language-Assisted Multi-Modal Instruction-Tuning Dataset, Framework, and Benchmark',
    role: 'NeurIPS, 2023, Datasets and Benchmarks Track',
    email:
      ' Zhenfei Yin1,3∗ ,Jiong Wang1,4∗ ,Jianjian Cao1,4∗ ,Zhelun Shi1,2∗ ,Dingning Liu1,5, Mukai Li1 Xiaoshui Huang1, Zhiyong Wang3, Lu Sheng2, Lei Bai1† ,Jing Shao1† ,Wanli Ouyang1 1Shanghai Artificial Intelligence Laboratory 2Beihang University 3The University of Sydney 4Fudan University 5Dalian University of Technology',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'LAMM:Language-Assisted Multi-Modal Instruction-Tuning Dataset, Framework, and Benchmark',
    role: 'NeurIPS, 2023, Datasets and Benchmarks Track',
    email:
      ' Zhenfei Yin1,3∗ ,Jiong Wang1,4∗ ,Jianjian Cao1,4∗ ,Zhelun Shi1,2∗ ,Dingning Liu1,5, Mukai Li1 Xiaoshui Huang1, Zhiyong Wang3, Lu Sheng2, Lei Bai1† ,Jing Shao1† ,Wanli Ouyang1 1Shanghai Artificial Intelligence Laboratory 2Beihang University 3The University of Sydney 4Fudan University 5Dalian University of Technology',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'LAMM:Language-Assisted Multi-Modal Instruction-Tuning Dataset, Framework, and Benchmark',
    role: 'NeurIPS, 2023, Datasets and Benchmarks Track',
    email:
      ' Zhenfei Yin1,3∗ ,Jiong Wang1,4∗ ,Jianjian Cao1,4∗ ,Zhelun Shi1,2∗ ,Dingning Liu1,5, Mukai Li1 Xiaoshui Huang1, Zhiyong Wang3, Lu Sheng2, Lei Bai1† ,Jing Shao1† ,Wanli Ouyang1 1Shanghai Artificial Intelligence Laboratory 2Beihang University 3The University of Sydney 4Fudan University 5Dalian University of Technology',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
];
interface ListCardPorps {
  title: string;
}
export default function ListCard(props: ListCardPorps) {
  const formatISODate = (isoDateString: string) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-GB', {
      timeZone: 'UTC',
      dateStyle: 'long',
    });
  };
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-6">
        {props.title}
      </h1>
      <ul
        role="list"
        className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
      >
        {people.map((person) => (
          <li
            key={person.email}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <a href={person.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {person.name}
                  </a>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500 max-w-80">
                  <a
                    href={person.email}
                    className="relative truncate hover:underline"
                  >
                    {person.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last updated{' '}
                    <time dateTime={person.lastSeenDateTime}>
                      {formatISODate(person.lastSeenDateTime)}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
