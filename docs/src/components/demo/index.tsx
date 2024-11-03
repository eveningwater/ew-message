import { openNewWindow } from "@site/src/utils";

const demoList = [
    {
        title: "非框架示例",
        src: "/demo.html"
    },
    {
        title: "react框架示例",
        src: "/react-demo/index.html"
    },
    {
        title: "vue框架示例",
        src: "/vue-demo/index.html"
    }
]
export default function Demo(): JSX.Element {
    const onOpenHandler = (src: string) => {
        const href = process.env.NODE_ENV !== "development" ? `${location.href}${src}` : `https://eveningwater.github.io/ew-message/${src}`
        openNewWindow(href)
    }
    return (
        <>
            {
                demoList.map((item) => {
                    return (
                        <button
                            className="button button--secondary button--lg"
                            onClick={() => onOpenHandler(item.src)}
                            style={{ marginLeft: 15 }}
                            key={item.title}
                        >
                            查看{item.title}
                        </button>
                    )
                })
            }
        </>
    );
}