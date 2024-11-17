import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: '简单易用', id: 'homepage.feature.title1' }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id='homepage.feature.description1'>api简单，上手容易，就是一个函数调用，传入简单的配置参数即可出现一个消息提示框。</Translate>
    )
  },
  {
    title: translate({ message: '原生编写', id: 'homepage.feature.title2' }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id='homepage.feature.description2'>使用typescript编写，无任何库或框架的依赖，当然也可以使用到框架当中。</Translate>
    )
  },
  {
    title: translate({ message: '类型完善', id: 'homepage.feature.title3' }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <><Translate id='homepage.feature.description3'>完善的类型定义带给你不一样的体验。</Translate></>
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
