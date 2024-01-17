import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/night-owl.css";


const markdown = `
## 처음으로 작성해보는 마크다운언어

**굵게**

일반 텍스트

\`\`\`javascript
function addComments(event){
    event.preventDefault();

    $('#comment_box').addClass('on');
    authorData.forEach((item, idx) => {
        var tag = \`
            <div>$\{item\}</div>
            <p>한국어는 이렇게 나와요</p>
        \`;
    })

}

\`\`\`

*기울이기*

글자 \`배경색\`

> 인용문

`;

function Post(){
    // const [markdown, setMarkdown] = useState("");

    // useEffect(() => {
    //     fetch('../markdown/test.md')
    //         .then((response) => response.text())
    //         .then((text) => setMarkdown(text));
    // }, []);


    return (
        <div class="page-post">
            <div className="layout-text flex-box justify-content-end align-items-center">
                <p className="date-text fs12 fw800">2024.01.13</p>
            </div>
            <div className="post-thumb rd10">
                
            </div>
            <div className="post-contents">
                <div className="title">
                    <h3>React를 시작하며</h3>
                </div>
                <div class="contents">
                    <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeHighlight]} >
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
export {Post};