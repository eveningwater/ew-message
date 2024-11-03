import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import "ew-message/dist/ew-message.min.css"
import styles from './index.module.css';
import Demo from '../components/demo';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const onMessageHandler = () => {
    // 这里是仅应在客户端运行的代码，如果直接使用，会build报错
    import('ew-message').then((library) => {
      library.default({
        content:
          'ew-message,一个好用的使用typescript编写的消息提示框，可以使用在任意框架中!',
        showClose: true,
        duration: 0
      });
    });
  };
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速开始⏱️
          </Link>
          <button
            className="button button--secondary button--lg"
            onClick={onMessageHandler}
            style={{ marginLeft: 15 }}
          >
            点我试用
          </button>
          <Demo />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
