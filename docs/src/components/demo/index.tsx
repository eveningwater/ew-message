import { useHistory } from "@docusaurus/router";

const demoList = [
    {
        title:"非框架示例",
        src: "/ew-message/demo.html"
    },
    {
        title:"react框架示例",
        src: "/ew-message/react-demo/index.html"
    },
    {
        title:"vue框架示例",
        src: "/ew-message/vue-demo/index.html"
    }
]
export default function Demo(): JSX.Element {
    const history = useHistory();
    const onOpenHandler  = (src: string) => {
        history.push(src);
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
                    查看{ item.title }
                  </button>
                )
            })
        }
     </>
    );
  }