import { openNewWindow } from "@site/src/utils";
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

const demoList = [
    {
        title: translate({ message: '非框架示例', id: 'homepage.demo.text1' }),
        src: "demo.html"
    },
    {
        title: translate({ message: 'react框架示例', id: 'homepage.demo.text2' }),
        src: "react-demo/index.html"
    },
    {
        title: translate({ message: 'vue框架示例', id: 'homepage.demo.text3' }),
        src: "vue-demo/index.html"
    },
    {
        title: translate({ message: 'angular框架示例', id: 'homepage.demo.text4' }),
        src: "angular-demo/browser/index.html"
    },
    {
        title: translate({ message: 'svelte框架示例', id: 'homepage.demo.text5' }),
        src: "svelte-demo/index.html"
    },
    {
        title: translate({ message: 'preact框架示例', id: 'homepage.demo.text6' }),
        src: "preact-demo/index.html"
    },
]
export default function Demo(): JSX.Element {
    const onOpenHandler = (src: string) => {
        const href = process.env.NODE_ENV !== "development" ? `${location.href}${src}` : `https://eveningwater.github.io/ew-message/${src}`
        // openNewWindow(`http://127.0.0.1:8284/gh-pages/${src}`)
        openNewWindow(href)
    }
    return (
        <div className={styles.demoBtnContainer}>
            {
                demoList.map((item) => {
                    return (
                        <button
                            className="button button--secondary button--lg"
                            onClick={() => onOpenHandler(item.src)}
                            style={{ margin: 15 }}
                            key={item.title}
                        >
                            {item.title}
                        </button>
                    )
                })
            }
        </div>
    );
}