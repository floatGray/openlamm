import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import ListCard from '../components/list-card';

const features = [
  {
    name: 'Tutorial',
    description:
      'Learn how to prepare the dataset, model, environment, and start training and evaluation.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tutorial',
    description:
      'Learn how to prepare the dataset, model, environment, and start training and evaluation.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tutorial',
    description:
      'Learn how to prepare the dataset, model, environment, and start training and evaluation.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tutorial',
    description:
      'Learn how to prepare the dataset, model, environment, and start training and evaluation.',
    icon: CloudArrowUpIcon,
  },
];

export default function Example() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            LAMM: Multi-Modal Large Language Models and Applications as AI
            Agents
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            LAMM (pronounced as /læm/, means cute lamb to show appreciation to
            LLaMA), is a growing open-source community aimed at helping
            researchers and developers quickly train and evaluate Multi-modal
            Large Language Models (MLLM), and futher build multi-modal AI agents
            capable of bridging the gap between ideas and execution, enabling
            seamless interaction between humans and AI machines.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As one of the very first open-source endeavors in the MLLM field,
            our goal is to create an ecosystem where every researcher and
            developer can apply, study, and even contribute. We work on various
            aspects including MLLM datasets, frameworks, benchmarks,
            optimizations, and applications as AI Agents. As a fully transparent
            open-source community, any form of collaboration is welcome!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="px-6">
        <ListCard title={'Publications'} />
      </div>
      <div className="px-6">
        <ListCard title={'Preprints'} />
      </div>
    </div>
  );
}
