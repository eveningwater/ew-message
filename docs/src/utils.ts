
export interface LinkOption {
    target?: HTMLAnchorElement['target'];
    rel?: HTMLAnchorElement['rel'];
}

export const openNewWindow = (url: string, linkOption: LinkOption = {
    target: '_blank',
    rel: 'noopener noreferrer'
}) => {
    const link = document.createElement('a');
    link.href = url;
    if (typeof linkOption === 'object' && linkOption && Object.keys(linkOption).length > 0) {
        Object.keys(linkOption).forEach(key => {
            link[key] = linkOption[key];
        });
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};