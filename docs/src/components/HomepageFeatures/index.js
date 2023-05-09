import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        api简单，上手容易，就是一个函数调用，传入简单的配置参数即可出现一个消息提示框。
      </>
    )
  },
  {
    title: '原生编写',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>使用typescript编写，无任何库或框架的依赖，当然也可以使用到框架当中。</>
    )
  },
  {
    title: '类型完善',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>完善的类型定义带给你不一样的体验。</>
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
